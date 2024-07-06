const script = document.createElement('script');
script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
document.head.appendChild(script);

script.onload = () => {
  var typed = new Typed("#element", {
    strings: ["Fresher", "Java Developer"],
    typeSpeed: 50,
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Change navbar style on scroll
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Add visible class to elements when they come into view
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }

  var options = {
    threshold: 0.1
  };

  var observer = new IntersectionObserver(handleIntersection, options);

  document.querySelectorAll('.leftSection, .rightSection img, .secondSection h1, .secondSection .box').forEach(section => {
    observer.observe(section);
  });
};
