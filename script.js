const menuTrigger = document.getElementById("menuTrigger");
const menu = document.getElementById("menu");
menuTrigger.addEventListener("click", e => {
  e.stopPropagation(); menu.classList.toggle("open");
});
document.addEventListener("click", e => {
  if (!menu.contains(e.target) && !menuTrigger.contains(e.target)) menu.classList.remove("open");
});

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.opacity = "0";
    setTimeout(() => loading.style.display = "none", 300);
  }
  startTypewriter();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav.menu a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`nav.menu a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}, { threshold: 0.6 });
sections.forEach(section => observer.observe(section));

function startTypewriter() {
  const el = document.getElementById('aboutText');
  const fullText = `Hello, World! I'm a software architect transitioning into data analytics after focusing on software engineering, software \nfor pure and applied mathematics, machine learning and cybersecurity.`;
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
    }
  })();
}

window.addEventListener("DOMContentLoaded", () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("mobile-warning").style.display = "flex";
  }
});
