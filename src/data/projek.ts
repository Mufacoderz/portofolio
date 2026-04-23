export type Projects = {
    num: string
    name: string
    nameItalic: string
    desc: string
    tags: string[]
    href: string
    image?: string
    repo?: string
    demo?: string
}

export const projects = [
    {
        num: "01",
        name: "Dev",
        nameItalic: "Note",
        desc: "Developer snippet manager with public explore page, syntax highlighting, collections & smart filtering.",
        tags: ["Next.js 15", "TypeScript", "Prisma", "Supabase"],
        href: "/projects",
        image: "/images/devnote.webp",
        repo: "https://github.com/Mufacoderz/devnote",
        demo: "https://devnote-five.vercel.app/",
    },
    {
        num: "02",
        name: "Mufadz",
        nameItalic: "Portal",
        desc: "Islamic utility app — Quran, prayer schedules, doa, and AI chatbot powered by Groq.",
        tags: ["React.js", "Groq AI", "Express", "MySQL"],
        href: "/projects",
        image: "/images/mufadz.webp",
        repo: "https://github.com/Mufacoderz/mufadz-portal",
        demo: "https://mufadz-app.vercel.app/",
    },
    {
        num: "03",
        name: "Daily",
        nameItalic: "Fit",
        desc: "Fitness tracker with workout studio, exercise plans, daily checklists, and stats visualization.",
        tags: ["Vue.js", "App Router", "Tailwind", "Charts"],
        href: "/projects",
        image: "/images/dailyfit.webp",
        repo: "https://github.com/Mufacoderz/dailyfit",
        demo: "https://github.com/Mufacoderz/dailyfit",
    },
    {
        num: "04",
        name: "Game",
        nameItalic: "fy",
        desc: "TopUp Diamonds Games webiste with payment gateway integration.",
        tags: ["React", "Laravel", "Midtrans", "Game"],
        href: "/projects",
        image: "/images/gamefy.webp",
        repo: "https://github.com/Mufacoderz/gamefy-topup",
        demo: "https://gamefy-topup.vercel.app/",
    },
    {
        num: "05",
        name: "Porto",
        nameItalic: "folio",
        desc: "My portofolio as a developer.",
        tags: ["Nextjs", "TypeScript", "Tailwind"],
        href: "/projects",
        image: "/images/porto.webp",
        repo: "https://github.com/Mufacoderz/portofolio",
        demo: "https://portofolio-eta-beryl.vercel.app/",
    },
    {
        num: "06",
        name: "TechGear",
        nameItalic: "Store",
        desc: "E-commerce storefront for tech products with cart, orders, and admin dashboard.",
        tags: ["PHP", "MVC", "MySQL"],
        href: "/projects",
        image: "/images/techgear.webp",
        repo: "https://github.com/Mufacoderz/techgear-store",
        demo: "https://techgear-store.vercel.app/",
    },
];