import '../styles/index.scss';
import SlimSelect from 'slim-select';

//video-play
const playButtons = document.querySelectorAll(".video__playpause");
for (const button of playButtons) {
    button.addEventListener('click', function(event) {
        let videoEl = button.parentNode.querySelector('video');
        if (videoEl.paused) {
            videoEl.play();
            button.classList.add('video__playpause--fade');
        } else {
            videoEl.pause();
            button.classList.remove('video__playpause--fade');
        }
    });
}

// Initialize Swiper
if(typeof(Swiper) != 'undefined' && Swiper != null){
    new Swiper(".carousel-container", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        mousewheel: true,
        breakpoints: { 705: { slidesPerView: 2, slidesPerGroup: 2 }, 1140: { slidesPerView: 3, slidesPerGroup: 3 }, 1460: { slidesPerView: 4, slidesPerGroup: 4 } },
        scrollbar: { el: ".carousel-container .swiper-scrollbar" },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    new Swiper('.vertical-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.vertical-scrollbar',
        },
        mousewheel: true,
    });
}




// Header
const burgerButton = document.querySelector('header .burger');
const headerEl = document.querySelector('header.page-header');
burgerButton.addEventListener('click', function(event) {
    if (burgerButton.classList.contains('burger--open')) {
        burgerButton.classList.remove('burger--open');
        headerEl.classList.remove('page-header--open');
    } else {
        burgerButton.classList.add('burger--open');
        headerEl.classList.add('page-header--open');
    }
});

//Select
const someSelectEl = document.querySelector('.select');
if (someSelectEl) {
    new SlimSelect({
        select: '.select.select--1',
        showSearch: false,
        placeholder: 'выберите площадку'
    });

    new SlimSelect({
        select: '.select.select--2',
        showSearch: false,
        placeholder: 'выберите направление'
    });
}

//cursor
new kursor({
    color: '#FE8B4C',
    type: 2,
    removeDefaultCursor: true
});

