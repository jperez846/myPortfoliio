import styles from './SectionHeader.module.css'

/**
 * Props:
 *   num    — '01' | '02' etc.
 *   title  — section heading text
 */
export default function SectionHeader({ num, title }) {
  return (
    <div className={styles.header}>
      <span className={styles.num}>{num}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} aria-hidden="true" />
    </div>
  )
}