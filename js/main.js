const creationsButton = document.getElementById('creationsSectionButton');
const mobileButtonContainer = document.getElementById('mobileButtonContainer');
const creationsHeadingContainer = document.getElementById('creationsHeadingContainer');
const headerButton = document.getElementById('headerButton');
const menuButtonIcon = document.getElementById('menuButtonIcon');
const body = document.getElementById("body");
const headerMenuContainer = document.getElementById("headerMenuContainer");
const headerMenu = document.getElementById("headerMenu");
const headerNav = document.getElementById("headerNav");
const header = document.getElementById("header");
const mobileMenuContainer = document.getElementById("mobileMenuContainer");
let isMenuActive = false

function checkWindowSize() {
    if (window.innerWidth <= 767) {
        if(!mobileButtonContainer.contains(creationsButton)) {
            mobileButtonContainer.appendChild(creationsButton);
        }
        if(!mobileMenuContainer.contains(headerNav)){
            mobileMenuContainer.appendChild(headerNav);
        }
        if(isMenuActive) {
            body.classList.add('stop-scrolling');
        }
    } else {
        if(!creationsHeadingContainer.contains(creationsButton)) {
            creationsHeadingContainer.appendChild(creationsButton);
        }
        if(!headerMenuContainer.contains(headerNav)){
            headerMenuContainer.appendChild(headerNav);
        }
        body.classList.remove('stop-scrolling');
    }
}

function toggleMenu() {

    isMenuActive = !isMenuActive;

    if (header.classList.contains('header--show-menu')) {
        header.classList.remove('header--show-menu');
        headerMenu.classList.remove('header__menu--show');
        menuButtonIcon.src = './assets/images/icon-hamburger.svg';
        menuButtonIcon.alt = 'Open Menu';
        body.classList.remove('stop-scrolling');
        
    } else {
        header.classList.add('header--show-menu');
        headerMenu.classList.add('header__menu--show');
        menuButtonIcon.src = './assets/images/icon-close.svg';
        menuButtonIcon.alt = 'Close Menu';
        body.classList.add('stop-scrolling');
        mobileMenuContainer.classList.add('header__mobile-menu-container--show');
    }
}

function preloadImage(imageURL) {
    let img = new Image();
    img.src = imageURL;
}

document.addEventListener('DOMContentLoaded', () => { 
    checkWindowSize();
    preloadImage('./assets/images/icon-close.svg');
});

headerButton.addEventListener('click', toggleMenu);

window.addEventListener('resize', checkWindowSize);
