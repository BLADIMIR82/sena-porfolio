/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* ============== SERVICE MODAL ============== */

const modalViewS = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViewS[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViewS.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/* ================= FILTER WORK ============== */

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* LINK ACTIVE WORK */

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((L) => L.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));

/* SWIPER TESTIMONIAL */

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    
  },
});

/* ================ scrolll sections  =============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* -------------scrolll reveal -------------------*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  /* reset: */
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });

/* ================ array SKIll ========================== */

// console.log(skillsArray)

function mostrarTec() {
  let = html = "";

  skillsArray.map((tecnologia) => {
    html += `
      
        <img class="img__carta" src="${tecnologia.image}">
    
    `;
  });
  document.querySelector("#mainCards").innerHTML = html;
}
mostrarTec();

/* ==============funcion para el boton de scroll ============= */
addEventListener("DOMContentLoaded", () => {
  const botonUp = document.querySelector("#boton__arriba");

  const obtenerPix = () =>
    document.documentElement.scrollTop || document.body.scrollTop;
  const irArriba = () => {
    if (obtenerPix() > 0) {
      scrollTo(0, 0);
    }
  };

  const indicadorScroll = () => {
    if (obtenerPix() > 1000) {
      botonUp.className = "mostrar";
    } else {
      botonUp.className = "ocultar";
    }
  };

  botonUp.addEventListener("click", irArriba);
  window.addEventListener("scroll", indicadorScroll);
});
