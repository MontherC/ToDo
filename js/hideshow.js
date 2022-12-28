var sign = document.getElementById("signUp");
sign.style.display ="none";

const signUp = ()=>{
    var login = document.getElementById("login")
    if(sign.style.display === "none"){
        sign.style.display="block";
        login.style.display="none";
    } else {
        sign.style.display="none";
        login.style.display="block";
    }
}