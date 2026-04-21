export type Projects = {
    num: string
    name: string
    nameItalic: string
    desc: string
    tags: string
    href: string
}

export const projects = [
    {
        num: "01",
        name: "Dev",
        nameItalic: "Note",
        desc: "Developer snippet manager with public explore page, syntax highlighting, collections & smart filtering.",
        tags: ["Next.js 15", "TypeScript", "Prisma", "Supabase"],
        href: "#",
    },
    {
        num: "02",
        name: "Mufadz",
        nameItalic: "Portal",
        desc: "Islamic utility app — Quran, prayer schedules, doa, and AI chatbot powered by Groq.",
        tags: ["React.js", "Groq AI", "Express", "MySQL"],
        href: "#",
    },
    {
        num: "03",
        name: "Daily",
        nameItalic: "Fit",
        desc: "Fitness tracker with workout studio, exercise plans, daily checklists, and stats visualization.",
        tags: ["Vue.js", "App Router", "Tailwind", "Charts"],
        href: "#",
    },
    {
        num: "04",
        name: "Game",
        nameItalic: "fy",
        desc: "TopUp Diamonds Games webiste with payment gateway integration.",
        tags: ["React", "Laravel", "Midtrans", "Game"],
        href: "#",
    },
    {
        num: "05",
        name: "TechGear",
        nameItalic: "Store",
        desc: "E-commerce storefront for tech products with cart, orders, and admin dashboard.",
        tags: ["PHP", "MVC", "MySQL"],
        href: "#",
    },
];