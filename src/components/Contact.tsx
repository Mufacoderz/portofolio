const contactLinks = [
  { label: "Email",     val: "mfadil.coder.@gmail.com",    href: "mailto:hello@fadil.dev" },
  { label: "GitHub",    val: "@Mufacoderz",         href: "https://github.com/Mufacoderz" },
  { label: "LinkedIn",  val: "Muhammad Fadil",      href: "#" },
  { label: "No. Hp", val: "+62 813 4872 6973",           href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-dim px-[7vw] py-[120px]">
      {/* Label */}
      <div className="flex items-center uppercase gap-3.5 font-jetbrains text-[0.62rem] tracking-[0.18em] text-army-light mb-5">
        <span className="block w-8 h-px bg-army-light shrink-0" />
        Let&apos;s talk
      </div>

      <div className="grid items-center gap-[100px] grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="reveal">
          <h2
            className="font-cormorant font-light leading-none tracking-tighter text-army"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            Got an idea?
            <em className="italic text-earth-light block">Let&apos;s build it.</em>
          </h2>
          <p className="mt-6 text-[0.95rem] text-text-muted leading-[1.9] max-w-[380px]">
            Open for freelance projects, startup collaborations, or just a good
            conversation about products and code.
          </p>
        </div>

        {/* Right */}
        <div className="reveal rd2 flex flex-col gap-0.5">
          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} className="contact-item">
              <div className="flex flex-col gap-1">
                <span className="uppercase font-jetbrains text-[0.6rem] tracking-[0.12em] text-text-muted">
                  {item.label}
                </span>
                <span className="text-[0.95rem] text-army font-normal">{item.val}</span>
              </div>
              <span className="ci-arrow text-army-pale text-base transition-[transform,color] duration-200">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
