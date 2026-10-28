import { Section } from './ui'
import { links, mailto, href } from '../data/links'
export default function Contact() {
  const l = 'border-b border-rule py-4 font-serif text-2xl transition hover:pl-2 hover:text-ember sm:text-3xl'
  return (
    <Section id="contact" kicker="– Contact" title="Let's Build Something Useful" sub="I'm open to backend development opportunities and projects where I can work on APIs, applications, databases, and backend systems.">
      <nav aria-label="Contact" className="flex flex-col border-t border-rule">
        <a className={l} href={mailto(links.email)}>Email Me ↗</a>
        <a className={l} href={href(links.linkedin)}>LinkedIn ↗</a>
        <a className={l} href={href(links.github)}>GitHub ↗</a>
      </nav>
    </Section>
  )
}
