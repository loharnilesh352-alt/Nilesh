import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Code, Zap, Shield } from 'lucide-react';

const services = [
    {
        title: 'Web Development',
        description: 'Custom, high-performance websites built with modern frameworks and best practices.',
        icon: Globe,
        color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        title: 'Mobile Apps',
        description: 'Cross-platform mobile applications that provide seamless experiences across all devices.',
        icon: Smartphone,
        color: 'from-purple-500/20 to-pink-500/20',
    },
    {
        title: 'Figma',
        description: 'User-centric designs that are visually stunning and intuitive to navigate.',
        icon: Palette,
        color: 'from-orange-500/20 to-red-500/20',
    },
    {
        title: 'API Development',
        description: 'Robust and scalable backend systems to power your web and mobile applications.',
        icon: Code,
        color: 'from-green-500/20 to-emerald-500/20',
    },
    {
        title: 'Fast Performance',
        description: 'Optimizing code and assets for lightning-fast load times and smooth interactions.',
        icon: Zap,
        color: 'from-yellow-500/20 to-amber-500/20',
    },
    {
        title: 'Security First',
        description: 'Implementing top-tier security measures to protect your data and users.',
        icon: Shield,
        color: 'from-indigo-500/20 to-blue-500/20',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What I <span className="text-secondary">Offer</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Comprehensive digital solutions tailored to your business needs,
                    leveraging the latest technologies for maximum impact.
                </p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`glass-card p-10 group overflow-hidden relative`}
                    >
                        {/* Background Accent */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10">
                            <div className="w-14 h-14 glass rounded-xl flex items-center justify-center mb-8 border-white/10 group-hover:border-white/20 transition-colors">
                                <service.icon size={28} className="text-white group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
