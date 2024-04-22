setTimeout(() => {
  document.querySelector(".view").classList.add("flex")
}, 1000)

window.addEventListener("DOMContentLoaded", function () {
  // PAGES
  const getPage = (url, id) => {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(id).innerHTML = html;
        navbar();
      });
  };
  getPage("../components/footer.html", "footer");

  // SLIDE
  const slides = document.querySelectorAll(".slider-img"),
    next = document.querySelector(".left"),
    prev = document.querySelector(".right"),
    total = document.querySelector(".total"),
    current = document.querySelector(".current");

  slideFunc(slides, next, prev, total, current);

  function slideFunc(slides, next, prev, total, current) {
    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
    } else {
      total.textContent = slides.length;
    }

    function showSlides(idx) {
      if (idx > slides.length) {
        slideIndex = 1;
      }
      if (idx < 1) {
        slideIndex = slides.length;
      }
      slides.forEach((item) => (item.style.display = "none"));
      slides[slideIndex - 1].style.display = "block";

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    }

    function plusSlides(idx) {
      showSlides((slideIndex += idx));
    }

    next.addEventListener("click", () => {
      plusSlides(1);
    });

    prev.addEventListener("click", () => {
      plusSlides(-1);
    });
  }
});

// function initializeTabs() {
//   const tabsParent = document.querySelector(".main__nav-list"),
//     tabs = document.querySelectorAll(".main__nav-item"),
//     tabsContent = document.querySelectorAll(".tabcontent");
//   console.log(tabsParent);

//   // TABS
//   function hideTabContent() {
//     tabsContent.forEach((item) => {
//       item.classList.add("hide");
//       item.classList.remove("show", "fade");
//     });

//     tabs.forEach((item) => {
//       item.classList.remove("tabheader__item_active");
//     });
//   }
//   function showTabContent(i = 0) {
//     tabsContent[i].classList.add("show", "fade");
//     tabsContent[i].classList.remove("hide");
//     tabs[i].classList.add("tabheader__item_active");
//   }

//   hideTabContent();
//   showTabContent();

//   tabsParent.addEventListener("click", (event) => {
//     const target = event.target;
//     if (target && target.classList.contains("main__nav-item")) {
//       tabs.forEach((item, idx) => {
//         if (target == item) {
//           hideTabContent();
//           showTabContent(idx);
//         }
//       });
//     }
//   });
// }
