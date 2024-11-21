/* Cambia la data in automatico*/

const yearE = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearE.textContent = currentYear;
console.log(currentYear);

/* Navigation mobile*/

const btn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/* Smooth scrolling*/
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/** Sticky navigation*/
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
