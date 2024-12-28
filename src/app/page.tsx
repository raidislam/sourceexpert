import About from "./components/about";
import Hero from "./components/hero";
import LogoSlide from "./components/logoslide";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import TeamSection from "./components/teamSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <LogoSlide />
      <TeamSection />
    </>
  );
}
