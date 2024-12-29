import Container from "./container";
import PortfolioSection from "./tab";

export default function Portfolio() {
  return (
    <section
      style={{
        background: "url('/portfolio/OurWorks.svg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="py-[100px]"
    >
      <Container>
        <div className="flex items-center justify-center flex-col">
          <h2 className="leading-none text-center mt-4 mb-6">
            <span className="text-7xl xl:text-6xl font-bold text-white">
              Our Project Have Been
            </span>
            <span className="text-7xl xl:text-6xl font-bold bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
              Done
            </span>
          </h2>
          <p className="font-medium text-lg text-[#B6B8BC] text-center leading-snug mb-56 w-[928px]">
            Take a look at some of our recent projects and see how we&apos;ve
            helped other businesses elevate their brand and drive business
            growth.
          </p>
        </div>
        <PortfolioSection />
      </Container>
    </section>
  );
}
