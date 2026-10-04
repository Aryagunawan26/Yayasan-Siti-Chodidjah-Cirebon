function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // hanya animasi 1 kali
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// Lightbox Logic for Facilities
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    // Menggunakan event delegation di container fasilitas
    document.getElementById('facilities-container').addEventListener('click', (e) => {
        const item = e.target.closest('.facility-item');
        if (item) {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        }
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
}