document.addEventListener("DOMContentLoaded", function () {
  const cardsPerPage = 3;
  let currentPage = 1;
  const cards = document.querySelectorAll(".project__page-cards .card");
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  document.getElementById("total-pages").textContent = totalPages.toString();
  document.getElementById("current-page").textContent = currentPage.toString();

  function updateCardsDisplay() {
    cards.forEach((card) => {
      card.style.display = "none";
    });

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = "";
      }
    });

    document.getElementById("current-page").textContent =
      currentPage.toString();
  }

  window.changePage = function (direction) {
    currentPage += direction;
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages; 
    }
    updateCardsDisplay();
  };

  updateCardsDisplay();
});
