import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-white/5 relative bg-bg-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Nilesh Parmar
                        </a>
                        <p className="text-gray-500 mt-2 text-sm italic">
                            Crafting digital experiences with passion & precision.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/loharnilesh352-alt" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/nilesh-lohar-aa9964354" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://wa.me/6263159328" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <FaWhatsapp size={20} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary transition-all group"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
                    <p>© {new Date().getFullYear()} Nilesh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
