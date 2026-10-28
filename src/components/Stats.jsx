import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
const stats = [[3, '+', 'Years of Software Development'], [2, '+', 'Years of Recent Python/Backend Experience'], [12, '+', 'Live Projects Contributed To'], [60, '%', 'Database Query Load Reduction'], [11, '+', 'Hours/Week Saved Through Automation']]
function Count({ to, suffix }) {
  const ref = useRef(null), inView = useInView(ref, { once: true }), r = useReducedMotion(), [v, setV] = useState(r ? to : 0)
  useEffect(() => {
    if (!inView || r) return setV(to)
    let raf, t0
    const step = (t) => { t0 ??= t; const p = Math.min((t - t0) / 1200, 1); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step) }
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf)
  }, [inView, to, r])
  return <span ref={ref}>{v}{suffix}</span>
}
export default function Stats() {
  return (
    <section aria-label="Career statistics" className="border-t border-rule px-5 sm:px-10 lg:px-16">
      <dl className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-3">
        {stats.map(([n, s, l], i) => (
          <div key={l} className={`border-rule py-8 pr-4 ${i % 2 === 0 ? 'border-r' : ''} ${i > 1 ? 'border-t' : ''} ${i === 4 ? 'col-span-2' : ''} sm:col-span-1 sm:border-r sm:pl-6 sm:first:pl-0 sm:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(3n+1)]:pl-0 ${i > 2 ? 'sm:border-t' : 'sm:border-t-0'}`}>
            <dd className="font-serif text-5xl text-ember sm:text-6xl"><Count to={n} suffix={s} /></dd>
            <dt className="mt-2 max-w-[18ch] font-mono text-[11px] uppercase leading-snug tracking-wide text-mute">{l}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
