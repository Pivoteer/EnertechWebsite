import { motion } from "framer-motion";
import { Map, MapMarker, MarkerContent, MapControls } from "./ui/map";
import { ArrowRight, Zap, Clock, MapPin } from "lucide-react";

const locations = [
    // Active Sites (Blue)
    { id: 1, name: "Fort Collins HQ", lat: 40.5852, lng: -105.0844, status: "active" },
    { id: 2, name: "Denver Downtown", lat: 39.7392, lng: -104.9903, status: "active" },
    { id: 3, name: "Boulder Innovation Center", lat: 40.0150, lng: -105.2705, status: "active" },
    { id: 4, name: "Colorado Springs South", lat: 38.8339, lng: -104.8214, status: "active" },
    { id: 5, name: "Loveland Retail Hub", lat: 40.3978, lng: -105.0750, status: "active" },
    { id: 6, name: "Golden Gate Site", lat: 39.7555, lng: -105.2211, status: "active" },

    // Coming Soon (Amber)
    { id: 7, name: "Pueblo Logistics Center", lat: 38.2544, lng: -104.6091, status: "coming-soon" },
    { id: 8, name: "Vail Mountain Resort", lat: 39.6403, lng: -106.3742, status: "coming-soon" },
    { id: 9, name: "Aurora East Corridor", lat: 39.7294, lng: -104.8319, status: "coming-soon" },
    { id: 10, name: "Thornton Business Park", lat: 39.8682, lng: -104.9719, status: "coming-soon" },

    // Planned (White)
    { id: 11, name: "Greeley Transit Hub", lat: 40.4233, lng: -104.7008, status: "planned" },
    { id: 12, name: "Grand Junction Gateway", lat: 39.0639, lng: -108.5506, status: "planned" },
    { id: 13, name: "Durango Hub", lat: 37.2753, lng: -107.8801, status: "planned" }
];

export function NetworkCoverage() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 font-mono text-[10px] uppercase tracking-widest text-blue-400">
                                <MapPin className="size-3" />
                                Regional Dominance
                            </div>

                            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
                                Colorado's <br />
                                <span className="italic font-light text-white/80 whitespace-nowrap">Premier Network.</span>
                            </h2>

                            <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-lg">
                                As the largest independent EV infrastructure partner in the Front Range, Enertech powers the freedom of movement with robust charging for all properties.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                    <div className="size-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
                                        <Zap className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">High-Speed Reliable Charging</h4>
                                        <p className="text-white/40 text-sm">Industry-leading uptime across all 100+ active ports.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                    <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 shrink-0">
                                        <Clock className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Unmatched Coverage</h4>
                                        <p className="text-white/40 text-sm">Strategically located sites ensuring you're never far from power.</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* Map Content */}
                    <div className="lg:col-span-7 order-1 lg:order-2 h-[500px] md:h-[650px] w-full bg-[#080808] rounded-[2.5rem] border border-white/10 overflow-hidden relative group">
                        <Map
                            center={[-105.3, 39.1]} // Centered on Colorado
                            zoom={6.8}
                            className="w-full h-full grayscale-[0.8] contrast-[1.2] brightness-[0.7]"
                        >
                            {locations.map((loc) => (
                                <MapMarker key={loc.name} longitude={loc.lng} latitude={loc.lat}>
                                    <MarkerContent>
                                        <div className="relative">
                                            {loc.status === 'active' && (
                                                <>
                                                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/40" />
                                                    <div className="size-3 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10" />
                                                </>
                                            )}
                                            {loc.status === 'coming-soon' && (
                                                <div className="size-3 rounded-full bg-amber-500 border-2 border-white shadow-[0_0_15px_rgba(245,158,11,0.8)] relative z-10" />
                                            )}
                                            {loc.status === 'planned' && (
                                                <div className="size-2 rounded-full bg-white/40 border border-white/20 relative z-10" />
                                            )}
                                        </div>
                                    </MarkerContent>
                                </MapMarker>
                            ))}
                            <MapControls position="bottom-right" showZoom />
                        </Map>

                        {/* Legend Overlay */}
                        <div className="absolute bottom-6 left-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 z-20 pointer-events-none">
                            <h5 className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-4">Network Legend</h5>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    <span className="text-xs text-white/80 font-medium">Active Charging Sites</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                    <span className="text-xs text-white/80 font-medium">Coming Soon</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-2.5 rounded-full bg-white/20" />
                                    <span className="text-xs text-white/40 font-medium whitespace-nowrap">Planned Expansion</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute top-6 right-6 p-4 rounded-xl bg-blue-600/10 backdrop-blur-md border border-blue-500/20 z-20 hidden md:block">
                            <div className="text-center">
                                <div className="text-2xl font-black text-blue-400">100+</div>
                                <div className="text-[8px] uppercase tracking-widest font-bold text-blue-400/60 leading-tight">Charger Ports Installed<br />Across Colorado</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
