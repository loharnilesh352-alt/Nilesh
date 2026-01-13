import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        // Reset form after submission if desired, or keep it. 
        // For now, keeping it allows user to correct and resend easily if needed.
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Let's <span className="text-primary">Talk</span></h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects,
                            creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:loharnilesh352@gmail.com"
                                className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all"
                            >
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Me</h4>
                                    <p className="text-lg font-medium">loharnilesh352@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/916263159328"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all"
                            >
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <MessageSquare className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">WhatsApp</h4>
                                    <p className="text-lg font-medium">Chat on WhatsApp</p>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/nilesh-lohar-aa9964354"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all"
                            >
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Linkedin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">LinkedIn</h4>
                                    <p className="text-lg font-medium">Connect on LinkedIn</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 outline-none transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 outline-none transition-all resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>

                        {submittedData && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl"
                            >
                                <h3 className="text-green-400 font-bold mb-3 text-lg">Message Sent!</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p><span className="font-semibold text-gray-400">Name:</span> {submittedData.fullName}</p>
                                    <p><span className="font-semibold text-gray-400">Email:</span> {submittedData.email}</p>
                                    <p><span className="font-semibold text-gray-400">Subject:</span> {submittedData.subject}</p>
                                    <p><span className="font-semibold text-gray-400">Message:</span> {submittedData.message}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
