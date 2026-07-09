import React from 'react'
import { Eye, MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const seoKeywords = [
    'Eyebrow Threading Hereford',
    'Eyebrow Tinting Hereford',
    'Lash Lift Hereford',
    'Eyelash Extensions Hereford',
  ]

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-brand-400 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">EyebrowsParlour</h3>
                <p className="text-brand-400 text-xs font-medium tracking-widest uppercase">Hereford</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              At EyeBrowsHereford, we believe every face tells a story, and we're here to help yours shine. 
              Your beauty journey starts here at 5 Maylord Street.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-600 transition-all duration-300 border border-white/10 hover:border-brand-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-600 transition-all duration-300 border border-white/10 hover:border-brand-500">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-400 transition-colors duration-300 flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">5 Maylord Street, Hereford HR1 2DS</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a href="tel:+44 7360587313" className="text-gray-400 hover:text-white text-sm transition-colors">+44 7360 587313</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a href="mailto:eyebrowsparlourhereford@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">eyebrowsparlourhereford@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {seoKeywords.map((kw, i) => (
              <span key={i} className="text-gray-600 text-xs">{kw}</span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">© 2026 EyebrowsParlourHereford. All rights reserved.</p>
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-500 hover:text-brand-400 transition-colors text-sm group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
