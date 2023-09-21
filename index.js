// mobile-navigation:
const responsiveMenuEl = document.querySelector(".responsiveMenuIcon");
responsiveMenuEl.addEventListener("click", function () {
    document.querySelector(".responsiveMenuOpen").classList.remove("display-none");
});


const closeButtonEl = document.querySelector("body");
closeButtonEl.addEventListener("click", function (e) {
    if (e.target !== document.querySelector(".responsiveMenuIcon")){
        document.querySelector(".responsiveMenuOpen").classList.add("display-none");
    }
});