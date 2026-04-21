"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Folder, Mail, Menu, Layers3Icon } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Folder },
  { href: "#stack", label: "Stack", icon: Layers3Icon },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-[7vw] py-7 bg-gradient-to-b from-parchment/95 to-transparent backdrop-blur-sm">
        
        <Link href="#hero" className="no-underline" onClick={close}>
          <span className="font-cormorant font-semibold text-xl tracking-widest text-army">
            Muhammad
            <em className="italic font-light text-earth-light">Fadil</em>
          </span>
        </Link>

        <ul className="flex gap-10 list-none">
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

      </nav>

      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">

        <motion.div
          animate={{ width: open ? 360 : 64 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="h-16 bg-parchment border border-[var(--border)] rounded-full shadow-lg overflow-hidden"
        >

          {!open ? (
            <button
              onClick={() => setOpen(true)}
              className="w-full h-full flex items-center justify-center"
            >
              <Menu />
            </button>
          ) : (
            <div className="relative w-full h-full grid grid-cols-5 items-center px-2">

              {navLinks.map((item, i) => {
                const Icon = item.icon;
                const gridIndex = i >= 2 ? i + 1 : i;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="flex flex-col items-center justify-center text-[10px] text-army"
                    style={{ gridColumn: gridIndex + 1 }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <button
                onClick={() => setOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-army text-parchment flex items-center justify-center shadow-md"
              >
                <Menu />
              </button>

            </div>
          )}

        </motion.div>
      </div>
    </>
  );
}