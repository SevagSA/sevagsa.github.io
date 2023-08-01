const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar");

hamburgerMenu.addEventListener("click", () => {
    if (navBar.getAttribute("data-nav-menu-open") == "") {
        navBar.removeAttribute("data-nav-menu-open")
    } else if (!navBar.getAttribute("data-nav-menu-open")) {
        navBar.setAttribute("data-nav-menu-open", "")
    }
});