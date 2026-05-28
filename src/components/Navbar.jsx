import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react'

export default function Navbar({ activeSection, handleNavClick, darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onLinkClick = (e, sectionId) => {
    setMobileMenuOpen(false)
    handleNavClick(e, sectionId)
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-brand-black/90 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800 py-4'
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => onLinkClick(e, 'home')} className="flex items-center space-x-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-brand-black dark:bg-primary-500 flex items-center justify-center text-white shadow-sm group-hover:bg-primary-500 transition-colors duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
            She Can <span className="font-semibold text-neutral-400">Foundation</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => onLinkClick(e, link.id)}
              className={`relative font-semibold text-xs tracking-wider uppercase transition-colors duration-300 hover:text-primary-500 ${
                activeSection === link.id ? 'text-primary-500 font-bold' : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-500 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#volunteer"
            onClick={(e) => onLinkClick(e, 'volunteer')}
            className="px-6 py-2.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs tracking-wider uppercase shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Involved
          </a>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-primary-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-primary-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white dark:bg-brand-black border-t border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-inner"
          >
            <div className="px-6 py-5 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => onLinkClick(e, link.id)}
                  className={`font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors uppercase tracking-wider ${
                    activeSection === link.id
                      ? 'bg-primary-50 dark:bg-neutral-900 text-primary-500 border-l-4 border-primary-500'
                      : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#volunteer"
                onClick={(e) => onLinkClick(e, 'volunteer')}
                className="w-full text-center py-3.5 rounded-lg bg-primary-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-600 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
