import { links, mailto, href } from '../data/links'
export default function Footer() {
  return (
    <footer className="border-t border-rule px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 text-sm text-mute sm:flex-row sm:items-end sm:justify-between">
        <div><p className="font-serif text-lg text-paper">Vaishnavi Uttarkar</p><p>Backend Developer · Python + PHP</p></div>
        <p className="font-mono text-xs"><a className="hover:text-ember" href={href(links.github)}>GitHub</a> · <a className="hover:text-ember" href={href(links.linkedin)}>LinkedIn</a> · <a className="hover:text-ember" href={mailto(links.email)}>Email</a></p>
        <p className="text-xs">© {new Date().getFullYear()} Vaishnavi Uttarkar</p>
      </div>
    </footer>
  )
}
