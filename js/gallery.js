// GALLERY MODAL
let modal = document.querySelector(".gallery__modal"),
  modalImg = document.querySelector(".modalImg"),
  body = document.querySelector("body");

const openModal = (imageSrc) => {
  modal.classList.remove("hide");
  modal.classList.add("flex");
  modalImg.src = imageSrc;
  body.classList.add("overflow-h");
};

const closeModal = () => {
  modal.classList.remove("flex");
  modal.classList.add("hide");
  body.classList.remove("overflow-h");
};

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// PAGINATION
let currentPage = 1;
const imagesPerPage = 10; // Change this based on how many images you want per page
let totalImages = document.querySelectorAll(".gallery__photos img").length;
let totalPages = Math.ceil(totalImages / imagesPerPage);

const updateGalleryDisplay = () => {
  const images = document.querySelectorAll(".gallery__photos img");
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  images.forEach((img, index) => {
    if (index >= startIndex && index < endIndex) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });

  // Update the counter
  document.querySelector(".next-text span:first-child").textContent =
    currentPage.toString();
  document.querySelector(".next-text span:last-child").textContent =
    totalPages.toString();
};

const changePage = (increment) => {
  currentPage += increment;
  if (currentPage < 1) currentPage = 1;
  else if (currentPage > totalPages) currentPage = totalPages;

  updateGalleryDisplay();
};

document.addEventListener("DOMContentLoaded", () => {
  updateGalleryDisplay();
});
