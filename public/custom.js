console.log("Hello");

//sticky Header //
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 700) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.getElementById("overlay");

// Toggle Menu Function
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbarMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
}

// Collapse SubMenu Function
navbarMenu.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault();
    const menuItemHasChildren = e.target.parentElement;

    // If menu-item-child is Expanded, then Collapse It
    if (menuItemHasChildren.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Collapse the Existing Expanded menu-item-child
      if (navbarMenu.querySelector(".menu-item-child.active")) {
        collapseSubMenu();
      }
      // Expanded the New menu-item-child
      menuItemHasChildren.classList.add("active");
      const subMenu = menuItemHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
});

function collapseSubMenu() {
  navbarMenu
    .querySelector(".menu-item-child.active .sub-menu")
    .removeAttribute("style");
  navbarMenu
    .querySelector(".menu-item-child.active")
    .classList.remove("active");
}

// Fixed Resize Screen Function
window.addEventListener("resize", () => {
  if (this.innerWidth > 992) {
    // If navbarMenu is Open, then Close It
    if (navbarMenu.classList.contains("active")) {
      toggleMenu();
    }

    // If menu-item-child is Expanded, then Collapse It
    if (navbarMenu.querySelector(".menu-item-child.active")) {
      collapseSubMenu();
    }
  }
});

$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    autoplay: false,
    smartSpeed: 200,
    slideSpeed: 500,
    dots: false,
    autoplayHoverPause: true,
    navText: [
      '<span aria-label="' +
        "Previous" +
        '"><img src="images/arrow-left.svg"></span>',
      '<span aria-label="' +
        "Next" +
        '"><img src="images/arrow-right.svg"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1025: {
        items: 5,
      },
    },
  });
});
