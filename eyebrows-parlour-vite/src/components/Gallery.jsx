import React, { useState } from 'react'
import { Eye, X, ZoomIn } from 'lucide-react'

const galleryImages = [
  { src: 'https://i.pinimg.com/1200x/86/47/03/8647038f5d635d254b28dccc2cea2ea1.jpg', alt: 'Beautiful eyebrows', category: 'Brows' },
  { src: 'https://i.pinimg.com/1200x/31/01/60/31016002d202e74cfe8604453deb1877.jpg', alt: 'Lash lift results', category: 'Lashes' },
  { src: 'https://i.pinimg.com/1200x/5c/09/59/5c095972179cb870c606a8d9e3ef6aaa.jpg', alt: 'Facial treatment', category: 'Skincare' },
  { src: 'https://i.pinimg.com/736x/e0/0f/2b/e00f2be1da1d08af0b20e72be9fb942e.jpg', alt: 'Wax', category: 'Skincare' },
  { src: 'https://i.pinimg.com/1200x/3b/e5/34/3be5341f42bd4c6139516c66b9944706.jpg', alt: 'Hair styling', category: 'Hair' },
  { src: 'https://i.pinimg.com/736x/29/6f/dd/296fddca7e8c8f129b498ef1059282f2.jpg', alt: 'Henna art', category: 'Art' },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-100 rounded-full px-5 py-2.5 mb-8">
            <Eye className="w-4 h-4 text-brand-600" />
            <span className="text-brand-700 text-sm font-bold tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Before &
            <span className="text-brand-600"> After</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See the transformations that have made us Hereford's favourite beauty destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold text-brand-300 uppercase tracking-widest">{img.category}</span>
                  <h3 className="text-white font-bold text-xl mt-1">{img.alt}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <span className="text-brand-300 text-sm font-bold uppercase tracking-widest">{selectedImage.category}</span>
                <h3 className="text-white font-bold text-2xl mt-1">{selectedImage.alt}</h3>
              </div>
              <button 
                className="absolute -top-14 right-0 text-white/70 hover:text-white transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
