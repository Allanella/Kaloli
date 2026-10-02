import Link from 'next/link'
import { ArrowLeft, History, Award, Users, Building, Sparkles, Crown, Scroll, Calendar } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function HistoryPage() {
  const milestones = [
    { year: '1986', title: 'School Founded', text: 'St. Kalooli Lwanga SS Mulajje was established by Rev. Sr. Babirye Domitila, then Sr. Mukulu of Mulajje Convent, with support from Rev. Fr. Matthias Ssimbwa, the Parish Priest.' },
    { year: '1986', title: 'First Headteacher', text: 'Mr. Nsubuga Benedicto (RIP) became the first Headteacher, laying the foundation for the school\'s academic and spiritual culture.' },
    { year: '2011', title: 'Government Aided', text: 'The school became a government-aided secondary school under the Ugandan education system.' },
    { year: 'Today', title: 'Growing Strong', text: 'St. Kalooli Lwanga SS Mulajje continues to serve young generations of Mulajje Parish and the wider Luweero community.' },
  ]

  const headteachers = [
    { name: 'Mr. Nsubuga Benedicto (RIP)', role: 'First Headteacher' },
    { name: 'Mr. Innocent Twinomugisha', role: 'Former Headteacher' },
    { name: 'Mr. Hertega Ladis (RIP)', role: 'Former Headteacher' },
    { name: 'Mr. Kivvumbi', role: 'Former Headteacher' },
    { name: 'Mr. Musoke Joseph', role: 'Former Headteacher' },
    { name: 'Mr. Kawuma Constantine David', role: 'Former Headteacher' },
    { name: 'Mrs. Noeline Nabasinga Ntanda', role: 'Former Headteacher' },
    { name: 'Mr. Lwegaba Emmanuel', role: 'Current Headteacher' },
  ]

  const deputies = [
    'Mr. Kateregga Benedict',
    'Mrs. Samanya Muluuta',
    'Mr. Lwegaba Emmanuel',
    'Mr. Ssewanyana Mathias',
  ]

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
            <History size={14} /> Our Story
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            A Living <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">History</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From a humble beginning in 1986 to becoming a government-aided school that continues to shape the young generations of Luweero.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 lg:p-8 hover:border-[#e7bd5f]/40 transition-all">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#bd703f] text-white shrink-0 shadow-lg">
                  <Calendar size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">{m.year}</p>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm leading-7 text-white/75">{m.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Former Headteachers */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Crown size={22} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl font-bold">Headteachers — Past & Present</h2>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <div className="grid md:grid-cols-2 gap-3">
              {headteachers.map((ht, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#bd703f]/20 text-[#e7bd5f] font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-serif text-sm font-bold text-white">{ht.name}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#e7bd5f] mt-0.5">{ht.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Former Deputy Headteachers */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <Users size={22} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl font-bold">Deputy Headteachers — Past</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {deputies.map((d, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex size-8 items-center justify-center rounded-full bg-[#142f4a] text-[#e7bd5f] font-bold text-xs shrink-0">
                  {i + 1}
                </div>
                <p className="font-serif text-sm font-bold text-white">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Structure */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Building size={22} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl font-bold">School Structure</h2>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 lg:p-8">
            <div className="space-y-4">
              {[
                { role: 'Headteacher', desc: 'Overall leadership and strategic direction' },
                { role: 'Deputy Headteachers', desc: 'Academic affairs, discipline and student welfare' },
                { role: 'Director of Studies', desc: 'Curriculum, examinations and academic standards' },
                { role: 'Heads of Department', desc: 'Subject leadership and teacher coordination' },
                { role: 'Class Teachers', desc: 'Daily student mentorship and academic guidance' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#bd703f]/5 border border-[#bd703f]/20">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#bd703f] text-white font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.role}</p>
                    <p className="text-xs text-white/60 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}