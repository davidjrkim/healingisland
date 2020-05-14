const down = function() {
    if (window.scrollY > 50) {
        document.querySelector("nav").classList.add("dark");
    } else if (window.screenY <= 49) {
        document.querySelector("nav").classList.remove("dark");
    }
};

window.addEventListener("scroll", down);
