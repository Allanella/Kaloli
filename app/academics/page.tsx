import Link from 'next/link'
import {
  ArrowLeft, BookOpen, FlaskConical, Calculator, Languages, Palette, Laptop,
  Atom, Beaker, CheckCircle2, GraduationCap, Sparkles
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function AcademicsPage() {
  const olevelSubjects = [
    'English', 'Mathematics', 'Biology', 'Physics', 'Chemistry',
    'History', 'Geography', 'CRE', 'ICT', 'Chinese',
    'Entrepreneurship', 'Luganda', 'Agriculture', 'Fine Art', 'Kiswahili'
  ]

  const olevelCategories = [
    { name: 'Sciences', subjects: ['Biology', 'Physics', 'Chemistry', 'Agriculture'], icon: FlaskConical, color: 'emerald' },
    { name: 'Mathematics', subjects: ['Mathematics'], icon: Calculator, color: 'blue' },
    { name: 'Languages', subjects: ['English', 'Luganda', 'Kiswahili', 'Chinese'], icon: Languages, color: 'purple' },
    { name: 'Humanities', subjects: ['History', 'Geography', 'CRE'], icon: BookOpen, color: 'amber' },
    { name: 'Applied & Creative', subjects: ['ICT', 'Entrepreneurship', 'Fine Art'], icon: Palette, color: 'rose' },
  ]

  const alevelCombinations = [
    { code: 'PCM/PCB', subjects: 'Physics, Chemistry, Mathematics / Biology', path: 'Engineering, Medicine, Science' },
    { code: 'BCM', subjects: 'Biology, Chemistry, Mathematics', path: 'Medicine, Pharmacy, Science' },
    { code: 'HEG', subjects: 'History, Economics, Geography', path: 'Law, Business, Public Administration' },
    { code: 'HEL', subjects: 'History, Economics, Literature', path: 'Law, Journalism, Education' },
    { code: 'HED', subjects: 'History, Economics, Divinity', path: 'Theology, Education, Public Service' },
    { code: 'HGL', subjects: 'History, Geography, Literature', path: 'Journalism, Law, Education' },
  ]

  const facilities = [
    { name: 'Physics Laboratory', icon: Atom, desc: 'Fully equipped for practicals and experiments' },
    { name: 'Chemistry Laboratory', icon: Beaker, desc: 'Modern apparatus for chemistry practicals' },
    { name: 'Biology Laboratory', icon: FlaskConical, desc: 'Microscopes and specimens for biology' },
    { name: 'Computer Laboratory', icon: Laptop, desc: 'ICT-integrated learning environment' },
    { name: 'Library', icon: BookOpen, desc: 'Wide collection of textbooks and references' },
    { name: 'Classrooms', icon: GraduationCap, desc: 'Spacious and well-ventilated learning spaces' },
  ]

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-500/10 border-emerald-400/30 text-emerald-200',
    blue: 'bg-blue-500/10 border-blue-400/30 text-blue-200',
    purple: 'bg-purple-500/10 border-purple-400/30 text-purple-200',
    amber: 'bg-amber-500/10 border-amber-400/30 text-amber-200',
    rose: 'bg-rose-500/10 border-rose-400/30 text-rose-200',
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
            <Sparkles size={14} /> Academic Excellence
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">Curriculum</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From O'Level to A'Level, we prepare our learners with a broad range of subjects and combinations to ensure holistic academic and professional development.
          </p>
        </div>
      </section>

      {/* O'Level Subjects */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={22} className="text-[#e7bd5f]" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">O'Level Subjects</h2>
        </div>
        <p className="text-white/70 text-sm mb-8 max-w-3xl">
          Our O'Level curriculum covers {olevelSubjects.length}+ subjects across Sciences, Mathematics, Languages, Humanities, and Applied & Creative fields.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {olevelCategories.map((cat, i) => (
            <div key={i} className={`rounded-2xl border ${colorMap[cat.color]} p-6 hover:-translate-y-1 transition-all`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.subjects.map((s) => (
                  <span key={s} className="text-xs font-medium bg-white/10 px-2.5 py-1 rounded-md">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A'Level Combinations */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-[#142f4a]/95 backdrop-blur-md border border-[#e7bd5f]/30 p-8 lg:p-10 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-block rounded-full bg-[#e7bd5f]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e7bd5f] mb-3">
                Advanced Level
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold">A'Level Combinations</h2>
              <p className="mt-2 text-sm text-white/75">Both Science and Arts combinations are offered.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {alevelCombinations.map((comb, i) => (
            <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#e7bd5f]/40 p-6 hover:-translate-y-1 transition-all">
              <p className="font-serif text-2xl font-bold text-[#e7bd5f] mb-3">{comb.code}</p>
              <p className="text-sm text-white/85 mb-3">{comb.subjects}</p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">Career Paths</p>
                <p className="text-xs text-white/60">{comb.path}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <FlaskConical size={22} className="text-[#e7bd5f]" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Our Facilities</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((facility, i) => (
            <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#e7bd5f]/40 p-6 hover:-translate-y-1 transition-all">
              <div className="p-3 rounded-xl bg-[#bd703f]/20 text-[#e7bd5f] inline-block mb-4">
                <facility.icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{facility.name}</h3>
              <p className="text-sm text-white/65">{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CBC Commitment */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#bd703f]/20 to-[#142f4a]/60 backdrop-blur-md border border-[#e7bd5f]/30 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 size={24} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl font-bold">Competence-Based Curriculum</h2>
          </div>
          <p className="text-base leading-8 text-white/85 mb-6">
            St. Kalooli Lwanga SS Mulajje is committed to the Ugandan Competence-Based Curriculum (CBC). Our teaching approach emphasizes:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Practical, hands-on learning',
              'Critical thinking & problem solving',
              'Project-based assessment',
              'Real-world application of knowledge',
              'Continuous skills development',
              'Digital literacy integration',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={16} className="text-[#e7bd5f] shrink-0" />
                <span className="text-sm text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}