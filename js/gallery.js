// GALLERY MODAL
let modal = document.querySelector(".gallery__modal"),
  modalImg = document.querySelector(".modalImg"),
  body = document.querySelector('body');

const openModal = (imageSrc) => {
  modal.classList.remove("hide");
  modal.classList.add("flex");
  modalImg.src = imageSrc;
  body.classList.add("overflow-h")
};

const closeModal = () => {
  modal.classList.remove("flex");
  modal.classList.add("hide");
  body.classList.remove("overflow-h")
};

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
