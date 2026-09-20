'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles,
  ChevronRight,
  Heart,
  ShieldCheck,
  Music,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mdd' | 'academics'>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'

  const stats = [
    { label: 'Pass Rate', value: '98.5%', icon: Award },
    { label: 'Active Students', value: '850+', icon: Users },
    { label: 'Qualified Teachers', value: '45+', icon: GraduationCap },
    { label: 'Years Excellence', value: '25+', icon: ShieldCheck },
  ]

  const highlights = [
    {
      title: 'Holistic Academic Excellence',
      desc: 'Nurturing young minds through modern curriculum, technology integration, and personalized guidance.',
      icon: BookOpen,
      tag: 'Academics',
    },
    {
      title: 'Music, Dance & Drama (MDD)',
      desc: 'Award-winning cultural, theatrical, and musical talent development built right into our weekly routine.',
      icon: Music,
      tag: 'Co-Curricular',
    },
    {
      title: 'Safe & Nurturing Environment',
      desc: 'State-of-the-art facilities with round-the-clock safety, mentorship, and moral leadership training.',
      icon: Heart,
      tag: 'Campus Life',
    },
  ]

  const galleryPreview = [
    { src: '/images/MDD.jpg', title: 'MDD Festivals', category: 'mdd' },
    { src: '/images/MDD1.jpg', title: 'Stage Performances', category: 'mdd' },
    { src: '/images/DSC_1663 copy (1).jpg', title: 'Modern Campus Environment', category: 'academics' },
    { src: '/images/PARENTS.jpg', title: 'Community & Parent Engagement', category: 'academics' },
  ]

  const filteredGallery = activeTab === 'all' 
    ? galleryPreview 
    : galleryPreview.filter(item => item.category === activeTab)

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
    motto: 'Only the Best is Good Enough',
    phone: '+256 701 939452',
    alternativePhone: '+256 785 639406',
    email: 'info@stkalooli.ac.ug',
    location: 'Mulajje Parish, Luweero District, Uganda',
    whatsapp: '256701939452',
    founded: '1986',
    governmentAided: '2011',
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#bd703f] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#142f4a] text-slate-200 text-xs py-2 px-4 border-b border-white/10">
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
              Admissions Open
            </span>
            <Link href="/admin/login" className="hover:text-white transition">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-[#142f4a]/95 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-11 rounded-full bg-white p-1 shadow-lg ring-2 ring-[#e7bd5f]/40 group-hover:ring-[#e7bd5f]/70 transition-all overflow-hidden">
              <img 
                src={badgeSource} 
                alt="School Badge" 
                className="size-full object-contain" 
                onError={(e) => { e.currentTarget.src = fallbackBadge }}
              />
            </div>
            <div>
              <p className="font-serif font-bold text-base leading-none tracking-tight">St. Kalooli Lwanga</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7bd5f] mt-1">SS Mulajje</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-200 hover:text-[#e7bd5f] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7bd5f] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 font-semibold shadow-lg shadow-[#bd703f]/30 transition-all hover:shadow-[#bd703f]/50">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-white transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#142f4a] border-t border-white/10 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-200 hover:text-[#e7bd5f] py-1.5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full font-semibold">
                <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#142f4a] via-[#1a3a5c] to-slate-900 text-white pt-20 pb-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Background Image */}
        <img 
          src="/images/background.jpg" 
          alt="School Background" 
          className="absolute inset-0 size-full object-cover opacity-20 mix-blend-overlay"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e7bd5f]">
                <Sparkles size={14} /> Catholic Founded · Government Aided
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold leading-[1.1] tracking-tight">
                A Foundation for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] via-[#f3d387] to-[#bd703f]">
                  Purposeful Lives
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                A Catholic-founded, government-aided secondary school committed to nurturing educated, self-reliant, patriotic and God-fearing citizens.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="/admissions" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold text-base shadow-lg shadow-[#bd703f]/25 transition-all hover:shadow-[#bd703f]/40 hover:-translate-y-0.5"
                >
                  Enroll Student Now <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link 
                  href="/about" 
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-4 font-semibold text-base backdrop-blur-sm transition-all hover:-translate-y-0.5"
                >
                  Explore Our School
                </Link>
              </div>
            </div>

            {/* Right Hero - Refined Badge Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[320px] lg:max-w-none">
                {/* Glow Backdrop */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#bd703f]/40 via-[#e7bd5f]/20 to-transparent opacity-60 blur-3xl"></div>
                
                <div className="relative rounded-[1.75rem] overflow-hidden border border-white/20 bg-white/95 backdrop-blur-xl shadow-2xl">
                  {/* Decorative top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-[#142f4a] via-[#bd703f] to-[#e7bd5f]" />
                  
                  <div className="p-8">
                    {/* Badge with elegant framing */}
                    <div className="relative mx-auto w-44 h-44 mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e7bd5f]/30 to-[#bd703f]/30 blur-md" />
                      <div className="relative size-full rounded-full bg-white p-3 shadow-inner ring-1 ring-slate-200/60">
                        <img 
                          src={badgeSource} 
                          alt="Official Badge of St. Kalooli Lwanga SS Mulajje" 
                          className="size-full object-contain"
                          onError={(e) => { e.currentTarget.src = fallbackBadge }}
                        />
                      </div>
                    </div>

                    {/* Motto */}
                    <div className="text-center space-y-1">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="h-px w-6 bg-[#bd703f]/40" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd703f]">Our Motto</span>
                        <span className="h-px w-6 bg-[#bd703f]/40" />
                      </div>
                      <p className="font-serif text-2xl text-[#142f4a] leading-tight">Only the Best</p>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#bd703f]">is Good Enough</p>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-1 bg-gradient-to-r from-[#e7bd5f] via-[#bd703f] to-[#142f4a]" />
                </div>

                {/* Floating Established Card */}
                <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl hidden sm:flex items-center gap-3 text-slate-800">
                  <div className="p-2.5 bg-gradient-to-br from-[#bd703f] to-[#a65c4b] rounded-xl text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Established</p>
                    <p className="text-base font-extrabold text-[#142f4a] font-serif">{schoolInfo.founded}</p>
                  </div>
                </div>

                {/* Floating Government Aided Card */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xl hidden sm:flex items-center gap-2 text-slate-800">
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

      {/* Quick Stats Grid */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-lg shadow-slate-200/50 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex p-3 rounded-xl bg-slate-100 text-[#bd703f] mb-3 group-hover:bg-[#bd703f] group-hover:text-white transition-colors duration-300">
                <stat.icon size={22} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold font-serif text-[#142f4a]">{stat.value}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 size-28 rounded-tl-[2rem] border-l-2 border-t-2 border-[#bd703f]" />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-[#dce3e7] shadow-xl">
              <img 
                src="/images/PARENTS.jpg" 
                alt="Official school campus" 
                className="aspect-[4/3] size-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-xl bg-[#142f4a] px-5 py-4 text-white shadow-lg">
              <p className="font-serif text-3xl text-[#e7bd5f]">{schoolInfo.founded}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Established</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#a65c4b]">Welcome</p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl text-[#142f4a]">
              A school with a clear sense of purpose.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              St. Kalooli Lwanga SS Mulajje has served the young people of Mulajje Parish and the wider Luweero community since 1986. Our Catholic heritage shapes a culture of faith, learning, responsibility and service.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#a65c4b] hover:text-[#142f4a] transition-colors group">
              Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-6 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#bd703f]">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#142f4a]">
            A Foundation for Lifelong Success
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We offer a comprehensive learning experience focused on character formation, critical thinking, and artistic growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#142f4a] to-[#bd703f] opacity-0 group-hover:opacity-100 transition"></div>
              <div className="size-12 rounded-xl bg-slate-100 text-[#142f4a] flex items-center justify-center mb-6 group-hover:bg-[#bd703f] group-hover:text-white transition duration-300">
                <item.icon size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#bd703f] bg-[#bd703f]/10 px-2.5 py-1 rounded-full">
                {item.tag}
              </span>
              <h3 className="text-xl font-serif font-bold text-[#142f4a] mt-4 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Gallery Preview Section */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#bd703f]">Campus Highlights</p>
              <h2 className="text-3xl font-serif font-bold text-[#142f4a] mt-1">Life at St. Kalooli Lwanga</h2>
            </div>

            <div className="flex gap-2 p-1 bg-white rounded-xl border border-slate-200 self-start md:self-auto shadow-sm">
              {(['all', 'mdd', 'academics'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-[#142f4a] text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab === 'mdd' ? 'MDD & Arts' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="size-full object-cover transition duration-500 group-hover:scale-110" 
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <p className="text-sm font-semibold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-[#142f4a] font-semibold px-8 py-3 text-sm shadow-sm transition-all hover:-translate-y-0.5"
            >
              View Full School Gallery <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#bd703f]">Our Compass</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#142f4a]">
              Faith in Action. Excellence in Practice.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our vision, mission and values guide how we teach, learn and grow together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl bg-[#142f4a] p-8 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle,rgba(231,189,95,0.15),transparent_70%)]" />
              <div className="relative">
                <GraduationCap className="mb-12 text-[#e7bd5f]" size={32} />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f]">Our Vision</p>
                <p className="mt-4 max-w-xl font-serif text-3xl leading-tight">
                  To be a leading secondary school that nurtures educated, self-reliant, patriotic and God-fearing citizens.
                </p>
                <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f]">Our Mission</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      To provide quality education that promotes academic excellence, moral integrity, and holistic development of every learner.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f]">Our Motto</p>
                    <p className="mt-3 font-serif text-2xl text-white">Only the Best is Good Enough.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#142f4a]/10 bg-[#f7f4ee] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a65c4b]">Core Values</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Faith', 'Excellence', 'Integrity', 'Discipline', 'Service', 'Community'].map((value) => (
                  <span key={value} className="rounded-full border border-[#142f4a]/15 bg-white px-4 py-2 text-sm font-medium text-[#142f4a] hover:border-[#bd703f] hover:bg-[#bd703f]/5 transition-colors cursor-default">
                    {value}
                  </span>
                ))}
              </div>
              <div className="mt-12 flex items-center gap-3 text-sm text-slate-600">
                <Heart size={17} className="text-[#bd703f]" /> Character shapes achievement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#142f4a] to-[#1a3a5c] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle,rgba(231,189,95,0.2),transparent_65%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold">Ready to Join Our Community?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Applications for the upcoming academic year are now open. Get in touch with our admissions office to schedule a campus tour.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center justify-center bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-[#bd703f]/25 transition-all hover:-translate-y-0.5"
            >
              Apply for Admission
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Developer Credits */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white p-1 shadow-lg">
                <img 
                  src={badgeSource} 
                  alt="Badge" 
                  className="size-full object-contain" 
                  onError={(e) => { e.currentTarget.src = fallbackBadge }}
                />
              </div>
              <h3 className="font-serif font-bold text-white text-lg">St. Kalooli Lwanga</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nurturing holistic excellence through disciplined academics, spiritual integrity, and expressive cultural arts.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-white transition">About Our School</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">Academics & Curriculum</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Photo Gallery</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition">School Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Admissions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/admissions" className="hover:text-white transition">Admission Requirements</Link></li>
              <li><Link href="/fees" className="hover:text-white transition">Fees Structure</Link></li>
              <li><Link href="/term-dates" className="hover:text-white transition">Term Dates & Calendar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#e7bd5f] shrink-0" /> {schoolInfo.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#e7bd5f] shrink-0" /> {schoolInfo.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#e7bd5f] shrink-0" /> {schoolInfo.email}
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
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

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent('Hello St. Kalooli Lwanga SS Mulajje, I would like to inquire about the school.')}`}
        target="_blank" 
        rel="noreferrer" 
        aria-label="Chat with the school on WhatsApp" 
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1f9d58] text-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
      >
        <Phone size={22} />
      </a>
    </div>
  )
}