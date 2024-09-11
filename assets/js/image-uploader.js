import { Octokit, App } from "https://esm.sh/octokit";

// Ensure that the user has stored credentials
try {
    const ghCMSCredentials = JSON.parse(localStorage['ghCMSCredentials-' + location.hostname])
} catch {
    localStorage['ghCMSEditor-' + location.hostname] = "disabled"
    alert("You are not allowed to see this. ")
    location = "/"
}

const octokit = new Octokit({ auth: `${JSON.parse(localStorage['ghCMSCredentials-' + location.hostname]).token}` });

async function getProjectSettings() {
    const request = await fetch(window.location.origin + '/projectSettings.json')
    const res = await request.json()

    return await res
}

async function getTreeSha(owner, repo) {
    
    const comitsReq = await octokit.request(`GET /repos/${owner}/${repo}/commits`)
    const treeSha = await comitsReq.data[0].commit.tree.sha
    
    return treeSha
}

async function fetchImages(repoOwner, repoName, imagesPath) {
    const files = {}
    console.log(await getTreeSha(repoOwner, repoName));
    
    const treeSha = await getTreeSha(repoOwner, repoName)
    // console.log(treeSha);
    const tree = await octokit.request(`/repos/${repoOwner}/${repoName}/git/trees/${treeSha}?recursive=1`)
    function iterateTree(treeRequest, path) {
        const objTree = {}
        treeRequest.map((v, i) => {

            // Excludes all files that donesn't start with the required path
            if (v.path.startsWith(path)) {
                // Regex expression that matches files that childs of the actual folder
                // Example: path = assets/img/folder1/
                // assets/img/folder1/folder2 [TRUE]
                // assets/img/folder1/folder2/test.png [FALSE]
                const regex = new RegExp(path + "[\\w\\-._ ]+$")

                if (v.type == "tree" && v.path != path && regex.test(v.path)) {


                    objTree[v.path.replace(path, '')] = {
                        "type": v.type,
                        "files": iterateTree(treeRequest, v.path + "/"),
                        "path": v.path
                    }
                } else if (regex.test(v.path) && v.type == "blob") {
                    objTree[v.path.replace(path, '')] = {
                        "type": v.type,
                        "path": v.path
                    }
                }
            }


        })

        return objTree
    }

    return iterateTree(tree.data.tree, imagesPath)


}

async function uploadFile(owner, repo, path, content, message) {
    console.log(getTreeSha(owner, repo));
    console.log(path);
    
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        'owner': owner,
        'repo': repo,
        'path': path,
        'message': message,
        'content': content,
        'headers': {
            'X-GitHub-Api-Version': '2022-11-28'
        },
        'sha': await getTreeSha(owner, repo)
    })
}



function renderSite(imageFiles) {
    const wrapper = [];

    // Iterates all the children and appends DOM Nodes
    Object.keys(imageFiles).map((v, i) => {
        const file = document.createElement('div');
        file.setAttribute('path', imageFiles[v].path);

        const info = document.createElement('div');

        // Adds special nodes, depending if it's a file or a folder
        // blob = file, tree = folder
        if (imageFiles[v].type == "tree") {


            file.innerHTML = `
                <div class='info folderInfo'>
                    <p>${v}</p>
                    <button class="folderToggleVisibility">
                        Toggle Visibility
                    </button>
                    <button class="folderUploadFile">
                        Upload File
                    </button>
                </div>
                <div class='files' style="display:none">
                    
                </div>
            `

            // Button event handlers

            file.querySelector('.folderToggleVisibility').onclick = () => {
                const filesNode = file.querySelector('.files')
                console.log('clicked');
                console.log(filesNode);

                toogleNodeVisibility(filesNode);
            }

            file.querySelector('.folderUploadFile').onclick = async () => {
                const project_settings = await getProjectSettings()

                const repoOwner = await project_settings.general.repoOwner
                const repoName = await project_settings.general.repoName

                file.querySelector('.files').prepend(uploadFilesTab(imageFiles[v].path + "/", repoOwner, repoName))
            }

            renderSite(imageFiles[v].files).map((fileElement) => {
                file.querySelector('.files').append(fileElement)
            })


        } else {
            file.innerHTML = `
                <div class='info fileInfo'>
                    <p>${v}</p>
                </div>
            `
            file.classList.add('blob');


        }
        wrapper.push(file);
    })

    return wrapper
}

function toogleNodeVisibility(node) {
    if (node.style.display == 'none') {
        node.style.display = 'block';

    } else {
        node.style.display = 'none';

    }


}


function uploadFilesTab(folderPath, repoOwner, repoName) {
    console.log(folderPath);

    // Removes the older Upload Element, if exist one
    const existingTab = document.getElementById('imageUploaderTab');
    if (existingTab) existingTab.remove();

    // STRUCTURE
    /*
    imageUploaderTab
        imageUploaderTitle
        pathLabel
        pathInput
        fileLabel
        fileInput
        submitButton
        closeButton     
    */

    const imgUploderTab = document.createElement('div');
    imgUploderTab.id = 'imageUploaderTab';

    imgUploderTab.innerHTML = `
        <h3 id="image-uploader-title">Upload Image</h3>
        <div id="uploader-path" class="input-label-wrapper">
            <label for="uploader-path-input">Path: ${folderPath}</label>
            <input type="text" id="uploader-path-input">
        </div>
        <div id="uploader-file" class="input-label-wrapper">
            <label for="uploader-file-input">File:</label>
            <input type="file" id="uploader-file-input">
        </div>
        <img id="upload-image-preview"/>
        <button id="uploader-submit-button">Upload</button>
        <button id="uploader-close-button">Close</button>
    `

    // Event handlers
    window.onerror = (e) => {
        console.log(e);

    }

    imgUploderTab.querySelector('#uploader-file-input').onchange = () => {
        const fileReader = new FileReader();
        const fileInput = imgUploderTab.querySelector('#uploader-file-input').files[0];
        const imagePreview = imgUploderTab.querySelector('#upload-image-preview');

        fileReader.readAsDataURL(fileInput);

        if (fileInput) {
            fileReader.onload = (e) => {
                imagePreview.src = e.target.result;
            }
        }
    }



    imgUploderTab.querySelector('#uploader-close-button').onclick = () => {
        imgUploderTab.remove()
    };

    imgUploderTab.querySelector('#uploader-submit-button').onclick = async () => {
        const supportedExtensions = /.+(.gif|.jpg|.gif|.webp|.png)$/gi
        const pathInput = imgUploderTab.querySelector('#uploader-path-input').value
        const fileInput = imgUploderTab.querySelector('#uploader-file-input')
        console.log(fileInput.files[0]);

        const fileReader = new FileReader()

        fileReader.readAsDataURL(fileInput.files[0])

        // Checks if there is a file and a path
        if (!fileInput.files[0] || !pathInput) {
            throw new Error('Unspecified path or file');
        }

        // Checks if the input text ends with the supported file extensions
        if (!supportedExtensions.test(pathInput)) {
            throw new Error('Invalid path extension!')
        }

        // Checks if the file is an image or a video.
        // For example, the type of a PNG will be 'image/png'
        // List with all types: https://www.iana.org/assignments/media-types/media-types.xhtml
        if (!fileInput.files[0].type.startsWith('image') && !fileInput.files[0].type.startsWith('video')) {
            throw new Error('The file should be an image or a video')
        }

        if (fileInput.files[0].type.split('/')[1] !== pathInput.split('.').at(-1)) {
            
            throw Error('File extension should match the path extension')
        }

        // When file reader is ready, it uploads the file
        fileReader.onload = (e) => {

            // The name of the editor mode user
            const committer = JSON.parse(localStorage.getItem('ghCMSCredentials-localhost')).user

            // Gets the base64 from de dataUrl
            const base64Result = e.target.result.split(',')[1]
            console.log(folderPath+pathInput);
            
            uploadFile(repoOwner, repoName, folderPath+pathInput, base64Result, `${committer}: Added new file using image uploader`)
        }

    }

    return imgUploderTab
}

window.onload = async () => {

    const project_settings = await getProjectSettings()

    const repoOwner = await project_settings.general.repoOwner
    const repoName = await project_settings.general.repoName
    const imagesPath = await project_settings.imageUploader.imagesPath

    // Test function, to test if user's token is valid
    octokit.request("GET /rate_limit")
        .catch(e => {
            if (e.status == 401) {
                alert('Unauthorized')
                location = "/"
            }
        })

    const images = await fetchImages(repoOwner, repoName, imagesPath)

    const filesWrapper = document.getElementById('filesWrapper')


    renderSite(images, project_settings).map(file => {
        filesWrapper.append(file)
    })

    const fileExplorerAddFile = document.getElementById('fileExplorerAddFile')
    fileExplorerAddFile.onclick = () => {
        filesWrapper.prepend(uploadFilesTab(imagesPath, repoOwner, repoName))
    }
    console.log(globalWrapper);

}