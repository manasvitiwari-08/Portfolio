import { type Variants, motion } from "motion/react";

const skillCategories = [
  {
    title: "Languages",
    emoji: "💻",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "hover:shadow-[0_0_30px_oklch(0.65_0.22_270_/_0.3)]",
    skills: ["Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R"],
  },
  {
    title: "Frameworks & Libraries",
    emoji: "⚡",
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    glowColor: "hover:shadow-[0_0_30px_oklch(0.72_0.20_195_/_0.3)]",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "hover:shadow-[0_0_30px_oklch(0.65_0.22_310_/_0.3)]",
    skills: [
      "Git/GitHub",
      "Power BI",
      "Excel (Advanced)",
      "VS Code",
      "Jupyter Notebook",
      "MongoDB",
    ],
  },
  {
    title: "Soft Skills",
    emoji: "🧠",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
    glowColor: "hover:shadow-[0_0_30px_oklch(0.70_0.20_50_/_0.3)]",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Analytical Thinking",
      "Time Management",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What I Know
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Skills &amp; <span className="text-gradient-indigo">Expertise</span>
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.borderColor} transition-all duration-300 ${cat.glowColor} cursor-default`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{cat.emoji}</span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium glass border border-border/60 text-foreground cursor-default transition-all duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
