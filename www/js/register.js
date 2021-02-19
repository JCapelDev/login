document.addEventListener('deviceready', onDeviceReady, false);
function back_login(){
    window.location.replace("http://localhost:8000/index.html")
}


function setNewUser(){
    
    var firstname= document.getElementById("firstname").value;
    var nameid=firstname;
    var lastname = document.getElementById("lastname").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var nameid = {
            "firstname":firstname,
            "lastname":lastname,
            "mail":mail,
            "pass":pass
    }
    alert(JSON.stringify(nameid))
    localStorage.setItem(firstname,JSON.stringify(nameid));
}

function onDeviceReady() {
    var back_login_button =  document.getElementById("back_login").onclick = back_login;
    var register_button = document.getElementById("insert_register").onclick = setNewUser;
}


