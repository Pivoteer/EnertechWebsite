import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";

export function PartnershipModels() {
    const features = [
        "Entire cost of installation covered",
        "Professional management & operations",
        "Complete maintenance & repairs",
        "Strategic revenue sharing model"
    ];

    return (
        <section id="partnerships" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        How We <span className="text-blue-500">Partner</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-xl leading-relaxed"
                    >
                        Our primary partnership model is designed for maximum simplicity and zero financial risk for property owners.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="size-16 rounded-2xl bg-blue-500 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                <Zap className="size-8 fill-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Enertech Funding
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">
                                We cover the entire cost of the install, management, maintenance, and repairs. Our partners enjoy a premium amenity for their residents while sharing in the revenue generated from every charge.
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest">
                                Best for: Residential & Community Hubs
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <CheckCircle2 className="size-6 text-blue-500 shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Background glow for the card */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
