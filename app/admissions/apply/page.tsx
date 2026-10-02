'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap, BookOpen, Award, User, Home, Calendar, HeartPulse, Send, Check,
  ArrowLeft, FileText, Download, Sparkles
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function ApplyPage() {
  const [applicantType, setApplicantType] = useState<'olevel' | 'alevel'>('olevel')
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const handleOlevelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setOlevelData({ ...olevelData, [e.target.name]: e.target.value })
  }

  const handleAlevelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAlevelData({ ...alevelData, [e.target.name]: e.target.value })
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2338] via-[#142f4a] to-[#0d2338] text-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-20 -right-20 size-96 rounded-full bg-[#e7bd5f]/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition mb-6">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 text-xs font-bold text-[#e7bd5f] mb-6">
            <Sparkles size={14} /> Admissions 2026
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Online Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">Application</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Choose O'Level (S.1 from PLE) or A'Level (S.5 from UCE) and complete the form.
            Your application will be sent to our admissions office via WhatsApp.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
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

        {/* Requirements link */}
        <div className="mt-6 rounded-2xl bg-[#e7bd5f]/10 backdrop-blur-md border border-[#e7bd5f]/30 p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 rounded-xl bg-[#e7bd5f]/20 text-[#e7bd5f] shrink-0">
            <FileText size={22} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-semibold text-white text-sm">Need the full requirements list?</p>
            <p className="text-xs text-white/70 mt-0.5">Download or print the complete checklist before reporting.</p>
          </div>
          <Link
            href="/downloads"
            className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Download size={14} /> View Downloads
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}