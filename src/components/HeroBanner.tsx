import { ReactNode } from "react";

interface HeroBannerProps {
  image: string;
  children: ReactNode;
}

export const HeroBanner = ({ image, children }: HeroBannerProps) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[340px] lg:min-h-[420px]">
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
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-secondary/90 via-secondary/85 to-secondary/92" />
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {children}
      </div>
    </section>
  );
};
