import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import styles from './Resume.module.css'

function SkillBar({ label, pct, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className={styles.skillRow}>
      <span className={styles.skillLabel}>{label}</span>
      <div className={styles.bar} aria-label={`${label}: ${pct}%`}>
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : '0%' }}
          transition={{ duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function Resume({ skills, toolchain, resumePath }) {
  return (
    <section id="resume" className={styles.section} aria-label="Resume">
      <SectionHeader title="Resume" />

      <div className={styles.layout}>

        {/* PDF viewer */}
        <motion.div
          className={styles.viewer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {resumePath ? (
            <iframe
              src={`${resumePath}#toolbar=0`}
              title="Jesus Perez Resume"
              className={styles.iframe}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.pdfIcon}>📄</span>
              <p>Drop <code>resume04.pdf</code> in <code>/public</code></p>
              <p>and update <code>resumePath</code> in App.jsx</p>
            </div>
          )}
        </motion.div>

        {/* sidebar */}
        <motion.aside
          className={styles.sidebar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.card}>
            <h4 className={styles.cardHeading}>Core Skills</h4>
            {skills.map(({ label, pct }, i) => (
              <SkillBar key={label} label={label} pct={pct} delay={i * 0.07} />
            ))}
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardHeading}>Toolchain</h4>
            <div className={styles.chips}>
              {toolchain.map(t => <Tag key={t} variant="chip">{t}</Tag>)}
            </div>
          </div>

          <a
            href={resumePath || '#'}
            download
            className={styles.downloadBtn}
            aria-label="Download resume PDF"
          >
            ⬇ Download Resume
          </a>
        </motion.aside>

      </div>
    </section>
  )
}
