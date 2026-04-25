"use client";

import Link from "next/link";
import { stats } from "@/data/stats";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCounter(target: number, duration: number = 1.5) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start * 10) / 10);
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return { count, ref };
}

function WordReveal({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <span ref={ref} className={className} style={style}>
            {text.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

function StatItem({ s }: { s: { big: string; title: string; sub: string } }) {
    // Parse angka dari string seperti "1.5+", "3+", "6"
    const raw = parseFloat(s.big.replace("+", ""));
    const suffix = s.big.includes("+") ? "+" : "";
    const isDecimal = s.big.includes(".");
    const { count, ref } = useCounter(raw, 1.4);

    return (
        <div
            ref={ref}
            className="hero-stat flex items-start gap-4 py-3 border-b border-[var(--border)]"
        >
            <div className="font-cormorant font-semibold text-[2.5rem] md:text-[2.8rem] text-army leading-none shrink-0">
                {isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
            </div>
            <div>
                <div className="font-normal text-[0.9rem] text-text-body">{s.title}</div>
                <div className="font-jetbrains text-[0.62rem] text-text-muted tracking-[0.08em] uppercase">
                    {s.sub}
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden px-[7vw] flex flex-col md:grid md:grid-cols-2 md:items-center md:min-h-screen gap-16 md:gap-20"
        >
            <div className="absolute top-0 left-1/2 w-px h-full hidden md:block bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
            <div className="absolute rounded-full pointer-events-none opacity-50 hidden md:block top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] border border-[var(--border)]" />
            <div className="absolute rounded-full pointer-events-none hidden md:block top-1/2 right-[8%] -translate-y-1/2 w-[300px] h-[300px] border border-[var(--border-strong)]" />

            <div className="relative z-[2] min-h-screen flex flex-col justify-center items-center text-center md:min-h-0 md:items-start md:text-left">
                <motion.div
                    className="flex items-center uppercase gap-3 font-jetbrains text-[0.65rem] tracking-[0.18em] text-army-light mb-7"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="rounded-full shrink-0 w-1.5 h-1.5 bg-earth-light" />
                    Open to opportunities
                </motion.div>

                <h1
                    className="font-cormorant font-light leading-[0.95] tracking-tight text-army"
                    style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                >
                    <WordReveal text="Fullstack" />
                    <em className="italic text-earth-light block">
                        <WordReveal text="Developer" />
                    </em>
                    <strong className="font-semibold text-moss block">
                        <WordReveal text="& Builder." />
                    </strong>
                </h1>

                <motion.p
                    className="mt-7 text-[0.95rem] md:text-base font-light text-text-muted leading-[1.8] max-w-[420px] mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Crafting purposeful digital products — from developer tools to
                    AI-powered apps. Based in East Kalimantan, Indonesia.
                </motion.p>

                <motion.div
                    className="flex items-center mt-10 gap-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                >
                    <Link href="#projects" className="btn-earth">
                        View Resume
                    </Link>
                    <Link href="#contact" className="btn-ghost">
                        Get in touch
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="relative z-[2] flex flex-col gap-1 pb-16 md:pb-0"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                {stats.map((s, i) => (
                    <StatItem key={`${s.title}-${i}`} s={s} />
                ))}
            </motion.div>
        </section>
    );
}