import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroBannerProps {
  image: string;
  children: ReactNode;
}

export const HeroBanner = ({ image, children }: HeroBannerProps) => {
  return (
    <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-secondary/85 via-secondary/80 to-secondary/90" />
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {children}
      </div>
    </section>
  );
};
