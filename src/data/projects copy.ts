export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    features: string[];
    role: string;
    problemSolved: string;
    isClientWork: boolean;
    githubUrl?: string;
    demoUrl?: string;
}

export const projects: Project[] = [
    {
        id: 'orickfit',
        title: 'OrickFit API',
        description: 'AI-Powered Fitness & Social Ecosystem',
        longDescription: 'A massive, feature-rich health and fitness backend. Orchestrates workout/diet planning, community engagement modules, and subscription-based revenue models. Features an integrated ChatGPT FitBot for personalized user guidance.',
        techStack: ['Laravel 11', 'MySQL', 'ChatGPT API', 'Pusher', 'OneSignal', 'Paystack', 'Spatie'],
        features: [
            'AI-driven personalized fitness recommendations (FitBot)',
            'Dynamic workout & diet assignment engine',
            'Community social feed with engagement metrics',
            'Modular architecture with secure subscription/wallet systems',
            'Gym entry management and real-time attendance tracking'
        ],
        role: 'Senior Backend Engineer',
        problemSolved: 'Engineered a unified wellness platform that scales community interaction and personalized healthcare logic, reducing user churn by 40% through AI engagement.',
        isClientWork: true
    },
    {
        id: 'b-solarpro',
        title: 'B-Solar Pro',
        description: 'Inventory & Solar Sales Management',
        longDescription: 'A comprehensive ERP solution for solar energy providers. Features enterprise-grade inventory lifecycle management, automated installation tracking, and a robust billing system designed to scale solar business operations.',
        techStack: ['PHP/Laravel', 'MySQL', 'Bootstrap', 'Custom API'],
        features: [
            'Real-time inventory lifecycle management',
            'Automated installation tracking and maintenance alerts',
            'Full-suite client relationship & billing management',
            'High-security administrative audit logs'
        ],
        role: 'Full Stack Developer',
        problemSolved: 'Replaced inefficient manual tracking with a centralized system, cutting administrative time by 60% and ensuring 100% accuracy in solar panel inventory across multiple sites.',
        isClientWork: true,
        demoUrl: 'https://bsolarpro.com.ng/'
    }
];
