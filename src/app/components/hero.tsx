"use client";
import Button from "./button";
import Container from "./container";

export default function Hero() {
  return (
    <section className="h-[112rem] sm:h-[80rem] md:h-[100rem] lg:h-[112rem] bg-blue-950 ">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-20">
          <p className="text-extra bg-[#0d0f46ab] rounded-full text-white py-12 px-16">
            NUMBER ONE CREATIVE DIGITAL AGENCY{" "}
          </p>
          <h1 className="leading-none text-center">
            <span className="text-7xl xl:text-6xl font-bold bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
              Smart Choices
            </span>
            <br />
            <span className="text-7xl xl:text-6xl font-bold text-white">
              For Your Business Growth
            </span>
          </h1>
          <p className="font-medium text-lg text-[#B6B8BC] text-center">
            We&apos;re a team of experienced designers, developers, <br /> and
            marketers, passionate about delivering exceptional digital
            solutions.
          </p>
          <Button />
        </div>
      </Container>
    </section>
  );
}
