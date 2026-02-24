import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone, X, Download } from 'lucide-react';

interface CVProps {
    isOpen: boolean;
    onClose: () => void;
}

const CV = ({ isOpen, onClose }: CVProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="cv-modal-overlay"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="cv-modal-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="cv-modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="cv-paper glass-card">
                            <header className="cv-header">
                                <div className="cv-header-left">
                                    <h1>Yahaya Ishaq</h1>
                                    <p className="cv-title accent-text">Backend Laravel Developer</p>
                                </div>
                                <div className="cv-contact-grid">
                                    <div className="cv-contact-item"><Mail size={16} /> <span>yahaya.ishaq@example.com</span></div>
                                    <div className="cv-contact-item"><Phone size={16} /> <span>+234 800 000 0000</span></div>
                                    <div className="cv-contact-item"><MapPin size={16} /> <span>Abuja, Nigeria</span></div>
                                    <div className="cv-contact-item"><Linkedin size={16} /> <span>linkedin.com/in/yahaya-ishaq</span></div>
                                </div>
                            </header>

                            <div className="cv-content">
                                <aside className="cv-sidebar">
                                    <div className="cv-section-block">
                                        <h3>Technical Skills</h3>
                                        <ul className="cv-skill-list">
                                            <li>Laravel / PHP</li>
                                            <li>RESTful API Design</li>
                                            <li>MySQL / PostgreSQL</li>
                                            <li>AWS S3 / Cloudflare</li>
                                            <li>Redis / Caching</li>
                                            <li>Pusher / Real-time</li>
                                            <li>Git / CI/CD</li>
                                            <li>Payment Gateways</li>
                                            <li>Docker / DevOps</li>
                                        </ul>
                                    </div>
                                </aside>

                                <main className="cv-main">
                                    <div className="cv-section-block">
                                        <h3>Professional Summary</h3>
                                        <p>
                                            A results-driven Backend Developer with extensive experience in the Laravel ecosystem.
                                            Proven track record of building scalable APIs, secure financial systems, and high-concurrency
                                            mobile backends. Expert in architecting complex database schemas and seamless
                                            third-party integrations.
                                        </p>
                                    </div>

                                    <div className="cv-section-block">
                                        <h3>Key Projects</h3>
                                        <div className="cv-project-item">
                                            <h4>SwayRider API <span className="cv-date">2024</span></h4>
                                            <p>Lead Backend for a logistics platform. Automated distance pricing and real-time tracking for 100+ riders.</p>
                                        </div>
                                        <div className="cv-project-item">
                                            <h4>TribeFund API <span className="cv-date">2023</span></h4>
                                            <p>Architected a digital rotational savings platform with secure wallet logic and 2FA.</p>
                                        </div>
                                        <div className="cv-project-item">
                                            <h4>Rento Backend <span className="cv-date">2023</span></h4>
                                            <p>Scaleable property management system with encrypted document storage on AWS S3.</p>
                                        </div>
                                    </div>

                                    <div className="cv-section-block">
                                        <h3>Education</h3>
                                        <div className="cv-edu-item">
                                            <h4>Bachelor of Science <span className="cv-date">In View</span></h4>
                                            <p>Computer Science</p>
                                        </div>
                                    </div>
                                </main>
                            </div>

                            <div className="cv-footer no-print">
                                <button className="btn-primary" onClick={() => window.print()}>
                                    <Download size={20} style={{ marginRight: '8px' }} />
                                    Download CV (PDF)
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CV;
