import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Início", href: "/" },
  { label: "Galeria", href: "/galeria" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo Eduardo Lopes" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                ➤
              </span>
              <Link
                to={l.href}
                className="relative text-base font-display font-bold tracking-wide text-foreground/80 px-3 py-2 rounded-lg border border-transparent hover:border-primary/40 hover:text-primary hover:scale-110 hover:bg-primary/5 transition-all duration-300 inline-block"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <li key={l.href} className="group">
                  <span className="inline-block mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary" style={{ fontFamily: 'var(--font-display)' }}>➤</span>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-display font-bold text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
