import { motion } from 'motion/react'
import Tag from '../components/Tag'
import Terminal from '../components/Terminal'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const TERMINAL_LINES = [
  { prompt: '➜ awebos git:(main)', cmd: 'git add .' },
  { out: '✓ Staged files for commit' },

  { prompt: '➜ awebos git:(main)', cmd: 'git commit -m "feat(platform): modernize client legacy system to microservices"' },
  { out: '[main a7f2c31] feat(platform): modernize client legacy system to microservices' },
  { out: '12 files changed, 847 insertions(+), 203 deletions(-)' },

  { prompt: '➜ awebos git:(main)', cmd: 'git push origin main' },
  { out: '✓ Pushed to github.com:awebos/client-platform.git' },
  { out: ':) Client system modernized · delivered on time' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home({ person, titles }) {
  const { name, bio, available, availableText } = person
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')
  const paragraphs = bio.split('\n\n').filter(Boolean)

  return (
    <motion.section
      id="home"
      className={styles.section}
      aria-label="Introduction"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {available && (
        <motion.p className={styles.eyebrow} variants={item}>
          {availableText ?? 'Available for new opportunities'}
        </motion.p>
      )}

      <motion.h1 className={styles.name} variants={item}>
        {firstName} {lastName}
      </motion.h1>

      <motion.div
        className={styles.tags}
        role="list"
        aria-label="Professional titles"
        variants={item}
      >
        {titles.map(({ label, variant }) => (
          <Tag key={label} variant={variant} role="listitem">
            {label}
          </Tag>
        ))}
      </motion.div>

      <motion.div className={styles.bioBlock} variants={item}>
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.bio}>{p}</p>
        ))}
      </motion.div>

      <motion.div className={styles.cta} variants={item}>
        <Link to="/contact" className={`${styles.btn} ${styles.primary}`}>
          Let's talk
        </Link>
        <Link to="/projects" className={`${styles.btn} ${styles.ghost}`}>
          See our work
        </Link>
      </motion.div>

      <motion.div variants={item}>
        <Terminal lines={TERMINAL_LINES} />
      </motion.div>
    </motion.section>
  )
}
