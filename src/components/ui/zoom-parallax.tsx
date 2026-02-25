'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[];
    containerRef?: React.RefObject<HTMLDivElement>;
}

export function ZoomParallax({ images, containerRef }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        container: containerRef,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
                        >
                            <div className="relative h-[25vh] w-[25vw]">
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover rounded-lg shadow-2xl transition-all duration-300 border border-white/10"
                                />
                                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
