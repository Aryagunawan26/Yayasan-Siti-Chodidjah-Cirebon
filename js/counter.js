function initCounter() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = +target.getAttribute('data-target');
                let count = 0;
                const duration = 2000; // ms
                const increment = targetNumber / (duration / 16); // 60fps

                const updateCount = () => {
                    count += increment;
                    if (count < targetNumber) {
                        target.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        target.innerText = targetNumber;
                    }
                };
                
                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}