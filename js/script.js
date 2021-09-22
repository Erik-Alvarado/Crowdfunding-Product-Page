const bookmark = document.querySelector(".mark-icon");
const backer = document.querySelector(".back-project");
const hamMenu = document.querySelector(".ham-menu");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector("#page-mask");
const modalContain = document.querySelector(".modal-container");
const modalSuccess = document.querySelector(".modal-success");
const closeModal = document.querySelectorAll(".close");
const advance = document.querySelectorAll(".continue-btn");
const modalSelect = document.querySelector(".modal-select");

//event listeners

backer.addEventListener("click", () => {
  backer.classList.toggle("open");
  overlayActive();
  continuePledge();
  modalSuccess.classList.add("hide");
});

hamMenu.addEventListener("click", hamburgerToggle);

closeModal.forEach((closer) => closer.addEventListener("click", overlayActive));

advance.forEach((forward) => forward.addEventListener("click", continuePledge));

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("booked");
});

//functions

function hamburgerToggle() {
  hamMenu.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}
function continuePledge() {
  if (modalSuccess.classList.contains("hide")) {
    modalSuccess.classList.remove("hide");
    modalSelect.classList.add("hide");
  } else {
    modalSuccess.classList.add("hide");
    modalSelect.classList.remove("hide");
  }
}

function overlayActive() {
  modalContain.classList.toggle("active");
  overlay.classList.toggle("active");
}
