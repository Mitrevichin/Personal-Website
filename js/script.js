// Hidden Nav
let hiddenNavBtn = document.querySelector('.btn-1200');
let hiddenNavWrapper = document.querySelector('.hidden-nav');
let menuIcon = document.getElementById('menuIcon');

hiddenNavBtn.addEventListener('click', () => {
    // Toggle the visibility of hiddenNavWrapper
    hiddenNavWrapper.style.left = hiddenNavWrapper.style.left === '0%' ? '-100%' : '0%';

    // Toggle the icon
    if (hiddenNavWrapper.style.left === '0%') {
        menuIcon.className = 'fa-solid fa-xmark';
    } else {
        menuIcon.className = 'fa fa-bars';
    }
});


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
function quotation() {
    let quoteWindow = document.querySelector('.quote-window');
    let quoteBtnClose = document.querySelector('.quote-btn-close');
    let quoteBtnsOpen = document.querySelectorAll('.quote');
    let pageWrapper = document.querySelector('.about-wrapper');

    Array.from(quoteBtnsOpen).forEach(btn => {
        btn.addEventListener('click', (e) => {
            let p = document.createElement('p');

            if (window.innerWidth >= 750) {
                quoteWindow.style.bottom = '0%';
                pageWrapper.style.filter = 'blur(10px)';
            } else {
                quoteWindow.style.bottom = '25%';
                pageWrapper.style.filter = 'blur(10px)';
            }

            p.textContent = '';

            if (btn.classList.contains('quote1')) {
                p.textContent = '"Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny."';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper1.jpg)';
                quoteWindow.style.backgroundSize = 'contain';
                p.style.width = '80%';

            } else if (btn.classList.contains('quote2')) {
                p.textContent = '"Habits are the compound interest of self-improvement."';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper2.jpeg)';
                quoteWindow.style.backgroundSize = 'cover';
                quoteWindow.style.backgroundPosition = 'center';
                p.style.width = '80%';

            } else if (btn.classList.contains('quote3')) {
                p.textContent = '"Intellect can explain things, but instincts can help you make discoveries."';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper3.jpg)';
                quoteWindow.style.backgroundSize = 'cover';
                quoteWindow.style.backgroundPosition = 'center';
                p.style.width = '80%';

            } else if (btn.classList.contains('quote4')) {
                p.textContent = '"Attitude affects altitude".';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper5.jpg)';
                quoteWindow.style.backgroundSize = 'cover';
                quoteWindow.style.backgroundPosition = 'center';
                p.style.width = '80%';

            } else if (btn.classList.contains('quote5')) {
                p.textContent = '"Your present and future are a projection of your thinking."';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper4-min.jpg)';
                quoteWindow.style.backgroundSize = 'cover';
                quoteWindow.style.backgroundPosition = 'center';
                p.style.width = '80%';

            } else if (btn.classList.contains('quote6')) {
                p.textContent = '"My goal is to give you a rod you can fish with for the rest of your life, not a fish you will only eat today."';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper6.jpg)';
                quoteWindow.style.backgroundSize = 'cover';
                quoteWindow.style.backgroundPosition = '80%';
                quoteWindow.style.backgroundRepeat = 'no-repeat';
                p.style.width = '80%';
            }

            quoteWindow.appendChild(p);

            quoteBtnClose.addEventListener('click', () => {
                p.textContent = '';
                quoteWindow.style.bottom = '-300%';
                pageWrapper.style.filter = 'none';
            });
        });
    });
}

quotation();
















