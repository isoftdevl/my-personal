import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, X, Download, MessageSquare } from 'lucide-react';

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
                                    <p className="cv-title accent-text">Backend Engineer | Secure Systems & API Architect</p>
                                </div>
                                <div className="cv-contact-grid">
                                    <div className="cv-contact-item"><Mail size={16} /> <span>hire.isoftdev@gmail.com</span></div>
                                    <div className="cv-contact-item"><Phone size={16} /> <span>+234 816 067 8517 (Call)</span></div>
                                    <div className="cv-contact-item"><MessageSquare size={16} /> <span>+234 704 417 5549 (WhatsApp)</span></div>
                                    <div className="cv-contact-item"><MapPin size={16} /> <span>Abuja, Nigeria</span></div>
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
                                            <li>Data Encryption & Compliance</li>
                                            <li>Role-Based Access Control</li>
                                            <li>AWS S3 / Cloudflare</li>
                                            <li>Redis / Caching</li>
                                            <li>Pusher / Real-time Comms</li>
                                            <li>Git / CI/CD Pipelines</li>
                                            <li>Payment Gateways</li>
                                            <li>Docker / DevOps</li>
                                        </ul>
                                    </div>
                                    <div className="cv-section-block">
                                        <h3>Core Competencies</h3>
                                        <ul className="cv-skill-list">
                                            <li>Sensitive Data Handling</li>
                                            <li>Audit Trail & Logging</li>
                                            <li>Scheduling Systems</li>
                                            <li>Workflow Automation</li>
                                            <li>Multi-Role Platforms</li>
                                        </ul>
                                    </div>
                                </aside>

                                <main className="cv-main">
                                    <div className="cv-section-block">
                                        <h3>Professional Summary</h3>
                                        <p>
                                            A results-driven Backend Engineer specializing in building secure, compliance-ready
                                            API platforms in the Laravel ecosystem. Proven expertise in architecting systems that handle
                                            sensitive user data, encrypted document storage, role-based access control, and real-time
                                            communication — core requirements for healthcare and enterprise SaaS. Experienced in
                                            multi-gateway payment processing, workforce scheduling logic, and comprehensive audit trails.
                                        </p>
                                    </div>

                                    <div className="cv-section-block">
                                        <h3>Key Projects</h3>
                                        <div className="cv-project-item">
                                            <h4>OrickFit API — Health & Wellness Platform <span className="cv-date">2024</span></h4>
                                            <p>Engineered a health-tech backend with AI-driven personalized recommendations, user health data management, subscription billing, and real-time notifications for 1,000+ users.</p>
                                        </div>
                                        <div className="cv-project-item">
                                            <h4>SwiftRider API — Logistics & Workforce Platform <span className="cv-date">2024</span></h4>
                                            <p>Built a real-time workforce coordination system with KYC verification, scheduling, automated payroll/earnings, and live GPS tracking for 100+ field agents.</p>
                                        </div>
                                        <div className="cv-project-item">
                                            <h4>TribeFund API — Fintech & Compliance Platform <span className="cv-date">2023</span></h4>
                                            <p>Architected a financial platform with encrypted wallet management, 2FA authentication, automated scheduling, and full transaction audit trails.</p>
                                        </div>
                                        <div className="cv-project-item">
                                            <h4>Rento Backend — Document & Compliance System <span className="cv-date">2023</span></h4>
                                            <p>Delivered encrypted document storage on AWS S3, secure OTP verification via Twilio, and automated invoice generation for sensitive tenant/landlord records.</p>
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
