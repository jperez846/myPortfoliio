import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import SectionHeader from '../components/SectionHeader'
import styles from './Contact.module.css'

const CARDS = [
  { key: 'email',    icon: '✉', label: 'Email',    hrefFn: c => `mailto:${c.email}`,    valueFn: c => c.email          },
  { key: 'linkedin', icon: '💼', label: 'LinkedIn', hrefFn: c => c.linkedin,             valueFn: c => c.linkedinHandle },
  { key: 'github',   icon: '⌥', label: 'GitHub',   hrefFn: c => c.github,               valueFn: c => c.githubHandle   },
]

export default function Contact({ contact }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <SectionHeader title="Contact" />

      <div ref={ref} className={styles.grid}>
        {CARDS.map(({ key, icon, label, hrefFn, valueFn }, i) => (
          <motion.a
            key={key}
            href={hrefFn(contact)}
            className={styles.card}
            target={key !== 'email' ? '_blank' : undefined}
            rel={key !== 'email' ? 'noopener noreferrer' : undefined}
            aria-label={`${label}: ${valueFn(contact)}`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
          >
            <span className={styles.icon} aria-hidden="true">{icon}</span>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{valueFn(contact)}</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </motion.a>
        ))}
      </div>

      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Open to discussing your business needs. Best reached by email — usually reply within 24 hours.
      </motion.p>
    </section>
  )
}
