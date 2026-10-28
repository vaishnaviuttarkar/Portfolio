import { Section, Tag, Reveal } from './ui'
import { links, href } from '../data/links'
const stack = ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'JWT', 'Linux']
const feats = ['Custom User model', 'JWT authentication', 'Role-based access control', 'Project management', 'Issue management', 'Issue assignment', 'Filtering', 'Search', 'Ordering', 'Pagination', 'PostgreSQL', 'Redis', 'Celery', 'Docker / Docker Compose']
export default function PersonalProject() {
  return (
    <Section id="devboard" kicker="Personal Project" title="Backend work with purpose." sub="A project I built independently to explore modern backend architecture and technologies.">
      <Reveal>
        <article className="border border-ember/60 p-5 sm:p-8">
          <p className="inline-block bg-ember px-2 py-0.5 font-mono text-[11px] uppercase tracking-widest text-ink">Personal Project</p>
          <h3 className="mt-4 font-serif text-4xl sm:text-5xl">DevBoard</h3>
          <p className="mt-3 max-w-xl text-lg">A role-based project and issue management backend built with Django REST Framework.</p>
          <div className="mt-5 flex flex-wrap gap-2">{stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
          <ul className="mt-8 grid gap-x-8 gap-y-2 border-t border-rule pt-6 text-sm sm:grid-cols-2">{feats.map((f) => <li key={f} className="flex gap-3"><span className="font-mono text-ember" aria-hidden>+</span>{f}</li>)}</ul>
          <p className="mt-6 text-sm text-mute">Demonstrates API design, authentication, authorization, RBAC, database design, caching, background processing, Docker, and backend architecture.</p>
          <div className="mt-6 flex flex-col gap-2 font-mono text-xs sm:flex-row sm:gap-8">
            <a className="break-all text-ember underline underline-offset-4" href={href(links.github)}>GitHub → {links.githubDevboard}</a>
            {/* <a className="break-all text-ember underline underline-offset-4" href={href(links.liveDemo)}>Live Demo → {links.liveDemo}</a> */}
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
