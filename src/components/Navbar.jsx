import { useEffect, useState } from 'react'
import { links, mailto, href } from '../data/links'
const items = ['About', 'Experience', 'Work', 'Skills', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false), [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    ;[...items.map((i) => i.toLowerCase()), 'devboard'].forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const k = (e) => e.key === 'Escape' && setOpen(false); document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k) }, [open])
  const ext = 'font-mono text-xs text-mute transition hover:text-ember'
  const nav = (cls, close) => items.map((i, n) => (
    <li key={i}><a onClick={close} href={`#${i.toLowerCase()}`} className={`${cls} ${active === i.toLowerCase() || (i === 'Work' && active === 'devboard') ? 'text-ember' : 'text-paper/80'}`}><span className="mr-3 font-mono text-[11px] text-mute">0{n + 1}</span>{i}</a></li>))
  return (
    <>
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:justify-between lg:border-r lg:border-rule lg:p-10">
        <div>
          <a href="#top" className="font-serif text-2xl leading-tight">Vaishnavi<br />Uttarkar</a>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-mute">Backend Developer<br />Python + PHP</p>
          <ul aria-label="Sections" className="mt-12 space-y-4 text-lg">{nav('block transition hover:text-ember')}</ul>
        </div>
        <div className="space-y-5">
          <a href="#contact" className="inline-block border border-ember px-4 py-2 font-mono text-xs text-ember transition hover:bg-ember hover:text-ink">Let's Connect</a>
          <p className="flex gap-4"><a className={ext} href={href(links.github)}>GitHub</a><a className={ext} href={href(links.linkedin)}>LinkedIn</a><a className={ext} href={mailto(links.email)}>Email</a></p>
        </div>
      </aside>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-rule bg-ink/90 px-5 py-3 backdrop-blur sm:px-10 lg:hidden">
        <a href="#top" className="font-serif text-lg">Vaishnavi Uttarkar</a>
        <button aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)} className="border border-rule px-3 py-2 font-mono text-xs">{open ? 'CLOSE' : 'MENU'}</button>
      </header>
      {open && (
        <div id="mnav" className="fixed inset-0 top-[57px] z-30 flex flex-col justify-between bg-ink px-5 py-8 sm:px-10 lg:hidden">
          <ul className="space-y-1 font-serif text-4xl">{nav('block py-3', () => setOpen(false))}</ul>
          <a onClick={() => setOpen(false)} href="#contact" className="block border border-ember py-3 text-center font-mono text-sm text-ember">Let's Connect</a>
        </div>
      )}
    </>
  )
}
