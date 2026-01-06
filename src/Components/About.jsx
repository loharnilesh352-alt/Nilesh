import React from 'react';
import  myimage from '../assets/myimage.jpeg';
import { FaGraduationCap, FaLightbulb, FaBullseye, FaRocket, FaUserFriends } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Image Column */}
                    <div className="relative group flex justify-center md:justify-start">
                        {/* Gradient Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-700"></div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="w-full h-full bg-zinc-900 rounded-full p-[2px] shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Border Ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-indigo-500/50 transition-colors duration-500 z-10"></div>

                                <div className="w-full h-full bg-zinc-800 rounded-full overflow-hidden relative">
                                    <img
                                        src={myimage}
                                        alt="Profile"
                                        className="w-full h-full object-cover transition-all duration-700 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                                </div>
                            </div>

                            {/* Decorative badge/element */}
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center text-indigo-400 shadow-xl z-20 group-hover:scale-110 transition-transform duration-500 group-hover:border-indigo-500/50">
                                <FaRocket className="text-xl md:text-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-10">

                        {/* Header */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
                            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
                        </div>

                        {/* Objective */}
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-indigo-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <FaBullseye className="text-indigo-400 text-xl" />
                                <h3 className="text-xl font-semibold text-white">Objective</h3>
                            </div>
                            <p className="text-zinc-300 leading-relaxed">
                                To leverage my skills in full-stack development to build scalable, user-centric applications. I am passionate about solving complex problems and continuously learning new technologies to drive innovation and deliver high-quality software solutions.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-indigo-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <FaGraduationCap className="text-indigo-400 text-xl" />
                                <h3 className="text-xl font-semibold text-white">Education</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-zinc-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-zinc-950"></div>
                                    <h4 className="text-lg font-medium text-white">Bachelor of Science (CS)</h4>
                                     <p className="text-indigo-400 text-sm mb-1"> CGPA - 7.02/10</p>
                                    <p className="text-indigo-400 text-sm mb-1"> 07/2020 - 04/2023</p>
                                    <p className="text-zinc-400 text-sm">Govt.Madhav Science College, Ujjain</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-zinc-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-600 ring-4 ring-zinc-950"></div>
                                    <h4 className="text-lg font-medium text-white">Master of Computer Application (MCA)</h4>
                                     <p className="text-indigo-400 text-sm mb-1"> CGPA - 7.68/10</p>
                                    <p className="text-indigo-400 text-sm mb-1">07/2023 - 06/2025</p>
                                    <p className="text-zinc-400 text-sm">Sage University, Indore</p>
                                </div>
                            </div>
                        </div>

                        {/* Strengths */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaRocket className="text-indigo-400 text-xl" />
                                <h3 className="text-xl font-semibold text-white">Strengths</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { text: "Problem Solving", icon: <FaLightbulb /> },
                                    { text: "Adaptability", icon: <FaRocket /> },
                                    { text: "Team Collaboration", icon: <FaUserFriends /> },
                                    { text: "Fast Learner", icon: <FaGraduationCap /> }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg border border-zinc-800 cursor-default hover:bg-zinc-800/50 transition-colors">
                                        <span className="text-indigo-400">{item.icon}</span>
                                        <span className="text-zinc-300 font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
