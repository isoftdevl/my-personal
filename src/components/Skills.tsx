import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const skills = [
    { name: 'Laravel', icon: <Server size={24} />, category: 'Backend' },
    { name: 'PHP', icon: <Terminal size={24} />, category: 'Backend' },
    { name: 'MySQL', icon: <Database size={24} />, category: 'Database' },
    { name: 'REST APIs', icon: <Code2 size={24} />, category: 'Integration' },
    { name: 'PostgreSQL', icon: <Database size={24} />, category: 'Database' },
    { name: 'AWS / S3', icon: <Settings size={24} />, category: 'Infrastructure' },
    { name: 'Git / GitHub', icon: <Terminal size={24} />, category: 'Tools' },
    { name: 'React', icon: <Layout size={24} />, category: 'Frontend' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="section-subtitle">Proficient in modern backend development and enterprise integrations.</p>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="skill-card glass-card"
                        >
                            <div className="skill-icon accent-text">{skill.icon}</div>
                            <div className="skill-info">
                                <h4>{skill.name}</h4>
                                <p>{skill.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
