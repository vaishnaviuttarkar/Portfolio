import { Section, Reveal } from './ui'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <Section id="skills" kicker="– Skills" title="Tools I reach for every day." sub="Used in professional work on the left; hands-on, mostly through DevBoard and personal practice, on the right.">
      <div className="border-t border-rule">
        {skills.map((g) => (
          <Reveal key={g.title}>
            <div className="grid gap-3 border-b border-rule py-6 md:grid-cols-[11rem_1fr_1fr] md:gap-8">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-mute">{g.title}</h3>
              <p className="font-serif text-xl leading-snug">{g.items.filter((i) => i[1]).map((i) => i[0]).join(' · ')}</p>
              <p className="text-sm leading-relaxed text-mute">{g.items.filter((i) => !i[1]).map((i) => i[0]).join(' · ') || '—'}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
