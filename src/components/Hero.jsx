import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Heart, Users } from 'lucide-react'
import heroIllustration from '../assets/hero_illustration.png'

export default function Hero({ handleNavClick }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-neutral-50 dark:bg-brand-black border-b border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden">
      {/* BG Accents */}
      <div className="absolute inset-0 bg-grid opacity-75 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary-100/20 dark:bg-primary-700/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Hero Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-neutral-800 dark:text-neutral-200 uppercase font-sans">
              She Can Foundation NGO
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading text-neutral-900 dark:text-white">
            Empowering Women,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-accent-amber">
              Transforming Futures
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
            We bridge the gender and economic opportunity gaps. Through targeted scholarship distributions, tech training programs, and local community outreach networks, we build platforms for women to lead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#volunteer"
              onClick={(e) => handleNavClick(e, 'volunteer')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Join Us as Volunteer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-bold text-xs uppercase tracking-wider border border-neutral-200 dark:border-neutral-700 hover:border-primary-400 hover:text-primary-500 transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Work
            </a>
          </div>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="lg:col-span-5 w-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-[420px] lg:max-w-none">
            {/* Card wrapper */}
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 p-4 shadow-xl border border-neutral-200/80 dark:border-neutral-800 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
              <img
                src={heroIllustration}
                alt="Empowerment illustration"
                className="w-full h-auto object-cover rounded-xl bg-neutral-50/50 dark:bg-neutral-800/50"
              />
            </div>

            {/* Float Cards */}
            <div className="absolute top-[8%] -left-6 md:-left-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-3.5 rounded-xl shadow-lg flex items-center space-x-3 hover:translate-y-[-2px] transition-transform duration-300">
              <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                <Heart className="w-4.5 h-4.5 fill-current" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Campaigns</div>
                <div className="text-xs font-extrabold text-neutral-800 dark:text-white font-heading">50+ Campaigns</div>
              </div>
            </div>

            <div className="absolute bottom-[12%] -right-6 md:-right-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-3.5 rounded-xl shadow-lg flex items-center space-x-3 hover:translate-y-[-2px] transition-transform duration-300">
              <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-accent-amber">
                <Users className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Community</div>
                <div className="text-xs font-extrabold text-neutral-800 dark:text-white font-heading">20+ Districts</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
