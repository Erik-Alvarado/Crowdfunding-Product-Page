const bookmark = document.querySelector('.mark-icon');
const backer = document.querySelector('.back-project');
const selection = document.querySelectorAll('.select-option');
const hamMenu = document.querySelector('.ham-menu');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('#page-mask');
const modalContain = document.querySelector('.modal-container');
const modalSuccess = document.querySelector('.modal-success');
const closeModal = document.querySelector('.close');

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle('booked');
})

backer.addEventListener("click", () => {
    backer.classList.toggle('open');
    modalContain.classList.toggle('active');
    overlay.classList.toggle('active');
    modalSuccess.classList.add('hide');
})

closeModal.addEventListener("click", () => {
    modalContain.classList.remove('active');
    overlay.classList.remove('active');
})
