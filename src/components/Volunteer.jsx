import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Full name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email'
    }
    if (!formData.interest) errors.interest = 'Please select a program area'

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormErrors({})
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', interest: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="volunteer" className="py-24 md:py-32 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="lg:col-span-5 space-y-6 md:space-y-8"
        >
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase font-sans">
            Support Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-neutral-900 dark:text-white leading-tight">
            Partner with Us to Scale Gender Equity
          </h3>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed font-light">
            We are always looking for corporate mentors, program facilitators, and logistics leads. Give your time to empower the next generation of professional leaders.
          </p>

          <ul className="space-y-4 pt-2">
            {[
              "Provide career mentorship to scholarship awardees",
              "Instruct technical training bootcamps or workshops",
              "Assist in local community campaign organization"
            ].map((text, i) => (
              <li key={i} className="flex items-center space-x-3 text-neutral-700 dark:text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-500">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs md:text-sm font-sans font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="lg:col-span-7"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-extrabold text-2xl text-neutral-800 dark:text-white mb-2">Application Received</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm font-sans font-light">
                  Thank you for applying. A representative from our coordination department will contact you within 24–48 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="font-heading font-extrabold text-xl text-neutral-900 dark:text-white mb-1">
                    Apply to Volunteer
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans">
                    Complete the application to build your volunteer profile.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-sans">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border font-sans text-xs bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                        formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-neutral-200 dark:border-neutral-700 focus:border-primary-500'
                      }`}
                      placeholder="e.g. Jane Doe"
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-500 font-sans">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-sans">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border font-sans text-xs bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                        formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-neutral-200 dark:border-neutral-700 focus:border-primary-500'
                      }`}
                      placeholder="e.g. jane@company.com"
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-500 font-sans">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-sans">
                    Core Partnership Area
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border font-sans text-xs bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                      formErrors.interest ? 'border-red-400 focus:border-red-400' : 'border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    <option value="">Select a program...</option>
                    <option value="education">Academic Support & Endowments</option>
                    <option value="skills">Technical Skill Development</option>
                    <option value="community">Community Facilitation & Advocacy</option>
                    <option value="general">Logistics & Operational Support</option>
                  </select>
                  {formErrors.interest && (
                    <p className="text-xs text-red-500 font-sans">{formErrors.interest}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
