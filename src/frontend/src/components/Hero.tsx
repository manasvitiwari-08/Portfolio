import { type Variants, motion } from "motion/react";
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const socials = [
  {
    icon: FiLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: FiGithub,
    href: "https://github.com/manasvi-tiwari",
    label: "GitHub",
    color: "hover:text-purple-400",
  },
  {
    icon: FiMail,
    href: "mailto:manasvi@email.com",
    label: "Email",
    color: "hover:text-cyan-400",
  },
  {
    icon: FiPhone,
    href: "tel:+917470422525",
    label: "Phone",
    color: "hover:text-green-400",
  },
];

export default function Hero() {
  const handleScroll = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1p-d76P5xS2FHdEfeaZptkI_Gjpxb_Z34", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-blob-delay-2" />
        <div
          className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full"
          style={{
            background: "oklch(0.65 0.22 310 / 0.15)",
            filter: "blur(64px)",
          }}
        />
        <div
          className="animate-blob-delay-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 270), transparent 70%)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          {/* Left: text content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium glass border border-primary/30 text-primary">
                ✨ Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none"
            >
              <span className="text-foreground">Manasvi</span>
              <br />
              <span className="text-gradient-indigo">Tiwari</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed font-medium"
            >
              CSE Undergrad &bull; Full-Stack Developer &amp; Data Science Enthusiast
              <br />
              <span className="text-foreground/70">DSA &bull; ML &bull; Power BI</span>
            </motion.p>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center justify-center md:justify-start gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground transition-colors duration-200 ${s.color}`}
                >
                  <s.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
            >
              <motion.button
                data-ocid="hero.primary_button"
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleScroll}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white animate-gradient"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.60 0.22 270), oklch(0.65 0.22 310), oklch(0.72 0.20 195))",
                }}
              >
                View My Work
                <FiArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
              </motion.button>

              <motion.button
                data-ocid="hero.secondary_button"
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass border border-primary/30 text-foreground hover:border-primary/60 transition-all duration-300"
              >
                <FiDownload size={18} />
                Download Resume
              </motion.button>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div variants={item} className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.60 0.22 270), oklch(0.65 0.22 310))",
                }}
              />
              <div
                className="relative w-full h-full rounded-full p-1"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.60 0.22 270), oklch(0.65 0.22 310), oklch(0.72 0.20 195))",
                }}
              >
                <img
                  src="./public/photo.jpg"
                  alt="Manasvi Tiwari"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    // fallback to initials if image not found
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = "flex";
                  }}
                />
                {/* Fallback initials */}
                <div
                  className="absolute inset-1 rounded-full hidden items-center justify-center text-4xl font-bold text-white"
                  style={{
                    background: "oklch(0.15 0.02 270)",
                    display: "none",
                  }}
                >
                  MT
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-1 h-3 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
