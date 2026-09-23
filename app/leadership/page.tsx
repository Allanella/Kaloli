'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, Users, Award, ShieldCheck, GraduationCap,
  Sparkles, Mail, Phone, MapPin, Heart, BookOpen, Music, Trophy,
  Quote, Star, User, CheckCircle2, Crown
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LeadershipPage() {
  const [badgeLoaded, setBadgeLoaded] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'administration' | 'staff'>('all')

  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'

  // ============ CORE ADMINISTRATION ============
  const administration = [
    {
      name: 'Madam Noe',
      role: 'Headteacher',
      image: '/images/HM NOE.jpg',
      bio: 'Leads the school with a vision of excellence, faith and holistic development of every learner.',
      featured: true,
    },
    {
      name: 'Mr. Lwegaba Emmanuel',
      role: 'Deputy Headteacher',
      image: '/images/LWEGABA EMMANUEL1.JPG.jpeg',
      bio: 'Oversees academic affairs and coordinates the teaching staff to deliver quality education.',
    },
    {
      name: 'Mr. Ssewanyana Mathias',
      role: 'Deputy Headteacher',
      image: '/images/Mathias 1.jpeg',
      bio: 'Manages student discipline and welfare, ensuring a safe and nurturing school environment.',
    },
    {
      name: 'Mr. Kateregga Benedict',
      role: 'Deputy Headteacher',
      image: '/images/KATEREGGA BENDICT.JPG.jpeg',
      bio: 'Coordinates co-curricular activities and school-community relations.',
    },
    {
      name: 'Mr. Mulondo Allan',
      role: 'Director of Studies',
      image: '/images/MULONDO ALLAN.JPG.jpeg',
      bio: 'Oversees curriculum implementation, examinations and academic standards.',
    },
  ]

  // ============ EXTENDED STAFF (from Sept 23 images) ============
  const staff = [
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.01.14 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.01.44 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.01.48 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.16 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.17 PM (1).jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.17 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.21 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.22 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.30 PM.jpeg' },
    { name: 'Staff Member', role: 'Teaching Staff', image: '/images/WhatsApp Image 2026-09-23 at 1.02.32 PM (1).jpeg' },
  ]

  const allTeam = [
    ...administration.map(p => ({ ...p, category: 'administration' as const })),
    ...staff.map(p => ({ ...p, category: 'staff' as const })),
  ]

  const filteredTeam = activeFilter === 'all' ? allTeam : allTeam.filter(p => p.category === activeFilter)

  const schoolInfo = {
    name: 'St. Kalooli Lwanga SS Mulajje',
    motto: 'Only the Best is Good Enough',
    phone: '+256 779 268 469',
    email: 'skalssm.2013@gmail.com',
    location: 'Mulajje Parish, Bamunanika Sub County, Luweero District, Uganda',
    whatsapp: '256779268469',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2338] via-[#142f4a] to-[#0d2338] text-white">

      {/* Top banner */}
      <div className="bg-[#bd703f] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold uppercase tracking-widest flex items-center gap-2">
            <Users size={13} /> Our Leadership
          </span>
          <Link href="/" className="hover:underline flex items-center gap-1">
            <ArrowLeft size={12} /> Back to Home
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#142f4a]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-12 rounded-full bg-white p-1 shadow-lg ring-2 ring-[#e7bd5f]/40 group-hover:ring-[#e7bd5f]/70 transition-all overflow-hidden shrink-0">
              {!badgeLoaded && <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-full" />}
              <img
                src={badgeSource}
                alt="School Badge"
                className={`size-full object-contain transition-opacity duration-300 ${badgeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setBadgeLoaded(true)}
                onError={(e) => { e.currentTarget.src = fallbackBadge; setBadgeLoaded(true) }}
              />
            </div>
            <div>
              <p className="font-serif font-bold text-base leading-none tracking-tight text-white">St. Kalooli Lwanga</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7bd5f] mt-1">SS Mulajje</p>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-200 hover:text-[#e7bd5f] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={15} /> Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-20 -right-20 size-96 rounded-full bg-[#e7bd5f]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-[#bd703f]/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 text-xs font-bold text-[#e7bd5f] mb-6">
            <Sparkles size={14} /> Our People
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
            Steady leadership, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] via-[#f3d387] to-[#bd703f]">
              shared responsibility.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Meet the team serving the school community with professionalism, commitment and care.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
              <Crown size={13} className="text-[#e7bd5f]" /> {administration.length} Administrators
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
              <Users size={13} className="text-[#e7bd5f]" /> {staff.length} Teaching Staff
            </div>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex justify-center">
          <div className="inline-flex gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            {([
              { key: 'all', label: 'All Team', count: allTeam.length },
              { key: 'administration', label: 'Administration', count: administration.length },
              { key: 'staff', label: 'Teaching Staff', count: staff.length },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === tab.key
                    ? 'bg-[#bd703f] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
                <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === tab.key ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ADMINISTRATION — Featured layout */}
      {(activeFilter === 'all' || activeFilter === 'administration') && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-8">
            <Crown size={22} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Administration</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {administration.map((person, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-[#e7bd5f]/40 transition-all duration-300 hover:-translate-y-1 ${
                  i === 0 ? 'lg:col-span-3 lg:flex lg:items-stretch' : ''
                }`}
              >
                {i === 0 ? (
                  <>
                    {/* Featured card (Headteacher) */}
                    <div className="relative lg:w-2/5 aspect-[4/5] lg:aspect-auto overflow-hidden bg-gradient-to-br from-[#142f4a] to-[#0d2338]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                        loading="eager"
                        onError={(e) => { e.currentTarget.style.opacity = '0' }}
                      />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e7bd5f] text-[#142f4a] text-[10px] font-bold uppercase tracking-widest">
                        <Star size={11} /> Head of School
                      </div>
                    </div>
                    <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e7bd5f] mb-3">
                        {person.role}
                      </p>
                      <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                        {person.name}
                      </h3>
                      <p className="text-sm lg:text-base leading-7 text-white/70 mb-6">
                        {person.bio}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#e7bd5f]">
                          <ShieldCheck size={13} /> Serving since leadership tenure
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Regular administration card */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[#142f4a] to-[#0d2338]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.opacity = '0' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2338]/90 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 lg:p-6">
                      <h3 className="font-serif text-lg lg:text-xl font-bold text-white leading-tight">
                        {person.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#e7bd5f] mt-2">
                        {person.role}
                      </p>
                      {person.bio && (
                        <p className="text-xs leading-6 text-white/60 mt-3 line-clamp-3">
                          {person.bio}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TEACHING STAFF */}
      {(activeFilter === 'all' || activeFilter === 'staff') && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-8">
            <Users size={22} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Teaching Staff</h2>
            <span className="text-xs text-white/50 ml-2">({staff.length} members)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {staff.map((person, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-[#e7bd5f]/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[#142f4a] to-[#0d2338]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.opacity = '0' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2338]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-3 lg:p-4 text-center">
                  <h3 className="font-serif text-sm lg:text-base font-bold text-white">{person.name}</h3>
                  <p className="text-[10px] lg:text-xs font-semibold uppercase tracking-wider text-[#e7bd5f] mt-1.5">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#bd703f]/10 border border-[#bd703f]/30 p-6 text-center">
            <p className="text-sm text-white/70 italic">
              Names and roles for new team members are being finalized. Please contact the school office for specific staff assignments.
            </p>
          </div>
        </section>
      )}

      {/* Values banner */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#142f4a]/95 to-[#0d2338] border border-[#e7bd5f]/30 p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <Quote className="mx-auto text-[#e7bd5f] mb-4" size={28} />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Leadership with Purpose
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-sm leading-7">
              Our leadership team is committed to nurturing educated, self-reliant, patriotic and
              God-fearing citizens through faith, discipline and academic excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: BookOpen, label: 'Academic Excellence' },
              { icon: Heart, label: 'Moral Integrity' },
              { icon: ShieldCheck, label: 'Faithful Service' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="p-2 rounded-lg bg-[#e7bd5f]/20 text-[#e7bd5f] shrink-0">
                  <item.icon size={18} />
                </div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Need to reach the leadership?</h3>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Contact our school office for any questions about academics, admissions or school life.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold shadow-lg transition-all hover:-translate-y-0.5"
          >
            <Phone size={16} /> Call the School
          </a>
          <a
            href={`mailto:${schoolInfo.email}`}
            className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white rounded-full px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            <Mail size={16} /> Email Us
          </a>
          <a
            href={`https://wa.me/${schoolInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#1f9d58] hover:bg-[#18864a] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5"
          >
            <Phone size={16} /> WhatsApp
          </a>
        </div>
      </section>

      {/* Back to home */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
        <p className="mt-2 italic">{schoolInfo.motto}</p>
      </footer>
    </div>
  )
}