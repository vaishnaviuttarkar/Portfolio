import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
const main = ['Client', 'API', 'Business Logic', 'Database']
export default function SystemFlow() {
  const r = useReducedMotion(), [i, setI] = useState(0)
  useEffect(() => { if (r) return; const t = setInterval(() => setI((x) => (x + 1) % main.length), 1100); return () => clearInterval(t) }, [r])
  return (
    <figure aria-label="Request flow: Client to API to Business Logic to Database, with Redis, background tasks and Linux/Docker alongside" className="border border-rule">
      <ol className="grid grid-cols-2 sm:grid-cols-4">
        {main.map((n, k) => (
          <li key={n} className={`border-rule px-4 py-4 font-mono text-xs transition-colors duration-500 ${k % 2 === 0 ? 'border-r' : ''} ${k < 2 ? 'border-b sm:border-b-0' : ''} sm:border-r sm:last:border-r-0 ${i === k ? 'bg-ember text-ink' : 'text-paper/80'}`}>
            <span className="block opacity-60">0{k + 1}</span>{n}
          </li>
        ))}
      </ol>
      {/* <figcaption className="border-t border-dashed border-rule px-4 py-2 font-mono text-[11px] text-mute">↳ Redis · Background Tasks · Linux / Docker</figcaption> */}
    </figure>
  )
}
