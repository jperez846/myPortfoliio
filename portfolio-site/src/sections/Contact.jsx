import SectionHeader from '../components/SectionHeader'
import styles from './Contact.module.css'

const CARDS = [
  { key: 'email',    icon: '✉', label: 'Email',    hrefFn: c => `mailto:${c.email}`,    valueFn: c => c.email          },
  { key: 'linkedin', icon: '💼', label: 'LinkedIn', hrefFn: c => c.linkedin,             valueFn: c => c.linkedinHandle },
  { key: 'github',   icon: '⌥', label: 'GitHub',   hrefFn: c => c.github,               valueFn: c => c.githubHandle   },
]

export default function Contact({ contact }) {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <SectionHeader title="Contact" />

      <div className={styles.grid}>
        {CARDS.map(({ key, icon, label, hrefFn, valueFn }) => (
          <a
            key={key}
            href={hrefFn(contact)}
            className={styles.card}
            target={key !== 'email' ? '_blank' : undefined}
            rel={key !== 'email' ? 'noopener noreferrer' : undefined}
            aria-label={`${label}: ${valueFn(contact)}`}
          >
            <span className={styles.icon} aria-hidden="true">{icon}</span>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{valueFn(contact)}</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        ))}
      </div>

      <p className={styles.note}>
        Open to full-time roles, contract work, and interesting open-source
        collaborations. Best reached by email — usually reply within 24 hours.
      </p>
    </section>
  )
}