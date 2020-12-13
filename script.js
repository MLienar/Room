const heroImage = document.getElementById('hero-image');
const heroTitle = document.getElementById('hero-title');
const heroText = document.getElementById('hero-text');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let slide = 0;

const slides = [
    {
        title: "Discover innovative ways to decorate",
        img: "desktop-image-hero-1.jpg",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        title: "We are available all across the globe",
        img: "desktop-image-hero-2.jpg",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        title: "Manufactured with the best materials",
        img: "desktop-image-hero-3.jpg",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    }
]

function changeSlide(slide) {
    heroTitle.innerText = slides[slide].title;
    heroImage.style.backgroundImage = `url(images/${slides[slide].img})`;
    heroText.innerText = slides[slide].text;
};

function leftSlide() {
    if (slide === 0) {
        slide = 2;
    } else {
    slide--;
    }
    changeSlide(slide);
};

function rightSlide() {
    if (slide === 2) {
        slide = 0;
    } else {
    slide++;
    }
    changeSlide(slide);
};

changeSlide(slide);  
// Event listener

leftArrow.addEventListener('click', leftSlide);
rightArrow.addEventListener('click', rightSlide);