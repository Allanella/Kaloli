'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  User, Send, Check, MessageSquare, AlertCircle, Phone, Mail, MapPin, ArrowLeft, Sparkles
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function ContactPage() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [feedbackData, setFeedbackData] = useState({
    name: '', gender: '', contact: '', email: '',
    inquiryType: '', subject: '', message: '',
  })

  const handleFeedbackChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value })
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message =
      `*NEW INQUIRY / FEEDBACK*\n\n` +
      `*Name:* ${feedbackData.name}\n` +
      `*Gender:* ${feedbackData.gender}\n` +
      `*Contact:* ${feedbackData.contact}\n` +
      `*Email:* ${feedbackData.email || 'N/A'}\n\n` +
      `*Inquiry Type:* ${feedbackData.inquiryType}\n` +
      `*Subject:* ${feedbackData.subject || 'N/A'}\n\n` +
      `*Message:*\n${feedbackData.message}`

    window.open(`https://wa.me/256779268469?text=${encodeURIComponent(message)}`, '_blank')
    setFeedbackSubmitted(true)
    setTimeout(() => setFeedbackSubmitted(false), 8000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2338] via-[#142f4a] to-[#0d2338] text-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition mb-6">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 text-xs font-bold text-[#e7bd5f] mb-6">
            <Sparkles size={14} /> Get in Touch
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Inquiry & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">Feedback</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Kindly fill this form for any inquiry or feedback. We'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <a href="tel:+256779268469" className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#e7bd5f]/40 p-5 transition-all hover:-translate-y-1">
            <div className="p-3 rounded-xl bg-[#bd703f]/20 text-[#e7bd5f] inline-block mb-3 group-hover:bg-[#e7bd5f] group-hover:text-[#142f4a] transition">
              <Phone size={20} />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Call Us</p>
            <p className="text-sm text-white/85">+256 779 268 469</p>
          </a>
          <a href="mailto:skalssm.2013@gmail.com" className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#e7bd5f]/40 p-5 transition-all hover:-translate-y-1">
            <div className="p-3 rounded-xl bg-[#bd703f]/20 text-[#e7bd5f] inline-block mb-3 group-hover:bg-[#e7bd5f] group-hover:text-[#142f4a] transition">
              <Mail size={20} />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Email Us</p>
            <p className="text-sm text-white/85 break-all">skalssm.2013@gmail.com</p>
          </a>
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
            <div className="p-3 rounded-xl bg-[#bd703f]/20 text-[#e7bd5f] inline-block mb-3">
              <MapPin size={20} />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Visit Us</p>
            <p className="text-xs text-white/80 leading-5">Mulajje/Ndyalumu Village, Kyampisi Parish, Bamunanika Sub-county, Luweero District</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl p-6 md:p-10">
          {feedbackSubmitted ? (
            <div className="text-center py-12">
              <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142f4a] mb-3">Thank You for Reaching Out!</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Your message is opening in WhatsApp. Please send it to complete your submission.
              </p>
              <button onClick={() => setFeedbackSubmitted(false)} className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                  <User size={18} className="text-[#bd703f]" /> Your Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={feedbackData.name} onChange={handleFeedbackChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="e.g., John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Gender *</label>
                    <select name="gender" value={feedbackData.gender} onChange={handleFeedbackChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm bg-white">
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Contact (Phone) *</label>
                    <input type="tel" name="contact" value={feedbackData.contact} onChange={handleFeedbackChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="+256 7XX XXX XXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input type="email" name="email" value={feedbackData.email} onChange={handleFeedbackChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="email@example.com" />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#bd703f]" /> Your Inquiry
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Type of Information *</label>
                    <select name="inquiryType" value={feedbackData.inquiryType} onChange={handleFeedbackChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm bg-white">
                      <option value="">Select type</option>
                      <option value="General">General Inquiry</option>
                      <option value="Admission">Admission</option>
                      <option value="Academic">Academic</option>
                      <option value="Advice">Advice</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Donation">Donation / Sponsorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
                    <input type="text" name="subject" value={feedbackData.subject} onChange={handleFeedbackChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="Brief subject of your message" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Message *</label>
                    <textarea name="message" value={feedbackData.message} onChange={handleFeedbackChange} required rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm resize-none"
                      placeholder="Please describe your inquiry or feedback in detail..." />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 text-center sm:text-left flex items-start gap-2">
                  <AlertCircle size={14} className="text-[#bd703f] shrink-0 mt-0.5" />
                  Your information is sent securely to the school via WhatsApp.
                </p>
                <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-[#bd703f]/25 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                  <Send size={16} /> Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}