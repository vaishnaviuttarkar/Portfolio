import { motion, useReducedMotion } from 'framer-motion'
export function Reveal({ children, delay = 0, className = '' }) {
  const r = useReducedMotion()
  return <motion.div className={className} initial={r ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay }}>{children}</motion.div>
}
export const Section = ({ id, kicker, title, sub, children }) => (
  <section id={id} className="border-t border-rule px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
    <div className="mx-auto max-w-4xl">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">{kicker}</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-5xl">{title}</h2>
        {sub && <p className="mt-4 max-w-xl text-mute">{sub}</p>}
      </Reveal>
      <div className="mt-10 sm:mt-14">{children}</div>
    </div>
  </section>
)
export const Tag = ({ children }) => <span className="border border-rule px-2 py-0.5 font-mono text-[11px] text-mute">{children}</span>
