import { Section, Reveal } from './ui'
export default function About() {
  return (
    <Section id="about" kicker="– About" title="Backend systems. Practical outcomes.">
      <Reveal className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          {/* <p>I’m a Backend Developer with around 3 years of professional software development experience across Python and PHP technologies.</p> */}
          <p>I’m a Backend Developer with around three years of experience building robust software solutions using Python and PHP.
              I specialize in architecting RESTful APIs, designing database-driven applications, and optimizing server-side workflows to drive system performance.
          </p>
          {/* <p className="text-mute">My experience includes building backend systems, REST APIs, database-driven applications, reporting systems, integrations, server-side workflows, and performance improvements.</p> */}
          {/* <p className="text-mute">I enjoy working on backend systems where application logic, APIs, databases, performance, and infrastructure come together.</p> */}
          <p className="text-mute">
            I'm passionate about engineering scalable backend ecosystems where complex application logic, data architecture, and infrastructure seamlessly intersect.
          </p>
        </div>
        <dl className="h-fit divide-y divide-rule border border-rule font-mono text-xs">
          <div className="flex justify-between gap-4 p-4"><dt className="text-mute">Recent</dt><dd className="text-right">Python · Django · DRF · SQL · Linux</dd></div>
          <div className="flex justify-between gap-4 p-4"><dt className="text-mute">Earlier</dt><dd className="text-right">PHP · CodeIgniter · MySQL · Full-stack</dd></div>
        </dl>
      </Reveal>
    </Section>
  )
}
