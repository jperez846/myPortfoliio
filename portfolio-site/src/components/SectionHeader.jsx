import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ num, title }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={styles.header}>
      {num && <span className={styles.num}>{num}</span>}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </div>
  )
}
