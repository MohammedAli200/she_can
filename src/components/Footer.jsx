import { useState } from 'react'
import { Mail, Phone, MapPin, Globe, ChevronRight, Sparkles } from 'lucide-react'

export default function Footer({ handleNavClick }) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      return
    }
    setNewsletterSubmitting(true)
    setTimeout(() => {
      setNewsletterSubmitting(false)
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
      setTimeout(() => setNewsletterSubmitted(false), 5000)
    }, 1200)
  }

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://twitter.com"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "https://instagram.com"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      href: "https://facebook.com"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: "https://linkedin.com"
    }
  ]

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'testimonials', label: 'Testimonials' }
  ]

  return (
    <footer id="contact" className="bg-brand-black text-neutral-400 pt-20 pb-10 border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">

        {/* Info Column */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-white">
              She Can <span className="font-semibold text-neutral-500">Foundation</span>
            </span>
          </a>
          <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
            Bridging professional gender gaps. We assist women in building their futures through quality scholarship grants, programming workshops, healthcare support, and advocacy networks.
          </p>
          {/* Social Links */}
          <div className="flex items-center space-x-3.5 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit our ${social.name}`}
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-primary-500 hover:text-white flex items-center justify-center text-neutral-400 border border-neutral-700 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-5">
          <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
            Quick Links
          </h5>
          <ul className="space-y-3.5 text-xs md:text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details Column */}
        <div className="lg:col-span-3 space-y-5">
          <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
            Contact Details
          </h5>
          <ul className="space-y-4 text-xs md:text-sm">
            <li className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="hover:text-white transition-colors">info@shecanfoundation.org</span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-accent-amber flex-shrink-0 mt-0.5" />
              <span className="hover:text-white transition-colors">+1 (555) 902-8834</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">124 Innovation Way, Tech District, San Francisco, CA 94107</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="lg:col-span-3 space-y-5">
          <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
            Newsletter
          </h5>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Subscribe to our newsletter to receive strategic updates about new campaigns and reports.
          </p>

          {newsletterSubmitted ? (
            <div className="p-3.5 bg-neutral-800 rounded-lg border border-primary-500/20 text-center">
              <p className="text-xs text-primary-400 font-bold">Subscribed Successfully</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg font-sans text-xs text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Enter email address"
              />
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className="w-full py-2.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-1.5"
              >
                {newsletterSubmitting ? (
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} She Can Foundation. All rights reserved. Built as a Web Development Internship Task.
        </div>
        <div className="text-xs text-neutral-500 flex items-center space-x-1.5">
          <Globe className="w-4 h-4" />
          <span>Designed for Global Impact</span>
        </div>
      </div>
    </footer>
  )
}
