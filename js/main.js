
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function openMenu() {
    btnburger.style.display = "none";
    btnclose.style.display = "block";
    sidebar.style.width = "100%";
}

function closeMenu() {
    sidebar.style.width = "0px";
    // sidebar.style.display = "none";
    btnburger.style.display = "block";
    btnclose.style.display = "none";
}

function handleMenuClick() {
    closeMenu();
}


