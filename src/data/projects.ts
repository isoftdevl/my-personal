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
        description: 'Health & Wellness Platform with AI-Driven Care',
        longDescription: 'A comprehensive health-tech backend managing user wellness data, personalized care plans, and AI-powered health recommendations. Features role-based access, subscription billing, and HIPAA-aligned data handling patterns.',
        techStack: ['Laravel 11', 'MySQL', 'ChatGPT API', 'Pusher', 'OneSignal', 'Paystack', 'Spatie'],
        features: [
            'AI-driven personalized health recommendations',
            'User health data management with role-based access',
            'Real-time notifications and communication channels',
            'Subscription billing and secure wallet systems',
            'Attendance tracking and scheduling engine'
        ],
        role: 'Senior Backend Engineer',
        problemSolved: 'Built a unified health platform handling sensitive user data at scale, with AI-powered engagement that improved user retention by 40%.',
        isClientWork: true,
        githubUrl: 'https://github.com/isoftdevl/orickfitness-api'
    },
    {
        id: 'swayrider',
        title: 'SwiftRider API',
        description: 'Workforce Coordination & Field Agent Platform',
        longDescription: 'A real-time workforce management API coordinating 100+ field agents. Features KYC identity verification, automated scheduling and payroll, GPS tracking, and secure encrypted communication channels.',
        techStack: ['Laravel 11', 'MySQL', 'Pusher', 'Google Maps', 'Paystack', 'Laravel Sanctum'],
        features: [
            'Real-time workforce tracking and coordination',
            'KYC identity verification and compliance workflows',
            'Automated payroll and earnings management',
            'Encrypted communication between agents and dispatch'
        ],
        role: 'Lead Backend Developer',
        problemSolved: 'Replaced manual coordination with an automated workforce platform handling scheduling, compliance verification, and real-time communication for 100+ field agents.',
        isClientWork: true,
        githubUrl: 'https://github.com/isoftdevl/swayrider-api'
    },
    {
        id: 'rento',
        title: 'Rento Backend',
        description: 'Secure Document & Compliance Management System',
        longDescription: 'An enterprise backend with encrypted document storage on AWS S3, HIPAA-aligned data handling patterns, OTP-secured communication via Twilio, and automated compliance reporting.',
        techStack: ['Laravel', 'AWS S3', 'Twilio', 'Ably', 'Flutterwave', 'PostgreSQL'],
        features: [
            'Encrypted document storage with access audit trails',
            'Secure OTP verification and 2FA via Twilio',
            'Automated compliance reporting and invoice generation',
            'Real-time notification system with Ably'
        ],
        role: 'Senior Backend Engineer',
        problemSolved: 'Delivered a compliance-ready platform with encrypted document management, secure communication channels, and automated audit trail generation.',
        isClientWork: true,
        githubUrl: 'https://github.com/isoftdevl/rento-backend-api'
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
        description: 'Secure Financial Platform with Compliance & Audit',
        longDescription: 'A compliance-focused fintech backend with encrypted wallet management, automated scheduling, 2FA security, KYC verification, and comprehensive transaction audit trails.',
        techStack: ['Laravel 10', 'MySQL', 'Redis', 'AWS S3', 'Pusher', 'Spatie'],
        features: [
            'Automated scheduling with rotational payout logic',
            'Encrypted wallet system with KYC compliance flow',
            'Full transaction audit trail and dispute resolution',
            'Real-time notifications and secure data handling'
        ],
        role: 'Senior Backend Engineer',
        problemSolved: 'Built a compliance-ready financial platform with end-to-end encryption, automated scheduling, and complete audit trail visibility.',
        isClientWork: true,
        githubUrl: 'https://github.com/isoftdevl/tribefund-api'
    },
    {
        id: 'kalo-kalo',
        title: 'Kalo Kalo API',
        description: 'High-Volume Transaction & Audit Platform',
        longDescription: 'A high-performance backend handling complex multi-gateway payments, granular role-based permissions, and comprehensive activity logging — designed for strict compliance and auditing requirements.',
        techStack: ['Laravel 11', 'MySQL', 'Stripe', 'Paystack', 'Flutterwave', 'ActivityLog'],
        features: [
            'Multi-gateway payment processing with reconciliation',
            'Comprehensive activity logging for regulatory audit trails',
            'Granular role-based permission system (RBAC)',
            'Real-time data synchronization and state management'
        ],
        role: 'Lead Backend Developer',
        problemSolved: 'Engineered a resilient transaction platform with strict auditing, multi-gateway reconciliation, and role-based access control for regulatory compliance.',
        isClientWork: true,
        githubUrl: 'https://github.com/isoftdevl/kalo-kalo-api'
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
        isClientWork: true,
        githubUrl: 'https://github.com/isoftdevl/voting-api'
    }
];
