import Link from "next/link";

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack",    label: "Stack" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[7vw] py-7 bg-gradient-to-b from-parchment/95 to-transparent backdrop-blur-sm">
      <Link href="#hero" className="no-underline">
        <span className="font-cormorant font-semibold text-xl tracking-widest text-army">
          Muhammad
          <em className="italic font-light text-earth-light">Fadil</em>
        </span>
      </Link>

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
    </nav>
  );
}
