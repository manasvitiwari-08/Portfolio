import { motion } from "motion/react";
import { FiGithub, FiHeart, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  {
    icon: FiGithub,
    href: "https://github.com/manasvi-tiwari",
    label: "GitHub",
  },
  { icon: FiMail, href: "mailto:manasvi@email.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-white text-sm">
              MT
            </div>
            <span className="font-display font-semibold text-sm text-foreground">
              Manasvi Tiwari
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center order-3 sm:order-2">
            <p className="text-muted-foreground text-sm flex items-center gap-1.5 justify-center">
              Made with{" "}
              <FiHeart size={13} className="text-red-400 fill-red-400" /> by
              Manasvi Tiwari
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              © {year} · Built with{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 order-2 sm:order-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
