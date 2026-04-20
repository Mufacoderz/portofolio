const stackCards = [
  { cat: "Frontend",        items: ["Next.js / React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"] },
  { cat: "Backend",         items: ["Node.js / Express", "Laravel / PHP", "Prisma ORM", "REST API", "NextAuth"] },
  { cat: "Database & Infra",items: ["PostgreSQL", "Supabase", "MySQL", "Vercel", "Git / GitHub"] },
  { cat: "AI & Tools",      items: ["Groq / LLaMA", "OpenAI API", "Figma / Canva", "VS Code", "Postman"] },
];

export default function Stack() {
  return (
    <section id="stack" className="bg-army px-[7vw] py-[120px]">
      {/* Label */}
      <div className="flex items-center uppercase gap-3.5 font-jetbrains text-[0.62rem] tracking-[0.18em] text-army-pale mb-5">
        <span className="block w-8 h-px bg-army-pale shrink-0" />
        Tech stack
      </div>

      {/* Title */}
      <h2
        className="reveal font-cormorant font-light leading-[1.1] tracking-tight text-cream mb-[72px]"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
      >
        Tools of the
        <br />
        <em className="italic text-earth-light">craft.</em>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08]">
        {stackCards.map((card, i) => (
          <div key={card.cat} className={`stack-card reveal rd${Math.min(i + 1, 4)}`}>
            <div className="uppercase font-jetbrains text-[0.58rem] tracking-[0.14em] text-army-pale mb-4">
              {card.cat}
            </div>
            <div className="flex flex-col gap-2.5">
              {card.items.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[0.9rem] text-cream font-light">
                  <span className="rounded-full shrink-0 w-[5px] h-[5px] bg-earth-light" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
