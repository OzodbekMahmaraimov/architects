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
