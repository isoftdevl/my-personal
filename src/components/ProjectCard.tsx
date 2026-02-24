import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card glass-card"
        >
            <div className="project-card-header">
                <div className="project-icon">
                    <Layers size={24} className="accent-text" />
                </div>
                <div className="title-area">
                    <h3>{project.title}</h3>
                    {project.isClientWork && <span className="badge-client">Client Work</span>}
                </div>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="problem-area">
                <strong>Problem Solved:</strong> {project.problemSolved}
            </div>

            <div className="tech-tags">
                {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>

            <ul className="feature-list">
                {project.features.slice(0, 2).map((feature, i) => (
                    <li key={i}><Zap size={14} className="feature-icon" /> {feature}</li>
                ))}
            </ul>

            <div className="project-actions">
                <div className="links">
                    {project.githubUrl && (
                        <a href={project.githubUrl} className="icon-link" title="GitHub"><Github size={20} /></a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} className="icon-link" title="Live Demo"><ExternalLink size={20} /></a>
                    )}
                </div>
                {!project.demoUrl && (
                    <span className="badge-demo-unavailable">Live demo unavailable</span>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
