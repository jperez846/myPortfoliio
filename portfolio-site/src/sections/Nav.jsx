import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom';




const LINKS = [
  { href: '#home',     label: 'home',     id: 'home', to: '/'},
  { href: '#projects', label: 'projects', id: 'projects', to: '/projects'},
  { href: '#resume',   label: 'resume',   id: 'resume', to: '/resume'},
  { href: '#contact',  label: 'contact',  id: 'contact', to: '/contact'},
]

/**
 * Props:
 *   initials — e.g. 'JP' → renders 'JP.dev' as the logo
 */
export default function Nav({ initials = 'JP' }) {

  const location = useLocation()



  const [scrolled,  setScrolled]  = useState(false)
  const [activeId,  setActiveId]  = useState('home')
  const [menuOpen,  setMenuOpen]  = useState(false)

  /* frosted-glass nav after 20px scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* highlight nav link for whichever section is in view */
  // This is mostly for scrolling effect but we are implementing pages using react router.
  /******************************** */
  // useEffect(() => {

  //   const sections = LINKS
  //     .map(({ id }) => document.getElementById(id))
  //     .filter(Boolean)

  //   const observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) setActiveId(entry.target.id)
  //       })
  //     },
  //     { rootMargin: '-40% 0px -55% 0px' }
  //   )

  //   sections.forEach(s => observer.observe(s))
  //   return () => sections.forEach(s => observer.unobserve(s))
  // }, [])

  /* prevent body scroll while mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(()=>{
    console.log("current link: ");
    const currentLink = LINKS.find(link => link.to === location.pathname)
    console.log(currentLink)
    if(currentLink){
      setActiveId(currentLink.id)
    }

  }, [location.pathname])

  const close = () => setMenuOpen(false)

  return (
    // <nav>
    //   <Link to="/">Home</Link>
  
    // </nav>
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* logo */}
      <Link className={styles.logo} to='/'>
      {initials}.dev
      </Link>

      {/* desktop links */}
      <ul className={styles.links} role="list">
        {LINKS.map(({ href, label, id, to}) => (
          // <li key={id}>
          //   <a
          //     href={href}
          //     className={`${styles.link} ${activeId === id ? styles.active : ''}`}
          //   >
          //     {label}
          //   </a>
          // </li>
          <li key={id}>
          <Link to={to} className={`${styles.link} ${activeId === id ? styles.active : ''}`} >
          {label}
          </Link>
          </li>
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

      {/* mobile drawer */}
      <ul
        id="mobile-drawer"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
        role="list"
      >
        {LINKS.map(({ href, label, id }) => (
          <li key={id}>
            <a
              href={href}
              className={`${styles.drawerLink} ${activeId === id ? styles.active : ''}`}
              onClick={close}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}