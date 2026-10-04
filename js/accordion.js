function initAccordion() {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Tutup semua yang lain (Optional, bisa dimatikan jika ingin multi-open)
            const activeAcc = document.querySelector('.accordion-header.active');
            if (activeAcc && activeAcc !== this) {
                activeAcc.classList.remove('active');
                activeAcc.nextElementSibling.style.maxHeight = null;
                activeAcc.querySelector('.icon').innerText = '+';
            }

            // Toggle yang di-klik
            this.classList.toggle('active');
            const body = this.nextElementSibling;
            const icon = this.querySelector('.icon');

            if (body.style.maxHeight) {
                body.style.maxHeight = null;
                icon.innerText = '+';
            } else {
                body.style.maxHeight = body.scrollHeight + "px";
                // Tambahkan padding atas bawah secara manual jika perlu
                body.style.padding = "15px 20px"; 
                icon.innerText = '-';
            }
        });
    });
}