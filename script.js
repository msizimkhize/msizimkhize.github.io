// Loader fade out
window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-overlay");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease-out";

  setTimeout(() => loader.style.display = "none", 500);

  startTypewriter();
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
  const fullText = `Hello, World! I'm a software architect transitioning into data analytics after focusing on software engineering, software for pure and applied mathematics, machine learning and cybersecurity. \n\nThe projects I am working on are built in SQL, Python, R, Power BI, Google Sheets and Tableau, with a focus on analysing intranational, financial and demographic data. My goal is to help businesses uncover insights and improve performance through comprehensive reporting and streamlined automation.`;
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

// Software Projects carousel
function initProjectCarousel() {
  const slides = document.getElementById("projectSlides");
  const dotsContainer = document.getElementById("projectDots");
  const slideCount = slides.children.length;
  let currentIndex = 0;

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
}

// Data Analysis Projects carousel
function initDataCarousel() {
  const slides = document.getElementById("dataSlides");
  const dotsContainer = document.getElementById("dataDots");
  const slideCount = slides.children.length;
  let currentIndex = 0;

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





