import { projects } from "@/data/projek";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Carousel from "@/components/Carousel";
import {
    Share2, Globe, Zap, BookMarked, FolderOpen, Tag,
    Clock, Bot, BookOpen, ScrollText, Bell, ShieldCheck,
    ClipboardList, Dumbbell, CalendarDays, BarChart2,
    CreditCard, Gamepad2, Receipt, Layers, MousePointer2,
    Eye, ShoppingCart, Star, PackageCheck, LayoutGrid, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Share2: <Share2 size={16} />,
    Globe: <Globe size={16} />,
    Zap: <Zap size={16} />,
    BookMarked: <BookMarked size={16} />,
    FolderOpen: <FolderOpen size={16} />,
    Tag: <Tag size={16} />,
    Clock: <Clock size={16} />,
    Bot: <Bot size={16} />,
    BookOpen: <BookOpen size={16} />,
    ScrollText: <ScrollText size={16} />,
    Bell: <Bell size={16} />,
    ShieldCheck: <ShieldCheck size={16} />,
    ClipboardList: <ClipboardList size={16} />,
    Dumbbell: <Dumbbell size={16} />,
    CalendarDays: <CalendarDays size={16} />,
    BarChart2: <BarChart2 size={16} />,
    CreditCard: <CreditCard size={16} />,
    Gamepad2: <Gamepad2 size={16} />,
    Receipt: <Receipt size={16} />,
    Layers: <Layers size={16} />,
    MousePointer2: <MousePointer2 size={16} />,
    Eye: <Eye size={16} />,
    ShoppingCart: <ShoppingCart size={16} />,
    Star: <Star size={16} />,
    PackageCheck: <PackageCheck size={16} />,
    LayoutGrid: <LayoutGrid size={16} />,
};




export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prev = projects[currentIndex - 1] ?? null;
    const next = projects[currentIndex + 1] ?? null;

    return (
        <>
            <main className="bg-parchment min-h-screen">
                <div className="px-[7vw] pt-10 flex items-center justify-between">
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-text-muted hover:text-army transition-colors duration-200"
                    >
                        <ArrowLeft size={12} className="transition-transform duration-200 group-hover:-translate-x-1" />
                        All Projects
                    </Link>
                    <span className="font-jetbrains text-[0.62rem] tracking-[0.18em] text-army-light/50">
                        {project.num} / {String(projects.length).padStart(2, "0")}
                    </span>
                </div>

                <div className="px-[7vw] pt-16 pb-14 border-b border-[var(--border-strong)]">
                    <div className="flex items-start gap-6 mb-8 flex-wrap">
                        {project.logo && (
                            <div className="shrink-0 w-14 h-14 relative rounded-sm overflow-hidden border border-[var(--border-strong)] bg-cream-deep">
                                <Image
                                    src={project.logo}
                                    alt={project.name}
                                    fill
                                    sizes="56px"
                                    className="object-contain"
                                />
                            </div>
                        )}

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                {project.year && (
                                    <span className="font-jetbrains text-[0.62rem] tracking-[0.14em] text-text-muted">
                                        {project.year}
                                    </span>
                                )}
                            </div>

                            <h1
                                className="font-cormorant font-semibold leading-[1.05] tracking-tight text-army"
                                style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
                            >
                                {project.name}
                                <em className="italic font-light text-earth-light">{project.nameItalic}</em>
                            </h1>
                        </div>

                        <div className="shrink-0 flex items-center gap-3">
                        
                            {project.demo && project.demo !== "#" && (
                                
                                    <a href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-jetbrains text-[0.62rem] uppercase tracking-[0.14em] text-army border border-army hover:bg-army hover:text-parchment px-3.5 py-2 transition-all duration-200"
                                >
                                    <ExternalLink size={13} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="font-jetbrains text-[0.58rem] px-2.5 py-1 border border-[var(--border-strong)] text-text-muted tracking-[0.06em]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="px-[7vw] py-16 flex flex-col gap-16">

                    {project.overview && (
                        <section className="reveal max-w-2xl">
                            <div className="flex items-center gap-3.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-army-light mb-5">
                                <span className="block w-8 h-px bg-army-light shrink-0" />
                                Overview
                            </div>
                            <p
                                className="font-cormorant font-light text-army leading-[1.7]"
                                style={{ fontSize: "clamp(1.15rem, 2vw, 1.35rem)" }}
                            >
                                {project.overview}
                            </p>
                        </section>
                    )}

                    {project.features && project.features.length > 0 && (
                        <section className="reveal">
                            <div className="flex items-center gap-3.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-army-light mb-8">
                                <span className="block w-8 h-px bg-army-light shrink-0" />
                                Features
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border-strong)]">
                                {project.features.map((f, i) => (
                                    <div
                                        key={i}
                                        className="bg-parchment p-6 hover:bg-cream-deep/40 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-2.5 text-earth-light mb-3">
                                            {iconMap[f.icon] ?? <Zap size={16} />}
                                            <span className="font-cormorant font-semibold text-[1.1rem] text-army tracking-tight">
                                                {f.title}
                                            </span>
                                        </div>
                                        <p className="font-jetbrains text-[0.72rem] text-text-muted leading-[1.7] tracking-[0.02em]">
                                            {f.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {project.stack && project.stack.length > 0 && (
                        <section className="reveal">
                            <div className="flex items-center gap-3.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-army-light mb-8">
                                <span className="block w-8 h-px bg-army-light shrink-0" />
                                Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-10">
                                {project.stack.map((s) => (
                                    <div key={s.group}>
                                        <div className="font-jetbrains text-[0.58rem] uppercase tracking-[0.18em] text-text-muted mb-3">
                                            {s.group}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {s.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="font-jetbrains text-[0.65rem] px-3 py-1.5 border border-[var(--border-strong)] text-army tracking-[0.06em] hover:bg-army hover:text-parchment transition-colors duration-200 cursor-default"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {project.screenshots && project.screenshots.length > 0 && (
                        <section className="reveal">
                            <div className="flex items-center gap-3.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-army-light mb-8">
                                <span className="block w-8 h-px bg-army-light shrink-0" />
                                Preview
                            </div>
                            <Carousel screenshots={project.screenshots} name={project.name} />
                        </section>
                    )}
                </div>

                <div className="border-t border-[var(--border-strong)] grid grid-cols-2">
                    {prev ? (
                        <Link
                            href={`/projects/${prev.slug}`}
                            className="group flex flex-col gap-1 px-[7vw] py-8 border-r border-[var(--border-strong)] hover:bg-cream-deep/30 transition-colors duration-200"
                        >
                            <span className="flex items-center gap-2 font-jetbrains text-[0.58rem] uppercase tracking-[0.16em] text-text-muted group-hover:text-army transition-colors duration-200">
                                <ChevronLeft size={11} />
                                Previous
                            </span>
                            <span className="font-cormorant font-semibold text-[1.3rem] text-army">
                                {prev.name}
                                <em className="italic font-light text-earth-light">{prev.nameItalic}</em>
                            </span>
                        </Link>
                    ) : <div className="border-r border-[var(--border-strong)]" />}

                    {next ? (
                        <Link
                            href={`/projects/${next.slug}`}
                            className="group flex flex-col gap-1 items-end px-[7vw] py-8 hover:bg-cream-deep/30 transition-colors duration-200"
                        >
                            <span className="flex items-center gap-2 font-jetbrains text-[0.58rem] uppercase tracking-[0.16em] text-text-muted group-hover:text-army transition-colors duration-200">
                                Next
                                <ChevronRight size={11} />
                            </span>
                            <span className="font-cormorant font-semibold text-[1.3rem] text-army">
                                {next.name}
                                <em className="italic font-light text-earth-light">{next.nameItalic}</em>
                            </span>
                        </Link>
                    ) : <div />}
                </div>
            </main>
            <ScrollReveal />
        </>
    );
}