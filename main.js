const menu = document.getElementById('menu');
const iconOpen = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

iconOpen.onclick = () => {
    menu.style.transform = "translateY(0)";
    menu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
};

iconClose.onclick = () => {
    menu.style.transform = "translateY(-550px)";
    menu.style.backgroundColor = "rgba(0, 0, 0, 0)";
};

const slides = [
    {
        element: document.querySelector('.innovation'),
        bgMobile: './images/mobile-image-hero-1.jpg',
        bgDesktop: './images/desktop-image-hero-1.jpg'
    },
    {
        element: document.querySelector('.available'),
        bgMobile: './images/mobile-image-hero-2.jpg',
        bgDesktop: './images/desktop-image-hero-2.jpg'
    },
    {
        element: document.querySelector('.manufacture'),
        bgMobile: './images/mobile-image-hero-3.jpg',
        bgDesktop: './images/desktop-image-hero-3.jpg'
    }
];

let current = 0;
const header = document.getElementById('header');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.element.classList.toggle('hidden', i !== index);
    });

    const bg = window.innerWidth > 500 ? slides[index].bgDesktop : slides[index].bgMobile;
    header.style.backgroundImage = `url(${bg})`;
    current = index;
}

document.querySelectorAll('.icon-right').forEach(btn => {
    btn.onclick = () => showSlide((current + 1) % slides.length);
});

document.querySelectorAll('.icon-left').forEach(btn => {
    btn.onclick = () => showSlide((current - 1 + slides.length) % slides.length);
});

window.onresize = () => showSlide(current);

showSlide(current);
