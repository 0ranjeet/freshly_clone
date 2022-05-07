


var left = document.querySelector(".left")
var right = document.querySelector("#right")
var div = document.querySelector("#nav")
function hidenNav() {
    left.classList.toggle("v-hidden")
    right.classList.toggle("v-hidden")
    div.classList.toggle("v-hidden")
    div.classList.toggle("h-nav")
}

var userData = JSON.parse(localStorage.getItem("UserData"));
document.querySelector(".submit").addEventListener("click", verifyData)

function verifyData() {
    var email = document.querySelector(".email").value
    var pass = document.querySelector(".pass").value
    console.log(email, pass)
    var count = 0;
    for (i = 0; i < userData.length; i++) {
        if (email == userData[i].Email && pass == userData[i].Pass) {
            alert("log in successful")

            window.location.href = "/plans/p.html"
        }
        else {
            count++;
        }
    }
    if (count == userData.length) {
        alert("enter valid email and password")
        window.location.href = "login.html"
    }
}


