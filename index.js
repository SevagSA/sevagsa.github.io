const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar");

hamburgerMenu.addEventListener("click", () => {
    if (navBar.getAttribute("data-nav-menu-open") == "") {
        navBar.removeAttribute("data-nav-menu-open")
    } else if (!navBar.getAttribute("data-nav-menu-open")) {
        navBar.setAttribute("data-nav-menu-open", "")
    }
});


const allTabLinks = Array.from(document.getElementsByClassName("tab-link"))
const activeTabLinkClassName = "tab-link w-inline-block w-tab-link w--current"
const inactiveTabLinkClassName = "tab-link w-inline-block w-tab-link"

const allTabPanes = Array.from(document.getElementsByClassName("tab-pane"))
const activePaneClassName = "tab-pane w-tab-pane w--tab-active"
const inactivePaneClassName = "tab-pane w-tab-pane"

allTabLinks.forEach(currentTabLink => {
    currentTabLink.addEventListener("click", () => {
        const dataWTabAttribute = currentTabLink.getAttribute("data-w-tab")
        const currentTabPane = document.querySelectorAll(`[data-w-tab="${dataWTabAttribute}"]`)[1];
        
        allTabPanes.forEach((pane) => {
            pane.setAttribute("class", inactivePaneClassName)
        })

        allTabLinks.forEach((pane) => {
            pane.setAttribute("class", inactiveTabLinkClassName)
        })

        currentTabLink.setAttribute("class", activeTabLinkClassName)
        currentTabPane.removeAttribute("style")
        currentTabPane.setAttribute("class", activePaneClassName)
    });
});
