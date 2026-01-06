import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Layout,
    Figma,
    Smartphone,
    Terminal,
    Cloud,
    Layers,
    FileCode,
    Atom,
    Wind,
    Monitor,
    Code
} from 'lucide-react';

const skills = [
    { name: 'HTML&CSS', icon: FileCode, color: 'text-orange-500', tech: ['HTML5', 'CSS3', 'Grid/Flex'] },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400', tech: ['ES6+', 'DOM', 'Async/Await'] },
    { name: 'React', icon: Atom, color: 'text-cyan-400', tech: ['Hooks', 'Context API', 'Redux'] },
    { name: 'Tailwind', icon: Wind, color: 'text-blue-500', tech: ['Customization', 'JIT', 'Responsive'] },
    { name: 'Frontend', icon: Monitor, color: 'text-indigo-400', tech: ['Vite', 'Next.js', 'Animations'] },
    { name: 'Figma', icon: Figma, color: 'text-purple-400', tech: ['UI Design', 'Prototypes', 'Tokens'] },
    { name: 'Programming', icon: Code2, color: 'text-yellow-400', tech: ['JavaScript', 'TypeScript', 'C++'] },
    { name: 'Full Stack', icon: Layers, color: 'text-green-400', tech: ['MERN', 'T3 Stack'] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-bg-dark/50">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-gray-400">Technologies I use to bring ideas to life.</p>
                </div>
                <div className="text-sm font-medium text-primary flex gap-2 items-center">
                    Scroll to explore →
                </div>
            </div>

            <div className="relative">
                <div className="flex overflow-x-auto gap-8 px-6 pb-12 pt-4 no-scrollbar cursor-grab active:cursor-grabbing">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-80 glass-card p-8 border-white/5"
                        >
                            <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 ${skill.color}`}>
                                <skill.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {skill.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs glass border border-white/5 rounded-full text-gray-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Subtle Fade gradients for horizontal scroll */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
