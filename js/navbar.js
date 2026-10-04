function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple hamburger animation
        hamburger.classList.toggle('toggle');
    });

    // Active Link Scroll
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active'); // close mobile menu on click
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}