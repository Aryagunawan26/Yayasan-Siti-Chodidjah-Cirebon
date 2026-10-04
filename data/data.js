// Mock Data - Simulasi Database
const DB = {
    excellence: [
        { icon: "🌟", title: "Pendidikan Karakter", desc: "Membentuk siswa yang memiliki integritas, empati, dan nilai moral yang tinggi." },
        { icon: "📚", title: "Pembelajaran Berkualitas", desc: "Kurikulum terpadu berstandar nasional dengan pendekatan inovatif." },
        { icon: "💻", title: "Literasi Digital", desc: "Fasilitas teknologi mutakhir untuk menunjang kompetensi abad 21." },
        { icon: "🎨", title: "Pengembangan Bakat", desc: "Beragam ekstrakurikuler untuk memaksimalkan potensi non-akademik." },
        { icon: "🌱", title: "Lingkungan Positif", desc: "Suasana belajar yang aman, nyaman, dan inklusif bagi seluruh siswa." },
        { icon: "🤝", title: "Kolaborasi Orang Tua", desc: "Sinergi kuat antara sekolah dan keluarga demi kemajuan anak." }
    ],
    levels: [
        { img: "assets/images/KB.jpg", name: "KB / PAUD", desc: "Fondasi awal dengan bermain sambil belajar." },
        { img: "assets/images/TK.jpg", name: "Taman Kanak-Kanak", desc: "Pengembangan kognitif, motorik, dan sosial." },
        { img: "assets/images/SD.jpg", name: "Sekolah Dasar (SD)", desc: "Pembentukan literasi, numerasi & karakter." },
        { img: "assets/images/SMP.jpg", name: "Sekolah Menengah (SMP)", desc: "Eksplorasi minat, bakat & kepemimpinan." }
    ],
    programs: [
        { icon: "📖", title: "Metode Qiroati", desc: "sistem pembelajaran membaca Al-Qur'an secara langsung tanpa dieja." },
        { icon: "🔬", title: "Sains & Teknologi", desc: "Klub robotik dan penelitian sains terapan." },
        { icon: "🗣️", title: "Cambridge Class", desc: "Pengantar kelas Bahasa Inggris Cambridge." },
        { icon: "💡", title: "Entrepreneurship", desc: "Menanamkan jiwa wirausaha sejak dini." }
    ],
    facilities: [
        { img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop", name: "Ruang Kelas Modern" },
        { img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop", name: "Laboratorium Sains" },
        { img: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600&auto=format&fit=crop", name: "Perpustakaan Digital" },
        { img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=600&auto=format&fit=crop", name: "Lapangan Olahraga" },
        { img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=600&auto=format&fit=crop", name: "Playground Anak" },
        { img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop", name: "Aula Pertemuan" }
    ],
    achievements: [
        { icon: "🥇", title: "Juara 1 Olimpiade Sains", desc: "Tingkat Provinsi, Kategori Fisika Terapan. 2025" },
        { icon: "🏆", title: "Juara Umum Tahfidz", desc: "Musabaqah Hifdzil Quran Tingkat Kota. 2025" },
        { icon: "🏅", title: "Juara 1 Futsal Pelajar", desc: "Turnamen Olahraga Walikota Cup. 2024" }
    ],
    news: [
        { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop", date: "15 Okt 2025", category: "Pengumuman", title: "Penerimaan Siswa Baru 2026/2027 Dibuka", excerpt: "Segera daftarkan putra-putri Anda sebelum kuota penuh. Dapatkan diskon early bird." },
        { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop", date: "02 Okt 2025", category: "Kegiatan", title: "Study Tour Interaktif ke Museum Sains", excerpt: "Siswa-siswi tingkat SMP melakukan kunjungan belajar yang menyenangkan." },
        { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop", date: "28 Sep 2025", category: "Prestasi", title: "Tim Robotik Sabet Medali Emas", excerpt: "Kebanggaan bagi yayasan, tim robotik berhasil menjuarai kompetisi nasional." }
    ],
    testimonials: [
        { text: "Lingkungan belajar di sini sangat positif. Anak saya tidak hanya pintar secara akademik, tapi juga memiliki adab yang baik.", author: "Bunda Sarah", status: "Orang Tua Siswa SD", avatar: "assets/images/samaran.jpg" },
        { text: "Fasilitas lengkap dan guru-gurunya sangat suportif. Program bilingual sangat membantu persiapan anak saya ke jenjang lebih tinggi.", author: "Bapak Budi", status: "Orang Tua Siswa SMP", avatar: "assets/images/samaran.jpg" },
        { text: "Saya bangga menyekolahkan anak di Yayasan ini. Ada keseimbangan antara ilmu dunia dan agama.", author: "Ibu Dina", status: "Orang Tua Siswa TK", avatar: "assets/images/samaran.jpg" }
    ],
    partners: [
        { name: "YPI", img: "assets/images/YPI.jpg"},
        { name: "Cambridge", img: "assets/images/Cambridge.jpg"},
        { name: "Qiroati", img: "assets/images/Qiroati.jpg"},
        { name: "BKKA", img: "assets/images/BKKA.jpg"}
    ]
};