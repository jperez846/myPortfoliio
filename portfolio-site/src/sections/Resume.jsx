import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import styles from './Resume.module.css'

export default function Resume({ skills, toolchain, resumePath }) {
  return (
    <section id="resume" className={styles.section} aria-label="Resume">
      <SectionHeader title="Resume" />

      <div className={styles.layout}>

        {/* PDF viewer */}
        <div className={styles.viewer}>
          {resumePath ? (
            <iframe
              src={`${resumePath}#toolbar=0`}
              title="Jesus Perez Resume"
              className={styles.iframe}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.pdfIcon}>📄</span>
              <p>Drop <code>resume02.pdf</code> in <code>/public</code></p>
              <p>and update <code>resumePath</code> in App.jsx</p>
            </div>
          )}
        </div>

        {/* sidebar */}
        <aside className={styles.sidebar}>

          <div className={styles.card}>
            <h4 className={styles.cardHeading}>Core Skills</h4>
            {skills.map(({ label, pct }) => (
              <div key={label} className={styles.skillRow}>
                <span className={styles.skillLabel}>{label}</span>
                <div className={styles.bar} aria-label={`${pct}%`}>
                  <div className={styles.fill} style={{ width: `${pct}%` }} />
                </div>
              </div>
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

        </aside>
      </div>
    </section>
  )
}