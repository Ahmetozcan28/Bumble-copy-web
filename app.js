const paginationsNav = document.querySelector(".js-slider-paginations");
const paginationsİtems = document.querySelectorAll(".paginations-item");
const footerImage = document.querySelector(".footer-image");
const footerButton = document.querySelector(".footer-button");
const photo = [
  "url(https://eu1.bumbcdn.com/ssc/static-eu.bumble.com/s4/files/e/2.1.mgfBZES6-elQXZ2rKcYFyYFjSaTHbrQohp3QGrB8K6u0rOZtRlih8huDlDxUK76-6yf8jArxeppypVlb6mt4zw/)center/cover",
  "url(https://eu1.bumbcdn.com/ssc/static-eu.bumble.com/s3/files/e/2.1.mgfBZES6-elQXZ2rKcYFyYHl5uKF8Q4dUIo8VbO283P1szl7-Y8m41oSqoxOg6yBzMTC9ht8tDFXpR5kmHv4ZQ/)center/cover",
  "url(https://eu1.bumbcdn.com/ssc/static-eu.bumble.com/s2/files/e/2.1.mgfBZES6-elQXZ2rKcYFyVIUzkBgNY1l_ALOzgOYIrErTLCyYW6pcKT_937iJ6NP__nXdUZUR6K8GER3cer-AQ/)center/cover",
];
paginationsNav.addEventListener("click", (event) => {
  if (event.target !== paginationsNav)
    paginationsİtems.forEach((item, index) => {
      if (event.target === item) {
        item.classList.add("is-active");
        footerImage.style.background = photo[index];
      } else {
        item.classList.remove("is-active");
      }
    });
});
