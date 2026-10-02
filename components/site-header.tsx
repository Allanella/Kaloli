'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, HandHeart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'History', href: '/history' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Saint', href: '/saint-of-the-day' },
  { name: 'Contact', href: '/contact' },
]

export const schoolInfo = {
  name: 'St. Kalooli Lwanga SS Mulajje',
  phone: '+256 779 268 469',
  alternativePhone: '+256 705 400 493',
  email: 'skalssm.2013@gmail.com',
  whatsapp: '256779268469',
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [badgeLoaded, setBadgeLoaded] = useState(false)
  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#142f4a]/85 backdrop-blur-md text-slate-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#e7bd5f]" /> {schoolInfo.phone}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail size={13} className="text-[#e7bd5f]" /> {schoolInfo.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#bd703f]/30 text-[#e7bd5f] px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
              Admissions Open 2026
            </span>
            <Link href="/support" className="hover:text-white transition flex items-center gap-1">
              <HandHeart size={12} /> Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-[#142f4a]/85 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-12 rounded-full bg-white p-1 shadow-lg ring-2 ring-[#e7bd5f]/40 group-hover:ring-[#e7bd5f]/70 transition-all overflow-hidden shrink-0">
              {!badgeLoaded && <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-full" />}
              <img src={badgeSource} alt="School Badge"
                className={`size-full object-contain transition-opacity duration-300 ${badgeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setBadgeLoaded(true)}
                onError={(e) => { e.currentTarget.src = fallbackBadge; setBadgeLoaded(true) }} />
            </div>
            <div>
              <p className="font-serif font-bold text-base leading-none tracking-tight">St. Kalooli Lwanga</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7bd5f] mt-1">SS Mulajje</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}
                className="text-xs font-medium text-slate-200 hover:text-[#e7bd5f] transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7bd5f] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/support" className="text-sm font-medium text-[#e7bd5f] hover:text-white transition-colors flex items-center gap-1.5">
              <HandHeart size={15} /> Donate
            </Link>
            <Button className="bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 font-semibold shadow-lg shadow-[#bd703f]/30 transition-all hover:shadow-[#bd703f]/50">
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
          </div>

          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-white transition" aria-label="Toggle Navigation Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#142f4a]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-200 hover:text-[#e7bd5f] py-1.5 transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full font-semibold">
                <Link href="/admissions/apply" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}