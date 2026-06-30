import React from 'react'
import { Heart, Award, Leaf, Shield, Star } from 'lucide-react'

const About = () => {
  const features = [
    { icon: Award, title: 'Expert Artists', desc: 'Trained professionals with years of experience' },
    { icon: Leaf, title: 'Quality Products', desc: 'Premium brands only, cruelty-free' },
    { icon: Shield, title: 'Hygiene First', desc: 'Sterilized tools & clean environment' },
    { icon: Star, title: '5-Star Rated', desc: 'Loved by hundreds of local clients' },
  ]

  const images = [
    { src: 'https://i.pinimg.com/736x/f7/83/6c/f7836c65a1997e3a04aac1b2a6e392e7.jpg', alt: 'Beauty treatment' },
    { src: 'https://i.pinimg.com/736x/48/8b/cb/488bcb320a84eee17bf224cc927a43b0.jpg', alt: 'Salon interior' },
    { src: 'https://i.pinimg.com/736x/93/9b/3a/939b3a8c4169e425691f1b006ab31702.jpg', alt: 'Haircut' },
    { src: 'https://i.pinimg.com/1200x/78/79/6b/78796b3562223e7a43f1bbaf4cfb960a.jpg', alt: 'Lashes' },
  ]

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-50" />
            <div className="relative grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className={`rounded-3xl overflow-hidden shadow-2xl ${i % 2 === 1 ? 'mt-12' : i === 2 ? '-mt-8' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-50 rounded-full px-5 py-2.5 mb-8">
              <Heart className="w-4 h-4 text-brand-600" />
              <span className="text-brand-700 text-sm font-bold tracking-wide uppercase">About Us</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Where Beauty Meets
              <span className="text-brand-600"> Artistry</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At EyeBrowsHereford, we believe every face tells a story, and we're here to help yours shine. 
              Located in the heart of Hereford, our parlour is a sanctuary where elegance meets expertise.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Whether you're a student looking for a quick brow tidy, a professional seeking a full glam transformation, 
              or simply someone who deserves a little self-care, we welcome everyone with open arms and skilled hands.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {features.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-brand-50 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
                    <item.icon className="w-6 h-6 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
