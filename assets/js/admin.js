

function init(){
  $('#connection').on('click', connection);
  $('#deconnection').on('click', deconnection);
  try { JSON.parse(localStorage['ghCMSCredentials-' + document.domain]).confirmed? displayEditorSection():0;}
  catch { console.log('init fail')}
}

function connection(){
  const user = $('#user').val();
  console.log(user)
  const token = $('#password').val();
  if (user && token){
    saveGhCMSCreedentials(user, token);
    activateEditorMode();
  }
}

function deconnection(){
  localStorage['ghCMSCredentials-' + document.domain] = '';
  localStorage['ghCMSEditor-' + document.domain] = "disabled";
  location = '/';
}

function saveGhCMSCreedentials(u, t){
  localStorage['ghCMSCredentials-' + document.domain] = JSON.stringify({
    'token': t,
    'user': u,
    'confirmed': false
  });
}
function activateEditorMode(){
  localStorage['ghCMSEditor-' + document.domain] = "enabled";
  location = '/';
}

$(document).ready(init);


function displayEditorSection(){
  const template = `
    <div class="bloc-text">
      <h2><strong>Editor Mode</strong></h2>
      <button id="editor-mode-activate">Activate</button>
      <p><a href="" target="_blank">Commits history</a></p>
    </div>>`
  $('h1').after($(template));
  $('#editor-mode-activate').on('click', activateEditorMode);
}
