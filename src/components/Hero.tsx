import Link from "next/link";

const stats = [
  { big: "1.5+", title: "Years of building", sub: "Self-taught · Fullstack" },
  { big: "5+",   title: "Products shipped",  sub: "Web apps · Tools · SaaS" },
  { big: "3",    title: "Active projects",   sub: "DevNote · Mufadz · Gamefy" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden grid items-center min-h-screen px-[7vw] gap-20 grid-cols-1 md:grid-cols-2"
    >
      <div className="absolute top-0 left-1/2 w-px h-full hidden md:block bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
      <div className="absolute rounded-full pointer-events-none opacity-50 hidden md:block top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] border border-[var(--border)]" />
      <div className="absolute rounded-full pointer-events-none hidden md:block top-1/2 right-[8%] -translate-y-1/2 w-[300px] h-[300px] border border-[var(--border-strong)]" />

      <div className="relative z-[2]">
        <div className="animate-fade-up-1 flex items-center uppercase gap-3 font-jetbrains text-[0.65rem] tracking-[0.18em] text-army-light mb-9">
          <span className="rounded-full shrink-0 w-1.5 h-1.5 bg-earth-light" />
          Open to opportunities
        </div>

        <h1 className="animate-fade-up-2 font-cormorant font-light leading-none tracking-tight text-army" style={{ fontSize: "clamp(3.5rem, 6.5vw, 6rem)" }}>
          Fullstack
          <em className="italic text-earth-light block">Developer</em>
          <strong className="font-semibold text-moss">&amp; Builder.</strong>
        </h1>

        <p className="animate-fade-up-3 mt-8 text-base font-light text-text-muted max-w-[420px] leading-[1.9]">
          Crafting purposeful digital products — from developer tools to
          AI-powered apps. Based in East Kalimantan, Indonesia.
        </p>

        <div className="animate-fade-up-4 flex items-center mt-12 gap-4">
          <Link href="#projects" className="btn-earth">View Work →</Link>
          <Link href="#contact" className="btn-ghost">Get in touch</Link>
        </div>
      </div>

      <div className="animate-fade-up-3 relative z-[2] flex flex-col gap-0.5">
        {stats.map((s) => (
          <div key={s.big} className="hero-stat">
            <div className="font-cormorant font-semibold text-[2.8rem] text-army leading-none shrink-0">
              {s.big}
            </div>
            <div>
              <div className="font-normal text-[0.9rem] text-text-body">{s.title}</div>
              <div className="font-jetbrains text-[0.62rem] text-text-muted tracking-[0.08em] uppercase">
                {s.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
