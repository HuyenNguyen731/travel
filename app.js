
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const img = $$('.picture-the-beach');
const button = $$('.best-place__picture-btn');
const navBtn = $('.nav-bar');
const containerNav = $('.nav-bar__container');
const closeBtn = $('.btn-close');

button.forEach((item, index) => {
    const pic = img[index];

    item.onclick = function() {
        $('.picture-the-beach.active').classList.remove('active');
        $('.best-place__picture-btn.best-place__picture-btn--active').classList.remove('best-place__picture-btn--active');

        this.classList.add('best-place__picture-btn--active');
        pic.classList.add('active');
    };
});

navBtn.addEventListener('click', function() {
    containerNav.classList.toggle('nav-bar__container-block');
})

closeBtn.addEventListener('click', function() {
    containerNav.classList.toggle('nav-bar__container-block');
})