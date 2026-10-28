import { motion, useReducedMotion } from 'framer-motion'
import SystemFlow from './SystemFlow'
export default function Hero() {
  const r = useReducedMotion()
  const a = (d) => (r ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } })
  const btn = 'px-5 py-3 text-center font-mono text-xs uppercase tracking-wider transition'
  return (
    <section id="top" className="px-5 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pt-28">
      <div className="mx-auto max-w-4xl">
        <motion.p {...a(0)} className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Backend Developer · Python + PHP</motion.p>
        <motion.h1 {...a(0.1)} className="mt-6 font-serif text-[2.1rem] leading-[1.08] sm:text-6xl">
          {/* Backend Developer building systems, APIs, and applications across <em className="text-ember">Python</em> and <em className="text-ember">PHP</em> stacks. */}
          Engineering resilient backend infrastructure across <em className="text-ember">Python</em> and <em className="text-ember">PHP</em> stacks.
        </motion.h1>
        <motion.p {...a(0.2)} className="mt-6 max-w-2xl text-base text-mute sm:text-lg">
          {/* 3+ years of professional software development experience across backend systems, REST APIs, databases, Linux environments, and production web applications. */}
          As a dedicated Backend Developer, I leverage Python and PHP to engineer scalable backend systems, RESTful APIs, and robust database architectures. My expertise spans the entire development lifecycle, from architecting complex data models to deploying and optimizing high-performance web applications in Linux environments.
        </motion.p>
        <motion.div {...a(0.3)} className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
          <a href="#work" className={`${btn} bg-ember text-ink hover:bg-paper`}>View Professional Work</a>
          <a href="#devboard" className={`${btn} border border-rule hover:border-ember`}>View DevBoard</a>
          <a href="#contact" className={`${btn} border border-rule hover:border-ember`}>Contact Me</a>
        </motion.div>
        <motion.div {...a(0.45)} className="mt-12"><SystemFlow /></motion.div>
      </div>
    </section>
  )
}
