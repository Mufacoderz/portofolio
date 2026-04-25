// components/Stack.tsx
import { stackCards } from "@/data/stack";

export default function Stack() {
  return (
    <section id="stack" className="bg-army px-[7vw] py-[120px]">
      <div className="flex items-center uppercase gap-3.5 font-jetbrains text-[0.62rem] tracking-[0.18em] text-army-pale mb-5">
        <span className="block w-8 h-px bg-army-pale shrink-0" />
        Tech stack
      </div>

      <h2
        className="reveal font-cormorant font-light leading-[1.1] tracking-tight text-cream mb-[72px]"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
      >
        Tools of the
        <br />
        <em className="italic text-earth-light">craft.</em>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.08]">
        {stackCards.map((card, i) => (
          <div key={card.cat} className={`stack-card reveal rd${Math.min(i + 1, 4)}`}>
            <div className="uppercase font-jetbrains text-[0.58rem] tracking-[0.14em] text-army-pale mb-4">
              {card.cat}
            </div>
            <div className="flex flex-col gap-3">
              {card.items.map((item) => (
                <div key={item.label} className="flex items-center gap-3 group">
                  <item.icon
                    className="shrink-0 text-earth-light/70 group-hover:text-earth-light transition-colors duration-200"
                    size={14}
                  />
                  <span className="text-[0.88rem] text-cream/80 font-light group-hover:text-cream transition-colors duration-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}