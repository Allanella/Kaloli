'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function SiteFooter() {
  const [badgeLoaded, setBadgeLoaded] = useState(false)
  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'
  const whatsapp = '256779268469'

  return (
    <>
      <footer className="bg-slate-950/95 backdrop-blur-md text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white p-1 shadow-lg relative overflow-hidden">
                {!badgeLoaded && <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-full" />}
                <img src={badgeSource} alt="Badge"
                  className={`size-full object-contain transition-opacity duration-300 ${badgeLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setBadgeLoaded(true)}
                  onError={(e) => { e.currentTarget.src = fallbackBadge }} />
              </div>
              <h3 className="font-serif font-bold text-white text-lg">St. Kalooli Lwanga</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nurturing holistic excellence through disciplined academics, spiritual integrity, and expressive cultural arts.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.tiktok.com/@stkaloolilwangassmulajje" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="TikTok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.facebook.com/StKalooliLwangaSSMulajje" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@st.kaloolilwangassmulajje5064" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-white transition">About Our School</Link></li>
              <li><Link href="/history" className="hover:text-white transition">School History</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">Academics & Curriculum</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Photo Gallery</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition">School Leadership</Link></li>
              <li><Link href="/saint-of-the-day" className="hover:text-white transition">Saint of the Day</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Inquiry & Feedback</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Support / Donate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Admissions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/admissions/apply" className="hover:text-white transition">Apply Online</Link></li>
              <li><Link href="/downloads" className="hover:text-white transition">Requirements & Downloads</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition">Admission Info</Link></li>
              <li><Link href="/fees" className="hover:text-white transition">Fees Structure</Link></li>
              <li><Link href="/term-dates" className="hover:text-white transition">Term Dates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#e7bd5f] shrink-0 mt-0.5" />
                <span>Mulajje/Ndyalumu Village, Kyampisi Parish, Bamunanika Sub-county, Bamunanika County, Luweero District, Central Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#e7bd5f] shrink-0" />
                <a href="tel:+256779268469" className="hover:text-white transition">+256 779 268 469</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#e7bd5f] shrink-0" />
                <a href="tel:+256705400493" className="hover:text-white transition">+256 705 400 493</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#e7bd5f] shrink-0" />
                <a href="mailto:skalssm.2013@gmail.com" className="hover:text-white transition">skalssm.2013@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-xs gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} St. Kalooli Lwanga SS Mulajje. All rights reserved.</p>
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 text-slate-300">
            <span>Developed by <strong className="text-white font-semibold">Baliddawa Allan</strong></span>
            <span className="text-slate-600">•</span>
            <a href="tel:0700966715" className="hover:text-[#e7bd5f] transition font-mono">0700966715</a>
            <span className="text-slate-600">/</span>
            <a href="tel:0785639406" className="hover:text-[#e7bd5f] transition font-mono">0785639406</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello St. Kalooli Lwanga SS Mulajje, I would like to inquire about the school.')}`}
        target="_blank" rel="noreferrer" aria-label="Chat with the school on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1f9d58] text-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl">
        <Phone size={22} />
      </a>
    </>
  )
}