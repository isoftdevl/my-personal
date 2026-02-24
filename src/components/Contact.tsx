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
                        I'm always open to discussing secure backend architectures,
                        compliance-ready systems, or healthcare technology solutions.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:hire.isoftdev@gmail.com" className="contact-btn">
                            <Mail size={20} />
                            <span>Email Me</span>
                        </a>
                        <div className="social-links">
                            <a href="https://github.com/isoftdevl" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                            <a href="https://linkedin.com/in/yahaya-ishaq" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                            <a href="https://wa.me/2347044175549" className="social-icon" title="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageSquare size={24} /></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
