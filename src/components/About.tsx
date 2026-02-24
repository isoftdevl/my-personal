import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-text"
                    >
                        <h2 className="section-title" style={{ textAlign: 'left' }}>About Me</h2>
                        <p className="hero-text" style={{ fontSize: '1.1rem' }}>
                            I am a professional Backend Developer specializing in the Laravel ecosystem.
                            My expertise lies in building high-concurrency RESTful APIs, complex system
                            architectures, and seamless third-party integrations.
                        </p>
                        <p className="hero-text" style={{ fontSize: '1.1rem' }}>
                            With a strong focus on scalability and security, I've delivered robust solutions
                            for startups and established businesses, handling everything from real-time
                            logistics tracking to automated financial systems. I enjoy turning complex
                            business logic into clean, maintainable code.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-stats glass-card"
                    >
                        <div className="stat-item">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
