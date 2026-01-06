import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Nexus',
        description: 'A full-featured e-commerce platform with real-time inventory management and secure payments.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '🛒',
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'AI Analytics Dashboard',
        description: 'Enterprise-grade analytics dashboard with AI-driven insights and interactive data visualization.',
        tech: ['Next.js', 'Python', 'Tailwind CSS', 'D3.js'],
        image: '📊',
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Social Connect Plus',
        description: 'A modern social media platform featuring real-time messaging and community building.',
        tech: ['React Native', 'Firebase', 'Redux', 'Cloudinary'],
        image: '📱',
        github: 'https://github.com',
        live: 'https://example.com',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-bg-dark/30">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                        <p className="text-gray-400">
                            A collection of some of my best work, spanning web applications, mobile platforms, and analytical tools.
                        </p>
                    </div>
                    <button className="px-6 py-3 glass border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-semibold">
                        Explore All Projects
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card flex flex-col group"
                    >
                        {/* Project Preview */}
                        <div className="h-56 relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center text-6xl group-hover:bg-white/10 transition-colors">
                            {project.image}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <ExternalLink size={20} />
                                </a>
                                <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/80 bg-primary/5 px-2 py-1 rounded border border-primary/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex gap-4 border-t border-white/5 pt-6">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    <Code size={16} /> Repository
                                </a>
                                <a
                                    href={project.live}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
