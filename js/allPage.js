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
  getPage("../components/footer.html", "footer");
  getPage("../components/navbar.html", "navbar");
});

const loader = document.querySelector(".loader-container");

setTimeout(() => {
  loader.classList.remove("flex");
  loader.classList.add("hide");
}, 3000);

function navbar() {
  const toggle = document.querySelector(".toggle"),
    mainNav = document.querySelector(".main__nav");

  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("bi-list")) {
      mainNav.classList.add("h-screen");
      mainNav.classList.remove("h-0");
      toggle.classList.remove("bi-list");
      toggle.classList.add("bi-x");
      console.log("bu navbar yopiq");
    } else {
      mainNav.classList.add("h-0");
      mainNav.classList.remove("h-screen");
      toggle.classList.remove("bi-x");
      toggle.classList.add("bi-list");
      console.log("bu navbar ochiq");
    }
  });
}
