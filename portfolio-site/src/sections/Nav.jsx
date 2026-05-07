import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'home',     id: 'home',     to: '/'        },
  { label: 'projects', id: 'projects', to: '/projects' },
  { label: 'resume',   id: 'resume',   to: '/resume'   },
  { label: 'contact',  id: 'contact',  to: '/contact'  },
]

export default function Nav({ initials = 'JP' }) {
  const location = useLocation()
  const [scrolled,  setScrolled]  = useState(false)
  const [activeId,  setActiveId]  = useState('home')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const currentLink = LINKS.find(link => link.to === location.pathname)
    if (currentLink) setActiveId(currentLink.id)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const close = () => setMenuOpen(false)

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* logo */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Link className={styles.logo} to="/">
          {initials}.dev
        </Link>
      </motion.div>

      {/* desktop links */}
      <ul className={styles.links} role="list">
        {LINKS.map(({ label, id, to }, i) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.06, ease: 'easeOut' }}
          >
            <Link
              to={to}
              className={`${styles.link} ${activeId === id ? styles.active : ''}`}
            >
              {label}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* hamburger button (mobile only) */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-drawer"
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* mobile drawer — AnimatePresence handles enter/exit */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="mobile-drawer"
            className={styles.drawer}
            role="list"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {LINKS.map(({ label, id, to }, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.28, ease: 'easeOut' }}
              >
                <Link
                  to={to}
                  className={`${styles.drawerLink} ${activeId === id ? styles.active : ''}`}
                  onClick={close}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
