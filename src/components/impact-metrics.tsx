import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const metrics = [
    {
        value: 100,
        suffix: "+",
        label: "Charger Ports Installed",
        subtext: "Across Colorado"
    },
    {
        value: 98,
        suffix: "%",
        label: "Network Uptime",
        subtext: "Industry-leading reliability"
    },
    {
        prefix: "$",
        value: 0,
        label: "In Cost To Our Partners",
        subtext: "Zero Capital Commitment"
    }
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const totalFrames = duration * 60;
        const increment = end / totalFrames;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function ImpactMetrics() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
                style={{ scale, opacity }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {metrics.map((metric, index) => (
                        <div key={metric.label} className="flex flex-col items-center text-center">
                            <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter flex items-baseline justify-center">
                                {metric.prefix && <span className="text-blue-500 mr-1">{metric.prefix}</span>}
                                <AnimatedCounter value={metric.value} />
                                {metric.suffix && <span className="text-blue-500 ml-1">{metric.suffix}</span>}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">
                                {metric.label}
                            </h3>
                            <p className="text-white/40 text-sm font-medium">
                                {metric.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
