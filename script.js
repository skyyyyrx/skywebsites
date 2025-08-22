const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

// Toggle buka/tutup menu
hamburgerBtn.addEventListener('click', () => {
    const isActive = hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Tambah/hapus blur di body
    if (isActive) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
});

// Tutup otomatis kalau klik link di dalam menu
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Tutup otomatis kalau klik di luar menu & tombol
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});
