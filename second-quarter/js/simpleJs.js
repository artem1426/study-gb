//Добавлено только для сахара и простейшего функционала
/* Пути */
const goMain = () => {
    document.location.href = '../pages/index.html';
}
const goProduct = (path) => {
    localStorage.setItem('pathImg', path);
    document.location.href = '../pages/product.html';
}
const goBasket = () => {
    document.location.href = '../pages/cart.html';
}
const goCheckOut = () => {
    document.location.href = '../pages/registration.html';
}
/* Взаимодействия с куками и памятью */
if (document.location.href.indexOf('product.html') !== -1 && localStorage.getItem('pathImg')) {
    const carouselMain = document.getElementById('carousel_default')
    carouselMain.setAttribute('src', localStorage.getItem('pathImg'))
} else if (document.location.href.indexOf('product.html') !== -1) {
    localStorage.removeItem('pathImg');
    alert('перешли на страницу по ссылке?' +
        '\nМожешь посмотреть, но через 10 сек будешь отправлен обратно на страницу каталога.' +
        '\nЧтобы зайти на эту страницу, выбери товар на сайте и нажмите на него.');
    setInterval(() => {
        document.location.href = '../pages/catalog.html';
    }, 10000);
} else localStorage.removeItem('pathImg');
const addToCart = () => {
    const cartNum = parseInt(localStorage.getItem('cart_num'));
    localStorage.setItem('cart_num', isNaN(cartNum) ? 1 : cartNum + 1);
    document.getElementById('cart_counter').textContent = localStorage.getItem('cart_num');
}
if (localStorage.getItem('cart_num'))
    document.getElementById('cart_counter').textContent = localStorage.getItem('cart_num');

/* Слайдер*/
let slideIndex = 1;
if (document.location.href.indexOf('product.html') !== -1) {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlider");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const clearLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem('cart_num', '0');
    document.getElementById('cart_counter').textContent = localStorage.getItem('cart_num');
}