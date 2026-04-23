import { projects } from "@/data//projek";

export type Stat = {
    big: string;
    title: string;
    sub: string;
};

export const stats = [
    {
        big: "1.5+",
        title: "Years of building",
        sub: "Self-taught · Fullstack"
    },
    {
        big: "3+",
        title: "Core expertise",
        sub: "Fullstack Dev · UI/UX · System Thinking"
    },
    {
        big: `${projects.length}`,
        title: "Total projects",
        sub: "DevNote · Mufadz · DailyFit"
    },
];