"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack",    label: "Stack" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[7vw] py-7 bg-gradient-to-b from-parchment/95 to-transparent backdrop-blur-sm">
        {/* Logo */}
        <Link href="#hero" className="no-underline" onClick={close}>
          <span className="font-cormorant font-semibold text-xl tracking-widest text-army">
            Muhammad
            <em className="italic font-light text-earth-light">Fadil</em>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link no-underline uppercase font-jetbrains text-[0.68rem] text-text-muted tracking-[0.12em] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-[110]"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="block w-full h-px bg-army origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-full h-px bg-army origin-center"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="block w-full h-px bg-army origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-[90] bg-army/20 backdrop-blur-[2px] md:hidden"
            />

            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-[95] bg-parchment/98 backdrop-blur-md border-b border-[var(--border)] px-[7vw] pt-24 pb-10 md:hidden"
            >
              <ul className="flex flex-col gap-0 list-none">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="no-underline flex items-center justify-between py-4 border-b border-[var(--border)] group"
                    >
                      <span className="font-cormorant text-[1.6rem] font-light text-army group-hover:text-earth transition-colors duration-200">
                        {link.label}
                      </span>
                      <span className="font-jetbrains text-[0.5rem] tracking-[0.12em] uppercase text-army-pale group-hover:text-army-light transition-colors duration-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Footer info */}
              <div className="mt-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-army-light" />
                <span className="font-jetbrains text-[0.52rem] tracking-[0.1em] uppercase text-army-pale">
                  Available for work
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}