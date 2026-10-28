import { Section, Reveal } from './ui'
const steps = [['Understand', 'Requirements → API contracts → data flow'], ['Design', 'Database → models → backend architecture'], ['Build', 'Business logic → APIs → integrations'], ['Secure & Test', 'Authentication → authorization → validation → testing'], ['Deploy & Maintain', 'Linux → Docker → automation → monitoring']]
export default function EngineeringApproach() {
  return (
    <Section id="approach" kicker="– Approach" title="How I Build">
      <ol className="border-t border-rule">
        {steps.map(([t, d], i) => (
          <Reveal key={t}><li className="grid grid-cols-[3rem_1fr] items-baseline gap-3 border-b border-rule py-5 sm:grid-cols-[5rem_12rem_1fr] sm:gap-6">
            <span className="font-serif text-3xl text-ember sm:text-4xl">0{i + 1}</span>
            <h3 className="font-serif text-xl">{t}</h3>
            <p className="col-start-2 text-sm text-mute sm:col-start-auto">{d}</p>
          </li></Reveal>
        ))}
      </ol>
    </Section>
  )
}
