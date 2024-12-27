"use client";
import Achievements from "./achievements";
import Button from "./button";
import Container from "./container";

export default function About() {
  return (
    <section
      className="relative"
      style={{
        background: 'url("/footer/about.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "1386px",
      }}
    >
      <div className="py-[40px]">
        <Container>
          <h2 className="leading-none text-center">
            <span className="text-7xl xl:text-6xl font-bold text-white">
              About the
            </span>
            <span className="ml-10 text-7xl xl:text-6xl font-bold bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
              SourceExpert
            </span>
          </h2>
          <div>
            <img src="/about/about-all.png" alt="" />
            <div>
              <p className="text-[20px] font-inter font-normal leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing. Bibendum cras fringilla amet
                suspendisse. Duis mattis hac urna fames in ante.
              </p>
              {/* Our Vision */}
              <div>
                <div>
                  <img src="/about/Eye.png" alt="" />
                  <p className="text-[#3D414C] font-inter font-semibold text-[32px] leading-[38.4px]">
                    Our Vision
                  </p>
                </div>
                <p className="text-[#3D414C] font-inter font-normal text-[20px] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget
                  at. Id et at dui arcu risus.
                </p>
              </div>
              {/* Our Mission */}
              <div>
                <div>
                  <img src="/about/Target.png" alt="" />
                  <p className="text-[#3D414C] font-inter font-semibold text-[32px] leading-[38.4px]">
                    Our Mission
                  </p>
                </div>
                <p className="text-[#3D414C] font-inter font-normal text-[20px] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget
                  at. Id et at dui arcu risus.
                </p>
              </div>
              <Button content="Get Quote" width="177" height="68" show={true} />
            </div>
          </div>
          <div>
            <p className="font-inter font-medium text-[44px] leading-[52px] text-[#0C111F]">
              We are passionate about helping businesses grow and succeed in the
              digital age. We take pride in our work and strive to exceed your
              expectations every time.
            </p>
            <Achievements />
          </div>
        </Container>
      </div>
    </section>
  );
}
