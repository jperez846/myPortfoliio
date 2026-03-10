import Tag from '../components/Tag'
import Terminal  from '../components/Terminal'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';


// const TERMINAL_LINES = [
//   { prompt: '➜ portfolio git:(main)', cmd: 'git status' },
//   { out: 'On branch main' },
//   { out: 'Changes not staged for commit:' },
//   { out: '  modified:   src/App.tsx' },
//   { out: '  modified:   src/components/Projects.tsx' },
//   { out: '  new file:   src/components/Terminal.tsx' },

//   { prompt: '➜ portfolio git:(main)', cmd: 'git add .' },
//   { out: '✓ Staged 6 files for commit' },

//   { prompt: '➜ portfolio git:(main)', cmd: 'git commit -m "feat(portfolio): base implementation for showcasing projects and skillset"' },
//   { out: '[main 3fa9c21] feat(portfolio): base implementation for showcasing projects and skillset' },
//   { out: ' 6 files changed, 214 insertions(+)' },
//   { out: ' create mode 100644 src/components/Terminal.tsx' },

//   { prompt: '➜ portfolio git:(main)', cmd: 'git push origin main' },
//   { out: 'Enumerating objects: 18, done.' },
//   { out: 'Counting objects: 100% (18/18), done.' },
//   { out: 'Compressing objects: 100% (11/11), done.' },
//   { out: 'Writing objects: 100% (12/12), 2.45 KiB | 2.45 MiB/s, done.' },
//   { out: 'remote: 🚀 Portfolio updated successfully' },
//   { out: 'remote: Your commit will make recruiters slightly more impressed.' },
//   { out: 'To git@github.com:jperez846/myPortfoliio.git' },
//   { out: '   a12c1d4..3fa9c21  main -> main' },
// ];

const TERMINAL_LINES = [
  { prompt: '➜ portfolio git:(main)', cmd: 'git add .' },
  { out: '✓ Staged files for commit' },

  { prompt: '➜ portfolio git:(main)', cmd: 'git commit -m "feat(portfolio): base implementation for showcasing projects and skillset"' },
  { out: '[main 3fa9c21] feat(portfolio): base implementation for showcasing projects and skillset' },
  { out: '6 files changed, 214 insertions(+)' },

  { prompt: '➜ portfolio git:(main)', cmd: 'git push origin main' },
  { out: '✓ Pushed to github.com:jperez846/myPortfolio.git' },
  { out: ':) Portfolio updated · recruiters impressed' },
];

/**
 * Props:
 *   person  — { name, bio, available }
 *   titles  — [{ label, variant }]
 */
export default function Home({ person, titles, projects }) {
  const { name, bio, available } = person
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section id="home" className={styles.section} aria-label="Introduction">

      {available && (
        <p className={styles.eyebrow}>Available for new opportunities</p>
      )}

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
      <Link to="/projects" className={`${styles.btn} ${styles.primary}`}>
        → See my work
      </Link>

      <Link to="/contact" className={`${styles.btn} ${styles.ghost}`}>
        Get in touch
      </Link>
      </div>

      <Terminal lines={TERMINAL_LINES} />

    </section>
  )
}