document.addEventListener("DOMContentLoaded", function() {
  const texts = [
    {title: "Trusted & Secure Investment Company", text: "Are you ready for a great change!!! Online investment is now the talk of town, Invest on Dan's crypto today and experience a change that will shed smiles on you and your generations to come."},
    {title: "Discover", text: "Praesent varius convallis risus, id eleifend dolor commodo id. Nulla malesuada mauris a nulla tempus, non convallis lectus interdum."},
    {title: "Get Started", text: "Duis lacinia, sem a interdum laoreet, neque nunc convallis sapien, sit amet lacinia libero urna non sapien."},
  ];
  const images = ["./images/bn1.jpeg", "./images/bn6.jpeg", "./images/ban4.jpeg"]; // Add your image paths here
  
  let currentTextIndex = 0;
  let currentImageIndex = 0;

  // Function to change text and background image
  function changeContent() {
    document.getElementById("bannerTitle").textContent = texts[currentTextIndex].title;
    document.getElementById("bannerText").textContent = texts[currentTextIndex].text;
    document.querySelector(".banner").style.backgroundImage = `url(${images[currentImageIndex]})`;
  }

  // Call changeContent function once when the page loads
  changeContent();

  // Function to change text and background image on interval
  function changeContentOnInterval() {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("bannerTitle").classList.remove("slide-up");
    document.getElementById("bannerText").classList.remove("slide-right");
    setTimeout(() => {
      changeContent();
      document.getElementById("bannerTitle").classList.add("slide-up");
      document.getElementById("bannerText").classList.add("slide-right");
    }, 100);
  }

  // Start interval for automatic animation
  setInterval(changeContentOnInterval, 5000);

  // Function to handle next button click
  document.getElementById("nextBtn").addEventListener("click", function() {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeContent();
  });

  // Function to handle previous button click
  document.getElementById("prevBtn").addEventListener("click", function() {
    currentTextIndex = (currentTextIndex - 1 + texts.length) % texts.length;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeContent();
  });
});

// Users Statistics
window.addEventListener('scroll', () => {
  const numbers = document.querySelectorAll('.card-title');
  numbers.forEach(number => {
    const targetString = number.getAttribute('data-target');
    const target = parseInt(targetString.replace(/\D/g, '')); // Extract number from string and remove non-numeric characters
    const currentCount = +number.innerText.replace(/\D/g, ''); // Extract number from string and remove non-numeric characters
    const increment = target / window.innerHeight; 

    if (window.scrollY > target) {
      number.innerText = targetString;
    } else {
      number.innerText = Math.floor(currentCount + increment) + "K+";
    }
  });
});

// JavaScript code for auto-sliding testimonials
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial() {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });
  testimonials[index].classList.add('active');
  index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 5000);