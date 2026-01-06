import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import myimage from '../assets/myimage.jpeg';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-primary font-medium tracking-wider mb-4">WELCOME TO MY WORLD</h2>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nilesh Parmar</span>
                                <br />
                                <span className="text-gray-400">Full Stack Developer</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                        >
                            I build high-end, scalable, and user-centric web applications with modern technologies.
                            Focused on creating seamless digital experiences that combine performance with stunning aesthetics.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold flex items-center gap-2 transition-all group"
                            >
                                View My Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 glass border hover:bg-white/5 text-white rounded-full font-semibold flex items-center gap-2 transition-all"
                            >
                                Contact Me
                            </a>
                            <button
                                className="px-8 py-4 glass border hover:bg-white/5 text-white rounded-full font-semibold flex items-center gap-2 transition-all"
                            >
                                <Download size={20} />
                                Download CV
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center w-full max-w-[500px] mx-auto"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Glowing Background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden p-2">
                                <div className="w-full h-full rounded-full overflow-hidden relative group">
                                    <img
                                        src={myimage}
                                        alt="Nilesh Parmar"
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 top-10 glass px-4 py-2 rounded-xl border border-white/10 text-sm font-medium text-white shadow-lg shadow-primary/20"
                            >
                                🚀 Full Stack Dev
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-4 bottom-20 glass px-4 py-2 rounded-xl border border-white/10 text-sm font-medium text-white shadow-lg shadow-secondary/20"
                            >
                                ✨ Creative Design
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
