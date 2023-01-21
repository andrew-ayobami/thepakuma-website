// NAVIGATION BAR SLIDER

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-lists');
  const navLinks = document.querySelectorAll('.nav-lists .nav-list');

  burger.addEventListener('click', () => {
    // Toggle
    nav.classList.toggle('nav-active');
    // Links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });
}

navSlide();

// NAVIGATION DROPDOWN MENU 

const dropDownFunc = () => {
  const arrow = document.querySelector('.arrow-svg'); 
  const dropDownMenu = document.querySelector('.dropdown');
  const page = document.querySelector('.landing-page');
  
  arrow.addEventListener('click', () => {
    dropDownMenu.classList.toggle('dropdown-toggle');

    page.addEventListener('click', () => {
      dropDownMenu.classList.remove('dropdown-toggle')
    })
  })
}

dropDownFunc();

// TESTIMONIALS CAROUSEL SWIPER EFFECT

var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 30,
  
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
  },
});



// FORM SUBMISSION SMTP
let forms = Array.from(document.querySelectorAll('.form'));


const response = 'Thank you for signing up!';

const sendEmail = () => {

  Email.send({
    Host: "smtp.gmail.com",
    Username: "dorcasayobami2002@gmail.com",
    Password: "onethreehills333",
    To: 'dorcasayobami2002@gmail.com',
    From: document.querySelector(".email").value,
    Subject: "New Sign Up For Newsletter",
    Body: "Name:" + document.querySelector(".name").value 
        + "<br> Email: " + document.querySelector(".email").value 
  }).then(
    forms.forEach(element => {
      element.innerHTML = response
    })
  );
}


// const formResponseFunc = () => {
//   const firstName = document.querySelector('.sub-form .name');
//   const emailAddress = document.querySelector('.sub-form .email');
//   const button = document.querySelector('#btn');
//   const form = document.querySelector('.sub-form');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (firstName.value && emailAddress.value) {
//       alert(`Thank you for submitting ${firstName.value}. Please check your mail for a response.`);
//     }
  
//     firstName.value = "";
//     emailAddress.value = "";
//   })
// }

// formResponseFunc();

// const forms = Array.from(document.getElementsByClassName('form'));



// forms.forEach(listenFunc);

// const sendEmail = () => {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "username",
//     Password: "password",
//     To: 'thepakumawebsite@gmail.com',
//     From: document.getElementsByClassName("email").value,
//     Subject: "New contact form enquiry",
//     Body: "Name:" + document.getElementsByClassName("name").value 
//         + "<br> Email: " + document.getElementsByClassName("email").value 
//         + "<br> Message: " + document.getElementsByClassName("message").value
//   }).then(
//     message => alert("Message sent successfully")
//   );
// } 

// const signUp = () => {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "username",
//     Password: "password",
//     To: 'thepakumawebsite@gmail.com',
//     From: document.getElementsByClassName("email").value,
//     Subject: "Newsletter sign up", 
//     Body: "Name: " + document.querySelector(".email").value
//         + "<br> Email: " + document.querySelector(".email").value
//   }).then(
//     message => alert("Message sent successfully")
//   );
// }