import Tag from '../components/Tag'
import Terminal  from '../components/Terminal'
import styles from './Home.module.css'

const TERMINAL_LINES = [
  { prompt: '➜ ~', cmd: 'kubectl get pods -n argocd' },
  { out: 'argocd-server-abc123        1/1   Running   0   2m' },
  { out: 'argocd-repo-server-xyz      1/1   Running   0   2m' },
  { prompt: '➜ ~', cmd: 'git push origin main' },
  { out: '✓ Pushed · CI triggered · Deploying...' },
]

/**
 * Props:
 *   person  — { name, bio, available }
 *   titles  — [{ label, variant }]
 */
export default function Home({ person, titles }) {
  const { name, bio, available } = person
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section id="home" className={styles.section} aria-label="Introduction">

      {/* {available && (
        <p className={styles.eyebrow}>Available for new opportunities</p>
      )} */}

      <h1 className={styles.name}>
        {firstName} {lastName}
        {/* <span className={styles.accent}>{lastName}</span> */}
      </h1>

      <div className={styles.tags} role="list" aria-label="Professional titles">
        {titles.map(({ label, variant }) => (
          <Tag key={label} variant={variant} role="listitem">
            {label}
          </Tag>
        ))}
      </div>

      <p className={styles.bio}>{bio}</p>

      <div className={styles.cta}>
        <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
          → See my work
        </a>
        <a href="#contact" className={`${styles.btn} ${styles.ghost}`}>
          Get in touch
        </a>
      </div>

      <Terminal lines={TERMINAL_LINES} />

    </section>
  )
}