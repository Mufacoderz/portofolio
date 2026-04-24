"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
    screenshots,
    name,
}: {
    screenshots: string[];
    name: string;
}) {
    const [current, setCurrent] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const go = (index: number) => {
        if (!ref.current) return;
        const width = ref.current.offsetWidth;
        ref.current.scrollTo({ left: index * width, behavior: "smooth" });
        setCurrent(index);
    };

    const prev = () => go((current - 1 + screenshots.length) % screenshots.length);
    const next = () => go((current + 1) % screenshots.length);

    return (
        <div className="max-w-4xl">
            <div className="relative aspect-[16/9] border border-[var(--border-strong)] bg-cream-deep overflow-hidden">

                <div
                    ref={ref}
                    className="flex h-full overflow-x-hidden scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {screenshots.map((src, i) => (
                        <div
                            key={src}
                            className="relative h-full flex-shrink-0 w-full"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <Image
                                src={src}
                                alt={`${name} screenshot ${i + 1}`}
                                fill
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 56rem"
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {screenshots.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center border border-[var(--border-strong)] bg-parchment/80 backdrop-blur-sm text-army hover:bg-army hover:text-parchment  transition-all duration-200"
                        >
                            <ChevronLeft size={14} />
                        </button>
                        <button
                            onClick={next}
                            
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center border border-[var(--border-strong)] bg-parchment/80 backdrop-blur-sm text-army hover:bg-army hover:text-parchment  transition-all duration-200"
                        >
                            <ChevronRight size={14} />
                        </button>
                    </>
                )}

                <div className="absolute bottom-3 right-3 z-20 font-jetbrains text-[0.58rem] tracking-[0.12em] text-army/60 bg-parchment/80 backdrop-blur-sm px-2 py-0.5 border border-[var(--border-strong)]">
                    {String(current + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
                </div>
            </div>

            {screenshots.length > 1 && (
                <div className="flex items-center gap-2 mt-3">
                    {screenshots.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            className={`h-px transition-all duration-300 ${i === current ? "w-7 bg-army" : "w-3.5 bg-[var(--border-strong)] hover:bg-army/40"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}