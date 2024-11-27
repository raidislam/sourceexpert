"use client";
import Button from "./button";
import Container from "./container";

export default function Hero() {
  return (
    <section
      className="flex justify-center"
      style={{
        background: 'url("/hero/Hero.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        marginTop: "-8.2rem",
        zIndex: "-1",
      }}
    >
      <Container>
        <div className="flex flex-col items-center justify-center mt-[130px]">
          <p className="text-extra bg-[#16173d] rounded-full text-white py-5 px-16">
            NUMBER ONE CREATIVE DIGITAL AGENCY{" "}
          </p>
          <h1 className="leading-none text-center mt-4 mb-6">
            <span className="text-7xl xl:text-6xl font-bold bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
              Smart Choices
            </span>
            <br />
            <span className="text-7xl xl:text-6xl font-bold text-white">
              For Your Business Growth
            </span>
          </h1>
          <p className="font-medium text-lg text-[#B6B8BC] text-center leading-snug mb-56">
            We&apos;re a team of experienced designers, developers, <br /> and
            marketers, passionate about delivering exceptional digital
            solutions.
          </p>
          <Button width="185" height="68" show={true} />
          <div className="pt-80 pb-100">
            <img src="/hero/Banner.svg" alt="banner" />
          </div>
        </div>
      </Container>
    </section>
  );
}
