// Hidden Nav

let hiddenNavBtn = document.querySelector('.btn-1200');
let hiddenNavWrapper = document.querySelector('.hidden-nav');
let menuIcon = document.getElementById('menuIcon');

hiddenNavBtn.addEventListener('click', () => {
    // Toggle the visibility of hiddenNavWrapper
    hiddenNavWrapper.style.left = hiddenNavWrapper.style.left === '0%' ? '-100%' : '0%';

    // Toggle the icon
    if (hiddenNavWrapper.style.left === '0%') {
        // If the navigation is visible, change to 'close' icon
        menuIcon.className = 'fa-solid fa-xmark';
    } else {
        // If the navigation is hidden, change to 'bars' icon
        menuIcon.className = 'fa fa-bars';
    }
});

