'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  GraduationCap, BookOpen, Award, Users, ArrowRight, Phone, Mail, MapPin, Sparkles,
  ChevronRight, Heart, ShieldCheck, Music, Menu, X, HandHeart, Laptop, Globe, Trophy,
  Palette, Flag, Star, BookMarked, CheckCircle2, Languages, FlaskConical, Calculator,
  User, Calendar, Home, FileText, Send, Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mdd' | 'academics'>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [badgeLoaded, setBadgeLoaded] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '', dateOfBirth: '', gender: '', level: '', combination: '',
    previousSchool: '', parentName: '', parentPhone: '', parentEmail: '',
    address: '', boarding: '', message: ''
  })

  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'

  // Background slideshow — only 2 images for faster loading
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

  // Preload all background images once on mount for instant switching
  useEffect(() => {
    backgroundSlides.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*NEW ADMISSION APPLICATION*\n\n` +
      `*Student Name:* ${formData.studentName}\n` +
      `*Date of Birth:* ${formData.dateOfBirth}\n` +
      `*Gender:* ${formData.gender}\n` +
      `*Level Applying For:* ${formData.level}\n` +
      `*Combination (A'Level):* ${formData.combination || 'N/A'}\n` +
      `*Previous School:* ${formData.previousSchool}\n` +
      `*Boarding/Day:* ${formData.boarding}\n\n` +
      `*Parent/Guardian:* ${formData.parentName}\n` +
      `*Parent Phone:* ${formData.parentPhone}\n` +
      `*Parent Email:* ${formData.parentEmail || 'N/A'}\n` +
      `*Address:* ${formData.address || 'N/A'}\n\n` +
      `*Additional Info:* ${formData.message || 'None'}`

    window.open(`https://wa.me/256779268469?text=${encodeURIComponent(message)}`, '_blank')
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 8000)
  }

  const stats = [
    { label: 'Pass Rate', value: '98.5%', icon: Award },
    { label: 'Active Students', value: '850+', icon: Users },
    { label: 'Qualified Teachers', value: '45+', icon: GraduationCap },
    { label: 'Years Excellence', value: '25+', icon: ShieldCheck },
  ]

  const highlights = [
    { title: 'Holistic Academic Excellence', desc: 'Nurturing young minds through modern curriculum, technology integration, and personalized guidance.', icon: BookOpen, tag: 'Academics' },
    { title: 'Music, Dance & Drama (MDD)', desc: 'Award-winning cultural, theatrical, and musical talent development built right into our weekly routine.', icon: Music, tag: 'Co-Curricular' },
    { title: 'Safe & Nurturing Environment', desc: 'State-of-the-art facilities with round-the-clock safety, mentorship, and moral leadership training.', icon: Heart, tag: 'Campus Life' },
  ]

  const subjects = [
    'English', 'Mathematics', 'Biology', 'Physics', 'Chemistry',
    'History', 'Geography', 'CRE', 'ICT', 'Chinese',
    'Entrepreneurship', 'Luganda', 'Agriculture', 'Fine Art', 'Kiswahili'
  ]

  const subjectCategories = [
    { category: 'Sciences', icon: FlaskConical, color: 'bg-emerald-50 border-emerald-200 text-emerald-700', subjects: ['Biology', 'Physics', 'Chemistry', 'Agriculture'] },
    { category: 'Mathematics', icon: Calculator, color: 'bg-blue-50 border-blue-200 text-blue-700', subjects: ['Mathematics'] },
    { category: 'Languages', icon: Languages, color: 'bg-purple-50 border-purple-200 text-purple-700', subjects: ['English', 'Luganda', 'Kiswahili', 'Chinese'] },
    { category: 'Humanities', icon: Globe, color: 'bg-amber-50 border-amber-200 text-amber-700', subjects: ['History', 'Geography', 'CRE'] },
    { category: 'Applied & Creative', icon: Palette, color: 'bg-rose-50 border-rose-200 text-rose-700', subjects: ['ICT', 'Entrepreneurship', 'Fine Art'] },
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

  // ===== LEADERSHIP — 5 MEMBERS =====
  const leadership = [
    { name: 'Madam Noe', role: 'Headteacher', image: '/images/HM NOE.jpg' },
    { name: 'Mr. Lwegaba Emmanuel', role: 'Deputy Headteacher', image: '/images/LWEGABA EMMANUEL1.JPG.jpeg' },
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

  // ===== GALLERY — REPLACED campus items with new WhatsApp images =====
  const galleryPreview = [
    // MDD Series
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
    // New WhatsApp images (Sept 21) — replacing the campus items
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.29 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.30 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.31 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.32 PM (1).jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.32 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-21 at 1.37.33 PM.jpeg', title: 'School Moment', category: 'academics', description: 'Recent school activity' },
    // Older WhatsApp images
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.28 AM.jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.29 AM (1).jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.29 AM (2).jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.29 AM.jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.30 AM (1).jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.30 AM.jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    { src: '/images/WhatsApp Image 2026-09-19 at 9.40.31 AM.jpeg', title: 'School Event', category: 'academics', description: 'Recent school activity' },
    // Campus
    { src: '/images/PARENTS.jpg', title: 'Parent Engagement', category: 'academics', description: 'Parents meeting day' },
  ]

  const filteredGallery = activeTab === 'all' ? galleryPreview : galleryPreview.filter(item => item.category === activeTab)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ]

  const schoolInfo = {
    name: 'St. Kalooli Lwanga SS Mulajje',
    shortName: 'St. Kalooli Lwanga',
    motto: 'Only the Best is Good Enough',
    phone: '+256 779 268 469',
    alternativePhone: '+256 705 400 493',
    email: 'skalssm.2013@gmail.com',
    location: 'Mulajje Parish, Bamunanika Sub County, Luweero District, Uganda',
    whatsapp: '256779268469',
    founded: '1986',
    governmentAided: '2011',
    diocese: 'Kasana Luweero Diocese',
    tiktok: 'https://vm.tiktok.com/ZS9A1Ue4SRMcc-NA2Ld/',
  }

  return (
    <div className="min-h-screen relative text-slate-800 font-sans selection:bg-[#bd703f] selection:text-white">
      
      {/* ============ FIXED FULL-PAGE BACKGROUND SLIDESHOW (FADED) ============ */}
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
              <Link href="/admin/login" className="hover:text-white transition">Admin Portal</Link>
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

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-[#e7bd5f] transition-colors relative group">
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
                <Link href="#admissions-form">Apply Now</Link>
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
                  <Link href="#admissions-form" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
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
                  A Catholic-founded, government-aided secondary school committed to nurturing educated, self-reliant, patriotic and God-fearing citizens.
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
                  <Link href="#admissions-form" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold text-base shadow-lg shadow-[#bd703f]/40 transition-all hover:shadow-[#bd703f]/60 hover:-translate-y-0.5">
                    Apply Online <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <Link href="#about" className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 hover:bg-white/10 text-white rounded-full px-8 py-4 font-semibold text-base backdrop-blur-sm transition-all hover:-translate-y-0.5">
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
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Located in Bamunanika Sub County, Luweero District, under Kasana Luweero Diocese, we became a government-aided school in 2011. Our motto — <em className="text-[#a65c4b] font-semibold">"Only the Best is Good Enough"</em> — reflects our commitment to excellence.
                </p>
                <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#a65c4b] hover:text-[#142f4a] transition-colors group">
                  Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ACADEMICS ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16" id="academics">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Academic Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Comprehensive Curriculum for O'Level & A'Level
            </h2>
            <p className="text-slate-100 text-sm sm:text-base drop-shadow">
              We prepare our learners with a broad range of subjects and combinations to ensure holistic academic and professional development.
            </p>
          </div>

          <div className="rounded-3xl bg-[#142f4a]/95 backdrop-blur-md p-8 text-white shadow-xl lg:p-10 mb-8 border border-white/10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#e7bd5f]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e7bd5f]">
                  Advanced Level
                </span>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-white">A'Level Combinations</h3>
                <p className="mt-2 text-lg text-white/80">Both Science and Arts combinations are offered.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-[#e7bd5f] backdrop-blur-md">
                  <FlaskConical size={18} className="text-[#e7bd5f]" /> Sciences
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-[#e7bd5f] backdrop-blur-md">
                  <Palette size={18} className="text-[#e7bd5f]" /> Arts
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white drop-shadow-lg mb-6">Subjects Offered</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {subjectCategories.map((group, i) => (
              <div key={i} className={`rounded-2xl border-2 ${group.color} bg-white/95 backdrop-blur-md p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white shadow-sm">
                    <group.icon size={20} />
                  </div>
                  <h4 className="font-serif text-lg font-bold">{group.category}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.subjects.map((s) => (
                    <span key={s} className="text-xs font-medium bg-white/70 px-2.5 py-1 rounded-md">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 p-6 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a65c4b] mb-4">All Subjects at a Glance</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {subjects.map((subject, idx) => (
                <div key={subject} className="flex items-center gap-2 rounded-xl border border-[#142f4a]/10 bg-[#f7f4ee] p-3 transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#bd703f] text-[10px] font-bold text-white shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#142f4a]">{subject}</span>
                </div>
              ))}
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

        {/* ============ LEADERSHIP — 5 MEMBERS ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Our Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Guiding Our Mission Forward
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
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

        {/* ============ ADMISSIONS FORM ============ */}
        <section className="max-w-5xl mx-auto px-6 py-16" id="admissions-form">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Admissions 2026</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Apply Online — Fill the Form Below
            </h2>
            <p className="text-slate-100 text-sm sm:text-base drop-shadow">
              Complete this form and submit. Your application will be sent directly to our admissions office via WhatsApp for immediate processing.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl p-6 md:p-10">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142f4a] mb-3">Application Submitted!</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  Your application has been prepared and is opening in WhatsApp. Please send the message to complete your submission. Our admissions team will get back to you shortly.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all">
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Student Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Student's Full Name *</label>
                      <input type="text" name="studentName" value={formData.studentName} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="e.g., Nakato Sarah" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Date of Birth *</label>
                      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Gender *</label>
                      <select name="gender" value={formData.gender} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm bg-white">
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Level Applying For *</label>
                      <select name="level" value={formData.level} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm bg-white">
                        <option value="">Select level</option>
                        <option value="Senior 1 (O'Level)">Senior 1 (O'Level)</option>
                        <option value="Senior 2 (O'Level)">Senior 2 (O'Level)</option>
                        <option value="Senior 3 (O'Level)">Senior 3 (O'Level)</option>
                        <option value="Senior 4 (O'Level)">Senior 4 (O'Level)</option>
                        <option value="Senior 5 (A'Level)">Senior 5 (A'Level)</option>
                        <option value="Senior 6 (A'Level)">Senior 6 (A'Level)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">A'Level Combination (if applicable)</label>
                      <input type="text" name="combination" value={formData.combination} onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="e.g., PCM, HEG, BCM" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Previous School *</label>
                      <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="Name of previous school" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Boarding / Day *</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition ${formData.boarding === 'Boarding' ? 'border-[#bd703f] bg-[#bd703f]/5' : 'border-slate-300 hover:border-slate-400'}`}>
                          <input type="radio" name="boarding" value="Boarding" checked={formData.boarding === 'Boarding'} onChange={handleFormChange} className="accent-[#bd703f]" required />
                          <Home size={16} className="text-[#bd703f]" />
                          <span className="text-sm font-medium">Boarding</span>
                        </label>
                        <label className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition ${formData.boarding === 'Day' ? 'border-[#bd703f] bg-[#bd703f]/5' : 'border-slate-300 hover:border-slate-400'}`}>
                          <input type="radio" name="boarding" value="Day" checked={formData.boarding === 'Day'} onChange={handleFormChange} className="accent-[#bd703f]" required />
                          <Calendar size={16} className="text-[#bd703f]" />
                          <span className="text-sm font-medium">Day</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <Users size={18} className="text-[#bd703f]" /> Parent / Guardian Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Parent / Guardian Name *</label>
                      <input type="text" name="parentName" value={formData.parentName} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                      <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleFormChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="+256 7XX XXX XXX" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                      <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Home Address</label>
                      <input type="text" name="address" value={formData.address} onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="Village, Parish, Sub-county" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                    <FileText size={14} className="text-[#bd703f]" /> Additional Information / Message
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleFormChange} rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm resize-none" placeholder="Any special requests, questions or additional information..." />
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 text-center sm:text-left">
                    By submitting, you agree to be contacted by the school. Your info is sent securely via WhatsApp.
                  </p>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-[#bd703f]/25 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                    <Send size={16} /> Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8 text-center text-sm text-slate-100 drop-shadow">
            Prefer to talk? Call <a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="font-semibold text-[#e7bd5f] hover:underline">{schoolInfo.phone}</a> or{' '}
            <a href={`https://wa.me/${schoolInfo.whatsapp}`} target="_blank" rel="noreferrer" className="font-semibold text-[#e7bd5f] hover:underline">chat on WhatsApp</a>.
          </div>
        </section>

        {/* ============ SUPPORT ============ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Support Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">Partner With Us to Transform Lives</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: BookOpen, title: 'Sponsor a Student', desc: 'Support a deserving student\'s education by covering tuition, scholastic materials, and boarding fees.', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { icon: GraduationCap, title: 'Support Facilities', desc: 'Contribute to the construction of classrooms, libraries, laboratories, and dormitories.', color: 'bg-amber-50 text-amber-700 border-amber-200' },
              { icon: HandHeart, title: 'General Donation', desc: 'Any contribution goes a long way in supporting school programs, sports, and co-curricular activities.', color: 'bg-rose-50 text-rose-700 border-rose-200' }
            ].map((item, i) => (
              <div key={i} className={`group rounded-2xl border-2 ${item.color} bg-opacity-95 backdrop-blur-md p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}>
                <div className="p-3 rounded-xl bg-white shadow-sm inline-block mb-5 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#142f4a]/95 backdrop-blur-md p-8 md:p-12 text-white text-center shadow-xl border border-white/10">
            <HandHeart size={40} className="text-[#e7bd5f] mx-auto mb-4" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Make a Difference Today</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5">
                <Phone size={16} /> Call to Donate
              </a>
              <a href={`mailto:${schoolInfo.email}?subject=Donation%20Inquiry`} className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white rounded-full px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
                <Mail size={16} /> Email Us
              </a>
              <a href={`https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent('Hello, I would like to support St. Kalooli Lwanga SS Mulajje.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#1f9d58] hover:bg-[#18864a] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5">
                <Phone size={16} /> WhatsApp
              </a>
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
            <Link href="#admissions-form" className="inline-flex items-center justify-center bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-[#bd703f]/40 transition-all hover:-translate-y-0.5">
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
                <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#e7bd5f] transition" aria-label="X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/about" className="hover:text-white transition">About Our School</Link></li>
                <li><Link href="/academics" className="hover:text-white transition">Academics & Curriculum</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition">Photo Gallery</Link></li>
                <li><Link href="/leadership" className="hover:text-white transition">School Leadership</Link></li>
                <li><Link href="/support" className="hover:text-white transition">Support / Donate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Admissions</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/admissions" className="hover:text-white transition">Admission Requirements</Link></li>
                <li><Link href="#admissions-form" className="hover:text-white transition">Apply Online</Link></li>
                <li><Link href="/fees" className="hover:text-white transition">Fees Structure</Link></li>
                <li><Link href="/term-dates" className="hover:text-white transition">Term Dates & Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Info</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2"><MapPin size={14} className="text-[#e7bd5f] shrink-0 mt-0.5" /><span>{schoolInfo.location}</span></li>
                <li className="flex items-center gap-2"><Phone size={14} className="text-[#e7bd5f] shrink-0" /><a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition">{schoolInfo.phone}</a></li>
                <li className="flex items-center gap-2"><Phone size={14} className="text-[#e7bd5f] shrink-0" /><a href={`tel:${schoolInfo.alternativePhone.replace(/\s/g, '')}`} className="hover:text-white transition">{schoolInfo.alternativePhone}</a></li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-[#e7bd5f] shrink-0" /><a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition">{schoolInfo.email}</a></li>
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