/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import Lenis from 'lenis';
import { LogoCloud } from './components/ui/logo-cloud-3';
import { ZoomParallax } from './components/ui/zoom-parallax';
import { MarketSegments } from './components/market-segments';
import { ImplementationProcess } from './components/implementation-process';
import { PartnershipModels } from './components/partnership-models';
import { ImpactMetrics } from './components/impact-metrics';
import { NetworkCoverage } from './components/network-coverage';
import { FinalCTA } from './components/final-cta';
import { SiteFooter } from './components/site-footer';
import { ContactPage } from './components/contact-page';
import { DriversPage } from './components/drivers-page';
import img1 from './components/images/1.jpg';
import img2 from './components/images/2.jpg';
import img3 from './components/images/3.jpg';
import img4 from './components/images/4.jpg';
import img5 from './components/images/5.jpg';
import img6 from './components/images/6.jpg';
import img7 from './components/images/7.jpg';
import mainLogo from './components/images/Logo/3.png';




const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
];

const showcaseImages = [
  { src: img1, alt: 'Enertech Showcase 1' },
  { src: img2, alt: 'Enertech Showcase 2' },
  { src: img3, alt: 'Enertech Showcase 3' },
  { src: img4, alt: 'Enertech Showcase 4' },
  { src: img5, alt: 'Enertech Showcase 5' },
  { src: img6, alt: 'Enertech Showcase 6' },
  { src: img7, alt: 'Enertech Showcase 7' },
];

const timelineData = [
  {
    title: "Step 01",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-serif text-white italic">Reach out & Site Walk</h4>
        <p className="text-white/60 font-light leading-relaxed">
          The journey begins with a conversation. Contact our team to schedule an initial consultation and organize a professional site walk at your convenience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
            alt="Consultation"
            className="rounded-xl object-cover h-48 md:h-64 w-full border border-white/10"
          />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            alt="Modern Office"
            className="rounded-xl object-cover h-48 md:h-64 w-full border border-white/10"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Step 02",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-serif text-white italic">Determine Possibilities</h4>
        <p className="text-white/60 font-light leading-relaxed">
          Our experts conduct a comprehensive site assessment to determine infrastructure feasibility, grid capacity, and the optimal layout for your new charging hub.
        </p>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
          alt="Site assessment"
          className="rounded-xl object-cover h-64 md:h-96 w-full border border-white/10"
        />
      </div>
    ),
  },
  {
    title: "Step 03",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-serif text-white italic">Sign Agreements</h4>
        <p className="text-white/60 font-light leading-relaxed">
          We finalize a partnership agreement tailored to your property. Clear, transparent, and designed for long-term shared success with zero capital outlay for you.
        </p>
        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
              <p className="text-xs uppercase tracking-widest font-bold text-white/40">Zero Cost</p>
              <p className="text-sm text-white/80">Full installation covered by Enertech</p>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
              <p className="text-xs uppercase tracking-widest font-bold text-white/40">Zero Risk</p>
              <p className="text-sm text-white/80">Full operation and maintenance included</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 04",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-serif text-white italic">Implementation & Profit</h4>
        <p className="text-white/60 font-light leading-relaxed">
          From permits to power-on, we handle it all. Once live, your property becomes a destination for EV owners, and you start receiving revenue shares immediately.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80"
            alt="EV Charging"
            className="rounded-xl object-cover h-64 md:h-96 w-full border border-white/10"
          />
        </div>
      </div>
    ),
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'contact' | 'drivers'>('home');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset scroll position on page change
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 md:p-5">
      <div className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-2.5rem)] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#050505] overflow-hidden flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMVOCmCkMCqMYJJGNxQ_T_0r_tus7IyEmftvPhw3rRR9E0AL9_Zo9tbGdF0uKR1TtBE0TJTbXRrqubSBT5GvzX0YtJptUt7F7QPPSg73825CT11gq1BxqwtO4StMfDDK7YQKysbJN0ubWhx69HppQ6q=w2652-h1492-s-no-gm"
            alt="EV Charging Station Aerial View"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        </div>

        {/* Navigation - Absolute inside the frame */}
        <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setCurrentPage('home')}
            className="flex items-center cursor-pointer"
          >
            <img
              src={mainLogo}
              alt="Enertech Logo"
              className="h-8 md:h-10 w-auto brightness-0 invert"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/90"
          >
            <button
              onClick={() => setCurrentPage('drivers')}
              className={cn(
                "hover:text-white transition-colors hidden md:block cursor-pointer",
                currentPage === 'drivers' ? "text-white underline underline-offset-8" : "text-white/90"
              )}
            >
              FOR DRIVERS
            </button>
            <a href="#partnerships" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors hidden md:block">Partnerships</a>
            <a href="#process" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors hidden md:block">Process</a>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              Contact
            </button>
          </motion.div>
        </nav>

        {/* Scrollable content within the frame */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto relative z-10 scrollbar-hide"
        >
          {currentPage === 'home' ? (
            <>
              {/* Hero Section */}
              <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl pt-20"
                >
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="w-12 h-[1px] bg-white/40"></span>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">
                      Colorado's Premier EV Partner
                    </span>
                    <span className="w-12 h-[1px] bg-white/40"></span>
                  </div>

                  <h1 className="text-5xl md:text-8xl lg:text-[120px] font-serif leading-[0.85] tracking-tighter mb-10 text-white">
                    The Future of <br />
                    <span className="italic font-light text-white/90">Charging</span> is <br />
                    Zero Cost.
                  </h1>

                  <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                    We develop, install, and operate premium EV charging infrastructure for Colorado property owners.
                    <span className="font-medium text-white"> No capital outlay. No maintenance. Just shared revenue.</span>
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl">
                      Partner with us
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </main>

              {/* Zoom Parallax Showcase Section */}
              <ZoomParallax images={showcaseImages} containerRef={scrollContainerRef} />

              {/* Market Segments Section */}
              <MarketSegments />

              {/* Logo Cloud Section */}
              <section className="py-24 bg-black/40 backdrop-blur-sm border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 mb-12">
                      Trusted by industry leaders
                    </p>
                    <LogoCloud logos={logos} />
                  </motion.div>
                </div>
              </section>

              {/* Implementation Process Section */}
              <ImplementationProcess />

              {/* Service Models (Partnership) Section */}
              <PartnershipModels />

              {/* Impact Metrics (Stats) Section */}
              <ImpactMetrics />

              {/* Network Coverage Section */}
              <NetworkCoverage />

              {/* Final Conversion Section */}
              <FinalCTA />
            </>
          ) : currentPage === 'drivers' ? (
            <DriversPage />
          ) : (
            <ContactPage />
          )}

          {/* Professional Site Footer */}
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
