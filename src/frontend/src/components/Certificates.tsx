import { motion } from "motion/react";
import { FiAward, FiBookOpen, FiClock, FiExternalLink } from "react-icons/fi";

const training = {
  title: "Data Structure And Algorithms",
  platform: "CSE PATHSHALA",
  duration: "6 weeks",
  topics: [
    "C++ STL",
    "Sorting & Searching",
    "Dynamic Programming",
    "Greedy Algorithms",
    "Graph Algorithms",
    "Problem Solving",
  ],
};

const certificates = [
  {
    id: 1,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "October 2025",
    link: "https://r0.image2url.com/images/1764316420642-6e4ed62f-de5a-406d-8638-98df0828ba5e.jpeg",
    color: "border-sky-500/30",
    bg: "from-sky-500/15 to-blue-500/10",
    iconColor: "text-sky-400",
  },
  {
    id: 2,
    title: "Computer Communications",
    issuer: "Coursera",
    date: "December 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/AANTMFLWRRV8",
    color: "border-indigo-500/30",
    bg: "from-indigo-500/15 to-purple-500/10",
    iconColor: "text-indigo-400",
  },
  {
    id: 3,
    title: "Beginning C++ Programming: From Beginner to Beyond",
    issuer: "Udemy",
    date: "March 2024",
    link: "https://r0.image2url.com/images/1764317022982-412341b5-f0bd-4d10-8300-3ca838c8af81.jpeg",
    color: "border-rose-500/30",
    bg: "from-rose-500/15 to-pink-500/10",
    iconColor: "text-rose-400",
  },
  {
    id: 4,
    title: "C++ Programming (OOPS and DSA)",
    issuer: "CSE Pathshala",
    date: "August 2025",
    link: "https://r0.image2url.com/images/1764317286646-6c8e20d9-79bf-444b-bfad-2558ef6bf5bf.jpeg",
    color: "border-emerald-500/30",
    bg: "from-emerald-500/15 to-teal-500/10",
    iconColor: "text-emerald-400",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Learning Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Training &amp;{" "}
            <span className="text-gradient-indigo">Certifications</span>
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Training card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="lg:col-span-1 glass rounded-2xl p-6 bg-gradient-to-br from-cyan-500/20 to-teal-500/15 border border-cyan-500/30 hover:shadow-[0_0_40px_oklch(0.72_0.20_195_/_0.3)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.72 0.20 195 / 0.2)" }}
              >
                <FiBookOpen size={22} className="text-accent" />
              </div>
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Featured Training
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {training.title}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{training.platform}</span>
              <span>•</span>
              <FiClock size={13} />
              <span>{training.duration}</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                Topics Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {training.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium glass border border-border/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certificates grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass rounded-xl p-5 bg-gradient-to-br ${cert.bg} border ${cert.color} transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center glass">
                    <FiAward size={18} className={cert.iconColor} />
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm leading-snug mb-1">
                  {cert.title}
                </h4>
                <p className="text-muted-foreground text-xs mb-1">{cert.issuer}</p>
                <span className="text-xs text-muted-foreground/70">{cert.date}</span>
                <div className="mt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium glass border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <FiExternalLink size={12} />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
