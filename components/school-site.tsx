'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  GraduationCap, BookOpen, Award, Users, ArrowRight, Phone, Mail, MapPin, Sparkles,
  ChevronRight, Heart, ShieldCheck, Music, Menu, X, HandHeart, Laptop, Globe, Trophy,
  Palette, Flag, Star, BookMarked, CheckCircle2, Languages, FlaskConical, Calculator,
  User, Calendar, Home, FileText, Send, Check, Cross, Quote, Flame, Crown,
  HeartPulse, Download, MessageSquare, AlertCircle, Building, Atom, Beaker
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mdd' | 'academics'>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [badgeLoaded, setBadgeLoaded] = useState(false)

  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'

  const backgroundSlides = [
    '/images/background.jpg',
    '/images/back1.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [backgroundSlides.length])

  useEffect(() => {
    backgroundSlides.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  const stats = [
    { label: 'Year Founded', value: '1986', icon: Award },
    { label: 'Government Aided', value: '2011', icon: ShieldCheck },
    { label: 'School Heritage', value: 'Catholic', icon: Cross },
    { label: 'Location', value: 'Luweero', icon: MapPin },
  ]

  const highlights = [
    { title: 'Holistic Academic Excellence', desc: 'Nurturing young minds through modern curriculum, technology integration, and personalized guidance.', icon: BookOpen, tag: 'Academics' },
    { title: 'Music, Dance & Drama (MDD)', desc: 'Award-winning cultural, theatrical, and musical talent development built right into our weekly routine.', icon: Music, tag: 'Co-Curricular' },
    { title: 'Safe & Nurturing Environment', desc: 'State-of-the-art facilities with round-the-clock safety, mentorship, and moral leadership training.', icon: Heart, tag: 'Campus Life' },
  ]

  const houses = [
    { name: 'St. Matia Mulumba', nickname: 'Da Redz', color: '#dc2626', bgColor: 'bg-red-50', borderColor: 'border-red-200', textColor: 'text-red-700', icon: Flag },
    { name: 'St. Kizito Omuto', nickname: 'Da Yellowz', color: '#eab308', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', textColor: 'text-yellow-700', icon: Star },
    { name: 'St. Mbaaga Tuzinde', nickname: 'Da Creamz', color: '#fef3c7', bgColor: 'bg-amber-50', borderColor: 'border-amber-200', textColor: 'text-amber-700', icon: BookMarked },
    { name: 'St. Ponsiano Ngondwe', nickname: 'Da Greenz', color: '#16a34a', bgColor: 'bg-green-50', borderColor: 'border-green-200', textColor: 'text-green-700', icon: Trophy },
  ]

  const coCurricular = [
    { name: 'Music, Dance & Drama (MDD)', icon: Music, desc: 'Cultural performances and competitions' },
    { name: 'Sports & Athletics', icon: Trophy, desc: 'Football, netball, volleyball, athletics' },
    { name: 'Debate & Public Speaking', icon: Globe, desc: 'Building confidence and critical thinking' },
    { name: 'Science Club', icon: BookOpen, desc: 'Innovation and practical experiments' },
    { name: 'Art & Design', icon: Palette, desc: 'Creative expression through visual arts' },
    { name: 'ICT Club', icon: Laptop, desc: 'Digital literacy and coding skills' },
  ]

  // ============ CURRENT LEADERSHIP ============
  const leadership = [
    { name: 'Mr. Lwegaba Emmanuel', role: 'Headteacher', image: '/images/LWEGABA EMMANUEL1.JPG.jpeg' },
    { name: 'Mr. Ssewanyana Mathias', role: 'Deputy Headteacher', image: '/images/Mathias 1.jpeg' },
    { name: 'Mr. Kateregga Benedict', role: 'Deputy Headteacher', image: '/images/KATEREGGA BENDICT.JPG.jpeg' },
    { name: 'Mr. Mulondo Allan', role: 'Director of Studies', image: '/images/MULONDO ALLAN.JPG.jpeg' },
  ]

  const objectives = [
    'To be an outstanding academic institution.',
    'To help students appreciate the value of hard work for self reliance.',
    'To attract a professional and committed workforce.',
    'To strengthen co-curricular activities for better health and skills development of students.',
    'To produce citizens who are God fearing and tolerate the existence of one another.',
  ]

  const coreValues = ['Devout', 'Responsibility', 'Ethical', 'Admirable', 'Diligent', 'Excellence', 'Dependable']

  // ============ ACADEMIC HIGHLIGHTS (for preview) ============
  const academicFeatures = [
    { icon: BookOpen, title: 'O\'Level Curriculum', desc: 'Full national curriculum with 15+ subjects' },
    { icon: GraduationCap, title: 'A\'Level Combinations', desc: 'Both Sciences and Arts combinations' },
    { icon: Atom, title: 'Science Laboratories', desc: 'Physics, Chemistry, Biology labs' },
    { icon: Laptop, title: 'Computer Laboratory', desc: 'ICT-integrated learning environment' },
    { icon: CheckCircle2, title: 'CBC Commitment', desc: 'Competence-Based Curriculum readiness' },
    { icon: Award, title: 'Academic Excellence', desc: 'Consistent strong performance in national exams' },
  ]

  // ============ GALLERY (Curated) ============
  const galleryPreview = [
    { src: '/images/MDD.jpg', title: 'MDD Festival', category: 'mdd', description: 'Annual Music, Dance & Drama festival' },
    { src: '/images/MDD1.jpg', title: 'Stage Performance', category: 'mdd', description: 'Students on stage' },
    { src: '/images/MDD2.jpg', title: 'MDD Performance', category: 'mdd', description: 'Cultural dance performance' },
    { src: '/images/MDD3.jpg', title: 'Traditional Dance', category: 'mdd', description: 'Traditional dance showcase' },
    { src: '/images/MDD4.jpg', title: 'Drama Act', category: 'mdd', description: 'Theatrical performance' },
    { src: '/images/MDD5.jpg', title: 'Cultural Display', category: 'mdd', description: 'Cultural exhibition' },
    { src: '/images/MDD6.jpg', title: 'Choir Performance', category: 'mdd', description: 'School choir in action' },
    { src: '/images/MDD7.jpg', title: 'Group Dance', category: 'mdd', description: 'Group dance performance' },
    { src: '/images/MDD8.jpg', title: 'MDD Festival', category: 'mdd', description: 'Festival highlights' },
    { src: '/images/MDD9.jpg', title: 'Stage Act', category: 'mdd', description: 'Dramatic stage act' },
    { src: '/images/MDD10.jpg', title: 'Musical Performance', category: 'mdd', description: 'Musical interlude' },
    { src: '/images/MDD11.jpg', title: 'Traditional Dance', category: 'mdd', description: 'Traditional dance' },
    { src: '/images/MDD12.jpg', title: 'MDD Highlights', category: 'mdd', description: 'Festival highlights' },
    { src: '/images/MDD13.jpg', title: 'Drama Performance', category: 'mdd', description: 'Drama presentation' },
    { src: '/images/MDD14.jpg', title: 'Cultural Dance', category: 'mdd', description: 'Cultural dance' },
    { src: '/images/MDD15.jpg', title: 'Finale', category: 'mdd', description: 'Grand finale' },
    { src: '/images/PARENTS.jpg', title: 'Parent Engagement', category: 'academics', description: 'Parents meeting day' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.29 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.31 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.33 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-23 at 1.01.14 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-23 at 1.01.44 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-23 at 1.02.16 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-23 at 1.02.22 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
  ]

  const filteredGallery = activeTab === 'all' ? galleryPreview : galleryPreview.filter(item => item.category === activeTab)

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

  const schoolInfo = {
    name: 'St. Kalooli Lwanga SS Mulajje',
    shortName: 'St. Kalooli Lwanga',
    motto: 'Only the Best is Good Enough',
    phone: '+256 779 268 469',
    alternativePhone: '+256 705 400 493',
    email: 'skalssm.2013@gmail.com',
    location: 'Mulajje/Ndyalumu Village, Kyampisi Parish, Bamunanika Sub-county, Bamunanika County, Luweero District, Central Uganda',
    whatsapp: '256779268469',
    founded: '1986',
    governmentAided: '2011',
    diocese: 'Kasana Luweero Diocese',
    tiktok: 'https://www.tiktok.com/@stkaloolilwangassmulajje',
    facebook: 'https://www.facebook.com/StKalooliLwangaSSMulajje',
    youtube: 'https://www.youtube.com/@st.kaloolilwangassmulajje5064',
    twitter: '',
  }

  return (
    <div className="min-h-screen relative text-slate-800 font-sans selection:bg-[#bd703f] selection:text-white">

      {/* ============ FIXED FULL-PAGE BACKGROUND SLIDESHOW ============ */}
      <div className="fixed inset-0 -z-10 bg-[#0d2338]">
        {backgroundSlides.map((bg, index) => (
          <img
            key={bg}
            src={bg}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-[2500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority={index === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-[#0d2338]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#142f4a]/70 via-[#0d2338]/50 to-[#142f4a]/75" />
        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* ============ CONTENT WRAPPER ============ */}
      <div className="relative z-10">

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

        {/* Navbar */}
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

        {/* ============ HERO ============ */}
        <section className="relative text-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#e7bd5f]">
                  <Sparkles size={14} /> Catholic Founded · Government Aided Since 2011
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight drop-shadow-2xl">
                  A Foundation for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] via-[#f3d387] to-[#bd703f]">
                    Purposeful Lives
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-100 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0 drop-shadow-lg">
                  St. Kalooli Lwanga SS Mulajje has nurtured young generations of the Mulajje community and the entire Uganda — a Catholic-founded, government-aided secondary school committed to producing educated, self-reliant, patriotic and God-fearing citizens.
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] font-medium text-white/90">
                    <ShieldCheck size={12} className="text-[#e7bd5f]" /> Est. {schoolInfo.founded}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] font-medium text-white/90">
                    <MapPin size={12} className="text-[#e7bd5f]" /> Luweero District
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] font-medium text-white/90">
                    <GraduationCap size={12} className="text-[#e7bd5f]" /> O & A Level
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/admissions/apply" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold text-base shadow-lg shadow-[#bd703f]/40 transition-all hover:shadow-[#bd703f]/60 hover:-translate-y-0.5">
                    Apply Online <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <Link href="/about" className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 hover:bg-white/10 text-white rounded-full px-8 py-4 font-semibold text-base backdrop-blur-sm transition-all hover:-translate-y-0.5">
                    Explore Our School
                  </Link>
                </div>

                <div className="flex items-center gap-2 justify-center lg:justify-start pt-2">
                  {backgroundSlides.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Show background ${i + 1}`}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === currentSlide ? 'w-8 bg-[#e7bd5f]' : 'w-3 bg-white/40 hover:bg-white/70'
                      }`} />
                  ))}
                  <span className="ml-3 text-[10px] uppercase tracking-widest text-white/70 font-semibold">
                    Campus Tour
                  </span>
                </div>
              </div>

              {/* Badge Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#bd703f]/50 via-[#e7bd5f]/30 to-transparent opacity-70 blur-3xl" />
                  <div className="relative rounded-[1.75rem] overflow-hidden border border-white/30 bg-white/95 backdrop-blur-xl shadow-2xl">
                    <div className="h-1.5 bg-gradient-to-r from-[#142f4a] via-[#bd703f] to-[#e7bd5f]" />
                    <div className="p-8 text-center">
                      <div className="relative mx-auto w-40 h-40 mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e7bd5f]/30 to-[#bd703f]/30 blur-md" />
                        <div className="relative size-full rounded-full bg-white p-3 shadow-inner ring-1 ring-slate-200">
                          {!badgeLoaded && <div className="absolute inset-3 bg-slate-200 animate-pulse rounded-full" />}
                          <img src={badgeSource} alt="Official Badge"
                            className={`size-full object-contain transition-opacity duration-300 ${badgeLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setBadgeLoaded(true)}
                            onError={(e) => { e.currentTarget.src = fallbackBadge; setBadgeLoaded(true) }} />
                        </div>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bd703f] mb-1">St. Kalooli Lwanga</p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">SS Mulajje</p>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="h-px w-8 bg-[#bd703f]/30" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#bd703f]">Our Motto</span>
                        <span className="h-px w-8 bg-[#bd703f]/30" />
                      </div>
                      <p className="font-serif text-xl text-[#142f4a] leading-tight">Only the Best</p>
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#bd703f] mt-1">is Good Enough</p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#e7bd5f] via-[#bd703f] to-[#142f4a]" />
                  </div>
                  <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 text-slate-800">
                    <div className="p-2.5 bg-gradient-to-br from-[#bd703f] to-[#a65c4b] rounded-xl text-white shadow-md">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Established</p>
                      <p className="text-base font-extrabold text-[#142f4a] font-serif">{schoolInfo.founded}</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 text-slate-800">
                    <div className="p-2 bg-[#142f4a] rounded-lg text-[#e7bd5f]">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Gov't Aided</p>
                      <p className="text-xs font-extrabold text-[#142f4a]">{schoolInfo.governmentAided}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-slate-100 text-[#bd703f] mb-3 group-hover:bg-[#bd703f] group-hover:text-white transition-colors duration-300">
                  <stat.icon size={22} />
                </div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#142f4a]">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ INTRO ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16" id="about">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="relative min-h-[350px] bg-[#dce3e7]">
                <img src="/images/PARENTS.jpg" alt="St. Kalooli Lwanga SS Mulajje campus" className="size-full object-cover absolute inset-0" loading="lazy" />
                <div className="absolute bottom-5 left-5 rounded-xl bg-[#142f4a] px-5 py-4 text-white shadow-lg">
                  <p className="font-serif text-3xl text-[#e7bd5f]">{schoolInfo.founded}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Established</p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#a65c4b]">Welcome</p>
                <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl text-[#142f4a]">
                  A school with a clear sense of purpose.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  St. Kalooli Lwanga SS Mulajje has served the young people of Mulajje Parish and the wider Luweero community since 1986. Our Catholic heritage shapes a culture of faith, learning, responsibility and service.
                </p>
                <div className="mt-5 rounded-2xl bg-[#f7f4ee] border border-[#142f4a]/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#a65c4b] mb-3">Our Location</p>
                  <p className="text-sm leading-7 text-slate-600">
                    St. Kalooli Lwanga SS Mulajje is located at <strong className="text-[#142f4a]">Mulajje/Ndyalumu Village, Kyampisi Parish, Bamunanika Sub-county, Bamunanika County, Luweero District, Central Uganda</strong>.
                  </p>
                  <p className="text-xs leading-6 text-slate-500 mt-3">
                    <strong className="text-[#142f4a]">Directions from Kampala:</strong> Take the Kampala–Gulu Road. At Wobulenzi, turn right onto Bamunanika Road. From Bamunanika Trading Centre, take the Nalweweta–Mulajje Church Road, pass St. Bonaventure Primary School, and you will arrive at St. Kalooli Lwanga SS Mulajje.
                  </p>
                </div>
                <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#a65c4b] hover:text-[#142f4a] transition-colors group">
                  Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HIGHLIGHTS ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              A Foundation for Lifelong Success
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="group bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#142f4a] to-[#bd703f] opacity-0 group-hover:opacity-100 transition"></div>
                <div className="size-12 rounded-xl bg-slate-100 text-[#142f4a] flex items-center justify-center mb-6 group-hover:bg-[#bd703f] group-hover:text-white transition duration-300">
                  <item.icon size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#bd703f] bg-[#bd703f]/10 px-2.5 py-1 rounded-full">{item.tag}</span>
                <h3 className="text-xl font-serif font-bold text-[#142f4a] mt-4 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ ACADEMICS PREVIEW ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Academic Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Preparing Learners for the Future
            </h2>
            <p className="text-slate-100 text-sm sm:text-base drop-shadow">
              A comprehensive curriculum, modern facilities and committed teachers shape our students into capable, confident graduates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {academicFeatures.map((item, i) => (
              <div key={i} className="group flex items-start gap-4 p-5 rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md hover:border-[#bd703f]/30 hover:shadow-2xl transition-all duration-300">
                <div className="p-3 rounded-xl bg-[#bd703f]/10 text-[#bd703f] group-hover:bg-[#bd703f] group-hover:text-white transition-colors duration-300 shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#142f4a] text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/academics" className="inline-flex items-center gap-2 font-semibold text-[#e7bd5f] hover:text-white transition-colors group drop-shadow">
              Explore Academics in Detail <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ============ HOUSES ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">School Houses</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Four Houses. One Family.
            </h2>
            <p className="text-slate-100 text-sm sm:text-base drop-shadow">
              Our house system builds camaraderie, healthy competition and school spirit through inter-house sports, academics and cultural events.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, i) => (
              <div key={i} className={`group rounded-2xl ${house.bgColor} border-2 ${house.borderColor} p-6 text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-opacity-95 backdrop-blur-md`}>
                <div className="size-16 rounded-full mx-auto flex items-center justify-center mb-4 shadow-md" style={{ backgroundColor: house.color }}>
                  <house.icon size={28} className={house.nickname === 'Da Creamz' ? 'text-amber-900' : 'text-white'} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">House {i + 1}</p>
                <h3 className={`font-serif text-lg font-bold mt-1 ${house.textColor}`}>{house.name}</h3>
                <p className={`text-sm font-semibold mt-1 ${house.textColor} opacity-80`}>"{house.nickname}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CO-CURRICULAR ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Beyond the Classroom</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Co-Curricular Activities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coCurricular.map((activity, i) => (
              <div key={i} className="group flex items-start gap-4 p-5 rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md hover:border-[#bd703f]/30 hover:shadow-2xl transition-all duration-300">
                <div className="p-3 rounded-xl bg-[#bd703f]/10 text-[#bd703f] group-hover:bg-[#bd703f] group-hover:text-white transition-colors duration-300 shrink-0">
                  <activity.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#142f4a] text-sm">{activity.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ LEADERSHIP ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Our Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Guiding Our Mission Forward
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {leadership.map((person, i) => (
              <div key={i} className="group bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[#142f4a] to-[#1a3a5c]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.opacity = '0' }}
                  />
                </div>
                <div className="p-3 lg:p-4 text-center">
                  <h3 className="font-serif text-sm lg:text-base font-bold text-[#142f4a]">{person.name}</h3>
                  <p className="text-[10px] lg:text-xs font-semibold uppercase tracking-wider text-[#bd703f] mt-1.5">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/leadership" className="inline-flex items-center gap-2 font-semibold text-[#e7bd5f] hover:text-white transition-colors group drop-shadow">
              Meet the full team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ============ SAINT OF THE DAY ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-[#142f4a]/95 to-[#0d2338] backdrop-blur-md border border-[#e7bd5f]/30 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">

              {/* Left — Poster Image */}
              <div className="lg:col-span-5 relative bg-[#0d2338] overflow-hidden">
                <img
                  src="/images/saintPic.jpeg"
                  alt="Saint Kalooli Lwanga — Uganda Martyr Leader"
                  className="size-full object-cover object-center min-h-[400px] lg:min-h-full"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      parent.classList.add(
                        'bg-gradient-to-br',
                        'from-[#bd703f]',
                        'to-[#142f4a]'
                      )
                    }
                  }}
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e7bd5f] text-[#142f4a] text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  <Crown size={11} /> Saint of the Day
                </div>
              </div>

              {/* Right — Content */}
              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/30 text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-4">
                    <Cross size={11} /> Feast Day: June 3
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-2">
                    St. Kalooli Lwanga
                  </h2>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e7bd5f] mb-6">
                    Courageous Leader · Faithful Martyr · Friend of Christ
                  </p>

                  <p className="text-sm leading-7 text-white/80 mb-6">
                    St. Kalooli Lwanga was the chief of the royal pages in the court of Kabaka Mwanga II
                    of Buganda. He used his position to protect the young Christians and lead them in
                    the way of faith. On June 3, 1886, he was burned alive at Namugongo with his
                    companions because they refused to deny Jesus.
                  </p>

                  <div className="relative pl-6 border-l-2 border-[#e7bd5f]/50 mb-6">
                    <Quote className="absolute -top-1 -left-2 text-[#e7bd5f]/40" size={16} />
                    <p className="font-serif text-lg italic text-white">
                      &ldquo;Be strong and stand firm in the faith.&rdquo;
                    </p>
                    <p className="text-xs text-[#e7bd5f] mt-1 tracking-wider">— St. Kalooli Lwanga</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-center">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-0.5">Born</p>
                      <p className="text-[11px] text-white/80">c. 1860</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-center">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-0.5">Martyred</p>
                      <p className="text-[11px] text-white/80">June 3, 1886</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-center col-span-2 sm:col-span-1">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-0.5">Canonized</p>
                      <p className="text-[11px] text-white/80">Oct 18, 1964</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <Link
                    href="/saint-of-the-day"
                    className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    Read His Full Story <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/saint-of-the-day#prayer"
                    className="inline-flex items-center gap-2 border border-[#e7bd5f]/40 hover:bg-[#e7bd5f]/10 text-[#e7bd5f] rounded-full px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
                  >
                    <Cross size={15} /> Say the Prayer
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ GALLERY ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Campus Highlights</p>
              <h2 className="text-3xl font-serif font-bold text-white mt-1 drop-shadow-lg">Life at St. Kalooli Lwanga</h2>
            </div>
            <div className="flex gap-2 p-1 bg-white/95 backdrop-blur-md rounded-xl border border-white/40 self-start md:self-auto shadow-lg">
              {(['all', 'mdd', 'academics'] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeTab === tab ? 'bg-[#142f4a] text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}>
                  {tab === 'mdd' ? 'MDD & Arts' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#142f4a] to-[#1a3a5c] border border-white/30 aspect-square shadow-xl hover:shadow-2xl transition-shadow">
                <img src={img.src} alt={img.title} className="size-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                  <p className="text-xs font-semibold">{img.title}</p>
                  <p className="text-[10px] text-white/70 mt-0.5 line-clamp-2">{img.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/95 backdrop-blur-md hover:bg-white text-[#142f4a] font-semibold px-8 py-3 text-sm shadow-lg transition-all hover:-translate-y-0.5">
              View Full School Gallery <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </section>

        {/* ============ VISION / MISSION / VALUES ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Our Compass</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Faith in Action. Excellence in Practice.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 rounded-2xl bg-[#142f4a]/95 backdrop-blur-md p-8 text-white relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle,rgba(231,189,95,0.15),transparent_70%)]" />
              <div className="relative">
                <GraduationCap className="mb-8 text-[#e7bd5f]" size={32} />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f]">Our Vision</p>
                <p className="mt-4 max-w-xl font-serif text-2xl leading-tight">To produce a well Educated, Self Reliant and Patriotic Citizen.</p>
                <div className="mt-8 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f]">Our Mission</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">To promote education and Development of the Youth in Partnership with the community.</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f]">Our Motto</p>
                    <p className="mt-3 font-serif text-xl text-white">Only the Best is Good Enough.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md p-8 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a65c4b]">Core Values</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {coreValues.map((value) => (
                  <span key={value} className="rounded-full border border-[#142f4a]/15 bg-white px-3.5 py-1.5 text-xs font-medium text-[#142f4a] hover:border-[#bd703f] hover:bg-[#bd703f]/5 transition-colors cursor-default">
                    {value}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-slate-600">
                <Heart size={17} className="text-[#bd703f]" /> Character shapes achievement.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md p-8 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a65c4b] mb-6">Our Objectives</p>
            <div className="grid md:grid-cols-2 gap-3">
              {objectives.map((objective, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-[#f7f4ee] border border-[#142f4a]/5 hover:border-[#bd703f]/30 transition-colors">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#bd703f] text-white text-[11px] font-bold shrink-0">{i + 1}</span>
                  <p className="text-sm leading-6 text-slate-600">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ADMISSIONS PREVIEW ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16" id="admissions-form">
          <div className="rounded-3xl bg-gradient-to-br from-[#142f4a]/95 to-[#0d2338] backdrop-blur-md border border-[#e7bd5f]/30 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">

              {/* Left — Info */}
              <div className="lg:col-span-7 p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7bd5f]/15 border border-[#e7bd5f]/30 text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-4">
                  <Sparkles size={11} /> Admissions 2026
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
                  Online Admission Application
                </h2>

                <p className="text-sm leading-7 text-white/75 mb-6">
                  We welcome applications for both O'Level (S.1 from PLE) and A'Level (S.5 from UCE). The application form is now on its own dedicated page for a clearer, faster, and more focused experience.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#e7bd5f] shrink-0" />
                    <span>O'Level — S.1 from PLE</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#e7bd5f] shrink-0" />
                    <span>A'Level — S.5 from UCE</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#e7bd5f] shrink-0" />
                    <span>Quick WhatsApp submission</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#e7bd5f] shrink-0" />
                    <span>Auto-calculated PLE aggregate</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/admissions/apply"
                    className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-7 py-3.5 font-semibold shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    Start Application <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/downloads"
                    className="inline-flex items-center gap-2 border border-[#e7bd5f]/40 hover:bg-[#e7bd5f]/10 text-[#e7bd5f] rounded-full px-7 py-3.5 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
                  >
                    <Download size={16} /> Requirements
                  </Link>
                </div>
              </div>

              {/* Right — Visual */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-[#bd703f] to-[#142f4a] p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-10 -right-10 size-48 rounded-full bg-[#e7bd5f]/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 size-48 rounded-full bg-[#bd703f]/20 blur-3xl" />

                <div className="relative">
                  <div className="size-20 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 flex items-center justify-center mb-6">
                    <FileText size={36} className="text-[#e7bd5f]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Two Paths, One Destination
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">
                    Every learner welcome
                  </p>
                </div>

                <div className="relative mt-8 space-y-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">S.1 Applicants</p>
                    <p className="text-xs text-white/80">Bring your PLE results slip & aggregate</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">S.5 Applicants</p>
                    <p className="text-xs text-white/80">Bring your UCE results & subject scores</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ SUPPORT / DONATE (Preview) ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16" id="support">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Support Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Partner With Us to Transform Lives
            </h2>
            <p className="text-slate-100 text-sm sm:text-base drop-shadow">
              Your generous support helps us provide quality education, improve facilities, and nurture the next generation of leaders.
            </p>
          </div>

          <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl p-8 md:p-10 max-w-3xl mx-auto">
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

              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-6">
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

              <p className="text-xs text-slate-500 mb-6 max-w-lg mx-auto">
                This cost caters for <strong>scholastic materials</strong> and <strong>boarding requirements</strong>.
              </p>

              <Link
                href="/support"
                className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-7 py-3.5 font-semibold shadow-lg transition-all hover:-translate-y-0.5"
              >
                <HandHeart size={16} /> Register as Donor
              </Link>
            </div>
          </div>
        </section>

        {/* ============ CONTACT / FEEDBACK PREVIEW ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16" id="feedback">
          <div className="rounded-3xl bg-gradient-to-br from-[#142f4a]/95 to-[#0d2338] backdrop-blur-md border border-[#e7bd5f]/30 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">

              {/* Left — Contact Info */}
              <div className="lg:col-span-6 p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7bd5f]/15 border border-[#e7bd5f]/30 text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-4">
                  <MessageSquare size={11} /> Get in Touch
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
                  We're Here to Help
                </h2>

                <p className="text-sm leading-7 text-white/75 mb-8">
                  For any inquiry, feedback, or general information about the school, please reach out. Our team responds promptly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2.5 rounded-lg bg-[#bd703f]/20 text-[#e7bd5f] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Location</p>
                      <p className="text-sm text-white/80">{schoolInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2.5 rounded-lg bg-[#bd703f]/20 text-[#e7bd5f] shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Phone</p>
                      <a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="text-sm text-white/80 hover:text-white transition block">
                        {schoolInfo.phone}
                      </a>
                      <a href={`tel:${schoolInfo.alternativePhone.replace(/\s/g, '')}`} className="text-sm text-white/80 hover:text-white transition block mt-1">
                        {schoolInfo.alternativePhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2.5 rounded-lg bg-[#bd703f]/20 text-[#e7bd5f] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Email</p>
                      <a href={`mailto:${schoolInfo.email}`} className="text-sm text-white/80 hover:text-white transition break-all">
                        {schoolInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-7 py-3.5 font-semibold shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <MessageSquare size={16} /> Send Inquiry or Feedback
                  </Link>
                </div>
              </div>

              {/* Right — Directions */}
              <div className="lg:col-span-6 relative bg-gradient-to-br from-[#bd703f] to-[#142f4a] p-8 lg:p-12 flex flex-col justify-center overflow-hidden">
                <div className="absolute -top-10 -right-10 size-64 rounded-full bg-[#e7bd5f]/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 size-64 rounded-full bg-[#bd703f]/20 blur-3xl" />

                <div className="relative">
                  <div className="size-16 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 flex items-center justify-center mb-6">
                    <MapPin size={28} className="text-[#e7bd5f]" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    How to Find Us
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f] mb-6">
                    Directions from Kampala
                  </p>

                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#e7bd5f] text-[#142f4a] text-[11px] font-bold shrink-0 mt-0.5">1</span>
                      <span className="text-sm text-white/85">Take the Kampala–Gulu Road</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#e7bd5f] text-[#142f4a] text-[11px] font-bold shrink-0 mt-0.5">2</span>
                      <span className="text-sm text-white/85">At Wobulenzi, turn right onto Bamunanika Road</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#e7bd5f] text-[#142f4a] text-[11px] font-bold shrink-0 mt-0.5">3</span>
                      <span className="text-sm text-white/85">At Bamunanika Trading Centre, take Nalweweta–Mulajje Church Road</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#e7bd5f] text-[#142f4a] text-[11px] font-bold shrink-0 mt-0.5">4</span>
                      <span className="text-sm text-white/85">Pass St. Bonaventure Primary School → Arrive at St. Kalooli Lwanga SS Mulajje</span>
                    </li>
                  </ol>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white drop-shadow-lg">Ready to Join Our Community?</h2>
          <p className="text-slate-100 max-w-2xl mx-auto text-base sm:text-lg drop-shadow">
            Applications for the upcoming academic year are now open. Get in touch with our admissions office to schedule a campus tour.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/admissions/apply" className="inline-flex items-center justify-center bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-[#bd703f]/40 transition-all hover:-translate-y-0.5">
              Apply for Admission
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
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
                <a href={schoolInfo.tiktok} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="TikTok">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
                <a href={schoolInfo.facebook} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={schoolInfo.youtube} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition opacity-50 cursor-not-allowed" aria-label="X (Twitter) — coming soon" onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
                  <span>{schoolInfo.location}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-[#e7bd5f] shrink-0" />
                  <a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition">{schoolInfo.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-[#e7bd5f] shrink-0" />
                  <a href={`tel:${schoolInfo.alternativePhone.replace(/\s/g, '')}`} className="hover:text-white transition">{schoolInfo.alternativePhone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-[#e7bd5f] shrink-0" />
                  <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition">{schoolInfo.email}</a>
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
      </div>

      {/* WhatsApp Float */}
      <a href={`https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent('Hello St. Kalooli Lwanga SS Mulajje, I would like to inquire about the school.')}`}
        target="_blank" rel="noreferrer" aria-label="Chat with the school on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1f9d58] text-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl">
        <Phone size={22} />
      </a>
    </div>
  )
}