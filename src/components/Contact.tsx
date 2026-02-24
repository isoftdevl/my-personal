import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-card glass-card"
                >
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="hero-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        I'm always open to discussing new projects, backend architectures,
                        or high-performance API solutions.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:your-email@example.com" className="contact-btn">
                            <Mail size={20} />
                            <span>Email Me</span>
                        </a>
                        <div className="social-links">
                            <a href="https://github.com" className="social-icon" title="GitHub"><Github size={24} /></a>
                            <a href="https://linkedin.com" className="social-icon" title="LinkedIn"><Linkedin size={24} /></a>
                            <a href="https://wa.me/your-number" className="social-icon" title="WhatsApp"><MessageSquare size={24} /></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
