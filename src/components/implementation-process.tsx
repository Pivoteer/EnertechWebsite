import { motion } from "framer-motion";
import { ClipboardCheck, PencilRuler, HardHat, ShieldCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Site Assessment",
        icon: ClipboardCheck,
        description: "Detailed evaluation by our electrical engineering team. We analyze capacity, ROI, and local incentives.",
        color: "bg-blue-500"
    },
    {
        number: "02",
        title: "Design & Permitting",
        icon: PencilRuler,
        description: "Custom site layouts and engineering drawings. We handle all jurisdictional permitting and utility approvals.",
        color: "bg-cyan-500"
    },
    {
        number: "03",
        title: "Expert Installation",
        icon: HardHat,
        description: "Professional construction managed by our in-house experts. Rapid deployment with zero downtime for your site.",
        color: "bg-indigo-500"
    },
    {
        number: "04",
        title: "Operations & Support",
        icon: ShieldCheck,
        description: "Ongoing network monitoring, preventive maintenance, and 24/7 driver support to ensure 98%+ uptime.",
        color: "bg-purple-500"
    }
];

export function ImplementationProcess() {
    return (
        <section id="process" className="py-24 bg-[#0a0a0a] relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        A Seamless <span className="text-blue-500">Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg"
                    >
                        Our turnkey approach handles every complexity, taking your project from initial vision to a world-class charging destination.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="flex flex-col items-center lg:items-start group"
                                >
                                    <div className="relative mb-8">
                                        <div className={`size-16 rounded-2xl ${step.color} flex items-center justify-center text-white relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="size-8" />
                                        </div>
                                        {/* Ring background */}
                                        <div className="absolute inset-[-8px] border border-white/5 rounded-[22px]" />
                                        {/* Step Number */}
                                        <span className="absolute -top-4 -right-4 text-4xl font-black text-white/5 italic">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/50 text-base leading-relaxed text-center lg:text-left">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
