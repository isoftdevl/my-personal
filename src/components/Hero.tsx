import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

interface HeroProps {
    onOpenCV: () => void;
}

const Hero = ({ onOpenCV }: HeroProps) => {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h2 className="neon-text accent-text mt-3">Yahaya Ishaq</h2>
                    <h1>Backend Laravel Developer</h1>
                    <p className="hero-text">
                        Building scalable APIs and backend systems for high-performance mobile and web applications.
                    </p>
                    <div className="hero-cta">
                        <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View GitHub
                        </button>
                        {/* <button className="btn-secondary" onClick={onOpenCV}>
                            View CV
                        </button> */}
                        <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image-container"
                >
                    <div className="profile-frame">
                        <img src={profileImg} alt="Yahaya Ishaq" className="profile-img" />
                        <div className="profile-glow"></div>
                    </div>
                </motion.div>
            </div>
            <div className="hero-background-gradient"></div>
        </section>
    );
};

export default Hero;
