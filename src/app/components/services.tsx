import Accordion from "./accordion";
import Button from "./button";
import Container from "./container";

export default function Services() {
  return (
    <section className="bg-white py-[100px]">
      <Container>
        <div className="flex flex-col items-center mb-[50px]">
          <h2 className="leading-none text-center">
            <span className="text-7xl xl:text-6xl font-bold text-[#0C111F]">
              The Services We Offer
            </span>
            <span className="ml-10 text-7xl xl:text-6xl font-bold bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="font-inter font-medium text-[20px] leading-[28px]  text-[#B6B8BC] w-[745px] text-center">
            As a top software company, we specialize in creating easy-to-use
            websites, apps, and captivating visuals
          </p>
        </div>
        <div>
          <Accordion />
        </div>
        <div className="mt-62">
          <Button
            content="Show All Services"
            width="244"
            height="68"
            show={true}
            customStyle="underline"
          />
        </div>
      </Container>
    </section>
  );
}
