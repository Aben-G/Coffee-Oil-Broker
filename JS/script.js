// Mobile navigation toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burger.classList.toggle('toggle');
});
// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        burger.classList.remove('toggle');
    });
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
const bodyEl = document.body;
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
    bodyEl.classList.toggle("dark-theme");
    bodyEl.classList.toggle("light-theme");

    if (bodyEl.classList.contains("light-theme")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});
