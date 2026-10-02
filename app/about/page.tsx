import Link from 'next/link'
import { ArrowLeft, Heart, GraduationCap, ShieldCheck, Cross, Sparkles, MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function AboutPage() {
  const coreValues = ['Devout', 'Responsibility', 'Ethical', 'Admirable', 'Diligent', 'Excellence', 'Dependable']

  const objectives = [
    'To be an outstanding academic institution.',
    'To help students appreciate the value of hard work for self reliance.',
    'To attract a professional and committed workforce.',
    'To strengthen co-curricular activities for better health and skills development of students.',
    'To produce citizens who are God fearing and tolerate the existence of one another.',
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
            <Sparkles size={14} /> About Us
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            About St. Kalooli <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7bd5f] to-[#bd703f]">Lwanga SS</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A Catholic-founded, government-aided secondary school in Mulajje Parish, Luweero District, committed to nurturing educated, self-reliant, patriotic and God-fearing citizens.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-4">
            <Heart size={22} className="text-[#e7bd5f]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e7bd5f]">Who We Are</p>
          </div>
          <h2 className="font-serif text-3xl font-bold mb-5">A school with a clear sense of purpose.</h2>
          <p className="text-base leading-8 text-white/80 mb-4">
            St. Kalooli Lwanga SS Mulajje has served the young people of Mulajje Parish and the wider Luweero community since 1986. Our Catholic heritage shapes a culture of faith, learning, responsibility and service.
          </p>
          <p className="text-sm leading-7 text-white/65">
            Located in Bamunanika Sub County, Luweero District, under Kasana Luweero Diocese, we became a government-aided school in 2011. Our motto — <em className="text-[#e7bd5f] font-semibold">"Only the Best is Good Enough"</em> — reflects our commitment to excellence.
          </p>

          <div className="mt-8 rounded-2xl bg-[#bd703f]/10 border border-[#bd703f]/30 p-5">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-[#e7bd5f] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f] mb-2">Our Location</p>
                <p className="text-sm leading-7 text-white/80">
                  Mulajje/Ndyalumu Village, Kyampisi Parish, Bamunanika Sub-county, Bamunanika County, Luweero District, Central Uganda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Motto */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[#142f4a]/80 backdrop-blur-md border border-[#e7bd5f]/20 p-8">
            <GraduationCap className="text-[#e7bd5f] mb-6" size={32} />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f] mb-4">Our Vision</p>
            <p className="font-serif text-2xl leading-tight">To produce a well Educated, Self Reliant and Patriotic Citizen.</p>
          </div>
          <div className="rounded-3xl bg-[#142f4a]/80 backdrop-blur-md border border-[#e7bd5f]/20 p-8">
            <ShieldCheck className="text-[#e7bd5f] mb-6" size={32} />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f] mb-4">Our Mission</p>
            <p className="font-serif text-2xl leading-tight">To promote education and Development of the Youth in Partnership with the community.</p>
          </div>
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#bd703f]/20 to-[#142f4a]/60 backdrop-blur-md border border-[#e7bd5f]/30 p-8 text-center">
            <Cross className="text-[#e7bd5f] mx-auto mb-4" size={28} />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd5f] mb-3">Our Motto</p>
            <p className="font-serif text-3xl">Only the Best is Good Enough.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart size={22} className="text-[#e7bd5f]" />
            <h2 className="font-serif text-2xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {coreValues.map((value) => (
              <div key={value} className="rounded-xl bg-[#bd703f]/10 border border-[#bd703f]/30 p-4 text-center hover:bg-[#bd703f]/20 transition">
                <p className="font-serif text-base font-bold text-[#e7bd5f]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Our Objectives</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {objectives.map((objective, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#bd703f] text-white text-[11px] font-bold shrink-0">{i + 1}</span>
                <p className="text-sm leading-6 text-white/80">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}