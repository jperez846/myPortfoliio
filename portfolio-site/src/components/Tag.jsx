import styles from './Tag.module.css'

/**
 * Tag / badge component.
 *
 * Props:
 *   children  — text content
 *   variant   — 'accent' | 'blue' | 'orange' | 'chip' | (default muted)
 */
export default function Tag({ children, variant = 'default' }) {
  return (
    <span className={`${styles.tag} ${styles[variant] ?? ''}`}>
      {children}
    </span>
  )
}