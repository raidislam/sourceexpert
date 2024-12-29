"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Container from "./container";

const TestimonialSlider = () => {
  const testimonialsLeft = [
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "John Doe",
      occupation: "Software Engineer",
      image: "/teammember/Avatar.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "John Doe",
      occupation: "Software Engineer",
      image: "/teammember/Avatar-2.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "John Doe",
      occupation: "Software Engineer",
      image: "/teammember/Avatar-3.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "John Doe",
      occupation: "Software Engineer",
      image: "/teammember/Avatar-2.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "John Doe",
      occupation: "Software Engineer",
      image: "/teammember/Avatar-3.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "John Doe",
      occupation: "Software Engineer",
      image: "/teammember/Avatar.png",
    },
    // Add more testimonials...
  ];

  const testimonialsRight = [
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar-2.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar-3.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar-2.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar-3.png",
    },
    {
      text: "I was looking for a new company to work with and I found this company to be the best. They are very professional and their work is outstanding.",
      name: "Michael Brown",
      occupation: "Consultant",
      image: "/teammember/Avatar.png",
    },
    // Add more testimonials...
  ];

  const options = { loop: true, axis: "y" };

  const [emblaLeftRef, emblaLeftApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, delay: 1000 }),
  ]);

  const [emblaRightRef, emblaRightApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, delay: 1500 }),
  ]);

  useEffect(() => {
    emblaLeftApi?.reInit();
    emblaRightApi?.reInit();

    return () => {
      emblaLeftApi?.destroy();
      emblaRightApi?.destroy();
    };
  }, [emblaLeftApi, emblaRightApi]);

  return (
    <section className="bg-[#E9E9F7]">
      <Container>
        <div className="flex">
          {/* Left Slider */}
          <div className="embla w-1/2 h-[800px] overflow-hidden mt-[30px]">
            <div className="embla__viewport h-full" ref={emblaLeftRef}>
              <div className="embla__container flex flex-col gap-[24px]">
                {testimonialsLeft.map((testimonial, index) => (
                  <div
                    className="embla__slide flex-shrink-0 min-h-[256px] flex items-center justify-center"
                    key={index}
                  >
                    <div className="bg-[#F8F8F8] hover:bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] p-[24px] rounded-[12px] w-[508px] min-h-[256px] hover:text-white text-[#6D7079]">
                      <p className="text-[20px] font-inter font-normal leading-[28px]  ">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-6 mt-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-[72px] h-[72px] rounded-full"
                        />
                        <div>
                          <p className="text-[20px] font-inter font-semibold leading-[28px] ">
                            {testimonial.name}
                          </p>
                          <p className="text-[16px] font-inter font-normal leading-[24px] ">
                            {testimonial.occupation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="embla w-1/2 h-[800px] overflow-hidden ">
            <div className="embla__viewport h-full" ref={emblaRightRef}>
              <div className="embla__container flex flex-col gap-[24px]">
                {testimonialsRight.map((testimonial, index) => (
                  <div
                    className="embla__slide flex-shrink-0 min-h-[256px] flex items-center justify-center"
                    key={index}
                  >
                    <div className="bg-[#F8F8F8] hover:bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] p-[24px] rounded-[12px] w-[508px] min-h-[256px] hover:text-white text-[#6D7079]">
                      <p className="text-[20px] font-inter font-normal leading-[28px] ">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-6 mt-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-[72px] h-[72px] rounded-full"
                        />
                        <div>
                          <p className="text-[20px] font-inter font-semibold leading-[28px] ">
                            {testimonial.name}
                          </p>
                          <p className="text-[16px] font-inter font-normal leading-[24px] ">
                            {testimonial.occupation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
