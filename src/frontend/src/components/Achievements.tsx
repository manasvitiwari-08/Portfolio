import { motion } from "motion/react";
import { FiCode, FiStar, FiUsers, FiZap } from "react-icons/fi";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const achievements = [
  {
    icon: SiLeetcode,
    color: "text-orange-400",
    bg: "from-orange-500/20 to-yellow-500/15",
    border: "border-orange-500/30",
    title: "LeetCode",
    description: "Solved 1000+ problems, rated in top 30% globally",
  },
  {
    icon: SiGeeksforgeeks,
    color: "text-green-400",
    bg: "from-green-500/20 to-emerald-500/15",
    border: "border-green-500/30",
    title: "GeeksforGeeks",
    description: "500+ problems solved with 3-star rating",
  },
  {
    icon: FiZap,
    color: "text-blue-400",
    bg: "from-blue-500/20 to-indigo-500/15",
    border: "border-blue-500/30",
    title: "Algo-University Graph Camp",
    description: "Participated in the algo-university graph camp and solved advanced graph problems.",
  },
  {
    icon: FiCode,
    color: "text-purple-400",
    bg: "from-purple-500/20 to-violet-500/15",
    border: "border-purple-500/30",
    title: "Coding Competitions",
    description:
      "Active participant in college-level competitive coding events",
  },
  {
    icon: FiStar,
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-teal-500/15",
    border: "border-cyan-500/30",
    title: "Technical Event Coordinator",
    description: "Volunteer coordinator for annual college tech fest",
  },
  {
    icon: FiUsers,
    color: "text-pink-400",
    bg: "from-pink-500/20 to-rose-500/15",
    border: "border-pink-500/30",
    title: "DSA",
    description:
      "Developed good problem solving and programming skills.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
            Recognition
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Achievements &amp;{" "}
            <span className="text-gradient-indigo">Volunteering</span>
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass rounded-xl p-5 bg-gradient-to-br ${item.bg} border ${item.border} transition-all duration-300 cursor-default`}
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4">
                <item.icon size={22} className={item.color} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
