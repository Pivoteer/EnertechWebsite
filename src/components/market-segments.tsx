import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Building2, Landmark, Truck, Construction, Network } from "lucide-react";

const segments = [
    {
        id: "apartments",
        title: "Apartments",
        icon: Building2,
        description: "Modern charging solutions for multi-family complexes. Attract premium tenants with high-speed, reliable amenities that integrate seamlessly into residential life.",
        details: [
            "Attract high-value tenants",
            "Automatic resident billing",
            "Load balancing for old buildings",
            "Zero-cost installation path"
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "hoas",
        title: "Multifamily HOAs",
        icon: Landmark,
        description: "Professional infrastructure management for residential communities. We handle the complexity of HOA boards, common area power, and long-term operations.",
        details: [
            "Board-approved funding models",
            "Individual user access control",
            "Equitable power distribution",
            "Increase property resale value"
        ],
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "hubs",
        title: "Community Hubs",
        icon: Network,
        description: "Strategic charging for local centers, meeting points, and public spaces. Powering the neighborhood with accessible, convenient energy where people gather.",
        details: [
            "Drive local foot traffic",
            "Enhance public amenities",
            "Support local EV adoption",
            "Flexible public access"
        ],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    }
];

export function MarketSegments() {
    const [activeSegment, setActiveSegment] = useState(segments[0]);

    return (
        <section id="solutions" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16 px-4 md:px-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Powering <span className="text-blue-500">Communities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 leading-relaxed"
                    >
                        We deliver tailored EV infrastructure solutions that integrate seamlessly into residential living and community meeting points.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Tabs List */}
                    <div className="lg:col-span-5 flex flex-col gap-2">
                        {segments.map((segment) => {
                            const isActive = activeSegment.id === segment.id;
                            const Icon = segment.icon;

                            return (
                                <button
                                    key={segment.id}
                                    onClick={() => setActiveSegment(segment)}
                                    className={cn(
                                        "group relative flex items-center gap-4 p-5 rounded-xl transition-all duration-300 text-left",
                                        isActive
                                            ? "bg-white/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)] border border-white/10"
                                            : "text-white/40 hover:text-white/70 border border-transparent"
                                    )}
                                >
                                    <div className={cn(
                                        "p-2.5 rounded-lg transition-colors duration-300",
                                        isActive ? "bg-blue-500 text-white" : "bg-white/5 text-white/40 group-hover:bg-white/10"
                                    )}>
                                        <Icon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{segment.title}</h3>
                                    </div>
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-full"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSegment.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={activeSegment.image}
                                        alt={activeSegment.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                                </div>

                                <div className="p-8">
                                    <h4 className="text-2xl font-bold text-white mb-4">{activeSegment.title}</h4>
                                    <p className="text-white/70 leading-relaxed mb-8">
                                        {activeSegment.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeSegment.details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="size-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
                                                <span className="text-sm font-medium text-white/80">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
