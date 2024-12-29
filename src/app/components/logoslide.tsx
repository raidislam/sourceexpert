"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is loaded
import Container from "./container";

const LogoSlide = () => {
  // Array of company logo images
  const logos = [
    "/companyLogo/logo-1.png",
    "/companyLogo/logo-2.png",
    "/companyLogo/logo-3.png",
    "/companyLogo/logo-4.png",
    "/companyLogo/logo-1.png",
    "/companyLogo/logo-2.png",
    "/companyLogo/logo-5.png",
    "/companyLogo/logo-6.png",
    "/companyLogo/logo-3.png",
    "/companyLogo/logo-4.png",
    "/companyLogo/logo-5.png",
    "/companyLogo/logo-6.png",
  ];

  // Embla Carousel options
  const options = { loop: true, align: "center" }; // Loop enabled
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true, // Start autoplay on initialization
      stopOnInteraction: false, // Keep autoplay after interactions
      delay: 3000, // 3 seconds delay between slides
    }),
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  // Update autoplay state when emblaApi changes
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins().autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));

    return () => {
      emblaApi.destroy(); // Cleanup to avoid memory leaks
    };
  }, [emblaApi]);

  return (
    <Container>
      <div className="embla">
        {/* Embla viewport */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-12">
            {/* Loop through logos */}
            {logos.map((logo, index) => (
              <div className="embla__slide flex-shrink-0 w-[200px]" key={index}>
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LogoSlide;
