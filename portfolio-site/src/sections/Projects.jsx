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

function ProjectCard({ project }) {
  const { title, description, arch, tools, github, demo } = project
  return (
    <article className={styles.card}>
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
          {github && <a href={github} className={styles.link}>⬡ GitHub</a>}
          {demo   && <a href={demo}   className={styles.link}>↗ Live demo</a>}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ projects }) {
  console.log("These are my projects : " );
  console.log(projects);
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <SectionHeader title="Projects" />
      <div className={styles.grid}>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}