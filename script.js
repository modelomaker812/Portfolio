const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".menu li a");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


for (var i = 0, length = navLink.length; i < length; i++) {
    navLink[i].onclick = function () {
        var b = document.querySelector(".menu li.active");
        if (b) b.classList.remove("active");
        this.parentNode.classList.add('active');
    };
}

