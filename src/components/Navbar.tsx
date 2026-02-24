import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    onOpenCV: () => void;
}

const Navbar = ({ onOpenCV }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'CV', onClick: onOpenCV },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo accent-text neon-text">
                    <Code2 size={24} />
                    <span>Yahaya.Dev</span>
                </div>

                <div className="nav-desktop">
                    {navLinks.map((link) => (
                        link.onClick ? (
                            <button key={link.name} onClick={link.onClick} className="nav-link btn-link">
                                {link.name}
                            </button>
                        ) : (
                            <a key={link.name} href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                <button
                    className="nav-toggle neon-text"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="nav-mobile"
                    >
                        {navLinks.map((link) => (
                            link.onClick ? (
                                <button
                                    key={link.name}
                                    className="nav-mobile-link btn-link"
                                    onClick={() => {
                                        link.onClick!();
                                        setIsOpen(false);
                                    }}
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-mobile-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
