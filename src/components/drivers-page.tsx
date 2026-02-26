import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Smartphone,
    Zap,
    Power,
    ShieldCheck,
    HelpCircle,
    ChevronDown,
    AlertCircle,
    Battery,
    Timer,
    Thermometer,
    QrCode,
    CreditCard,
    PlugZap
} from "lucide-react";
import { cn } from "@/lib/utils";

const chargingSteps = [
    {
        id: "connect",
        title: "Connect",
        icon: PlugZap,
        description: "Park and plug the connector into your car. You should hear a \"click\" when it's secure.",
        details: [
            "Industry-standard connectors (CCS, NACS)",
            "High-durability hardware",
            "Weather-proof design",
            "Auto-locking mechanism"
        ]
    },
    {
        id: "scan",
        title: "Scan to Pay",
        icon: QrCode,
        description: "Point your phone camera at the QR code on the screen.",
        details: [
            "No app? Pay via Monta web portal",
            "Have the app? Opens automatically",
            "Secure guest checkout",
            "Instant access"
        ]
    },
    {
        id: "authorize",
        title: "Authorize",
        icon: CreditCard,
        description: "Follow the prompts to select your charging amount and payment (Apple/Google Pay or Card).",
        details: [
            "Apple Pay & Google Pay supported",
            "Major credit cards accepted",
            "Transparent pricing",
            "Pre-auth security"
        ]
    },
    {
        id: "power",
        title: "Power Up",
        icon: Power,
        description: "Once authorized, the charger will lock the cable and begin. Track your progress live on your phone.",
        details: [
            "Live session monitoring",
            "Ultra-fast charging rates",
            "100% renewable energy",
            "Automatic digital receipts"
        ]
    }
];

const faqs = [
    {
        question: "How do I find an Enertech charger?",
        answer: "The easiest way is through our mobile app, which shows live status and directions to every port in the Colorado network."
    },
    {
        question: "Can I charge my Tesla on your network?",
        answer: "Yes! Our latest chargers feature native NACS support, and all other stations are compatible via standard adapters."
    },
    {
        question: "Does charging speed slow down at 80%?",
        answer: "To protect your battery's longevity, most EVs reduce the charge rate once they reach 80% capacity. This is normal and helps preserve battery health."
    },
    {
        question: "What affects my charging speed?",
        answer: "Variables include your battery's current state of charge (lower is faster), ambient temperature, and your vehicle's maximum intake limits."
    },
    {
        question: "Who do I call if I need help?",
        answer: "Our Charging Crew is available 24/7 at (800) ENERTECH to assist with any session issues or questions."
    }
];

const ProTip = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-bold">{title}</h4>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
);

export function DriversPage() {
    const [activeStep, setActiveStep] = useState(chargingSteps[0].id);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="relative pt-32 pb-24">
            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
                            Driver Experience
                        </span>
                        <span className="w-8 h-[1px] bg-white/20"></span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-6"
                    >
                        Power Your Journey in <br />
                        <span className="italic font-light opacity-80">Four Simple Steps</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-light"
                    >
                        Whether you're a first-time EV owner or a seasoned road-tripper,
                        our charging network is designed for seamless, high-speed reliability.
                    </motion.p>
                </div>

                {/* 3-Step Guide */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
                    <div className="space-y-4">
                        {chargingSteps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={cn(
                                    "w-full text-left p-8 rounded-3xl transition-all duration-500 border relative group overflow-hidden",
                                    activeStep === step.id
                                        ? "bg-white/10 border-white/20 scale-[1.02]"
                                        : "bg-transparent border-transparent hover:bg-white/5 opacity-40 hover:opacity-100"
                                )}
                            >
                                <div className="flex items-start gap-6 relative z-10">
                                    <div className={cn(
                                        "p-4 rounded-2xl transition-colors duration-500",
                                        activeStep === step.id ? "bg-white text-black" : "bg-white/10 text-white"
                                    )}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/60 font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full flex flex-col justify-center"
                            >
                                <div className="text-6xl font-serif italic text-white/10 mb-8 select-none">
                                    0{chargingSteps.findIndex(s => s.id === activeStep) + 1}
                                </div>
                                <h3 className="text-4xl font-serif text-white mb-8">
                                    {chargingSteps.find(s => s.id === activeStep)?.title}
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {chargingSteps.find(s => s.id === activeStep)?.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-4 text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                            <span className="font-light tracking-wide">{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute bottom-12 right-12 opacity-20">
                                    {activeStep === 'connect' && <PlugZap className="w-32 h-32 text-white" />}
                                    {activeStep === 'scan' && <QrCode className="w-32 h-32 text-white" />}
                                    {activeStep === 'authorize' && <CreditCard className="w-32 h-32 text-white" />}
                                    {activeStep === 'power' && <Power className="w-32 h-32 text-white" />}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pro Tips Section */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Expert Tips for <br />Better Charging</h2>
                            <p className="text-white/60 font-light">Maximize your battery health and charging efficiency with these industry insights.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ProTip
                            icon={Battery}
                            title="State of Charge"
                            description="Batteries take power fastest between 10% and 80%. Planning your stops around this window saves you time."
                        />
                        <ProTip
                            icon={Thermometer}
                            title="Weather Matters"
                            description="Extreme cold can affect intake speed. If your EV has it, use pre-conditioning to warm the battery before arrivng."
                        />
                        <ProTip
                            icon={Timer}
                            title="80% Limit"
                            description="The 'charging curve' drops significantly after 80%. Unless you need the range, it's efficient to unplug at 80%."
                        />
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-12 h-12 text-white/20 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-serif text-white">Common Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white font-medium">{faq.question}</span>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-white/40 transition-transform duration-300",
                                        openFaq === idx && "rotate-180"
                                    )} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-white/60 font-light leading-relaxed border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            <h4 className="text-white font-bold">24/7 Roadside Support</h4>
                        </div>
                        <p className="text-white/60 font-light mb-6">Need immediate assistance at a station?</p>
                        <a href="tel:8003637832" className="text-3xl font-serif text-white hover:text-emerald-500 transition-colors">
                            (800) ENERTECH
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Decorative Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        </div>
    );
}
