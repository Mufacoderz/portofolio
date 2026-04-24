export type Feature = {
    icon: string
    title: string
    desc: string
}

export type StackGroup = {
    group: string
    items: string[]
}

export type Project = {
    num: string
    name: string
    nameItalic: string
    slug: string
    desc: string
    tags: string[]
    href: string
    image?: string
    logo?: string
    repo?: string
    demo?: string
    year?: string
    overview?: string
    features?: Feature[]
    stack?: StackGroup[]
    screenshots?: string[]
}

export const projects: Project[] = [
    {
        num: "01",
        name: "Dev",
        nameItalic: "Note",
        slug: "devnote",
        desc: "Developer snippet manager with public explore page, syntax highlighting, collections & smart filtering.",
        tags: ["Next.js 15", "TypeScript", "Prisma", "Supabase"],
        href: "/projects/devnote",
        image: "/images/devnote.webp",
        logo: "/images/logo/devnote.webp",
        repo: "https://github.com/Mufacoderz/devnote",
        demo: "https://devnote-five.vercel.app/",
        year: "2025",
        overview: "Devnote lahir dari frustrasi nyata — snippet kode yang berserakan di berbagai tempat, susah dicari saat dibutuhkan. Lebih dari sekadar snippet manager, Devnote adalah ruang kerja developer yang terorganisir: simpan, kategorikan, dan bagikan kode dengan sistem share code unik tanpa perlu akun. Dibangun dengan arsitektur modern Next.js 15 App Router, Devnote menggabungkan pengalaman menulis kode yang nyaman dengan ekosistem komunitas publik.",
        features: [
            { icon: "Share2", title: "Share via Code", desc: "Bagikan snippet dengan kode 9-digit unik atau link langsung dengan cepat" },
            { icon: "Globe", title: "Public Explore", desc: "Jelajahi snippet publik dengan dual filter — sort by terbaru, terlama, trending, plus filter per bahasa" },
            { icon: "Zap", title: "Syntax Highlighting", desc: "Rendering kode real-time dengan Shiki, support 30+ bahasa pemrograman" },
            { icon: "BookMarked", title: "Smart Library", desc: "Organisasi snippet ke All, Favorites, Saved, dan Public dalam satu sidebar yang collapsible" },
            { icon: "FolderOpen", title: "Collections", desc: "Kelompokkan snippet ke dalam collection custom untuk proyek atau topik tertentu" },
            { icon: "Tag", title: "Tag System", desc: "Filter cepat lewat tag yang terasosiasi ke tiap snippet di seluruh library" },
        ],
        stack: [
            { group: "Frontend", items: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"] },
            { group: "Backend", items: ["Prisma ORM", "NextAuth v5", "bcryptjs"] },
            { group: "Database", items: ["PostgreSQL", "Supabase"] },
            { group: "Libraries", items: ["Shiki", "CodeMirror", "Google OAuth", "Zustand"] },
        ],
        screenshots: [
            "/images/preview/d1.png",
            "/images/preview/d2.png",
            "/images/preview/d3.png",
            "/images/preview/d4.png",
        ],
    },
    {
        num: "02",
        name: "Mufadz",
        nameItalic: "Portal",
        slug: "mufadz-portal",
        desc: "Islamic utility app — Quran, prayer schedules, doa, and AI chatbot powered by Groq.",
        tags: ["React.js", "Groq AI", "Express", "MySQL"],
        href: "/projects/mufadz-portal",
        image: "/images/mufadz.webp",
        logo: "/images/logo/mufadz.webp",
        repo: "https://github.com/Mufacoderz/mufadz-portal",
        demo: "https://mufadz-app.vercel.app/",
        year: "2024",
        overview: "Mufadz Portal hadir sebagai teman digital kehidupan Muslim modern — semua kebutuhan ibadah dalam satu tempat. Dari jadwal sholat otomatis berbasis lokasi, bacaan Al-Quran, hingga asisten AI islami berbasis Groq, semuanya bisa diakses tanpa kerumitan. Dibangun sebagai full-stack app dengan sistem autentikasi dan manajemen konten untuk admin.",
        features: [
            { icon: "Clock", title: "Jadwal Sholat Otomatis", desc: "Waktu sholat real-time berbasis lokasi via API, terintegrasi kalender Hijriah" },
            { icon: "Bot", title: "Fadz AI Chatbot", desc: "Asisten islami berbasis Groq LLaMA dengan riwayat percakapan tersimpan per sesi" },
            { icon: "BookOpen", title: "Al-Quran Digital", desc: "Baca per surah dan ayat lengkap dengan fitur pencarian surah" },
            { icon: "ScrollText", title: "Kumpulan Doa", desc: "Daftar doa harian dari API dengan tampilan bersih dan mudah dibaca" },
            { icon: "Bell", title: "Reminder Pribadi", desc: "Atur pengingat ibadah personal dari halaman profile" },
            { icon: "ShieldCheck", title: "Dual Role System", desc: "Admin kelola user dan konten doa, user akses semua fitur personal" },
        ],
        stack: [
            { group: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
            { group: "Backend", items: ["Express.js", "JWT", "bcrypt", "Multer"] },
            { group: "Database", items: ["MySQL"] },
            { group: "Libraries", items: ["Groq SDK", "Aladhan API", "hijri-date", "Axios"] },
        ],
        screenshots: [
            "/images/preview/m1.png",
            "/images/preview/m2.png",
            "/images/preview/m3.png",
            "/images/preview/m4.png",
            "/images/preview/m5.png",
        ],
    },
    {
        num: "03",
        name: "Daily",
        nameItalic: "Fit",
        slug: "dailyfit",
        desc: "Fitness tracker with workout studio, exercise plans, daily checklists, and stats visualization.",
        tags: ["Vue.js", "TypeScript", "Tailwind", "Express"],
        href: "/projects/dailyfit",
        image: "/images/dailyfit.webp",
        logo: "/images/logo/devnote.webp",
        repo: "https://github.com/Mufacoderz/dailyfit",
        demo: "https://github.com/Mufacoderz/dailyfit",
        year: "2025",
        overview: "DailyFit berawal dari kebiasaan nyata — mencatat gerakan workout harian di WhatsApp yang tidak terstruktur dan sulit dilacak. Aplikasi ini mengubah rutinitas latihan menjadi sistem yang terorganisir: susun exercise library, buat workout plan, dan centang checklist harian. Statistik keseluruhan membantu melihat konsistensi latihan dari waktu ke waktu.",
        features: [
            { icon: "ClipboardList", title: "Daily Checklist", desc: "Load dari plan atau tambah manual dari exercise library — catat aktivitas harian dengan terstruktur" },
            { icon: "Dumbbell", title: "Exercise Library", desc: "CRUD exercise dengan kategori Cardio, Strength, dan Balance" },
            { icon: "CalendarDays", title: "Workout Plan", desc: "Susun plan mingguan dengan kombinasi exercise dari library pribadi" },
            { icon: "BarChart2", title: "Overall Stats", desc: "Visualisasi statistik latihan keseluruhan untuk tracking konsistensi" },
        ],
        stack: [
            { group: "Frontend", items: ["Vue 3", "TypeScript", "Tailwind CSS"] },
            { group: "Backend", items: ["Express.js", "Prisma ORM", "JWT"] },
            { group: "Database", items: ["PostgreSQL", "Supabase"] },
        ],
        screenshots: ["/images/preview/preview.png"],
    },
    {
        num: "04",
        name: "Game",
        nameItalic: "fy",
        slug: "gamefy",
        desc: "TopUp Diamonds Games website with payment gateway integration.",
        tags: ["React", "Laravel", "Midtrans", "MySQL"],
        href: "/projects/gamefy",
        image: "/images/gamefy.webp",
        logo: "/images/logo/devnote.webp",
        repo: "https://github.com/Mufacoderz/gamefy-topup",
        demo: "https://gamefy-topup.vercel.app/",
        year: "2025",
        overview: "Gamefy Store adalah platform top-up diamond game dengan integrasi payment gateway Midtrans. Dibangun dengan React dan Laravel, platform ini menyediakan alur transaksi yang cepat dan aman dari pemilihan game hingga pembayaran.",
        features: [
            { icon: "Zap", title: "Instant Top Up", desc: "Proses top up diamond instan setelah pembayaran terkonfirmasi" },
            { icon: "CreditCard", title: "Midtrans Payment", desc: "Integrasi payment gateway Midtrans dengan berbagai metode pembayaran" },
            { icon: "Gamepad2", title: "Multi Game", desc: "Support berbagai game populer dalam satu platform" },
        ],
        stack: [
            { group: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
            { group: "Backend", items: ["Laravel"] },
            { group: "Database", items: ["MySQL"] },
            { group: "Payment", items: ["Midtrans Sandbox"] },
        ],
        screenshots: ["/images/preview/preview.png"],
    },
    {
        num: "05",
        name: "Porto",
        nameItalic: "folio",
        slug: "portofolio",
        desc: "My portfolio as a fullstack developer — earthy editorial aesthetic with curated project showcase.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        href: "/projects/portofolio",
        image: "/images/porto.webp",
        logo: "/images/logo/devnote.webp",
        repo: "https://github.com/Mufacoderz/portofolio",
        demo: "https://portofolio-eta-beryl.vercel.app/",
        year: "2025",
        overview: "Portfolio ini dibangun sebagai representasi diri sebagai fullstack developer — bukan sekadar daftar project, tapi sebuah editorial experience. Desain earthy dengan tipografi Cormorant Garamond mencerminkan karakter yang detail-oriented dan punya sensibilitas desain yang kuat. Setiap section dirancang untuk menyampaikan cerita, bukan sekadar informasi.",
        features: [
            { icon: "Layers", title: "Editorial Design", desc: "Earthy cream palette dengan Cormorant Garamond — estetika majalah arsitektur yang memorable" },
            { icon: "MousePointer2", title: "Custom Cursor", desc: "Cursor trailing dengan ring animation yang context-aware pada elemen interaktif" },
            { icon: "Eye", title: "Scroll Reveal", desc: "Animasi reveal berbasis IntersectionObserver yang smooth dan performant" },
            { icon: "FolderOpen", title: "Project Detail Pages", desc: "Halaman detail per project dengan features, tech stack, dan screenshot carousel" },
        ],
        stack: [
            { group: "Frontend", items: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"] },
            { group: "Libraries", items: ["Lucide React", "next/font", "next/image"] },
        ],
        screenshots: ["/images/preview/preview.png"],
    },
    {
        num: "06",
        name: "TechGear",
        nameItalic: "Store",
        slug: "techgear-store",
        desc: "E-commerce storefront for tech products with cart, orders, and admin dashboard.",
        tags: ["PHP", "MVC", "MySQL"],
        href: "/projects/techgear-store",
        image: "/images/techgear.webp",
        logo: "/images/logo/devnote.webp",
        repo: "https://github.com/Mufacoderz/techgear-store",
        demo: "https://techgear-store.vercel.app/",
        year: "2024",
        overview: "TechGear Store adalah proyek e-commerce full-stack yang dibangun sebagai tugas akhir mata kuliah Pemrograman Web Dasar semester 3. Menampilkan alur belanja lengkap dari browsing produk per kategori, cart, hingga checkout — dilengkapi sistem testimoni publik dan dashboard admin untuk manajemen produk dan pesanan.",
        features: [
            { icon: "ShoppingCart", title: "Cart & Checkout", desc: "Tambah produk dari berbagai kategori, checkout dengan mengisi data pengiriman" },
            { icon: "Star", title: "Testimoni Publik", desc: "Pengunjung bisa langsung membuat testimoni tanpa perlu login" },
            { icon: "LayoutGrid", title: "Produk per Kategori", desc: "Tampilan produk terorganisir berdasarkan kategori dengan filter" },
            { icon: "ShieldCheck", title: "Admin Dashboard", desc: "Kelola produk dan moderasi testimoni dari panel admin" },
        ],
        stack: [
            { group: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
            { group: "Backend", items: ["PHP Native", "MVC Pattern"] },
            { group: "Database", items: ["MySQL"] },
        ],
        screenshots: ["/images/preview/preview.png"],
    },
]