import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiLaravel, SiPrisma,
    SiPostgresql, SiSupabase, SiMysql, SiVercel, SiGithub,
    SiFigma, SiCanva, SiPostman, SiBootstrap, SiVuedotjs
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { RiReactjsLine, RiRobot2Line } from "react-icons/ri";
import type { IconType } from "react-icons";

export type StackItem = {
    label: string
    icon: IconType
}

export type StackCard = {
    cat: string
    items: StackItem[]
}

export const stackCards: StackCard[] = [
    {
        cat: "Frontend",
        items: [
            { label: "Next.js", icon: SiNextdotjs },
            { label: "React", icon: RiReactjsLine },
            { label: "Vue.js", icon: SiVuedotjs },
            { label: "TypeScript", icon: SiTypescript },
            { label: "Framer Motion", icon: SiFramer },
        ],
    },
    {
        cat: "Backend",
        items: [
            { label: "Node.js", icon: SiNodedotjs },
            { label: "Express.js", icon: SiExpress },
            { label: "Laravel / PHP", icon: SiLaravel },
            { label: "Prisma ORM", icon: SiPrisma },
            { label: "NextAuth", icon: SiNextdotjs },
        ],
    },
    {
        cat: "Database",
        items: [
            { label: "PostgreSQL", icon: SiPostgresql },
            { label: "Supabase", icon: SiSupabase },
            { label: "MySQL", icon: SiMysql },
        ],
    },
    {
        cat: "Infra & Dev",
        items: [
            { label: "Vercel", icon: SiVercel },
            { label: "Git / GitHub", icon: SiGithub },
            { label: "VS Code", icon: VscCode },
            { label: "Postman", icon: SiPostman },
        ],
    },
    {
        cat: "AI API & Assistances",
        items: [
            { label: "Claude", icon: RiRobot2Line },
            { label: "GPT", icon: RiRobot2Line },
            { label: "Groq / LLaMA", icon: RiRobot2Line },
        ],
    },
    {
        cat: "Design & UI",
        items: [
            { label: "Figma", icon: SiFigma },
            { label: "Canva", icon: SiCanva },
            { label: "Tailwind CSS", icon: SiTailwindcss },
            { label: "Bootstrap", icon: SiBootstrap },
        ],
    },
];