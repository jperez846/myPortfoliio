import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import styles from './Projects.module.css'

function ArchDiagram({ nodes }) {
  return (
    <div className={styles.arch}>
      {nodes.map((node, i) => (
        <div key={node} className={styles.archRow}>
          <span className={`${styles.archNode} ${i === 0 ? styles.archHighlight : ''}`}>
            {node}
          </span>
          {i < nodes.length - 1 && (
            <span className={styles.archArrow} aria-hidden="true">↓</span>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { title, description, arch, tools, github, demo } = project

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.demo}>
        <ArchDiagram nodes={arch} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.chips}>
          {tools.map(t => <Tag key={t} variant="chip">{t}</Tag>)}
        </div>
        <div className={styles.links}>
          {github && (
            <a href={github} className={styles.link} target="_blank" rel="noopener noreferrer">
              ⬡ GitHub
            </a>
          )}
          {demo && (
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
              ↗ Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <SectionHeader title="Projects" />
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
