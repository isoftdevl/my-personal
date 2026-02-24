import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import CV from './components/CV'
import Contact from './components/Contact'
import { projects } from './data/projects'
import { motion } from 'framer-motion'

function App() {
    const [isCVOpen, setIsCVOpen] = useState(false);

    return (
        <div className="portfolio">
            <Navbar onOpenCV={() => setIsCVOpen(true)} />
            <Hero onOpenCV={() => setIsCVOpen(true)} />
            <About />
            <Skills />

            <section id="projects" className="projects-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Strategic Projects</h2>
                        <p className="section-subtitle">Real-world enterprise solutions and backend systems.</p>
                    </motion.div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Contact />

            <CV isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

            <footer className="container">
                <div style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>&copy; {new Date().getFullYear()} Backend Architect Portfolio. Built with React & Laravel expertise.</p>
                </div>
            </footer>
        </div>
    )
}

export default App
