import { projects } from "@/data/projek"

export default function Projects() {
  return (
    <section id="projects" className="bg-parchment px-[7vw] py-[120px]">
      <div className="flex items-center uppercase gap-3.5 font-jetbrains text-[0.62rem] tracking-[0.18em] text-army-light mb-5">
        <span className="block w-8 h-px bg-army-light shrink-0" />
        Selected work
      </div>

      <h2
        className="reveal font-cormorant font-light leading-[1.1] tracking-tight text-army mb-[72px]"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
      >
        Things I&apos;ve built
        <br />
        <em className="italic text-earth-light">and shipped.</em>
      </h2>

      <div className="flex flex-col gap-0.5">
        {projects.slice(0, 3).map((p, i) => (
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

      <div className="mt-14 flex items-center gap-5">

        <a href="/projects"
        className="group relative inline-flex items-center gap-3 font-cormorant text-[1.1rem] font-semibold tracking-wide text-army hover:text-army-light transition-colors duration-300"
  >
        <span className="relative">
          View all projects
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-earth-light transition-all duration-500 group-hover:w-full" />
        </span>
        <span className="inline-flex items-center justify-center w-8 h-8 border border-army-light/40 text-army-light text-[1rem] transition-all duration-300 group-hover:border-earth-light group-hover:text-earth-light group-hover:translate-x-1">
          →
        </span>
      </a>

      <span className="font-jetbrains text-[0.6rem] tracking-[0.18em] text-text-muted uppercase">
        {projects.length} projects total
      </span>
    </div>
    </section >
  );
}
