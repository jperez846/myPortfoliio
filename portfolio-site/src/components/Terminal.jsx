import { useState, useEffect } from 'react'
import styles from './Terminal.module.css'

const FIRST_LINE_DELAY = 1200   // ms before first line appears
const LINE_GAP         = 600    // ms between each subsequent line

/**
 * Props:
 *   lines — array of { prompt?, cmd?, out? }
 *           prompt: shell prompt string  e.g. '➜ ~'
 *           cmd:    command text
 *           out:    output text
 */
export default function Terminal({ lines = [] }) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= lines.length) return
    const delay = visible === 0 ? FIRST_LINE_DELAY : LINE_GAP
    const t = setTimeout(() => setVisible(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visible, lines.length])

  return (
    <div className={styles.terminal} aria-label="Terminal demo">

      {/* title bar */}
      <div className={styles.bar} aria-hidden="true">
        <span className={`${styles.dot} ${styles.red}`}    />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`}  />
        <span className={styles.tabLabel}>zsh — portfolio</span>
      </div>

      {/* output */}
      <div className={styles.body} role="region" aria-label="Terminal output">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${styles.line} ${i < visible ? styles.show : styles.hide}`}
          >
            {line.prompt && <span className={styles.prompt}>{line.prompt}&nbsp;</span>}
            {line.cmd    && <span className={styles.cmd}>{line.cmd}</span>}
            {line.out    && <span className={styles.out}>{line.out}</span>}
          </div>
        ))}

        {/* cursor line — shown after all output lines appear */}
        <div className={`${styles.line} ${visible >= lines.length ? styles.show : styles.hide}`}>
          <span className={styles.prompt}>➜ ~&nbsp;</span>
          <span className={styles.cursor} aria-hidden="true" />
        </div>
      </div>

    </div>
  )
}