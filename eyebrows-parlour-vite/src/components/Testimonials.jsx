import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonialsData = [
  { name: 'Sarah M.', rating: 5, text: 'Best eyebrow threading in Hereford! My brows have never looked better. The staff is so friendly and professional.' },
  { name: 'Emily R.', rating: 5, text: "I got a lash lift and tint and I'm obsessed. I wake up looking put together every single day. Highly recommend!" },
  { name: 'Jessica T.', rating: 5, text: 'I got the care kit and i loved it. It has lasted more than 6 months for me and the quality was top notch.' },
  { name: 'Amanda K.', rating: 5, text: 'Love the elegant vibe of the salon. The henna artist is incredibly talented, my design was stunning!' },
  { name: 'Chloe B.', rating: 5, text: 'Affordable prices and top-notch service. The eyebrow tinting made such a difference. Will definitely be back!' },
  { name: 'Olivia H.', rating: 5, text: 'Found this gem through a friend and now I come here for everything; brows, lashes, facials. Simply the best in Hereford!' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-gradient-to-br from-brand-950 via-brand-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-5 py-2.5 mb-8 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-brand-200 text-sm font-bold tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What Our Clients
            <span className="text-brand-300"> Say</span>
          </h2>
          <p className="text-lg text-brand-200/80 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it, hear from the wonderful people who've experienced the EyebrowsParlour difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((review, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-500/20 group-hover:text-brand-500/40 transition-colors" />

              <div className="flex items-center space-x-1 mb-5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-brand-100 mb-8 leading-relaxed text-lg">"{review.text}"</p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-brand-300 text-sm">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
