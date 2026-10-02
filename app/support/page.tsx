'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  HandHeart, Send, Check, ArrowLeft, Sparkles, User, Phone, Mail, Globe, MessageSquare
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function SupportPage() {
  const [donorSubmitted, setDonorSubmitted] = useState(false)
  const [donorData, setDonorData] = useState({
    donorName: '', donorContact: '', donorCountry: '', donorAddress: '', donorAmount: '', donorMessage: '',
  })

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorData({ ...donorData, [e.target.name]: e.target.value })
  }

  const handleDonorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*NEW DONOR REGISTRATION*\n\n` +
      `*Name:* ${donorData.donorName}\n` +
      `*Contact:* ${donorData.donorContact}\n` +
      `*Country:* ${donorData.donorCountry}\n` +
      `*Address:* ${donorData.donorAddress || 'N/A'}\n` +
      `*Amount (USD):* $${donorData.donorAmount}\n\n` +
      `*Message:* ${donorData.donorMessage || 'None'}`

    window.open(`https://wa.me/256779268469?text=${encodeURIComponent(message)}`, '_blank')
    setDonorSubmitted(true)
    setTimeout(() => setDonorSubmitted(false), 8000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2338] via-[#142f4a] to-[#0d2338] text-white">
      <SiteHeader />

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition mb-6">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 text-xs font-bold text-[#e7bd5f] mb-6">
            <Sparkles size={14} /> Support Our Mission
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Sponsor a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">Student</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Your generous support helps us provide quality education, improve facilities, and nurture the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl p-8 md:p-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bd703f]/10 text-[#a65c4b] text-xs font-bold uppercase tracking-widest mb-4">
              <HandHeart size={13} /> Boarding Sponsorship
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#142f4a] mb-2">
              Sponsor a Son or Daughter
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-xl mx-auto">
              To support a student to attain education in the Boarding section:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="rounded-2xl bg-gradient-to-br from-[#bd703f] to-[#a65c4b] p-6 text-white shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">Per Term</p>
                <p className="font-serif text-4xl font-bold">$175</p>
                <p className="text-xs text-white/80 mt-2">USD</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#142f4a] to-[#0d2338] p-6 text-white shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Per Year</p>
                <p className="font-serif text-4xl font-bold text-[#e7bd5f]">$525</p>
                <p className="text-xs text-white/60 mt-2">USD (3 terms)</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-6 max-w-lg mx-auto">
              This cost caters for <strong>scholastic materials</strong> and <strong>boarding requirements</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Donor Form */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl p-6 md:p-10">
          {donorSubmitted ? (
            <div className="text-center py-12">
              <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142f4a] mb-3">Thank You!</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Your donor registration is opening in WhatsApp. Please send the message to complete your registration.
              </p>
              <button onClick={() => setDonorSubmitted(false)} className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all">
                Register Another Donor
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-bold text-[#142f4a] mb-2">Become a Donor</h3>
                <p className="text-sm text-slate-600">
                  Fill in your details below. Our team will contact you to complete your contribution.
                </p>
              </div>

              <form onSubmit={handleDonorSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <User size={12} className="text-[#bd703f]" /> Full Name *
                    </label>
                    <input type="text" name="donorName" value={donorData.donorName} onChange={handleDonorChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="e.g., John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Phone size={12} className="text-[#bd703f]" /> Contact (Phone/Email) *
                    </label>
                    <input type="text" name="donorContact" value={donorData.donorContact} onChange={handleDonorChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="+256 7XX XXX XXX or email" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Globe size={12} className="text-[#bd703f]" /> Country *
                    </label>
                    <input type="text" name="donorCountry" value={donorData.donorCountry} onChange={handleDonorChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="e.g., Uganda, USA, UK" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Address</label>
                    <input type="text" name="donorAddress" value={donorData.donorAddress} onChange={handleDonorChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="City / Town / Village" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Amount You Wish to Donate (USD) *</label>
                    <input type="number" name="donorAmount" value={donorData.donorAmount} onChange={handleDonorChange} required min="1"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="e.g., 175" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <MessageSquare size={12} className="text-[#bd703f]" /> Message / Purpose
                    </label>
                    <textarea name="donorMessage" value={donorData.donorMessage} onChange={handleDonorChange} rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm resize-none"
                      placeholder="e.g., Sponsoring a student for one term" />
                  </div>
                </div>

                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-3.5 font-semibold shadow-lg transition-all hover:-translate-y-0.5">
                  <Send size={16} /> Register as Donor
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Your details will be sent securely to the school. No payment is processed on this site.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}