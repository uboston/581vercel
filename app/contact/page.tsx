'use client'

import { useState, FormEvent } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })
  const [formMessage, setFormMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      setFormMessage({ text: 'Please fill in all required fields.', type: 'error' })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormMessage({ text: 'Please enter a valid email address.', type: 'error' })
      setIsSubmitting(false)
      return
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\(\)]+$/
    if (!phoneRegex.test(formData.phone)) {
      setFormMessage({ text: 'Please enter a valid phone number.', type: 'error' })
      setIsSubmitting(false)
      return
    }

    // Simulate form submission (you can connect this to your backend/Supabase)
    console.log('Form submitted:', formData)

    // Show success message
    setFormMessage({ 
      text: 'Thank you! Your request has been received. We will contact you soon.', 
      type: 'success' 
    })

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    })

    setIsSubmitting(false)

    // Clear message after 5 seconds
    setTimeout(() => {
      setFormMessage(null)
    }, 5000)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#D4A574] via-[#C19A6B] to-[#A67C52] py-20 px-5 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-[#F5E6D3] drop-shadow-lg mb-4">Get In Touch</h1>
            <p className="text-2xl text-[#F5E6D3] opacity-95">Let&apos;s create something beautiful together</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-5 bg-[#F5E6D3]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[#8B6F47] mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#A67C52] mb-1">Location</h3>
                      <p className="text-[#5C4A35] text-lg">Pleasant Grove, Utah</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#A67C52] mb-1">Email</h3>
                      <p className="text-[#5C4A35] text-lg">info@payemsphotography.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#A67C52] mb-1">Phone</h3>
                      <p className="text-[#5C4A35] text-lg">(801) 555-0123</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#8B6F47] mb-8">Request a Session</h2>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-5">
                    <label htmlFor="firstName" className="block text-[#8B6F47] font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C19A6B] rounded-lg focus:outline-none focus:border-[#E8B98B] text-[#3D2F1F]"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="lastName" className="block text-[#8B6F47] font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C19A6B] rounded-lg focus:outline-none focus:border-[#E8B98B] text-[#3D2F1F]"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="phone" className="block text-[#8B6F47] font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C19A6B] rounded-lg focus:outline-none focus:border-[#E8B98B] text-[#3D2F1F]"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-[#8B6F47] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C19A6B] rounded-lg focus:outline-none focus:border-[#E8B98B] text-[#3D2F1F]"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#8B6F47] font-semibold mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-[#C19A6B] rounded-lg focus:outline-none focus:border-[#E8B98B] text-[#3D2F1F] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#A67C52] to-[#8B6F47] text-[#F5E6D3] py-4 rounded-lg font-semibold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                  {formMessage && (
                    <div
                      className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                        formMessage.type === 'success'
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : 'bg-red-100 text-red-800 border border-red-300'
                      }`}
                    >
                      {formMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

