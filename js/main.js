// nav bartoggle button
document.addEventListener("DOMContentLoaded", function() {
  const navTriggerBtn = document.getElementById('nav_trigger_btn');
  const navMenu = document.getElementById('nav_menu');

  console.log(navTriggerBtn, navMenu);  // Debugging log

  if (navTriggerBtn && navMenu) {
    navTriggerBtn.addEventListener('click', function() {
      console.log("Menu button clicked");
      navMenu.classList.toggle('hidden');
      console.log(navMenu.classList);
    });
  } else {
    console.error("Elements not found!");
  }
});


// slider function
let slideIndex = 0;
showSlides(slideIndex);

function prev() {
  showSlides(slideIndex -= 1);
}

function next() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slider li");
  let dots = document.querySelectorAll(".dot");

  if (n >= Math.ceil(slides.length / 3)) { slideIndex = 0; }
  if (n < 0) { slideIndex = Math.ceil(slides.length / 3) - 1; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = slideIndex * 3; i < slideIndex * 3 + 3; i++) {
    if (slides[i]) {
      slides[i].style.display = "block";
    }
  }

  dots[slideIndex].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

document.addEventListener("DOMContentLoaded", function() {
  const swiper = new swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      960: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
});
