'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  GraduationCap, BookOpen, Award, Users, ArrowRight, Phone, Mail, MapPin, Sparkles,
  ChevronRight, Heart, ShieldCheck, Music, Menu, X, HandHeart, Laptop, Globe, Trophy,
  Palette, Flag, Star, BookMarked, CheckCircle2, Languages, FlaskConical, Calculator,
  User, Calendar, Home, FileText, Send, Check, Cross, Quote, Flame, Crown,
  HeartPulse, Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mdd' | 'academics'>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [badgeLoaded, setBadgeLoaded] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [donorSubmitted, setDonorSubmitted] = useState(false)

  // Admissions: O'Level vs A'Level
  const [applicantType, setApplicantType] = useState<'olevel' | 'alevel'>('olevel')

  // ============ O'LEVEL FORM STATE (S.1 from PLE) ============
  const [olevelData, setOlevelData] = useState({
    studentName: '', dateOfBirth: '', gender: '', religion: '',
    pleIndex: '', pleYear: '',
    englishAgg: '', mathAgg: '', sstAgg: '', scienceAgg: '',
    health: '', favouriteSport: '', boarding: '',
    fatherName: '', fatherContact: '', fatherWhatsapp: '', fatherNin: '',
    fatherVillage: '', fatherParish: '', fatherSubcounty: '', fatherDistrict: '',
    motherName: '', motherContact: '', motherWhatsapp: '', motherNin: '',
    motherVillage: '', motherParish: '', motherSubcounty: '', motherDistrict: '',
  })

  // ============ A'LEVEL FORM STATE (S.5 from UCE) ============
  const [alevelData, setAlevelData] = useState({
    studentName: '', dateOfBirth: '', gender: '', religion: '',
    formerSchool: '', uceIndex: '', lin: '',
    english: '', math: '', biology: '', chemistry: '', physics: '',
    history: '', cre: '', agriculture: '', geography: '', luganda: '',
    kiswahili: '', fineArt: '', ict: '', chinese: '',
    preferredCombination: '', preferredSport: '', coCurricular: '', health: '',
    fatherName: '', fatherContact: '', fatherWhatsapp: '', fatherNin: '',
    fatherVillage: '', fatherParish: '', fatherSubcounty: '', fatherCounty: '',
    motherName: '', motherContact: '', motherWhatsapp: '', motherNin: '',
    motherVillage: '', motherParish: '', motherSubcounty: '', motherDistrict: '',
  })

  // ============ DONOR FORM STATE ============
  const [donorData, setDonorData] = useState({
    donorName: '', donorContact: '', donorCountry: '', donorAddress: '', donorAmount: '', donorMessage: '',
  })

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

  // ============ PLE CALCULATIONS ============
  const calculatePleTotal = () => {
    const nums = [olevelData.englishAgg, olevelData.mathAgg, olevelData.sstAgg, olevelData.scienceAgg]
      .map(v => parseInt(v, 10))
      .filter(n => !isNaN(n))
    if (nums.length === 4) return nums.reduce((a, b) => a + b, 0)
    return null
  }

  const calculateDivision = (total: number | null) => {
    if (total === null) return ''
    if (total >= 4 && total <= 12) return 'Division I'
    if (total >= 13 && total <= 23) return 'Division II'
    if (total >= 24 && total <= 29) return 'Division III'
    if (total >= 30 && total <= 34) return 'Division IV'
    return 'Division U'
  }

  // ============ FORM HANDLERS ============
  const handleOlevelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setOlevelData({ ...olevelData, [e.target.name]: e.target.value })
  }

  const handleAlevelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAlevelData({ ...alevelData, [e.target.name]: e.target.value })
  }

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorData({ ...donorData, [e.target.name]: e.target.value })
  }

  const handleOlevelSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const total = calculatePleTotal()
    const division = calculateDivision(total)

    const message = `*NEW S.1 APPLICATION (O'LEVEL)*\n\n` +
      `*Student:* ${olevelData.studentName}\n` +
      `*DOB:* ${olevelData.dateOfBirth}\n` +
      `*Gender:* ${olevelData.gender}\n` +
      `*Religion:* ${olevelData.religion || 'N/A'}\n\n` +
      `*PLE INDEX:* ${olevelData.pleIndex}\n` +
      `*PLE YEAR:* ${olevelData.pleYear}\n` +
      `*Aggregates:* Eng=${olevelData.englishAgg}, Math=${olevelData.mathAgg}, SST=${olevelData.sstAgg}, Sci=${olevelData.scienceAgg}\n` +
      `*TOTAL AGGREGATE:* ${total ?? 'N/A'}\n` +
      `*DIVISION:* ${division || 'N/A'}\n\n` +
      `*Boarding/Day:* ${olevelData.boarding}\n` +
      `*Health:* ${olevelData.health || 'None'}\n` +
      `*Sport:* ${olevelData.favouriteSport || 'N/A'}\n\n` +
      `*--- FATHER ---*\n` +
      `*Name:* ${olevelData.fatherName}\n` +
      `*Contact:* ${olevelData.fatherContact}\n` +
      `*WhatsApp:* ${olevelData.fatherWhatsapp || 'N/A'}\n` +
      `*NIN:* ${olevelData.fatherNin || 'N/A'}\n` +
      `*Village:* ${olevelData.fatherVillage || 'N/A'}\n` +
      `*Parish:* ${olevelData.fatherParish || 'N/A'}\n` +
      `*Subcounty:* ${olevelData.fatherSubcounty || 'N/A'}\n` +
      `*District:* ${olevelData.fatherDistrict || 'N/A'}\n\n` +
      `*--- MOTHER ---*\n` +
      `*Name:* ${olevelData.motherName}\n` +
      `*Contact:* ${olevelData.motherContact}\n` +
      `*WhatsApp:* ${olevelData.motherWhatsapp || 'N/A'}\n` +
      `*NIN:* ${olevelData.motherNin || 'N/A'}\n` +
      `*Village:* ${olevelData.motherVillage || 'N/A'}\n` +
      `*Parish:* ${olevelData.motherParish || 'N/A'}\n` +
      `*Subcounty:* ${olevelData.motherSubcounty || 'N/A'}\n` +
      `*District:* ${olevelData.motherDistrict || 'N/A'}`

    window.open(`https://wa.me/256779268469?text=${encodeURIComponent(message)}`, '_blank')
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 8000)
  }

  const handleAlevelSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*NEW S.5 APPLICATION (A'LEVEL)*\n\n` +
      `*Student:* ${alevelData.studentName}\n` +
      `*DOB:* ${alevelData.dateOfBirth}\n` +
      `*Gender:* ${alevelData.gender}\n` +
      `*Religion:* ${alevelData.religion || 'N/A'}\n\n` +
      `*Former School:* ${alevelData.formerSchool}\n` +
      `*UCE Index:* ${alevelData.uceIndex}\n` +
      `*LIN:* ${alevelData.lin}\n\n` +
      `*--- SUBJECT SCORES ---*\n` +
      `English: ${alevelData.english || '-'}\n` +
      `Math: ${alevelData.math || '-'}\n` +
      `Biology: ${alevelData.biology || '-'}\n` +
      `Chemistry: ${alevelData.chemistry || '-'}\n` +
      `Physics: ${alevelData.physics || '-'}\n` +
      `History: ${alevelData.history || '-'}\n` +
      `CRE: ${alevelData.cre || '-'}\n` +
      `Agriculture: ${alevelData.agriculture || '-'}\n` +
      `Geography: ${alevelData.geography || '-'}\n` +
      `Luganda: ${alevelData.luganda || '-'}\n` +
      `Kiswahili: ${alevelData.kiswahili || '-'}\n` +
      `Fine Art: ${alevelData.fineArt || '-'}\n` +
      `ICT: ${alevelData.ict || '-'}\n` +
      `Chinese: ${alevelData.chinese || '-'}\n\n` +
      `*Preferred Combination:* ${alevelData.preferredCombination}\n` +
      `*Sport:* ${alevelData.preferredSport || 'N/A'}\n` +
      `*Co-Curricular:* ${alevelData.coCurricular || 'N/A'}\n` +
      `*Health:* ${alevelData.health || 'None'}\n\n` +
      `*--- FATHER ---*\n` +
      `*Name:* ${alevelData.fatherName}\n` +
      `*Contact:* ${alevelData.fatherContact}\n` +
      `*WhatsApp:* ${alevelData.fatherWhatsapp || 'N/A'}\n` +
      `*NIN:* ${alevelData.fatherNin || 'N/A'}\n` +
      `*Village:* ${alevelData.fatherVillage || 'N/A'}\n` +
      `*Parish:* ${alevelData.fatherParish || 'N/A'}\n` +
      `*Subcounty:* ${alevelData.fatherSubcounty || 'N/A'}\n` +
      `*County:* ${alevelData.fatherCounty || 'N/A'}\n\n` +
      `*--- MOTHER ---*\n` +
      `*Name:* ${alevelData.motherName}\n` +
      `*Contact:* ${alevelData.motherContact}\n` +
      `*WhatsApp:* ${alevelData.motherWhatsapp || 'N/A'}\n` +
      `*NIN:* ${alevelData.motherNin || 'N/A'}\n` +
      `*Village:* ${alevelData.motherVillage || 'N/A'}\n` +
      `*Parish:* ${alevelData.motherParish || 'N/A'}\n` +
      `*Subcounty:* ${alevelData.motherSubcounty || 'N/A'}\n` +
      `*District:* ${alevelData.motherDistrict || 'N/A'}`

    window.open(`https://wa.me/256779268469?text=${encodeURIComponent(message)}`, '_blank')
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 8000)
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
    { name: 'Saint', href: '/saint-of-the-day' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Downloads', href: '/downloads' },
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
              <Link href="#support" className="hover:text-white transition flex items-center gap-1">
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

            <nav className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-[#e7bd5f] transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7bd5f] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="#support" className="text-sm font-medium text-[#e7bd5f] hover:text-white transition-colors flex items-center gap-1.5">
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

        {/* ============ ADMISSIONS FORM ============ */}
        <section className="max-w-5xl mx-auto px-6 py-16" id="admissions-form">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f]">Admissions 2026</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">
              Apply Online — Fill the Form Below
            </h2>
            <p className="text-slate-100 text-sm sm:text-base drop-shadow">
              Choose O'Level (S.1 from PLE) or A'Level (S.5 from UCE) and complete the form. Your application will be sent to our admissions office via WhatsApp.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <button type="button" onClick={() => setApplicantType('olevel')}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  applicantType === 'olevel' ? 'bg-[#bd703f] text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}>
                <span className="flex items-center gap-2">
                  <BookOpen size={16} /> O'Level (S.1 from PLE)
                </span>
              </button>
              <button type="button" onClick={() => setApplicantType('alevel')}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  applicantType === 'alevel' ? 'bg-[#bd703f] text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}>
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} /> A'Level (S.5 from UCE)
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl p-6 md:p-10">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142f4a] mb-3">Application Submitted!</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  Your application has been prepared and is opening in WhatsApp. Please send the message to complete your submission.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all">
                  Submit Another Application
                </button>
              </div>
            ) : applicantType === 'olevel' ? (
              /* ============ O'LEVEL FORM ============ */
              <form onSubmit={handleOlevelSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Student Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Student's Full Name *</label>
                      <input type="text" name="studentName" value={olevelData.studentName} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., Nakato Sarah" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Date of Birth *</label>
                      <input type="date" name="dateOfBirth" value={olevelData.dateOfBirth} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Gender *</label>
                      <select name="gender" value={olevelData.gender} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm bg-white">
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Religion</label>
                      <input type="text" name="religion" value={olevelData.religion} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., Catholic, Anglican, Muslim" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <Award size={18} className="text-[#bd703f]" /> PLE Results
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">PLE Index Number *</label>
                      <input type="text" name="pleIndex" value={olevelData.pleIndex} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., 012345/067" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Year of PLE *</label>
                      <input type="text" name="pleYear" value={olevelData.pleYear} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., 2025" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#f7f4ee] border border-[#142f4a]/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#a65c4b] mb-4">
                      PLE Subject Aggregates (1-9, lower is better)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">English *</label>
                        <input type="number" name="englishAgg" value={olevelData.englishAgg} onChange={handleOlevelChange} required min="1" max="9"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                          placeholder="1-9" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mathematics *</label>
                        <input type="number" name="mathAgg" value={olevelData.mathAgg} onChange={handleOlevelChange} required min="1" max="9"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                          placeholder="1-9" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">SST *</label>
                        <input type="number" name="sstAgg" value={olevelData.sstAgg} onChange={handleOlevelChange} required min="1" max="9"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                          placeholder="1-9" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Science *</label>
                        <input type="number" name="scienceAgg" value={olevelData.scienceAgg} onChange={handleOlevelChange} required min="1" max="9"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                          placeholder="1-9" />
                      </div>
                    </div>

                    {calculatePleTotal() !== null && (
                      <div className="mt-5 grid grid-cols-2 gap-4">
                        <div className="rounded-xl bg-[#142f4a] p-4 text-white text-center">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Total Aggregate</p>
                          <p className="font-serif text-3xl font-bold">{calculatePleTotal()}</p>
                        </div>
                        <div className="rounded-xl bg-[#bd703f] p-4 text-white text-center">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">Division</p>
                          <p className="font-serif text-3xl font-bold">{calculateDivision(calculatePleTotal())}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <HeartPulse size={18} className="text-[#bd703f]" /> Health & Interests
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Health Challenges (if any)</label>
                      <input type="text" name="health" value={olevelData.health} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., Asthma, Allergies, None" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Favourite Sport</label>
                      <input type="text" name="favouriteSport" value={olevelData.favouriteSport} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., Football, Netball, Athletics" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Boarding / Day *</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition ${olevelData.boarding === 'Boarding' ? 'border-[#bd703f] bg-[#bd703f]/5' : 'border-slate-300 hover:border-slate-400'}`}>
                          <input type="radio" name="boarding" value="Boarding" checked={olevelData.boarding === 'Boarding'} onChange={handleOlevelChange} className="accent-[#bd703f]" required />
                          <Home size={16} className="text-[#bd703f]" />
                          <span className="text-sm font-medium">Boarding</span>
                        </label>
                        <label className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition ${olevelData.boarding === 'Day' ? 'border-[#bd703f] bg-[#bd703f]/5' : 'border-slate-300 hover:border-slate-400'}`}>
                          <input type="radio" name="boarding" value="Day" checked={olevelData.boarding === 'Day'} onChange={handleOlevelChange} className="accent-[#bd703f]" required />
                          <Calendar size={16} className="text-[#bd703f]" />
                          <span className="text-sm font-medium">Day</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Father's Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="fatherName" value={olevelData.fatherName} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Contact *</label>
                      <input type="tel" name="fatherContact" value={olevelData.fatherContact} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="+256 7XX XXX XXX" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number</label>
                      <input type="tel" name="fatherWhatsapp" value={olevelData.fatherWhatsapp} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">NIN</label>
                      <input type="text" name="fatherNin" value={olevelData.fatherNin} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="National ID Number" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Village</label>
                      <input type="text" name="fatherVillage" value={olevelData.fatherVillage} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Parish</label>
                      <input type="text" name="fatherParish" value={olevelData.fatherParish} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subcounty</label>
                      <input type="text" name="fatherSubcounty" value={olevelData.fatherSubcounty} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">District</label>
                      <input type="text" name="fatherDistrict" value={olevelData.fatherDistrict} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Mother's Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="motherName" value={olevelData.motherName} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Contact *</label>
                      <input type="tel" name="motherContact" value={olevelData.motherContact} onChange={handleOlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="+256 7XX XXX XXX" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number</label>
                      <input type="tel" name="motherWhatsapp" value={olevelData.motherWhatsapp} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">NIN</label>
                      <input type="text" name="motherNin" value={olevelData.motherNin} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="National ID Number" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Village</label>
                      <input type="text" name="motherVillage" value={olevelData.motherVillage} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Parish</label>
                      <input type="text" name="motherParish" value={olevelData.motherParish} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subcounty</label>
                      <input type="text" name="motherSubcounty" value={olevelData.motherSubcounty} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">District</label>
                      <input type="text" name="motherDistrict" value={olevelData.motherDistrict} onChange={handleOlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-[#bd703f]/25 transition-all hover:-translate-y-0.5">
                    <Send size={16} /> Submit S.1 Application
                  </button>
                </div>
              </form>
            ) : (
              /* ============ A'LEVEL FORM ============ */
              <form onSubmit={handleAlevelSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Student Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Student's Full Name *</label>
                      <input type="text" name="studentName" value={alevelData.studentName} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Date of Birth *</label>
                      <input type="date" name="dateOfBirth" value={alevelData.dateOfBirth} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Gender *</label>
                      <select name="gender" value={alevelData.gender} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm bg-white">
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Religion</label>
                      <input type="text" name="religion" value={alevelData.religion} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <GraduationCap size={18} className="text-[#bd703f]" /> UCE Results
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Former School *</label>
                      <input type="text" name="formerSchool" value={alevelData.formerSchool} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">UCE Index Number *</label>
                      <input type="text" name="uceIndex" value={alevelData.uceIndex} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="e.g., U0123/567" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">LIN</label>
                      <input type="text" name="lin" value={alevelData.lin} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" placeholder="Learner ID Number" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#f7f4ee] border border-[#142f4a]/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#a65c4b] mb-4">
                      UCE Subject Scores (1-9)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { name: 'english', label: 'English' },
                        { name: 'math', label: 'Mathematics' },
                        { name: 'biology', label: 'Biology' },
                        { name: 'chemistry', label: 'Chemistry' },
                        { name: 'physics', label: 'Physics' },
                        { name: 'history', label: 'History' },
                        { name: 'cre', label: 'CRE' },
                        { name: 'agriculture', label: 'Agriculture' },
                        { name: 'geography', label: 'Geography' },
                        { name: 'luganda', label: 'Luganda' },
                        { name: 'kiswahili', label: 'Kiswahili' },
                        { name: 'fineArt', label: 'Fine Art' },
                        { name: 'ict', label: 'ICT' },
                        { name: 'chinese', label: 'Chinese' },
                      ].map((subj) => (
                        <div key={subj.name}>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">{subj.label}</label>
                          <input
                            type="number"
                            name={subj.name}
                            value={alevelData[subj.name as keyof typeof alevelData]}
                            onChange={handleAlevelChange}
                            min="1" max="9"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                            placeholder="1-9" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred A'Level Combination *</label>
                    <input type="text" name="preferredCombination" value={alevelData.preferredCombination} onChange={handleAlevelChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                      placeholder="e.g., PCM, HEG, BCM, PCB, HEL" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <HeartPulse size={18} className="text-[#bd703f]" /> Health & Interests
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Sport</label>
                      <input type="text" name="preferredSport" value={alevelData.preferredSport} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Co-Curricular Activity</label>
                      <input type="text" name="coCurricular" value={alevelData.coCurricular} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Health Challenges</label>
                      <input type="text" name="health" value={alevelData.health} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Father's Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="fatherName" value={alevelData.fatherName} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Contact *</label>
                      <input type="tel" name="fatherContact" value={alevelData.fatherContact} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number</label>
                      <input type="tel" name="fatherWhatsapp" value={alevelData.fatherWhatsapp} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">NIN</label>
                      <input type="text" name="fatherNin" value={alevelData.fatherNin} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Village</label>
                      <input type="text" name="fatherVillage" value={alevelData.fatherVillage} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Parish</label>
                      <input type="text" name="fatherParish" value={alevelData.fatherParish} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subcounty</label>
                      <input type="text" name="fatherSubcounty" value={alevelData.fatherSubcounty} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">County</label>
                      <input type="text" name="fatherCounty" value={alevelData.fatherCounty} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-lg font-bold text-[#142f4a] mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#bd703f]" /> Mother's Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="motherName" value={alevelData.motherName} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Contact *</label>
                      <input type="tel" name="motherContact" value={alevelData.motherContact} onChange={handleAlevelChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number</label>
                      <input type="tel" name="motherWhatsapp" value={alevelData.motherWhatsapp} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">NIN</label>
                      <input type="text" name="motherNin" value={alevelData.motherNin} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Village</label>
                      <input type="text" name="motherVillage" value={alevelData.motherVillage} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Parish</label>
                      <input type="text" name="motherParish" value={alevelData.motherParish} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subcounty</label>
                      <input type="text" name="motherSubcounty" value={alevelData.motherSubcounty} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">District</label>
                      <input type="text" name="motherDistrict" value={alevelData.motherDistrict} onChange={handleAlevelChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-[#bd703f]/25 transition-all hover:-translate-y-0.5">
                    <Send size={16} /> Submit S.5 Application
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Download CTA */}
          <div className="mt-6 rounded-2xl bg-[#e7bd5f]/10 backdrop-blur-md border border-[#e7bd5f]/30 p-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 rounded-xl bg-[#e7bd5f]/20 text-[#e7bd5f] shrink-0">
              <FileText size={22} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold text-white text-sm">Need the full requirements list?</p>
              <p className="text-xs text-white/70 mt-0.5">Download or print the complete checklist for O'Level or A'Level before reporting.</p>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Download size={14} /> View Downloads
            </Link>
          </div>
        </section>

        {/* ============ SUPPORT / DONATE ============ */}
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

          <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl p-8 md:p-10 mb-8 max-w-3xl mx-auto">
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

          <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl p-6 md:p-10 max-w-3xl mx-auto mb-8">
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
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="donorName" value={donorData.donorName} onChange={handleDonorChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="e.g., John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Contact (Phone/Email) *</label>
                      <input type="text" name="donorContact" value={donorData.donorContact} onChange={handleDonorChange} required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#bd703f] focus:ring-2 focus:ring-[#bd703f]/20 outline-none transition text-sm"
                        placeholder="+256 7XX XXX XXX or email" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Country *</label>
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
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message / Purpose</label>
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

          <div className="rounded-2xl bg-[#142f4a]/95 backdrop-blur-md p-8 md:p-12 text-white text-center shadow-xl border border-white/10">
            <HandHeart size={40} className="text-[#e7bd5f] mx-auto mb-4" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Need to Talk to Us First?</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5">
                <Phone size={16} /> Call to Donate
              </a>
              <a href={`mailto:${schoolInfo.email}?subject=Donation%20Inquiry`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white rounded-full px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
                <Mail size={16} /> Email Us
              </a>
              <a href={`https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent('Hello, I would like to support St. Kalooli Lwanga SS Mulajje.')}`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1f9d58] hover:bg-[#18864a] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5">
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
                <li><Link href="/saint-of-the-day" className="hover:text-white transition">Saint of the Day</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Our School</Link></li>
                <li><Link href="/academics" className="hover:text-white transition">Academics & Curriculum</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition">Photo Gallery</Link></li>
                <li><Link href="/leadership" className="hover:text-white transition">School Leadership</Link></li>
                <li><Link href="#support" className="hover:text-white transition">Support / Donate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Admissions</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#admissions-form" className="hover:text-white transition">Apply Online</Link></li>
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