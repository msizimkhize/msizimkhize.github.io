// Progress bar simulation and loader fade out
window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-overlay");
  const progressBar = document.querySelector(".progress-bar");
  
  // Simulate progress based on actual loading
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + "%";
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      
      // Complete the progress bar
      progressBar.style.width = "100%";
      
      // After a brief moment, fade out loader
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease-out";
        
        setTimeout(() => {
          loader.style.display = "none";
          
          // Fade in the page from black (single transition)
          document.body.classList.add('loaded');
          
          // Start typewriter after page fades in
          setTimeout(() => {
            startTypewriter();
          }, 800);
        }, 500);
      }, 200);
    }
  }, 100);

  initProjectCarousel();
  initDataCarousel();
});

// Scroll animations for sections
function enableScrollAnimations() {
  const sectionsToAnimate = document.querySelectorAll('.hidden-section');

  if (!('IntersectionObserver' in window)) {
    sectionsToAnimate.forEach(section => section.classList.remove('hidden-section'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden-section');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.15 });

  sectionsToAnimate.forEach(section => observer.observe(section));
}

// Typewriter effect
function startTypewriter() {
  const el = document.getElementById('aboutText');
  const fullText = `I'm Msizi Mkhize, a software architect transitioning into data analytics after focusing on software engineering, software for pure and applied mathematics, machine learning and cybersecurity. I study at the University of South Africa, where I am completing my Bachelor of Science degree in Mathematics and Computer Science. \n\nThe projects I am working on are built in SQL, Python, R, Power BI, Excel, Google Colab and Tableau, with a focus on analysing intranational, financial and demographic data. My goal is to help organisations uncover insights and improve performance through comprehensive reporting and streamlined automation.`;
  el.textContent = '';
  const caret = document.createElement("span");
  caret.className = "caret";
  el.appendChild(caret);
  let i = 0;
  const baseDelay = 35;
  const newlinePause = 200;

  (function type() {
    if (i < fullText.length) {
      const ch = fullText.charAt(i);
      caret.insertAdjacentText("beforebegin", ch);
      i++;
      setTimeout(type, ch === '\n' ? newlinePause : baseDelay);
    } else {
      const fullHeight = document.documentElement.scrollHeight;
      document.body.style.maxHeight = `${fullHeight}px`;
      setTimeout(() => document.body.classList.remove('preload'), 1000);

      enableScrollAnimations();
    }
  })();
}

// Software Projects carousel with touch support
function initProjectCarousel() {
  const slides = document.getElementById("projectSlides");
  const dotsContainer = document.getElementById("projectDots");
  const slideCount = slides.children.length;
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  for (let i = 0; i < slideCount; i++) {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => { currentIndex = i; updateCarousel(); });
    dotsContainer.appendChild(btn);
  }

  function updateCarousel() {
    slides.style.transform = `translateX(-${100 * currentIndex}%)`;
    dotsContainer.querySelectorAll("button").forEach((b, j) => b.classList.toggle("active", j === currentIndex));
  }

  // Touch swipe support for mobile
  slides.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slides.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold && currentIndex < slideCount - 1) {
      currentIndex++;
      updateCarousel();
    } else if (touchEndX - touchStartX > swipeThreshold && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
}

// Data Analysis Projects carousel with touch support and mobile restructuring
function initDataCarousel() {
  const slides = document.getElementById("dataSlides");
  const dotsContainer = document.getElementById("dataDots");
  let slideCount = slides.children.length;
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  // On mobile, restructure to show 1 card per slide
  function restructureForMobile() {
    if (window.innerWidth <= 768) {
      const allCards = slides.querySelectorAll('.card');
      slides.innerHTML = '';
      
      allCards.forEach(card => {
        const newSlide = document.createElement('div');
        newSlide.className = 'slide';
        newSlide.appendChild(card.cloneNode(true));
        slides.appendChild(newSlide);
      });
      
      slideCount = slides.children.length;
    }
  }

  restructureForMobile();

  for (let i = 0; i < slideCount; i++) {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => { currentIndex = i; updateCarousel(); });
    dotsContainer.appendChild(btn);
  }

  function updateCarousel() {
    slides.style.transform = `translateX(-${100 * currentIndex}%)`;
    dotsContainer.querySelectorAll("button").forEach((b, j) => b.classList.toggle("active", j === currentIndex));
  }

  // Touch swipe support for mobile
  slides.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slides.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold && currentIndex < slideCount - 1) {
      currentIndex++;
      updateCarousel();
    } else if (touchEndX - touchStartX > swipeThreshold && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    const wasMobile = slideCount > 2;
    restructureForMobile();
    if (wasMobile !== (slideCount > 2)) {
      location.reload();
    }
  });
}

// Floating Menu Toggle & Auto-close
const menuTrigger = document.getElementById("menuTrigger");
const menu = document.querySelector("nav.menu");

menuTrigger.addEventListener("click", (e) => {
  menu.classList.toggle("open");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuTrigger.contains(e.target)) {
    menu.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");
    // Skip if it's an anchor link (#...) or relative link
    if (url.startsWith("#") || url.startsWith("/") || url.startsWith(window.location.origin)) {
      return;
    }
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});