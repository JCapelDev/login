document.addEventListener('deviceready', onDeviceReady, false);
function back_login(){
    window.location.replace("http://localhost:8000/index.html")
}

function onDeviceReady() {
    var back_login_button =  document.getElementById("back_login").onclick = back_login;
}