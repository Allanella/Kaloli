'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, BookOpen, GraduationCap, Home, Building, Download, Printer,
  CheckCircle2, Info, Wallet, FileText, Sparkles, Users, ShoppingBag,
  AlertCircle, Phone, Mail
} from 'lucide-react'
import { requirements, olevelDayFees, olevelDayTotals, feesNote, schoolMotto } from '@/data/requirements'

const iconMap: Record<string, any> = {
  BookOpen,
  GraduationCap,
  Home,
  Building,
}

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; accent: string }> = {
  blue: {
    bg: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-400/30',
    text: 'text-blue-300',
    badge: 'bg-blue-500/20 text-blue-200',
    accent: 'bg-blue-500',
  },
  purple: {
    bg: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-400/30',
    text: 'text-purple-300',
    badge: 'bg-purple-500/20 text-purple-200',
    accent: 'bg-purple-500',
  },
  amber: {
    bg: 'from-amber-500/10 to-amber-600/5',
    border: 'border-amber-400/30',
    text: 'text-amber-300',
    badge: 'bg-amber-500/20 text-amber-200',
    accent: 'bg-amber-500',
  },
  green: {
    bg: 'from-green-500/10 to-green-600/5',
    border: 'border-green-400/30',
    text: 'text-green-300',
    badge: 'bg-green-500/20 text-green-200',
    accent: 'bg-green-500',
  },
}

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState(requirements[0].id)
  const [badgeLoaded, setBadgeLoaded] = useState(false)

  const badgeSource = '/images/school-badge.png'
  const fallbackBadge = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kv7j1kFuiliMHehVyPm10Xb3zfcVzL.png'

  const schoolInfo = {
    name: 'St. Kalooli Lwanga SS Mulajje',
    phone: '+256 779 268 469',
    email: 'skalssm.2013@gmail.com',
    whatsapp: '256779268469',
  }

  const activeCategory = requirements.find((r) => r.id === activeTab)!
  const colors = colorMap[activeCategory.color] || colorMap.blue
  const Icon = iconMap[activeCategory.icon] || BookOpen

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2338] via-[#142f4a] to-[#0d2338] text-white">

      {/* Top banner */}
      <div className="bg-[#bd703f] text-white text-xs py-2 px-4 print:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold uppercase tracking-widest flex items-center gap-2">
            <FileText size={13} /> Requirements & Downloads
          </span>
          <Link href="/" className="hover:underline flex items-center gap-1">
            <ArrowLeft size={12} /> Back to Home
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#142f4a]/95 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative size-12 rounded-full bg-white p-1 shadow-lg ring-2 ring-[#e7bd5f]/40 overflow-hidden shrink-0">
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
              <p className="font-serif font-bold text-base leading-none text-white">St. Kalooli Lwanga</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7bd5f] mt-1">SS Mulajje</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-[#e7bd5f] transition"
            >
              <Printer size={15} /> Print
            </button>
            <Link
              href="/"
              className="text-sm font-medium text-slate-200 hover:text-[#e7bd5f] transition flex items-center gap-1.5"
            >
              <ArrowLeft size={15} /> Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 print:py-6">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:24px_24px] print:hidden" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 text-xs font-bold text-[#e7bd5f] mb-6 print:bg-white print:text-[#bd703f] print:border-[#bd703f]">
            <Sparkles size={14} /> Admissions 2026
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Requirements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">Downloads</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Complete requirements and fee structure for O'Level and A'Level students. Select the category below for a detailed list. Print or save as PDF for reference.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-6 pb-8 print:hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {requirements.map((cat) => {
            const CatIcon = iconMap[cat.icon] || BookOpen
            const c = colorMap[cat.color] || colorMap.blue
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group relative rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-br ${c.bg} ${c.border} shadow-2xl scale-[1.02]`
                    : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.07]'
                }`}
              >
                <div className={`inline-flex size-10 items-center justify-center rounded-xl mb-3 ${
                  isActive ? `${c.accent} text-white` : 'bg-white/10 text-white/70 group-hover:text-white'
                }`}>
                  <CatIcon size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {cat.title.split(' — ')[0]}
                </p>
                <p className={`font-serif text-base font-bold mt-1 ${isActive ? c.text : 'text-white'}`}>
                  {cat.title.split(' — ')[1]}
                </p>
                <p className="text-[10px] text-white/50 mt-1">{cat.items.length} items</p>
              </button>
            )
          })}
        </div>
      </section>

      {/* Active Category Content */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className={`rounded-3xl border-2 ${colors.border} bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl print:bg-white print:text-black print:border-gray-300`}>

          {/* Header */}
          <div className={`bg-gradient-to-r ${colors.bg} p-6 lg:p-8 border-b ${colors.border} print:bg-white`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${colors.accent} text-white shadow-lg print:hidden`}>
                <Icon size={26} />
              </div>
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold">{activeCategory.title}</h2>
                <p className="text-xs lg:text-sm text-white/60 mt-1 print:text-gray-600">{activeCategory.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Uniform pricing banner */}
          {activeCategory.uniformPricing && (
            <div className="px-6 lg:px-8 py-6 border-b border-white/10 bg-[#bd703f]/10 print:bg-orange-50 print:border-orange-200">
              <div className="flex items-start gap-3">
                <ShoppingBag className={`text-[#e7bd5f] shrink-0 mt-0.5 print:text-orange-600`} size={20} />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f] mb-2 print:text-orange-700">
                    School Uniform (Strictly Obtainable at School)
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3 print:bg-white print:border-gray-200">
                      <p className="text-[10px] uppercase tracking-widest text-white/50 print:text-gray-500">Boys</p>
                      <p className="font-serif text-xl font-bold text-white print:text-black">{activeCategory.uniformPricing.boys}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3 print:bg-white print:border-gray-200">
                      <p className="text-[10px] uppercase tracking-widest text-white/50 print:text-gray-500">Girls</p>
                      <p className="font-serif text-xl font-bold text-white print:text-black">{activeCategory.uniformPricing.girls}</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/70 leading-6 print:text-gray-700">
                    <strong className="text-white print:text-black">Includes:</strong> {activeCategory.uniformPricing.includes}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Items list */}
          <div className="p-6 lg:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5 print:text-gray-500">
              Full Requirement List ({activeCategory.items.length} items)
            </p>
            <ol className="space-y-2.5">
              {activeCategory.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/15 transition-all print:bg-white print:border-gray-200"
                >
                  <span className={`flex size-7 items-center justify-center rounded-full shrink-0 text-[11px] font-bold ${colors.badge} print:bg-orange-100 print:text-orange-700`}>
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-white/85 print:text-black">{item}</span>
                </li>
              ))}
            </ol>

            {/* Motto */}
            <div className="mt-8 text-center border-t border-white/10 pt-6 print:border-gray-200">
              <p className="font-serif text-lg italic text-[#e7bd5f] print:text-orange-700">
                "{schoolMotto}"
              </p>
            </div>
          </div>
        </div>

        {/* ============ FEES STRUCTURE (O'Level Day) ============ */}
        <div className="mt-10 rounded-3xl border-2 border-[#e7bd5f]/30 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl print:bg-white print:border-orange-300">
          <div className="bg-gradient-to-r from-[#e7bd5f]/15 to-[#bd703f]/10 p-6 lg:p-8 border-b border-[#e7bd5f]/20 print:bg-orange-50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#bd703f] text-white shadow-lg print:hidden">
                <Wallet size={26} />
              </div>
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold">School Fees — O'Level Day</h2>
                <p className="text-xs lg:text-sm text-white/60 mt-1 print:text-gray-600">
                  Day Scholar Students (O'Level), 2026
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-white/10 print:border-gray-300">
                    <th className="py-3 px-3 text-[10px] font-bold uppercase tracking-widest text-white/50 print:text-gray-500">No.</th>
                    <th className="py-3 px-3 text-[10px] font-bold uppercase tracking-widest text-white/50 print:text-gray-500">Item</th>
                    <th className="py-3 px-3 text-right text-[10px] font-bold uppercase tracking-widest text-white/50 print:text-gray-500">Amount (UGX)</th>
                  </tr>
                </thead>
                <tbody>
                  {olevelDayFees.map((fee, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/[0.03] transition print:border-gray-200"
                    >
                      <td className="py-3 px-3 text-white/60 print:text-gray-500">{i + 1}</td>
                      <td className="py-3 px-3 text-white font-medium print:text-black">
                        {fee.item}
                        {fee.note && (
                          <span className="ml-2 text-[10px] text-white/50 print:text-gray-500">({fee.note})</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right font-serif font-bold text-[#e7bd5f] print:text-orange-700">
                        {fee.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-[#e7bd5f]/40 print:border-orange-300">
                    <td colSpan={2} className="py-4 px-3 text-white font-bold print:text-black">
                      TOTAL (Non-U.S.E)
                    </td>
                    <td className="py-4 px-3 text-right font-serif text-xl font-bold text-[#e7bd5f] print:text-orange-700">
                      {olevelDayTotals.nonUse}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="py-2 px-3 text-white/70 text-xs print:text-gray-600">
                      TOTAL (U.S.E)
                    </td>
                    <td className="py-2 px-3 text-right font-serif text-lg font-bold text-[#e7bd5f]/80 print:text-orange-600">
                      {olevelDayTotals.use}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 print:bg-amber-50 print:border-amber-300">
              <AlertCircle className="text-amber-400 shrink-0 mt-0.5 print:text-amber-600" size={18} />
              <p className="text-xs text-amber-100 leading-6 print:text-amber-800">
                <strong>NB:</strong> {feesNote}
              </p>
            </div>
          </div>
        </div>

        {/* ============ CTA ============ */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#142f4a]/95 to-[#0d2338] border border-[#e7bd5f]/30 p-8 lg:p-10 text-center shadow-2xl print:hidden">
          <div className="inline-flex items-center justify-center size-14 rounded-full bg-[#bd703f]/20 mb-4">
            <Info size={24} className="text-[#e7bd5f]" />
          </div>
          <h3 className="font-serif text-2xl font-bold mb-3">Need Help or Have Questions?</h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-6 leading-7">
            For any clarification about requirements, fees, or to confirm current admission information, please contact the school office.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#bd703f] hover:bg-[#a65c4b] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
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
              href={`https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent('Hello, I have a question about the school requirements.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1f9d58] hover:bg-[#18864a] text-white rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-0.5"
            >
              <Phone size={16} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Print footer */}
        <div className="hidden print:block mt-10 text-center text-xs text-black border-t border-gray-300 pt-4">
          <p className="font-bold">{schoolInfo.name}</p>
          <p>Mulajje/Ndyalumu Village, Kyampisi Parish, Bamunanika Sub-county, Bamunanika County, Luweero District</p>
          <p>Tel: {schoolInfo.phone} · Email: {schoolInfo.email}</p>
          <p className="mt-2 italic">{schoolMotto}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40 print:hidden">
        <p>© {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}