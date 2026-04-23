export type AsideItems = {
    group: string
    cards: Card[]
}

export type Card = {
    label: string
    val : string
    sub : string
}

export type Edu = {
    badge: string
    school: string
    jurusan: string
    year: string
}

export type Expr = {
    badge : string
    role : string
    company : string
    period : string
    desc : string
}

export const asideItems = [
    {
        group: "// base & focus",
        cards: [
            { label: "Location", val: "East Kalimantan, Indonesia", sub: "UTC+8 · Samarinda" },
            { label: "Focus areas", val: "Fullstack · AI · Design", sub: "Web apps, developer tools, Web design" },
        ],
    },
    {
        group: "// find me",
        cards: [
            { label: "GitHub", val: "@Mufacoderz", sub: "45+ repos  ·  273 Stars  ·  859 Commits" },
            { label: "Email", val: "mfadil.coder@gmail.com", sub: "Responds within 24 hours" },
        ],
    },
];

export const education = [
    {
        badge: "High School",
        school: "SMK Muhammadiyah Loa Janan",
        jurusan: "Teknik Komputer & Jaringan",
        year: "Lulus 2022 · Samarinda",
    },
    {
        badge: "S1 · Active",
        school: "UIN Sultan Aji Muhammad Idris",
        jurusan: "Sistem Informasi",
        year: "2022 – sekarang · Samarinda",
    },
];

export const experience = [
    {
        badge: "Internship",
        role: "Logistic Intern",
        company: "PT. Anugerah Bara Kaltim · Kutai Kartanegara",
        period: "Jun 2022 – Dec 2022",
        desc: "Handled inventory data entry, managed outgoing goods records, scanned and archived logistics documents, and verified incoming shipments to ensure accuracy and proper documentation.",
    },
    {
        badge: "Self-initiated",
        role: "Fullstack Developer (Personal Projects)",
        company: "Independent",
        period: "September 2024 – sekarang",
        desc: "Built and developed several web applications using Next.js, Laravel, and Supabase. Focused on creating scalable features, authentication systems, and responsive UI.",
    },
];