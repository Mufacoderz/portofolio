"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const curRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mx = 0,
            my = 0,
            rx = 0,
            ry = 0;
        let animId: number;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            if (curRef.current) {
                curRef.current.style.left = mx + "px";
                curRef.current.style.top = my + "px";
            }
        };

        const loop = () => {
            rx += (mx - rx) * 0.1;
            ry += (my - ry) * 0.1;
            if (ringRef.current) {
                ringRef.current.style.left = rx + "px";
                ringRef.current.style.top = ry + "px";
            }
            animId = requestAnimationFrame(loop);
        };

        document.addEventListener("mousemove", onMove);
        animId = requestAnimationFrame(loop);

        const hoverEls = document.querySelectorAll(
            "a, button, .proj-row, .hero-stat, .contact-item, .stack-card"
        );

        hoverEls.forEach((el) => {
            el.addEventListener("mouseenter", () =>
                document.body.classList.add("ch")
            );
            el.addEventListener("mouseleave", () =>
                document.body.classList.remove("ch")
            );
        });

        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div id="cur" ref={curRef} />
            <div id="cur-r" ref={ringRef} />
        </>
    );
}