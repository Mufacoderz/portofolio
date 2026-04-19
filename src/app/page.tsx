export default function Page() {
  return (
    <main className="min-h-screen bg-parchment text-text">

      {/* HERO SECTION */}
      <section className="min-h-screen px-[7vw] flex items-center relative overflow-hidden">

        {/* decorative line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-border opacity-50" />

        {/* LEFT SIDE */}
        <div className="flex-1 z-10">
          
          {/* eyebrow */}
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted font-mono mb-10">
            <span className="w-2 h-2 bg-earth rounded-full" />
            Open to opportunities
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-serif text-cream leading-tight">
            Fullstack
            <span className="block italic text-earth-light">Developer</span>
            <span className="block font-semibold text-army">& Builder.</span>
          </h1>

          {/* description */}
          <p className="mt-8 max-w-md text-muted leading-relaxed">
            Crafting purposeful digital products — from developer tools to AI-powered apps.
            Based in East Kalimantan, Indonesia.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mt-10">
            <button className="px-6 py-3 bg-army text-cream text-sm tracking-wide hover:bg-(--army-mid) transition">
              View Work →
            </button>

            <button className="px-6 py-3 border border-strong text-army text-sm hover:bg-cream-dim transition">
              Get in touch
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (STATS) */}
        <div className="flex-1 flex flex-col gap-2 z-10">

          <div className="bg-cream border border-soft p-6 hover:border-strong transition">
            <div className="text-4xl font-serif text-army">1.5+</div>
            <div className="text-sm">Years of building</div>
            <div className="text-xs text-muted font-mono mt-1">
              Self-taught · Fullstack
            </div>
          </div>

          <div className="bg-cream border border-soft p-6 hover:border-strong transition">
            <div className="text-4xl font-serif text-army">5+</div>
            <div className="text-sm">Products shipped</div>
            <div className="text-xs text-muted font-mono mt-1">
              Web apps · Tools · SaaS
            </div>
          </div>

          <div className="bg-cream border border-soft p-6 hover:border-strong transition">
            <div className="text-4xl font-serif text-army">3</div>
            <div className="text-sm">Active projects</div>
            <div className="text-xs text-muted font-mono mt-1">
              DevNote · Mufadz · Mufit
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}