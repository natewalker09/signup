function login(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value === "" || password.value === "") {
        alert("Enter Username and Password.");
    }else{
        window.location.href = "index.html";
    }
}