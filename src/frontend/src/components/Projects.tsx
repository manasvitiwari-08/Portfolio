import { Badge } from "@/components/ui/badge";
import { type Variants, motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "FinnSavvy",
    subtitle: "Personal Finance Dashboard",
    description:
      "A modern personal finance dashboard for tracking income, expenses, budgets and investments. Built with React, Node.js, and MongoDB with real-time analytics.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/manasvi-tiwari/finnsavvy",
    demo: "https://finnsavyy.vercel.app",
    badge: "Latest Project",
    featured: true,
    gradient: "from-indigo-500/30 via-purple-500/20 to-cyan-500/20",
    borderColor: "border-indigo-500/40",
    glowColor: "hover:shadow-[0_0_50px_oklch(0.65_0.22_270_/_0.4)]",
  },
  {
    id: 2,
    title: "Real Estate ML",
    subtitle: "Price Predictor",
    description:
      "Machine learning model to predict real estate prices using regression algorithms. Achieved 89% accuracy with comprehensive feature engineering and data preprocessing.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/manasvi-tiwari/real-estate-ml",
    demo: null,
    featured: false,
    gradient: "from-cyan-500/20 via-teal-500/15 to-green-500/15",
    borderColor: "border-cyan-500/30",
    glowColor: "hover:shadow-[0_0_40px_oklch(0.72_0.20_195_/_0.35)]",
  },
  {
    id: 3,
    title: "Power BI Dashboard",
    subtitle: "Sales Analytics",
    description:
      "Interactive sales analytics dashboard with drill-through reports, KPI cards, and trend analysis using advanced DAX measures and Power Query transformations.",
    tech: ["Power BI", "DAX", "Excel"],
    github: "https://github.com/manasvi-tiwari/powerbi-dashboard",
    demo: null,
    featured: false,
    gradient: "from-purple-500/20 via-pink-500/15 to-rose-500/15",
    borderColor: "border-purple-500/30",
    glowColor: "hover:shadow-[0_0_40px_oklch(0.65_0.22_310_/_0.35)]",
  },
  {
    id: 4,
    title: "Excel Financial",
    subtitle: "Business Dashboard",
    description:
      "Comprehensive financial analysis dashboard with pivot tables, VLOOKUP formulas, and automated charts for executive business reporting and decision making.",
    tech: ["Excel", "VBA", "Pivot Tables"],
    github: "https://github.com/manasvi-tiwari/excel-dashboard",
    demo: null,
    featured: false,
    gradient: "from-orange-500/20 via-yellow-500/15 to-amber-500/15",
    borderColor: "border-orange-500/30",
    glowColor: "hover:shadow-[0_0_40px_oklch(0.70_0.20_50_/_0.35)]",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            What I've Built
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-accent to-primary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              data-ocid={`projects.card.${i + 1}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative glass rounded-2xl p-6 bg-gradient-to-br ${project.gradient} border ${project.borderColor} transition-all duration-300 ${project.glowColor} overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {project.badge && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold animate-pulse-glow">
                  {project.badge}
                </Badge>
              )}

              <div
                className={
                  project.featured ? "flex flex-col md:flex-row gap-6" : ""
                }
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium glass border border-border/60 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.a
                      data-ocid={`projects.button.${i + 1}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border/60 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                    >
                      <FiGithub size={15} />
                      GitHub
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.60 0.22 270), oklch(0.65 0.22 310))",
                        }}
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
