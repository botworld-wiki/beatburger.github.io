

function init(){
  $('#connection').on('click', connection);
  $('#deconnection').on('click', deconnection);
  try { JSON.parse(localStorage['ghCMSCredentials-' + document.domain]).confirmed? displayEditorSection():0;}
  catch { console.log('init fail')}
}

function connection(){
  const user = $('#user').val();
  const token = $('#password').val();
  fetch(window.location.origin+'/assets/js/blacklist.json')
  .then(res => res.json())
  .then(out => {
    if (out.users.indexOf(user) >= 0){
      deconnection()
    };
    if (out.tokens.indexOf(token) >= 0){
      deconnection()
    } 
  });
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
