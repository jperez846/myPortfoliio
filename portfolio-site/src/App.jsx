import Nav      from './sections/Nav'
import Home     from './sections/Home'
import Projects from './sections/Projects'
import Resume   from './sections/Resume'
import Contact  from './sections/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

import {
  person,
  titles,
  contact,
  skills,
  toolchain,
} from './data/portfolio'

import { details } from './data/projects'

export default function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Nav initials={person.initials} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/"        element={<Home     person={person} titles={titles} />} />
              <Route path="/projects" element={<Projects projects={details} />} />
              <Route path="/resume"   element={<Resume   skills={skills} toolchain={toolchain} resumePath="/resume03.pdf" />} />
              <Route path="/contact"  element={<Contact  contact={contact} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer>
        deployed via github-actions → s3 → cloudfront
      </footer>
    </div>
  )
}
