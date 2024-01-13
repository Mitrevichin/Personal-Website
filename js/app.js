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
            quoteWindow.style.bottom = '0%';
            pageWrapper.style.filter = 'blur(10px)';


            if (btn.classList.contains('quote1')) {
                p.textContent = '55555';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper1.jpg)';
                // quoteWindow.style.background = 'url(../images/wallpaper1.jpg)';
            } else if (btn.classList.contains('quote2')) {
                p.textContent = '10101010';
                quoteWindow.style.background = 'linear-gradient(rgba(0, 0, 0, 0.683), rgba(0, 0, 0, 0.725)), url(../images/wallpaper2.jpg)';
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







