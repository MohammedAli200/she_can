import { motion } from 'framer-motion'
import { GraduationCap, Laptop, Users, ChevronRight } from 'lucide-react'

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const aboutCards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
      title: "Education Support",
      description: "Providing scholarship endowments, university placement mentoring, and academic resource distribution to young women from underprivileged backgrounds.",
      color: "bg-primary-50 dark:bg-primary-900/20"
    },
    {
      icon: <Laptop className="w-6 h-6 text-accent-amber" />,
      title: "Skill Development",
      description: "Hosting specialized bootcamps in software engineering, UI/UX design, marketing, and entrepreneurship to prepare women for corporate careers.",
      color: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
      icon: <Users className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
      title: "Community Programs",
      description: "Building advocacy networks, medical screening drives, and peer-to-peer counseling programs to establish safe social systems.",
      color: "bg-neutral-100 dark:bg-neutral-800"
    }
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4"
        >
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase font-sans">
            Our Core Mission
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-neutral-900 dark:text-white leading-tight">
            Systemic Empowerment Through Structured Programs
          </h3>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-sans font-light mb-8 max-w-2xl mx-auto">
            We focus on sustainable, long-term impact. By delivering training, funding, and structured peer networks, we give women the agency to drive change.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group relative flex flex-col p-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Icon Wrapper */}
              <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 mb-6`}>
                {card.icon}
              </div>

              <h4 className="font-heading font-extrabold text-lg text-neutral-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                {card.title}
              </h4>

              <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-light mb-6 flex-grow">
                {card.description}
              </p>

              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary-500 group-hover:text-primary-600 transition-colors">
                <span>View Program Details</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
