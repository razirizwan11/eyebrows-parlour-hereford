import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle } from 'lucide-react'

const servicesList = [
  'Eyebrow Threading',
  'Eyebrow Tinting',
  'Lash Lift',
  'Lash Tinting',
  'Face Threading',
  'Eyelash Extensions',
  'Facials',
  'Makeup',
  'Haircut & Styling',
  'Henna',
  'Upper Lip Threading',
  'Waxing',
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    }, 4000)
  }

  const contactInfo = [
    { icon: MapPin, title: 'Address', content: '5 Maylord Street, Hereford HR1 2DS', href: 'https://maps.google.com/?q=5+Maylord+Street+Hereford+HR1+2DS' },
    { icon: Phone, title: 'Phone', content: '+44 7360 587313', href: 'tel:+44 7360587313' },
    { icon: Mail, title: 'Email', content: 'eyebrowsparlourhereford@gmail.com', href: 'mailto:eyebrowsparlourhereford@gmail.com' },
    { icon: Clock, title: 'Hours', content: 'Mon-Sat: 9AM-6PM | Sun: 10AM-4PM', href: null },
  ]

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-100 rounded-full px-5 py-2.5 mb-8">
            <Calendar className="w-4 h-4 text-brand-600" />
            <span className="text-brand-700 text-sm font-bold tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Book Your
            <span className="text-brand-600"> Appointment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your look? Book your appointment today and let our experts work their magic. 
            Walk-ins welcome!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 text-white shadow-2xl shadow-brand-500/20">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-brand-100">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm leading-relaxed">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-80 border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.848!2d-2.714!3d52.056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870499e0d8b3a2f%3A0x3e5f5e5e5e5e5e5e!2s5%20Maylord%20Street%2C%20Hereford%20HR1%202DS!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EyebrowsParlourHereford Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-50 rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-500">We'll be in touch soon to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-white"
                      placeholder="+44..."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-white resize-none"
                    placeholder="Tell us about your preferred time, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-800 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            <div className="mt-8 flex items-center justify-center space-x-8">
              <a href="tel:+4407360587313" className="flex items-center space-x-2 text-brand-600 hover:text-brand-800 font-bold transition-colors">
                <Phone className="w-5 h-5" />
                <span>Click to Call</span>
              </a>
              <a href="mailto:tariqq.mahnoorr@gmail.com" className="flex items-center space-x-2 text-brand-600 hover:text-brand-800 font-bold transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
