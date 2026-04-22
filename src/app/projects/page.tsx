import { projects } from "@/data/projek";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectsPage() {
    return (
        <>
            <main className="bg-parchment min-h-screen px-[7vw] py-[120px]">
                {/* Header */}
                <div className="mb-4 flex items-center gap-3.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-army-light">
                    <span className="block h-px w-8 shrink-0 bg-army-light" />
                    All work
                </div>

                <div className="mb-[72px] flex items-end justify-between gap-6 flex-wrap">
                    <h1
                        className="font-cormorant font-light leading-[1.1] tracking-tight text-army"
                        style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
                    >
                        Every project
                        <br />
                        <em className="italic text-earth-light">I&apos;ve shipped.</em>
                    </h1>

                    <Link
                        href="/#projects"
                        className="group mb-1 flex items-center gap-2 font-jetbrains text-[0.62rem] uppercase tracking-[0.18em] text-text-muted hover:text-army transition-colors duration-200"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        Back to home
                    </Link>
                </div>

                <div className="mb-12 inline-flex items-center gap-2 border border-[var(--border-strong)] px-3 py-1.5">
                    <span className="font-cormorant text-[1.1rem] font-semibold text-army">{projects.length}</span>
                    <span className="font-jetbrains text-[0.58rem] uppercase tracking-[0.12em] text-text-muted">
                        projects
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-strong)]">
                    {projects.map((p, i) => (
                        <div
                            key={p.num}
                            className={`reveal rd${Math.min(i + 1, 4)} bg-parchment group flex flex-col`}
                        >
                            <div className="relative w-full aspect-[16/9] overflow-hidden bg-cream-deep">
                                {p.image ? (
                                    <Image
                                        src={p.image}
                                        alt={p.name + (p.nameItalic || '')}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={95}
                                        unoptimized={false}
                                        priority={i < 4}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-cormorant text-[3rem] font-light text-army/20">
                                            {p.num}
                                        </span>
                                    </div>
                                )}
                                <span className="absolute top-4 left-4 font-jetbrains text-[0.58rem] tracking-[0.12em] text-army/60 bg-parchment/80 backdrop-blur-sm px-2 py-1">
                                    {p.num}
                                </span>
                            </div>

                            <div className="flex flex-col flex-1 p-7 gap-4">
                                <div>
                                    <h2 className="font-cormorant font-semibold text-[1.6rem] tracking-tight text-army leading-tight">
                                        {p.name}
                                        <em className="italic font-light text-earth-light">{p.nameItalic}</em>
                                    </h2>
                                    <p className="mt-2 text-[0.88rem] text-text-muted leading-[1.7]">{p.desc}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-jetbrains text-[0.58rem] px-2.5 py-1 border border-[var(--border-strong)] text-text-muted tracking-[0.06em]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-[var(--border-strong)] flex items-center gap-5">
                                    {p.repo && (

                                        <a href={p.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link flex items-center gap-1.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.14em] text-text-muted hover:text-army transition-colors duration-200"
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            Repo
                                        </a>
                                    )}
                                    {p.demo && p.demo !== "#" && (

                                        <a href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link flex items-center gap-1.5 font-jetbrains text-[0.62rem] uppercase tracking-[0.14em] text-text-muted hover:text-army transition-colors duration-200"
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}

                                    <a href={p.href}
                                        className="ml-auto font-cormorant italic text-[1rem] text-earth-light hover:text-army transition-colors duration-200"
                                    >
                                        View details →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main >
            <ScrollReveal />
        </>
    );
}