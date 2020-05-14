const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".main-nav");
    const mainNav = document.querySelectorAll(".main-nav li");

    burger.addEventListener("click", () => {
        //toggel nav
        nav.classList.toggle("nav-active");

        /* anmate links
        mainNav.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index/ 10 + 0.5}s`;
            }
        }); */

        burger.classList.toggle("toggle");
    });
};

navSlide();
