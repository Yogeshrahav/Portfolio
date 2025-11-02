// Typed.js animation
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// === Scroll-based background gradient ===
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollY / docHeight;

  // Define color stops (you can adjust these)
  const colors = [
    [0, 0, 0],       // black
    [20, 20, 80],    // dark blue
    [80, 20, 100],   // purple
    [100, 30, 60],   // magenta-red
    [0, 0, 0]        // back to black
  ];

  // Get which colors to blend between
  const index = Math.floor(scrollPercent * (colors.length - 1));
  const nextIndex = Math.min(index + 1, colors.length - 1);
  const blend = (scrollPercent * (colors.length - 1)) - index;

  // Blend colors
  const r = Math.round(colors[index][0] + (colors[nextIndex][0] - colors[index][0]) * blend);
  const g = Math.round(colors[index][1] + (colors[nextIndex][1] - colors[index][1]) * blend);
  const b = Math.round(colors[index][2] + (colors[nextIndex][2] - colors[index][2]) * blend);

  // Apply the new gradient
  document.body.style.background = `linear-gradient(135deg, rgb(${r},${g},${b}), rgb(${b},${r},${g}))`;
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section");
  const backToTop = document.getElementById("backToTop");

  // Smooth scroll for navbar links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Highlight active section in navbar
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

    // Show/hide Back-to-Top button
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Back to top scroll
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
