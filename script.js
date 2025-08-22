// === HAMBURGER MENU ===
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

function closeMenu() {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
}

hamburgerBtn.addEventListener('click', () => {
    const isActive = hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open', isActive);
});

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMenu();
    }
});

// === PARALLAX HERO ===
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        let scrollPos = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPos * 0.4}px`;
    }
});

// === MAP LOADING ANIMASI ===
window.addEventListener('load', () => {
    const iframe = document.querySelector('.map-wrapper iframe');
    if (iframe) {
        iframe.addEventListener('load', () => {
            iframe.classList.add('show');
            const loading = document.querySelector('.map-loading');
            if (loading) loading.style.display = "none";
        });
    }
});

// === FADE-IN SECTION ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section, footer").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

// === HERO TYPING EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".hero h2");
    if (!textElement) return;

    const texts = ["Selamat Datang", "Welcome to My Portfolio", "Halo, Saya Septian"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        const displayed = currentText.substring(0, charIndex);

        textElement.textContent = displayed;

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeEffect, 120);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 60);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(typeEffect, 1500); // jeda sebelum hapus
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, 200);
            }
        }
    }

    typeEffect();
});
