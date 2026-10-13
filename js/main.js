// Main File untuk Fetch dan Render UI Data
document.addEventListener('DOMContentLoaded', async () => {
    
    // Inisialisasi Fitur Dasar
    initNavbar();
    initAccordion();

    try {
        // Fetch Data dari API/Database
        const excellence = await API.getExcellence();
        const levels = await API.getLevels();
        const programs = await API.getPrograms();
        const facilities = await API.getFacilities();
        const achievements = await API.getAchievements();
        const news = await API.getNews();
        const testimonials = await API.getTestimonials();
        const partners = await API.getPartners(); // Memanggil data partner

        // RENDER: Keunggulan
        const excContainer = document.getElementById('excellence-container');
        if (excContainer) excContainer.innerHTML = excellence.map(item => `
            <div class="card">
                <span class="card-icon">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `).join('');

        // RENDER: Levels (Jenjang Pendidikan)
    const levelsContainer = document.getElementById('levels-container');
    if (levelsContainer && DB.levels) {
        levelsContainer.innerHTML = DB.levels.map(item => `
            <div class="card img-card">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="card-body">
                    <h3 style="font-size: 1.2rem;">${item.name}</h3>
                    <p style="margin-bottom: 15px;">${item.desc}</p>
                    
                    <!-- Ini yang membuat tombol mengarah ke tk.html -->
                    <a href="${item.link}" class="btn btn-outline" style="border-color: var(--primary); color: var(--primary); text-align: center; margin-top: auto;">Lihat Selengkapnya</a>
                </div>
            </div>
        `).join('');
    }

        // RENDER: Program Unggulan
        const progContainer = document.getElementById('programs-container');
        if (progContainer) progContainer.innerHTML = programs.map(item => `
            <div class="card">
                <span class="card-icon">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `).join('');

        // RENDER: Fasilitas
        const facContainer = document.getElementById('facilities-container');
        if (facContainer) facContainer.innerHTML = facilities.map(item => `
            <div class="facility-item">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="facility-overlay">
                    <h4>${item.name}</h4>
                </div>
            </div>
        `).join('');

        // RENDER: Prestasi
        const achContainer = document.getElementById('achievements-container');
        if (achContainer) achContainer.innerHTML = achievements.map(item => `
            <div class="card">
                <span class="card-icon">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `).join('');

        // RENDER: Berita
        const newsContainer = document.getElementById('news-container');
        if (newsContainer) newsContainer.innerHTML = news.map(item => `
            <div class="card img-card">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="card-body">
                    <p class="card-meta">${item.category} • ${item.date}</p>
                    <h3>${item.title}</h3>
                    <p>${item.excerpt}</p>
                    <a href="#" class="mt-4" style="color:var(--accent); font-weight:600;">Baca Selengkapnya &rarr;</a>
                </div>
            </div>
        `).join('');

        // RENDER: Testimoni
        const testContainer = document.getElementById('testimonial-wrapper');
        if (testContainer) testContainer.innerHTML = testimonials.map(item => `
            <div class="testimonial-item">
                <div class="testimonial-content">
                    <p class="testi-text">${item.text}</p>
                    <div class="testi-author">
                        <img src="${item.avatar}" alt="${item.author}">
                        <div class="author-info">
                            <h4>${item.author}</h4>
                            <p>${item.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // RENDER: Partners
const partContainer = document.getElementById('partners-container');
if (partContainer) {
    // 1. Simpan hasil render logo ke dalam satu variabel
    const partnerItems = partners.map(item => `
        <div class="partner-logo">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
        </div>
    `).join('');

    // 2. Cetak variabel tersebut 2 KALI di dalam pembungkus track
    partContainer.innerHTML = `
        <div class="partners-track">
            ${partnerItems}
            ${partnerItems}
        </div>
    `;
}

    } catch (error) {
        console.error("Gagal memuat data:", error);
    } finally {
        // Script animasi dijalankan di akhir agar tetap jalan meski ada error data
        initScrollReveal();
        initCounter();
        initLightbox();
        initSlider();
    }
});