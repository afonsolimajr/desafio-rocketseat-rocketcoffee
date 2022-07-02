
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function openMenu() {
    btnburger.style.display = "none";
    sidebar.style.display = "flex";
    sidebar.style.width = "400px";
}

function closeMenu() {
    sidebar.style.width = "0px";
    sidebar.style.display = "none";
    btnburger.style.display = "flex";
}

closeMenu();
