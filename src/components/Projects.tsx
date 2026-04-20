const projects = [
  {
    num: "01", name: "Dev", nameItalic: "Note",
    desc: "Developer snippet manager with public explore page, syntax highlighting, collections & smart filtering.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "Supabase", "Framer Motion"],
    href: "#",
  },
  {
    num: "02", name: "Mufadz", nameItalic: "App",
    desc: "Islamic utility app — Quran, prayer schedules, doa, and AI chatbot powered by Groq/LLaMA.",
    tags: ["Next.js", "Groq AI", "Laravel", "MySQL"],
    href: "#",
  },
  {
    num: "03", name: "Daily", nameItalic: "Fit",
    desc: "Fitness tracker with workout studio, exercise plans, daily checklists, and stats visualization.",
    tags: ["Next.js", "App Router", "Tailwind", "Charts"],
    href: "#",
  },
  {
    num: "04", name: "Mufine", nameItalic: "Wallet",
    desc: "Personal finance tracker with goals, CSV/PDF export, and visual charts. Built with React + Vite.",
    tags: ["React", "Vite", "Express", "Charts"],
    href: "#",
  },
  {
    num: "05", name: "TechGear", nameItalic: "Store",
    desc: "E-commerce storefront for tech products with cart, orders, and admin dashboard.",
    tags: ["React", "Vite", "Express", "MySQL"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-parchment px-[7vw] py-[120px]">
      {/* Label */}
      <div className="flex items-center uppercase gap-3.5 font-jetbrains text-[0.62rem] tracking-[0.18em] text-army-light mb-5">
        <span className="block w-8 h-px bg-army-light shrink-0" />
        Selected work
      </div>

      {/* Title */}
      <h2
        className="reveal font-cormorant font-light leading-[1.1] tracking-tight text-army mb-[72px]"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
      >
        Things I&apos;ve built
        <br />
        <em className="italic text-earth-light">and shipped.</em>
      </h2>

      <div className="flex flex-col gap-0.5">
        {projects.map((p, i) => (
          <a
            key={p.num}
            href={p.href}
            className={`proj-row reveal rd${Math.min(i + 1, 4)}`}
          >
            <div className="proj-num font-cormorant text-[2rem] font-light text-cream-deep leading-none relative z-[1]">
              {p.num}
            </div>

            <div className="relative z-[1]">
              <div className="font-cormorant font-semibold text-[1.6rem] tracking-tight text-army mb-1.5">
                {p.name}
                <em className="italic font-light text-earth-light">{p.nameItalic}</em>
              </div>
              <p className="text-[0.88rem] text-text-muted leading-[1.7]">{p.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 relative z-[1]">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-jetbrains text-[0.58rem] px-2.5 py-1 border border-[var(--border-strong)] text-text-muted tracking-[0.06em] bg-transparent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="proj-arrow text-[1.4rem] text-[var(--border-strong)] relative z-[1] transition-[color,transform] duration-200">
              →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
