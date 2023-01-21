
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

// FORM SUBMISSION SMTP

const sendEmail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "dorcasayobami2002@gmail.com",
    Password: "onethreehills333",
    To: 'dorcasayobami2002@gmail.com',
    From: document.querySelector(".email").value,
    Subject: "New contact form enquiry",
    Body: "Name:" + document.querySelector(".name").value 
        + "<br> Email: " + document.querySelector(".email").value 
  }).then(
    message => alert("Thank you for signing up")
  );
} 