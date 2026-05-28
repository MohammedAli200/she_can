import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const testimonials = [
    {
      quote: "Directing the tech mentorship program here has been immensely rewarding. Watching the transition as these women secure software engineering posts at top firms is inspiring.",
      author: "Priya Sharma",
      role: "Director of Tech Mentorship",
      initials: "PS",
      gradient: "from-primary-600 to-primary-900"
    },
    {
      quote: "The professional training courses and financial sponsorship fundamentally altered my life. I am now working full-time in web development and mentoring new intakes.",
      author: "Amina Yusuf",
      role: "Alumna & Systems Engineer",
      initials: "AY",
      gradient: "from-brand-black to-neutral-800"
    },
    {
      quote: "As a corporate partner, we value the foundation's extreme clarity of goals, execution, and audits. Their community support models have stabilized support systems across 20 districts.",
      author: "Elena Rostova",
      role: "Corporate Sponsorship Lead",
      initials: "ER",
      gradient: "from-accent-amber to-primary-600"
    }
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-neutral-50 dark:bg-brand-black border-t border-neutral-200/50 dark:border-neutral-800/50">
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
            Success Profiles
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-neutral-900 dark:text-white leading-tight">
            Endorsements from Mentors, Alumni, and Partners
          </h3>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Our results are verified by the feedback of our stakeholders. Read about their experiences working inside our modular support networks.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="flex flex-col p-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Message Icon */}
              <div className="mb-6 text-primary-200 dark:text-primary-800">
                <MessageSquare className="w-8 h-8 fill-current" />
              </div>

              {/* Review Text */}
              <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-sans font-light leading-relaxed italic mb-8 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-neutral-100 dark:border-neutral-800 pt-6">
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-heading font-bold text-xs shadow-inner`}>
                  {t.initials}
                </div>
                <div>
                  <h5 className="font-heading font-extrabold text-sm text-neutral-900 dark:text-white">
                    {t.author}
                  </h5>
                  <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider font-sans">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
