import Nav     from './sections/Nav'
import Home    from './sections/Home'
import Projects from './sections/Projects'
import Resume   from './sections/Resume'
import Contact  from './sections/Contact'
import { Route, Routes } from 'react-router-dom'

import {
  person,
  titles,
  contact,
  skills,
  toolchain,
  projects,
} from './data/portfolio'

export default function App() {
  return (
    <div className='App'>
       <Nav initials={person.initials} />

      <main>
        <Routes>
        {/* <Home person={person} titles={titles} /> */}
        <Route path="/" element={<Home person={person} titles={titles} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/resume" element={<Resume skills={skills} toolchain={toolchain} resumePath="/resume.pdf" />} />
        <Route path="/contact" element={<Contact contact={contact} />} />



        </Routes>
      
        {/* <Projects projects={projects} /> */}
        {/* <Resume skills={skills} toolchain={toolchain} resumePath="/resume.pdf" /> */}
        {/* <Contact contact={contact} /> */}
      </main>

      <footer>
        Deployed via GitHub Actions → S3 → CloudFront
      </footer>
    </div>
     
    
  )
}