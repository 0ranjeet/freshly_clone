var Data = [
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "main"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "10 Stars! Awesome! Love it!",
        desc: "We love Freshly because it takes two minute to prepare, the food is great and we don't have spend time cleaning up.",
        name: "Sheri",
        cat: "main"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "One of the easiest decisions I've made",
        desc: "With Freshly, I don't have to think about what I'm going to eat for lunch each day and feel goos knowing that I'm eating a healthy meal. I love the Convenince!",
        name: "Cindi",
        cat: "main"
    },

    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Amazingly delicious and convenient!",
        desc: "I love that I have found freshly and that it allows me to try new things and allows me to eat healthy while remaining affordable!",
        name: "Jessica Wilson",
        cat: "second"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Convenience, taste, variety",
        desc: "Been a customer for more than a year now, and love it. Customer service is particularly outstanding - whenever there's been a problem, Freshly staff respond quickly and always rectify the problem.",
        name: "Jeffrey",
        cat: "second"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Delicious! So yummy!",
        desc: "The convenience of a well prepared, helathy, flavorful meal the no shopping, preparing, or clean up is amazing. Looking forward to the rest of the week",
        name: "Kristie Geiges",
        cat: "second"
    }
]
// localStorage.setItem("Comment", JSON.stringify(Data))

// arrangeData(Data)

var main = Data.filter(function (el) {
    return el.cat == "main"
})
arrangeData(main);


function slideData() {
    var second = Data.filter(function (el) {
        return el.cat == "second"
    })
    arrangeData(second)
}
function arrangeData(data) {
    document.querySelector("#jscontainer").textContent = ""
    data.map(function (el) {
        var div = document.createElement("div")
        div.setAttribute("class", "notice")

        var image = document.createElement("img");
        image.setAttribute("src", el.Image)

        var Head = document.createElement("h2");
        Head.textContent = el.head;

        var para1 = document.createElement("p");
        para1.textContent = el.desc;

        var para2 = document.createElement("p");
        para2.setAttribute("class", "b-size")
        para2.textContent = el.name;

        div.append(image, Head, para1, para2)
        // console.log(div);
        document.querySelector("#jscontainer").append(div)
    })
}

// console.log("hello world")

burger = document.querySelector(".burger");
middle = document.querySelector(".middle")
right = document.querySelector(".right")
height = document.querySelector("nav");

burger.addEventListener("click", function () {
    middle.classList.toggle("v-hidden");
    right.classList.toggle("v-hidden")
    height.classList.toggle("h-nav")
})

document.querySelector("form").addEventListener("submit", submitData);

var userData = JSON.parse(localStorage.getItem("UserData")) || []

function submitData(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value
    var zip = document.querySelector("#code").value
    // var pass = document.querySelector("#pass").value

    var obj = {
        Email: email,
        Zip: zip,
        // Pass: pass
    }
    userData.push(obj);
    localStorage.setItem("UserData", JSON.stringify(userData))
    window.location.href = "plan-menu/plan-menu.html"
}

document.querySelector("#form").addEventListener("submit", storeData)

function storeData(event) {
    event.preventDefault();
    var email = document.querySelector("#mail").value
    var zip = document.querySelector("#zip").value

    var obj = {
        Email: email,
        Zip: zip,
        // Pass: pass
    }
    userData.push(obj);
    console.log(obj);
    localStorage.setItem("UserData", JSON.stringify(userData))
    window.location.href = "/freshlyclone/Freshly_clone/freshly%20business/plans/p.html"
}

function planmenu(){
    window.location.href="plan-menu/plan-menu.html";
}