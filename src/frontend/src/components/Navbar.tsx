import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNav("#home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-white text-lg shadow-glow">
              MT
            </div>
            <span className="font-display font-semibold text-foreground hidden sm:block">
              Manasvi Tiwari
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                data-ocid="nav.link"
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  active === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <motion.button
              data-ocid="nav.toggle"
              type="button"
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>

            <button
              type="button"
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
