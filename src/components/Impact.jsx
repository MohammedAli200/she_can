import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// Stat Counter with scroll trigger animation
function StatCounter({ value, label }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp = null
          const target = parseInt(value, 10)
          const duration = 1200

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(target)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.15 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [value, hasAnimated])

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center p-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-amber font-heading mb-1.5">
        {count}+
      </div>
      <div className="text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  )
}

export default function Impact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const stats = [
    { value: "500", label: "Volunteers Active" },
    { value: "1000", label: "Lives Impacted" },
    { value: "50", label: "Campaigns Run" },
    { value: "20", label: "Communities Supported" }
  ]

  return (
    <section id="impact" className="py-24 md:py-32 bg-neutral-50 dark:bg-brand-black border-y border-neutral-200/50 dark:border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Content Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex-1 space-y-6 md:space-y-8"
        >
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase font-sans">
            Measured Metrics
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-neutral-900 dark:text-white leading-tight">
            Transformed Lives through Systematic Initiatives
          </h3>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed font-light">
            We focus on auditability and structural growth. Every campaign and allocation is recorded to ensure full corporate accountability. Watch the milestones built by our volunteer networks.
          </p>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-neutral-800 dark:text-white text-sm mb-1">Our Strategic Vision</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed">
                By 2030, we intend to establish presence in 100+ cities globally, sponsoring over 10,000 corporate internships and startup bootcamps for women.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Counters Grid Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex-1 w-full grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeIn}>
              <StatCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
