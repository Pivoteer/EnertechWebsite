import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
    return (
        <div className="flex-1 overflow-y-auto relative z-10 scrollbar-hide py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tighter mb-8 text-white">
                            Let's <br />
                            <span className="italic font-light text-white/90">Connect.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-md">
                            Whether you're looking to partner on a new development or have questions about our infrastructure, our team is ready to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Email us</p>
                                    <p className="text-white font-medium">hello@enertech.co</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Call us</p>
                                    <p className="text-white font-medium">+1 970 000 0000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <MapPin className="size-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Visit us</p>
                                    <p className="text-white font-medium">Fort Collins & Denver, CO</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
                    >
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-4">Property Type</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer">
                                    <option className="bg-zinc-900">Apartment Complex</option>
                                    <option className="bg-zinc-900">Multifamily HOA</option>
                                    <option className="bg-zinc-900">Community Hub</option>
                                    <option className="bg-zinc-900">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-4">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help your property?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                                />
                            </div>

                            <button className="group w-full flex items-center justify-center gap-3 bg-blue-500 text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>

                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
