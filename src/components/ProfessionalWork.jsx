import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, Tag } from './ui'
import { professionalWork } from '../data/professionalWork'
function Row({ p, open, toggle, big }) {
  return (
    <li className="border-b border-rule">
      <button onClick={toggle} aria-expanded={open} aria-controls={`p${p.n}`} className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-3 py-5 text-left sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6">
        <span className="font-mono text-xs text-ember sm:pt-2">{p.n}</span>
        <span>
          <span className={`block font-serif transition-colors group-hover:text-ember ${big ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{p.name}</span>
          <span className="mt-1 block text-sm text-mute">{big ? p.short : p.tag}</span>
          <span className="mt-2 hidden font-mono text-[11px] text-mute md:block">{p.stack.slice(0, 5).join(' · ')}</span>
        </span>
        <span className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-mute"><span className="hidden sm:inline">{open ? 'Close' : 'View Details'}</span><span className="text-lg text-ember" aria-hidden>{open ? '−' : '+'}</span></span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={`p${p.n}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="grid gap-6 pb-8 sm:pl-[4.75rem] md:grid-cols-2">
              <div><h4 className="font-mono text-[11px] uppercase tracking-widest text-mute">Overview</h4><p className="mt-2 text-[15px]">{p.overview}</p>
                <h4 className="mt-6 font-mono text-[11px] uppercase tracking-widest text-mute">Technologies</h4><div className="mt-2 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div></div>
              <div><h4 className="font-mono text-[11px] uppercase tracking-widest text-mute">My Contribution</h4>
                <ul className="mt-2 space-y-2 text-[15px]">{p.work.map((w) => <li key={w} className="flex gap-3"><span className="font-mono text-ember" aria-hidden>+</span><span>{w}</span></li>)}</ul></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
export default function ProfessionalWork() {
  const [open, setOpen] = useState(null)
  const list = (arr, big) => <ul className="border-t border-rule">{arr.map((p) => <Row key={p.n} p={p} big={big} open={open === p.n} toggle={() => setOpen(open === p.n ? null : p.n)} />)}</ul>
  return (
    <Section id="work" kicker="– Professional Work" title="Products I've shipped." sub="Production systems and applications I contributed to during my professional experience.">
      <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Featured Work</h3>
      {list(professionalWork.filter((p) => p.featured), true)}
      <h3 className="mb-4 mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">More Production Work</h3>
      {list(professionalWork.filter((p) => !p.featured), false)}
    </Section>
  )
}
