window.addEventListener("DOMContentLoaded", () => {
  const getPage = (url, id, chooseSelect = true) => {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        if (chooseSelect) document.getElementById(id).innerHTML = html;
        else document.querySelector("head").innerHTML = html;
      });
  };

  getPage("../components/head.html", "head", false);

  // let modal = document.querySelector(".gallery__modal"),
  //   modalImg = document.querySelector(".modalImg");

  // function openModal(imageSrc) {
  //   modal.classList.remove("hide");
  //   modal.classList.add("flex");
  //   modalImg.src = imageSrc;
  //   console.log("hello Uzbekistam");
  // }
});
