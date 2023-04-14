//Add JavaScript Interactivity for Navigation Menu Items 

const navListItems = document.querySelectorAll("#nav-link");
const currentURL = window.location.href;

navListItems.forEach(item => {

    if (item.href === currentURL) {
        item.style.textDecoration = 'underline';
        item.style.textUnderlineOffset = '7px';
    };

    item.addEventListener('mouseover', () => {
        item.style.textDecoration = 'underline';
        item.style.textUnderlineOffset = '7px';
    });
    item.addEventListener('mouseout', () => {
        if (item.href !== currentURL) {
            item.style.textDecoration = 'none';
            item.style.textUnderlineOffset = 'initial';
        };
    });

});