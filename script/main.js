// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navLinks?.classList.remove('active');
  });
});

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle?.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Atur tema dari localStorage saat load
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// SLIDESHOW (hanya jalan jika ada elemen .slide)
let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

if (slides.length > 0) {
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    if (slides.length === 0) return;
    
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    
    slides[slideIndex - 1]?.classList.add("active");
    dots[slideIndex - 1]?.classList.add("active");
  }
  
  let slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000);
  
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        plusSlides(1);
      }, 5000);
    });
  }
}

// SMOOTH SCROLL (anchor)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});