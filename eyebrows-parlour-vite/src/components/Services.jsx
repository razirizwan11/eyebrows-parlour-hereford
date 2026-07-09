import React, { useState } from 'react'
import { Scissors, ChevronRight, Clock } from 'lucide-react'

const servicesData = [
  { name: 'Eyebrow Threading', icon: '✨', category: 'Brows', description: 'Precision eyebrow shaping using traditional threading techniques for the perfect arch.' },
  { name: 'Eyebrow Tinting', icon: '🎨', category: 'Brows', description: 'Enhance your natural brows with our professional tinting service for a fuller look.' },
  { name: 'Lash Lift', icon: '👁️', category: 'Lashes', description: 'Lift and curl your natural lashes for a wide-eyed, mascara-free look that lasts weeks.' },
  { name: 'Lash Tinting', icon: '💫', category: 'Lashes', description: 'Darken and define your lashes for a bold, effortless appearance.' },
  { name: 'Face Threading', icon: '✨', category: 'Face', description: 'Gentle facial hair removal using fine threading for smooth, flawless skin.' },
  { name: 'Eyelash Extensions', icon: '👁️', category: 'Lashes', description: 'Custom lash extensions for volume, length, and drama tailored to your style.' },
  { name: 'Facials', icon: '💆', category: 'Skincare', description: 'Rejuvenating facial treatments to cleanse, hydrate, and revitalize your skin.' },
  { name: 'Makeup', icon: '💄', category: 'Makeup', description: 'Professional makeup for every occasion and beautiful bridal looks!' },
  { name: 'Haircut & Styling', icon: '💇', category: 'Hair', description: 'Trendy cuts and styling to frame your face and express your personality.' },
  { name: 'Henna', icon: '🌿', category: 'Art', description: 'Beautiful, intricate henna designs for any occasion.' },
  { name: 'Upper Lip Threading', icon: '✨', category: 'Face', description: 'Quick and precise upper lip hair removal for a clean finish.' },
  { name: 'Waxing', icon: '✨', category: 'Body', description: 'Smooth, long-lasting hair removal with our gentle waxing services.' },
]

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(servicesData.map(s => s.category))]
  const filtered = activeCategory === 'All' ? servicesData : servicesData.filter(s => s.category === activeCategory)

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-brand-50/50 to-white relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  {/* Luxury Product Launch Banner */}
<div className="bg-white border-2 border-red-500 rounded-2xl py-5 px-8 mb-12 shadow-lg">
  <p className="text-center text-red-600 font-bold text-xl tracking-wide leading-relaxed">
    ✨ Branded Luxury's exclusive products are launching soon.
    <br />
    <span className="text-lg font-semibold">
      Once you experience them, you won't want anything else.
    </span>
  </p>
</div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-100 rounded-full px-5 py-2.5 mb-8">
            <Scissors className="w-4 h-4 text-brand-600" />
            <span className="text-brand-700 text-sm font-bold tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Beauty
            <span className="text-brand-600"> Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From perfectly sculpted brows to luxurious facials, we offer a complete range of beauty treatments 
            tailored to enhance your natural beauty.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-700 border border-gray-200 hover:border-brand-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 border border-gray-100 hover:border-brand-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-5 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <span className="text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {service.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 relative">{service.name}</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed relative">{service.description}</p>

              <div className="flex items-center justify-between pt-5 border-t border-gray-100 relative">
                <div>
                  <span className="text-3xl font-bold text-brand-600">{service.price}</span>
                  <div className="flex items-center space-x-1 mt-1 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <button className="text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Book</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
