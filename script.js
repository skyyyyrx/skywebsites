const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Tambahkan event listener 'click' pada tombol hamburger
hamburgerBtn.addEventListener('click', () => {
    // Toggle class 'active' pada tombol dan menu navigasi
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});