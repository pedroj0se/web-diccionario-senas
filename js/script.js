/*===========  menu icon navbar ==============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*===========  SCROL SECTIONS ACTIVE LINK  ==============*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  // let header = document.querySelector('.header');
  // header.classList.toggle('sticky', window.scrollY > 100);
  
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
/*   navbar    */
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);


/*===========  remove menu icon navbar when click navbar link (scroll)  ==============*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};



/*===========  dark light mode  ==============*/

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}


ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-img h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-img h3, .home-content p, .about-container p', { origin: 'right' });

