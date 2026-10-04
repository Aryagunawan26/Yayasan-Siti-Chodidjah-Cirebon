function initSlider() {
    const wrapper = document.getElementById('testimonial-wrapper');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Pastikan slider ter-load (delay sedikit agar DOM dirender API)
    setTimeout(() => {
        const slides = document.querySelectorAll('.testimonial-item');
        if (slides.length === 0) return;

        let currentIndex = 0;

        // Buat Dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            wrapper.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');
            currentIndex = index;
        }

        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        // Auto slide
        setInterval(() => goToSlide(currentIndex + 1), 5000);
    }, 500);
}