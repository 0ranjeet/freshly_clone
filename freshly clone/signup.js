


let answers = document.querySelectorAll(".a");
answers.forEach((even) => {
    even.addEventListener('click', () => {
        if (even.classList.contains("active")) {
            even.classList.remove("active");
        }
        else {
            even.classList.add("active");
        }
    })
});

document.querySelector("form").addEventListener("submit", changePath)

var userData = JSON.parse(localStorage.getItem("UserData")) || [];
function changePath(event) {
    event.preventDefault()
    var email = document.querySelector("#email").value
    var zip = document.querySelector("#zip").value
    var pass = document.querySelector("#pass").value
    var obj = {
        Email: email,
        Zip: zip,
        Pass: pass
    }
    userData.push(obj);
    alert("Sign in Successfully")
    localStorage.setItem("UserData", JSON.stringify(userData))
    window.location.href = "/plans/p.html"
    console.log(userData)
}
