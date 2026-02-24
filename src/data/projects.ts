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
        id: 'swayrider',
        title: 'SwayRider API',
        description: 'A robust bike delivery platform API',
        longDescription: 'A complete RESTful API built with Laravel 11, powering a high-concurrency bike delivery ecosystem. Features real-time tracking, automated pricing, and secure payments.',
        techStack: ['Laravel 11', 'MySQL', 'Pusher', 'Google Maps', 'Paystack', 'Laravel Sanctum'],
        features: [
            'Real-time delivery tracking with Pusher',
            'Geofencing and automated distance-based pricing',
            'Rider KYC and Wallet management system',
            'Secure payment integration with Paystack'
        ],
        role: 'Lead Backend Developer',
        problemSolved: 'Streamlined independent bike logistics by creating a unified API for tracking, wallet funding, and automated pricing, replacing manual coordination.',
        isClientWork: true
    },
    {
        id: 'rento',
        title: 'Rento Backend',
        description: 'Scalable property rental ecosystem',
        longDescription: 'An enterprise-level backend for a property rental application, integrating AWS S3 for document storage and Twilio for secure communication.',
        techStack: ['Laravel', 'AWS S3', 'Twilio', 'Ably', 'Flutterwave', 'PostgreSQL'],
        features: [
            'Asynchronous notification system with Ably',
            'Encrypted document storage using AWS S3',
            'Advanced SMS and OTP verification via Twilio',
            'Automated invoice generation (DomPDF)'
        ],
        role: 'Senior Backend Engineer',
        problemSolved: 'Centralized property management and tenant-landlord communication in a secure environment with automated payment and documentation flows.',
        isClientWork: true
    },
    {
        id: 'b-solarpro',
        title: 'B-Solar Pro',
        description: 'Inventory & Solar Sales Management',
        longDescription: 'A custom business management tool specifically designed for solar energy providers to handle complex inventory and client installation tracking.',
        techStack: ['PHP/Laravel', 'MySQL', 'Bootstrap', 'Custom API'],
        features: [
            'Inventory lifecycle management',
            'Installation tracking and maintenance scheduling',
            'Client relationship & billing management'
        ],
        role: 'Full Stack Developer',
        problemSolved: 'Automated the tracking of solar panel inventory and installation lifecycles, reducing administrative overhead for solar service providers.',
        isClientWork: true,
        demoUrl: 'https://bsolarpro.com.ng/'
    },
    {
        id: 'tribefund',
        title: 'TribeFund API',
        description: 'Fintech platform for rotational savings',
        longDescription: 'A comprehensive fintech backend powering digital rotational group savings (Ajo/Esusu). Features secure wallet management, automated rotational payouts, and 2FA security.',
        techStack: ['Laravel 10', 'MySQL', 'Redis', 'AWS S3', 'Pusher', 'Spatie'],
        features: [
            'Digital "Esusu/Ajo" rotational logic with automated schedules',
            'Secure wallet system with KYC verification flow',
            'Real-time transaction notifications via Pusher',
            'Admin dashboard for group dispute resolution'
        ],
        role: 'Senior Backend Engineer',
        problemSolved: 'Modernized traditional informal savings by building a transparent, secure, and automated digital platform for communal wealth building.',
        isClientWork: true
    },
    {
        id: 'kalo-kalo',
        title: 'Kalo Kalo API',
        description: 'Gaming & High-Volume Transaction API',
        longDescription: 'A high-performance backend built for a mobile gaming app, handling complex user interactions, multi-gateway payments, and detailed audit logs.',
        techStack: ['Laravel 11', 'MySQL', 'Stripe', 'Paystack', 'Flutterwave', 'ActivityLog'],
        features: [
            'Multi-gateway payment integration (Stripe, Paystack, Flutterwave)',
            'Comprehensive activity logging for audit trails',
            'Social authentication and granular permission system',
            'Real-time balance updates and game state synchronization'
        ],
        role: 'Lead Backend Developer',
        problemSolved: 'Engineered a resilient payment and game-state backbone capable of handling high-frequency transactions and strict auditing requirements.',
        isClientWork: true
    },
    {
        id: 'voting-api',
        title: 'Mobile Voting API',
        description: 'Secure and transparent voting system',
        longDescription: 'The backend for a mobile voting application designed for security and scalability. Implements real-time result broadcasting and secure vote confirmation.',
        techStack: ['Laravel 11', 'MySQL', 'Stripe', 'Paystack', 'Flutterwave', 'Pusher'],
        features: [
            'Secure, non-repudiable voting mechanism',
            'Integrated payment gateways for premium voting features',
            'Real-time result broadcasting via Pusher',
            'Scalable architecture for high-concurrency event voting'
        ],
        role: 'Backend Developer',
        problemSolved: 'Delivered a transparent and tamper-resistant voting platform that handles intense traffic spikes during live voting events.',
        isClientWork: true
    }
];
