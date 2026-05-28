import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Impact from './components/Impact'
import Volunteer from './components/Volunteer'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Theme (dark/light) handling
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  // Monitor scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'impact', 'volunteer', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll helper
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const targetId = sectionId === 'contact' ? 'contact' : sectionId
    const el = document.getElementById(targetId)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-brand-black text-neutral-800 dark:text-neutral-100 overflow-x-hidden font-sans">
      {/* Navbar */}
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Page Layout sections */}
      <main>
        <Hero handleNavClick={handleNavClick} />
        <About />
        <Impact />
        <Volunteer />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}

export default App
