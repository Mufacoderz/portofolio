"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const asideItems = [
  {
    group: "// base & focus",
    cards: [
      { label: "Location", val: "East Kalimantan, Indonesia", sub: "UTC+8 · Samarinda" },
      { label: "Focus areas", val: "Fullstack · AI · SaaS", sub: "Web apps, developer tools, AI-powered products" },
    ],
  },
  {
    group: "// find me",
    cards: [
      { label: "GitHub", val: "@Mufacoderz", sub: "45+ repos  ·  273 Stars  ·  859 Commits" },
      { label: "Email", val: "mfadil.coder@gmail.com", sub: "Responds within 24 hours" },
    ],
  },
];

const education = [
  {
    badge: "High School",
    school: "SMK Muhammadiyah Loa Janan",
    jurusan: "Teknik Komputer & Jaringan",
    year: "Lulus 2022 · Samarinda",
  },
  {
    badge: "S1 · Active",
    school: "UIN Sultan Aji Muhammad Idris",
    jurusan: "Sistem Informasi",
    year: "2022 – sekarang · Samarinda",
  },
];

const experience = [
  {
    badge: "Internship",
    role: "Logistic Intern",
    company: "PT. Anugerah Bara Kaltim · Kutai kartanegara",
    period: "Jun 2022 – Dec 2022",
    desc: "Handled inventory data entry, managed outgoing goods records, scanned and archived logistics documents, and verified incoming shipments to ensure accuracy and proper documentation.",
  },
  {
    badge: "Self-initiated",
    role: "Fullstack Developer (Personal Projects)",
    company: "Independent",
    period: "September 2024 – sekarang",
    desc: "Built and developed several web applications using Next.js, Laravel, and Supabase. Focused on creating scalable features, authentication systems, and responsive UI.",
  },
  
];

const TABS = ["Education", "Experience"] as const;
type Tab = (typeof TABS)[number];

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("Education");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = TABS.indexOf(activeTab);
    const el = tabRefs.current[idx];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeTab]);

  // set pill on mount
  useEffect(() => {
    const el = tabRefs.current[0];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, []);

  return (
    <section id="about" className="bg-cream px-[7vw] py-[100px]">
      <div className="flex items-center gap-3 font-jetbrains text-[0.6rem] tracking-[0.18em] uppercase text-army-light mb-4">
        <span className="block w-7 h-px bg-army-light shrink-0" />
        About me
      </div>

      <h2
        className="reveal font-cormorant font-light leading-[1.05] tracking-tight text-army mb-16"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
      >
        Code is craft.
        <br />
        <em className="italic text-earth-light">Products are purpose.</em>
      </h2>

      <div className="grid gap-16 items-start grid-cols-1 md:[grid-template-columns:1fr_1.15fr]">

        {/* LEFT */}
        <div className="reveal rd1 flex flex-col gap-10">

          <div className="group relative w-1/2 overflow-hidden border border-[var(--border)] bg-cream-deep" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/me.png"
              alt="Fadil"
              fill
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss/70 to-transparent transition-opacity duration-[400ms] group-hover:opacity-90" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-jetbrains text-[0.42rem] tracking-[0.1em] uppercase text-cream/70 bg-moss/50 border border-cream/20 px-2 py-1">
                Fadil · 2025
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="block font-jetbrains text-[0.48rem] tracking-[0.14em] uppercase text-cream/55 mb-1.5">
                Fullstack Developer
              </span>
              <span className="block font-cormorant italic text-[1.6rem] text-cream font-light leading-none">
                Fadil
              </span>
              <span className="block font-jetbrains text-[0.52rem] tracking-[0.1em] text-cream/50 mt-1.5">
                East Kalimantan, Indonesia · 2025
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            {[
              <> I&apos;m <strong className="text-army font-medium">Muhammad Fadil</strong> — a self-taught fullstack developer from East Kalimantan, Indonesia. Currently studying Information Systems while building real products on the side.</>,
              <>My philosophy is{" "}<em className="font-cormorant italic text-earth">product-first</em>: every line of code serves a real need. I want to ship tools that developers and people actually use — not things that collect dust.</>,
              <>Currently exploring the intersection of{" "}<strong className="text-army font-medium">AI, Web3, and SaaS</strong>. Long-term goal: founding engineer at an early-stage startup, or building my own indie products.</>,
            ].map((text, i) => (
              <p
                key={i}
                className="text-[0.93rem] text-text-body leading-[1.95] font-light border-l-2 border-transparent hover:border-earth-light/40 hover:pl-3 hover:text-army transition-all duration-300 pl-0"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["Fullstack", "Indie Hacker", "Web Designer", "Product Builder", "AI Enthusiast"].map((tag) => (
              <span
                key={tag}
                className="font-jetbrains text-[0.52rem] tracking-[0.08em] uppercase px-2.5 py-[5px] border border-[var(--border-strong)] text-army-light hover:bg-army/[0.06] hover:border-army/40 hover:-translate-y-px transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
            <span className="font-jetbrains text-[0.52rem] tracking-[0.08em] uppercase px-2.5 py-[5px] border border-army/30 text-army-light bg-army/[0.05] hover:bg-army/[0.1] hover:-translate-y-px transition-all duration-200 cursor-default">
              Open to work
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="reveal rd2 flex flex-col gap-7">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-army/[0.07] border border-army/[0.15] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-army-light shrink-0" />
            <span className="font-jetbrains text-[0.57rem] tracking-[0.1em] uppercase text-army-light">
              Available for work
            </span>
          </div>

          {asideItems.map((group) => (
            <div key={group.group} className="flex flex-col gap-0.5">
              <p className="font-jetbrains text-[0.52rem] tracking-[0.16em] uppercase text-army-pale mb-2">
                {group.group}
              </p>
              {group.cards.map((card, i) => (
                <div key={card.label}>
                  <div className="bg-parchment border border-[var(--border)] px-[18px] py-4 flex flex-col gap-1 hover:border-[var(--border-strong)] hover:bg-cream-deep hover:translate-x-[3px] transition-all duration-200 cursor-default">
                    <span className="font-jetbrains text-[0.48rem] tracking-[0.12em] uppercase text-army-pale">
                      {card.label}
                    </span>
                    <span className="text-[0.88rem] text-army font-normal leading-snug">{card.val}</span>
                    <span className="text-[0.73rem] text-text-muted font-light leading-[1.5]">{card.sub}</span>
                  </div>
                  {i < group.cards.length - 1 && <div className="h-0.5" />}
                </div>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-3">

            <div className="relative inline-flex border border-army/20 p-[3px] w-fit">
              <motion.div
                className="absolute top-[3px] bottom-[3px] bg-army"
                animate={{ left: pill.left, width: pill.width }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 font-jetbrains text-[0.52rem] tracking-[0.1em] uppercase px-5 py-[7px] bg-transparent border-none cursor-pointer transition-colors duration-200 ${activeTab === tab ? "text-cream" : "text-army-pale hover:text-army-light"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {activeTab === "Education" && (
                  <div className="grid grid-cols-2 gap-0.5">
                    {education.map((edu) => (
                      <div
                        key={edu.school}
                        className="relative bg-parchment border border-[var(--border)] px-4 py-[18px] flex flex-col gap-1.5 overflow-hidden hover:border-[var(--border-strong)] hover:bg-cream-deep hover:-translate-y-[2px] transition-all duration-200 cursor-default"
                      >
                        <span className="absolute top-0 left-0 bottom-0 w-0.5 bg-earth-light" />
                        <span className="font-jetbrains text-[0.46rem] tracking-[0.1em] uppercase text-earth-light bg-earth-light/10 px-2 py-[3px] w-fit">
                          {edu.badge}
                        </span>
                        <span className="text-[0.82rem] text-army font-medium leading-[1.3] mt-0.5">
                          {edu.school}
                        </span>
                        <span className="text-[0.75rem] text-army-light font-light italic">
                          {edu.jurusan}
                        </span>
                        <span className="font-jetbrains text-[0.5rem] tracking-[0.08em] text-army-pale mt-1">
                          {edu.year}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Experience" && (
                  <div className="flex flex-col gap-0.5">
                    {experience.map((exp) => (
                      <div
                        key={exp.role}
                        className="relative bg-parchment border border-[var(--border)] px-[18px] py-4 flex flex-col gap-1.5 overflow-hidden hover:border-[var(--border-strong)] hover:bg-cream-deep hover:translate-x-[3px] transition-all duration-200 cursor-default"
                      >
                        <span className="absolute top-0 left-0 bottom-0 w-0.5 bg-earth-light" />
                        <div className="flex items-center gap-2">
                          <span className="font-jetbrains text-[0.46rem] tracking-[0.1em] uppercase text-earth-light bg-earth-light/10 px-2 py-[3px]">
                            {exp.badge}
                          </span>
                          <span className="font-jetbrains text-[0.46rem] tracking-[0.08em] text-army-pale">
                            {exp.period}
                          </span>
                        </div>
                        <span className="text-[0.82rem] text-army font-medium leading-[1.3] mt-0.5">
                          {exp.role}
                        </span>
                        <span className="text-[0.75rem] text-army-light font-light italic">
                          {exp.company}
                        </span>
                        <span className="text-[0.73rem] text-text-muted font-light leading-[1.6] mt-0.5">
                          {exp.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}