import { motion } from "motion/react";
import { FiAward, FiBookOpen, FiCalendar } from "react-icons/fi";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "University Institute of Technology",
    duration: "2021 – 2025",
    score: "CGPA: 7.02 / 10",
    details:
      "Relevant coursework: Data Structures, Algorithms, DBMS, Operating Systems, Machine Learning, Web Development",
    color: "border-l-primary",
    dotColor: "bg-primary",
    gradient: "from-primary/15 to-accent/10",
    border: "border-primary/30",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "CBSE Board",
    duration: "2021",
    score: "Percentage: 90%",
    details: "Stream: Science (PCM + Computer Science)",
    color: "border-l-accent",
    dotColor: "bg-accent",
    gradient: "from-accent/15 to-teal-500/10",
    border: "border-accent/30",
  },
  {
    degree: "Secondary (Class X)",
    institution: "CBSE Board",
    duration: "2019",
    score: "Percentage: 92%",
    details: "Strong foundation in Mathematics and Science",
    color: "border-l-purple-400",
    dotColor: "bg-purple-400",
    gradient: "from-purple-500/15 to-pink-500/10",
    border: "border-purple-500/30",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Academic Background
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            My <span className="text-gradient-purple">Education</span>
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-400 opacity-30" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.3,
                      duration: 0.4,
                      type: "spring",
                    }}
                    className={`w-12 h-12 rounded-xl glass flex items-center justify-center ${edu.dotColor}`}
                    style={{ background: "oklch(var(--card) / 0.8)" }}
                  >
                    <FiBookOpen size={18} className="text-foreground" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  className={`flex-1 glass rounded-2xl p-5 bg-gradient-to-br ${edu.gradient} border ${edu.border} transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="font-display font-bold text-foreground text-lg leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
                      <FiCalendar size={12} />
                      {edu.duration}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-primary">
                      {edu.institution}
                    </span>
                    <span className="hidden sm:block text-muted-foreground">
                      •
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-foreground/80">
                      <FiAward size={13} className="text-accent" />
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.details}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
