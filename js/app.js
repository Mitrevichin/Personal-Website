// Scroll to top button

let calcScrollvalue = () => {
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress-value');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#ffb400 ${scrollValue}%,
        #64665f ${scrollValue}%)`;
}


window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;


// Slider book gallery

let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('back-arr');
let nextBtn = document.getElementById('forward-arr');

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehaviour = 'smooth';
    scrollContainer.scrollLeft += 1100;
});

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehaviour = 'smooth';
    scrollContainer.scrollLeft -= 1100;
});


// Quote window

let quoteWindow = document.querySelector('.quote-window');
let quoteBtnClose = document.querySelector('.quote-btn-close');
let quoteBtnsOpen = document.querySelectorAll('.quote');


quoteBtnsOpen.forEach(quoteBtnOpen => {
    quoteBtnOpen.addEventListener('click', () => {
        quoteWindow.style.bottom = '0%';
    });
});

quoteBtnClose.addEventListener('click', () => {
    quoteWindow.style.bottom = '-300%'; // Set it to a value to hide the window
});

