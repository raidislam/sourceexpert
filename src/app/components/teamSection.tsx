import Container from "./container";

export default function TeamSection() {
  return (
    <section
      style={{
        background: "url('/companyLogo/team.svg')",
        backgroundPosition: "50% 40%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "1648px",
      }}
      className="pt-[100px] pb-[63px]"
    >
      <Container>
        <div className="w-full flex justify-between">
          <h2 className="text-[120px] font-bold text-[#3F4470] leading-none mb-[24px]">
            3,000
          </h2>
          <div className="w-[544px]">
            <h3 className="font-inter font-bold text-3xl leading-[48px]  text-white">
              OUR EXPERTS
            </h3>
            <p className="font-inter font-normal text-[18px] text-white mt-[24px] leading-[21px] ">
              Our team of tech-savvy legal experts is committed to providing
              tailored solutions that safeguard your interests, ensuring your
              success in the ever-evolving landscape of technology law. We are
              committed to empowering innovation and ensuring legal compliance
              for a wide spectrum of clients, serving as your trusted partner in
              technology law.
            </p>
            <ul className="space-y-[24px] font-inter font-normal text-[16px] text-white mt-[24px] leading-[20px]">
              <li className="flex items-center gap-[16px]">
                <img
                  src="/companyLogo/Icons.png"
                  className="w-[16px] h-[16px]"
                  alt=""
                />
                Innovators and startups navigating legal landscapes for <br />
                groundbreaking tech ventures.
              </li>
              <li className="flex items-center gap-[16px]">
                <img
                  src="/companyLogo/Icons.png"
                  className="w-[16px] h-[16px]"
                  alt=""
                />{" "}
                Established enterprises seeking legal <br /> expertise in
                adapting to digital challenges.
              </li>
              <li className="flex items-center gap-[16px]">
                <img
                  src="/companyLogo/Icons.png"
                  className="w-[16px] h-[16px]"
                  alt=""
                />{" "}
                Tech industry leaders requiring tailored <br /> solutions for
                dynamic legal compliance.
              </li>
              <li className="flex items-center gap-[16px]">
                <img
                  src="/companyLogo/Icons.png"
                  className="w-[16px] h-[16px]"
                  alt=""
                />{" "}
                Diverse clients benefiting from our <br /> expertise in
                technology law intricacies.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="relative card bg-[#080A32] card-compact w-[520px] h-[875px]  shadow-xl -mt-[50px]">
            <figure>
              <img src="/companyLogo/member-1.png" alt="Shoes" />
            </figure>
            <div className="bg-[rgba(8,10,50,0.7)] absolute top-0 left-0 w-full h-full"></div>
            <div className="card-body z-10 mt-[10px]">
              <h2 className="card-title font-inter font-semibold text-[30px] leading-[36px] uppercase text-white">
                Sebastian Pembroke
              </h2>
              <h3 className="card-title font-inter font-semibold text-[24px] leading-[28px] uppercase text-[#666CFF]">
                Technology Law Analyst
              </h3>

              <p className="font-inter font-normal text-[18px] leading-[22px] text-white ">
                Analytical legal mind, decoding complexities <br /> for
                strategic insights and solutions.
              </p>
            </div>
          </div>
          <div className="relative card bg-[#080A32] card-compact w-[520px] h-[875px]  shadow-xl mt-[100px]">
            <div className="card-body z-10">
              <h2 className="card-title font-inter font-semibold text-[30px] leading-[36px] uppercase text-white">
                Theodore Harrington
              </h2>
              <h3 className="card-title font-inter font-semibold text-[24px] leading-[28px] uppercase text-[#666CFF]">
                Technology Law Associate
              </h3>

              <p className="font-inter font-normal text-[18px] leading-[22px] text-white">
                Diligent law associate, skilled in research, drafting, <br />{" "}
                and client support.
              </p>
            </div>
            <figure>
              <img src="/companyLogo/member-2.png" alt="Shoes" />
            </figure>
            <div className="bg-[rgba(8,10,50,0.7)] absolute top-0 left-0 w-full h-full"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
