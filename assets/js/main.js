window.onload = pageLoad;
function pageLoad() {
    handleActiveNavlink();
    handleToggleMenuNavbar();
}
function handleActiveNavlink() {

    let elementLink = document.getElementById('nav-item-link');
    let link = elementLink.getElementsByClassName("link-item");
    for (let idx = 0; idx < link.length; idx++) {
        link[idx].addEventListener("click", function () {
            let currentPath = document.getElementsByClassName("active");
            if (currentPath.length > 0) {
                currentPath[0].className = currentPath[0].className.replace(" active", "");
            } else {
                this.className += " active";
            }
        })
    }

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