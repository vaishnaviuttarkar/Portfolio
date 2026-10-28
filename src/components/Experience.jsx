import { Section, Reveal, Tag } from './ui'
import { experience } from '../data/experience'
export default function Experience() {
  return (
    <Section id="experience" kicker="– Experience" title="Professional Experience">
      <div className="divide-y divide-rule border-y border-rule">
        {experience.map((e) => (
          <Reveal key={e.company}>
            <article className="grid gap-4 py-8 md:grid-cols-[11rem_1fr] md:gap-10">
              <p className="font-mono text-xs text-mute">{e.period}</p>
              <div>
                <h3 className="font-serif text-2xl">{e.role}</h3>
                <p className="text-mute">{e.company}</p>
                <ul className="mt-5 space-y-2.5 text-[15px]">{e.points.map((p) => <li key={p} className="flex gap-3"><span className="font-mono text-ember" aria-hidden>+</span><span>{p}</span></li>)}</ul>
                <div className="mt-5 flex flex-wrap gap-2">{e.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
