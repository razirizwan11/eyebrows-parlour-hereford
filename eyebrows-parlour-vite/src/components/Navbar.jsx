import React, { useState, useEffect } from 'react'
import { Eye, Menu, X } from 'lucide-react'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Before & After' },
    { id: "products", label: "Products" },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-brand-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-11 h-11 bg-gradient-to-br from-brand-400 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all duration-300 group-hover:scale-105">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>EyebrowsParlourHereford</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'text-brand-700 bg-brand-50' 
                    : scrolled 
                      ? 'text-gray-600 hover:text-brand-600 hover:bg-gray-50' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-500 rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen 
              ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> 
              : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { scrollToSection(link.id); setIsOpen(false) }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:text-brand-700 hover:bg-brand-50 font-medium transition-all ${
                  activeSection === link.id ? 'text-brand-700 bg-brand-50 font-semibold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { scrollToSection('contact'); setIsOpen(false) }}
              className="w-full bg-gradient-to-r from-brand-500 to-brand-700 text-white py-3.5 rounded-xl font-bold mt-4 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
