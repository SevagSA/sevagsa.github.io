const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar");

hamburgerMenu.addEventListener("click", () => {
    if (navBar.getAttribute("data-nav-menu-open") == "") {
        console.log("hos")
        navBar.removeAttribute("data-nav-menu-open")
    } else if (!navBar.getAttribute("data-nav-menu-open")) {
        console.log("hon")
        navBar.setAttribute("data-nav-menu-open", "")
    }
});