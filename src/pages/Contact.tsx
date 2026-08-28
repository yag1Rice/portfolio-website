// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'



// function Contact() {
//   return <div className="min-h-screen bg-slate-950 text-white p-24">Technical page — coming soon</div>
// }
// export default Contact


// import { useState } from 'react'
// import photo from '../assets/photo.jpg'

import heroImg from '../assets/hero.png'


const skills = [
  { label: '[Skill 1]' },
  { label: '[Skill 2]' },
  { label: '[Skill 3]' },
]

const timeline = [
  { year: '[Year]', title: '[Role/Milestone]', description: '[what happened]' },
  { year: '[Year]', title: '[Role/Milestone]', description: '[what happened]' },
]

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">[tagline/role]</p>
            <h1 className="text-6xl font-light mb-4">[Name]</h1>
            <p className="text-slate-300 max-w-md">[one-line hook]</p>
          </div>
          <img src={heroImg} alt="[Name]" className="rounded-2xl w-full" />
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-light">My Story</h2>
        <p className="text-slate-300 leading-relaxed">[a few paragraphs of bio]</p>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-light mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(s => (
            <div key={s.label} className="text-slate-300">{s.label}</div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-light">Timeline</h2>
        {timeline.map(t => (
          <div key={t.year} className="border-l-2 border-cyan-400/50 pl-6">
            <span className="text-cyan-400 text-sm">{t.year}</span>
            <h3 className="text-white">{t.title}</h3>
            <p className="text-slate-400 text-sm">{t.description}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Contact