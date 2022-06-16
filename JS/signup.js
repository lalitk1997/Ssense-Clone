// SignUp JavaScript File

import { createaccount } from "../Components/createaccount.js";
let ssenseuser = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

let chamber = document.getElementById("loginchamber");
chamber.innerHTML = createaccount();

if (thisuser.UserName) {
    document.getElementById("email").value = thisuser.UserName;
}
let goToLogin = () => {
    event.preventDefault();
    window.location = "../HTML/login.html";
}
let newSsenseUser = () => {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gen"]:checked').value;
    ssenseuser.password = pass;
    ssenseuser.gender = gender;
    thisuser.password = pass;
    thisuser.gender = gender;
    localStorage.setItem("thisUser", JSON.stringify(thisuser));
    localStorage.setItem("ssenseUser", JSON.stringify(ssenseuser));
    window.location = "../HTML/landingpage.html";
}
document.getElementById("newform").addEventListener("submit", newSsenseUser);
document.getElementById("back").addEventListener("click", goToLogin);