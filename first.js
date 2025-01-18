alert("Website under Construction, Please wait");

let leftscroll = document.getElementById("leftbutton");
let rightscroll = document.getElementById("rightbutton");
let scrollbar = document.querySelector(".image-container");

function left() {
    scrollbar.scrollBy({
        left: -500,
        behavior: "smooth",
    });
}

function right() {
    scrollbar.scrollBy({
        left: 500,
        behavior: "smooth",
    });
}


let menu = document.querySelector(".hamburger");
let unlist = document.querySelector(".heading-list ul");
let heading = document.querySelector(".heading-list");
let crossappear = document.querySelector(".cross-menu");

function bars() {
    unlist.classList.toggle("list");
    heading.classList.toggle("active");
    menu.classList.add("hide");
    crossappear.classList.add("activecross");
}

function cross() {
    crossappear.classList.remove("activecross");
    menu.classList.remove("hide");
    heading.classList.remove("active");
    unlist.classList.remove("list");
}


