import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background visual - Large glowing orbit or ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <Zap className="size-4 text-blue-500 fill-blue-500" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Ready to transform your property?</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">
                        The Future is <br />
                        <span className="italic font-light text-white/90">Powered by You.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-16 font-light">
                        Join the network of premium properties driving the electric revolution.
                        <span className="text-white"> Zero capital. Zero complexity. Infinite potential.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Partner with Enertech
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
