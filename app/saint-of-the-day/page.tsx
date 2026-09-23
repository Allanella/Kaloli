'use client'

import Link from 'next/link'
import {
  ArrowLeft, Crown, BookOpen, Shield, Flame, Star, Sparkles, Heart,
  Calendar, Cross, Quote, Award
} from 'lucide-react'
import { saint } from '@/data/saint'

const attributeIcons = [Crown, BookOpen, Shield, Flame, Star]

export default function SaintOfTheDayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2338] via-[#142f4a] to-[#0d2338] text-white">

      {/* Top Banner */}
      <div className="bg-[#bd703f] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={13} /> Saint of the Day
          </span>
          <Link href="/" className="hover:underline flex items-center gap-1">
            <ArrowLeft size={12} /> Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#e7bd5f_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-20 -right-20 size-96 rounded-full bg-[#e7bd5f]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-[#bd703f]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e7bd5f]/40 text-xs font-bold text-[#e7bd5f] mb-8">
            <Cross size={14} /> Feast Day: {saint.feastDay}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="block text-[#e7bd5f]/80 text-xl sm:text-2xl font-normal tracking-[0.3em] uppercase mb-4">
              Saint of the Day
            </span>
            {saint.name}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#e7bd5f] font-serif italic">
            {saint.title}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#bd703f]/20 border border-[#bd703f]/40 text-[11px] font-bold uppercase tracking-widest text-white/90">
            <Award size={12} /> {saint.subtitle}
          </div>

          <p className="mt-6 text-sm text-white/60 font-mono tracking-wider">
            {saint.lifespan}
          </p>

          <blockquote className="mt-12 max-w-2xl mx-auto relative">
            <Quote className="absolute -top-4 -left-4 text-[#e7bd5f]/30" size={32} />
            <p className="font-serif text-2xl sm:text-3xl text-white italic leading-snug">
              &ldquo;{saint.heroQuote.text}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[#e7bd5f] tracking-wider">
              — {saint.heroQuote.attribution}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Key Attributes */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f] mb-2">Key Attributes</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Who He Was</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {saint.attributes.map((attr, i) => {
            const Icon = attributeIcons[i % attributeIcons.length]
            return (
              <div
                key={i}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:border-[#e7bd5f]/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-[#e7bd5f]/15 text-[#e7bd5f] flex items-center justify-center mb-5 group-hover:bg-[#e7bd5f] group-hover:text-[#142f4a] transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#e7bd5f] mb-2">{attr.title}</h3>
                <p className="text-sm leading-6 text-white/70">{attr.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#142f4a]/95 to-[#0d2338] backdrop-blur-md border border-[#e7bd5f]/20 p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e7bd5f] mb-2">Timeline</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Key Facts</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {saint.facts.map((fact, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#e7bd5f]/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#bd703f]/20 text-[#e7bd5f] shrink-0">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#e7bd5f] mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm text-white/85">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative rounded-3xl bg-[#bd703f]/10 border border-[#bd703f]/30 p-10 lg:p-14 text-center overflow-hidden">
          <Flame className="absolute -top-4 -left-4 text-[#e7bd5f]/20" size={80} />
          <Flame className="absolute -bottom-4 -right-4 text-[#e7bd5f]/20" size={80} />
          <Quote className="mx-auto text-[#e7bd5f] mb-6" size={32} />
          <p className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight italic">
            &ldquo;{saint.closingQuote.text}&rdquo;
          </p>
          <footer className="mt-6 text-sm text-[#e7bd5f] tracking-widest uppercase">
            — {saint.closingQuote.attribution}
          </footer>
        </div>
      </section>

      {/* Prayer */}
      <section id="prayer" className="max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-[#e7bd5f]/30 p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e7bd5f]/15 text-[#e7bd5f] text-xs font-bold uppercase tracking-widest mb-4">
              <Cross size={13} /> Prayer
            </div>
            <h2 className="font-serif text-3xl font-bold">Let Us Pray</h2>
          </div>

          <p className="text-center font-serif text-lg leading-loose text-white/85 max-w-2xl mx-auto">
            {saint.prayer}
          </p>
        </div>
      </section>

      {/* Acclamations */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-4">
          {saint.acclamations.map((line, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-[#e7bd5f] to-[#bd703f] p-6 text-center shadow-xl"
            >
              <Heart className="mx-auto text-white/90 mb-2" size={20} />
              <p className="font-serif text-lg font-bold text-white">
                {line}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#bd703f] hover:bg-[#a65c4b] text-white px-8 py-4 font-semibold shadow-lg transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} /> Return to Home Page
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} St. Kalooli Lwanga SS Mulajje. All rights reserved.</p>
        <p className="mt-2">Feast Day: {saint.feastDay} · Patron of {saint.patronOf}</p>
      </footer>
    </div>
  )
}