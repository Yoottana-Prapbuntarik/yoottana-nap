window.onload = pageLoad;
function pageLoad() {
    handleToggleMenuNavbar();
}

function handleToggleMenuNavbar() {
    let iconToggle = document.getElementById('hamburger');
    let styleIconToggleAnimate = document.getElementsByClassName('container-hamburger');
    let containerNavItem = document.getElementsByClassName('nav-show');
    iconToggle.onclick = function () {
        styleIconToggleAnimate[0].classList.toggle("change");
        containerNavItem[0].classList.toggle('nav-show-toggle');
    }
}
function handleScroll() {
    let containerNav = document.getElementById('navbar');
    if (document.documentElement.scrollTop >= 60) {
        activeStyle = ' container-nav-toggle';
    }else if(document.scrollingElement.scrollTop < 50){
        activeStyle = 'container-nav';
    }
        containerNav.className = activeStyle;
}