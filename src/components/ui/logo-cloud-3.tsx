import React from 'react';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
                className
            )}
        >
            <InfiniteSlider gap={80} reverse duration={40} durationOnHover={80}>
                {logos.map((logo) => (
                    <img
                        alt={logo.alt}
                        className="pointer-events-none h-8 select-none md:h-12 brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
                        height={logo.height || "auto"}
                        key={`logo-${logo.alt}`}
                        loading="lazy"
                        src={logo.src}
                        width={logo.width || "auto"}
                    />
                ))}
            </InfiniteSlider>
        </div>
    );
}
