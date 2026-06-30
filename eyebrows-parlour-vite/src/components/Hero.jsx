import React from 'react'
import { Sparkles, Calendar, ArrowRight, ChevronDown } from 'lucide-react'

const Hero = ({ scrollToSection }) => {
  const stats = [
    { icon: '✨', label: 'Threading', value: 'Expert' },
    { icon: '👁️', label: 'Lashes', value: 'Premium' },
    { icon: '💆', label: 'Facials', value: 'Luxury' },
    { icon: '💇', label: 'Hair', value: 'Styling' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-gray-900">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/40 to-brand-950/60" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20 animate-float">
          <Sparkles className="w-4 h-4 text-brand-300" />
          <span className="text-brand-200 text-sm font-medium tracking-wide">Premium Beauty Services in Hereford</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
          Brows Before
          <span className="block mt-2 bg-gradient-to-r from-brand-300 via-pink-300 to-brand-300 text-gradient">
            Bros
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-brand-200/90 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
          At EyeBrowsHereford, we believe every face tells a story, and we're here to help yours shine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-white text-brand-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-white/20 hover:shadow-white/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-white font-bold text-lg">{stat.value}</div>
              <div className="text-brand-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
