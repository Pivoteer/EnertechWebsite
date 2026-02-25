import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Solutions",
            links: [
                { name: "Apartments", href: "#solutions" },
                { name: "Multifamily HOAs", href: "#solutions" },
                { name: "Community Hubs", href: "#solutions" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#" },
                { name: "Process", href: "#process" },
                { name: "Careers", href: "#" },
                { name: "Newsroom", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" }
            ]
        }
    ];

    return (
        <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                            ENERTECH
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
                            Colorado's premier partner for sustainable infrastructure development and EV charging operations.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                                <Linkedin className="size-4" />
                            </a>
                            <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                                <Instagram className="size-4" />
                            </a>
                            <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                                <Twitter className="size-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm border-b border-transparent text-white/60 hover:text-white hover:border-white/20 transition-all font-light">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center text-xs font-bold tracking-widest text-white/20 uppercase">
                        <div className="flex items-center gap-2">
                            <MapPin className="size-3" />
                            Fort Collins & Denver, CO
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="size-3" />
                            hello@enertech.co
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="size-3" />
                            +1 970 000 0000
                        </div>
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/10">
                        © {currentYear} ENERTECH COLORADO — ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </footer>
    );
}
