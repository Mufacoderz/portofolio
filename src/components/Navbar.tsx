"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Folder, Mail, Layers3, X, AlignJustify } from "lucide-react";

const navLinks = [
  { href: "#about",    label: "About",   icon: User },
  { href: "#projects", label: "Projects", icon: Folder },
  { href: "#stack",    label: "Stack",   icon: Layers3 },
  { href: "#contact",  label: "Contact", icon: Mail },
];

const left  = navLinks.slice(0, 2);
const right = navLinks.slice(2);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-[7vw] py-7 bg-gradient-to-b from-parchment/95 to-transparent backdrop-blur-sm">
        <Link href="#hero">
          <span className="font-cormorant font-semibold text-xl tracking-widest text-army">
            Muhammad
            <em className="italic font-light text-earth-light">Fadil</em>
          </span>
        </Link>
        <ul className="flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link uppercase font-jetbrains text-[0.68rem] text-text-muted tracking-[0.12em] transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center z-[100]">
        <motion.div
          animate={{ width: open ? 320 : 56 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="h-14 bg-parchment border border-[var(--border)] rounded-full shadow-[0_8px_32px_rgba(61,74,53,0.15)] overflow-hidden flex-shrink-0"
        >
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.button
                key="closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setOpen(true)}
                className="w-full h-full flex items-center justify-center bg-transparent border-none"
              >
                <AlignJustify size={20} className="text-army" />
              </motion.button>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-full h-full flex items-center justify-between px-3"
              >
                <div className="flex gap-1">
                  {left.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.href} href={item.href} onClick={close} className="w-[52px] h-10 flex flex-col items-center justify-center text-army gap-[3px] no-underline">
                        <Icon size={20} />
                        <span className="font-jetbrains text-[7px] tracking-[0.1em] uppercase">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                <button onClick={close} className="w-10 h-10 rounded-full bg-army flex items-center justify-center flex-shrink-0 border-none">
                  <X size={16} className="text-parchment" />
                </button>

                <div className="flex gap-1">
                  {right.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.href} href={item.href} onClick={close} className="w-[52px] h-10 flex flex-col items-center justify-center text-army gap-[3px] no-underline">
                        <Icon size={20} />
                        <span className="font-jetbrains text-[7px] tracking-[0.1em] uppercase">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}