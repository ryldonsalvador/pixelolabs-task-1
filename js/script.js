var splide = new Splide(".image-carousels", {
  pagination: false,
  arrows: false,
  easing: "ease-out",
  drag: true,
  mediaQuery: "max",
  breakpoints: {
    768: {
      type: "loop",
      drag: true,
      perPage: 3,
      perMove: 1,
      gap: "1rem",
    },
  },
  perPage: 5,
});

var splide_3Btns = new Splide(".splide-3btns", {
  pagination: false,
  arrows: false,
  mediaQuery: "max",
  breakpoints: {
    700: {
      drag: true,
      perPage: 2,
    },
  },
  perPage: 3,
});

var splide_section4_product = new Splide(".section-4-product-image", {
  pagination: false,
  type: "loop",
  arrows: true,
  mediaQuery: "max",
  breakpoints: {
    1100: {
      perPage: 3,
    },
    768: {
      perPage: 1,
    },
    550: {
      perPage: 1,
    },
  },
  perPage: 4,
  perMove: 1,
  gap: "10px",
});

var splide_section6_images = new Splide(".section-6-slider-image", {
  pagination: false,
  type: "loop",
  arrows: true,
  mediaQuery: "max",
  breakpoints: {
    600: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
  perPage: 3,
  perMove: 1,
  gap: "10px",
});

var splide_section7_images = new Splide(".section-7-image-slides", {
  pagination: false,
  arrows: false,
  perPage: 5,
  gap: "10px",
  perMove: 1,
});

var splide_section7_images_mob = new Splide(".section-7-image-slides-mob", {
  pagination: false,
  type: "loop",
  arrows: true,
  mediaQuery: "max",
  breakpoints: {
    600: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
  perPage: 3,
  perMove: 1,
  gap: "10px",
});

splide.mount();
splide_3Btns.mount();
splide_section4_product.mount();
splide_section6_images.mount();
splide_section7_images.mount();
splide_section7_images_mob.mount();

const accordions = document.querySelectorAll(".accordion-toggle");

// Add event listeners to each accordion button
accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Toggle active class on the clicked button
    this.classList.toggle("active");

    // Get the corresponding panel
    const panel = this.nextElementSibling;

    // If panel is open, close it, else open it
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  const mainDiv = document.getElementById("main-menu");
  const menuBtn = document.getElementById("hamburger");
  const sideMenu = document.getElementById("main-nav");
  const header = document.getElementById("header");
  const logoWhite = document.getElementById("logo-white");
  const logoBlack = document.getElementById("logo-black");

  // Toggle menu visibility on button click
  menuBtn.addEventListener("click", function () {
    sideMenu.classList.toggle("open");
    menuBtn.classList.toggle("active");
    mainDiv.classList.toggle("active");

    if (sideMenu.classList.contains("open")) {
      logoWhite.style.display = "none";
      logoBlack.style.display = "block";
    } else {
      if (header.classList.contains("scrolled")) {
        logoWhite.style.display = "none";
        logoBlack.style.display = "block";
      } else {
        logoWhite.style.display = "block";
        logoBlack.style.display = "none";
      }
    }
  });

  // Function to handle active class toggling based on screen width
  function handleScreenSize() {
    if (window.innerWidth >= 980) {
      // For screen width >= 980px, ensure the active class is on the button if the menu is open
      if (sideMenu.classList.contains("open")) {
        sideMenu.classList.toggle("open");
        menuBtn.classList.remove("active");
        mainDiv.classList.remove("active");
        logoWhite.style.display = "block";
        logoBlack.style.display = "none";
      }
    } else {
      // For screen width < 980px, remove the active class from the button
      menuBtn.classList.remove("active");
      mainDiv.classList.remove("active");
    }
  }

  // Listen for resize events and apply screen size behavior
  window.addEventListener("resize", handleScreenSize);

  // Initial check to ensure the menu button state is correct on page load
  handleScreenSize();

  // Listen for the scroll event
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Add the 'scrolled' class if the page is scrolled more than 50px
      header.classList.add("scrolled");
      logoWhite.style.display = "none";
      logoBlack.style.display = "block";
    } else {
      // Remove the 'scrolled' class if the scroll position is less than 50px
      header.classList.remove("scrolled");

      if (sideMenu.classList.contains("open")) {
        logoWhite.style.display = "none";
        logoBlack.style.display = "block";
      } else {
        logoWhite.style.display = "block";
        logoBlack.style.display = "none";
      }
    }
  });
});
