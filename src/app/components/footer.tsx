import Link from "next/link";
import Button from "./button";
import Container from "./container";

export default function Footer() {
  return (
    <section className="bg-[#E9E9F7]">
      <div className="bg-[#080A32] py-[58px] mx-[250px] rounded-t-[40px]">
        <Container>
          <div className="flex justify-between items-center">
            <h3 className="font-inter font-semibold text-[44px] leading-[52px] text-white w-[600px]">
              Let’s discuss and bring your vision to life.
            </h3>
            <Button width="185" height="68" show={true} content="Let’s Talk" />
          </div>
        </Container>
      </div>
      <footer className="bg-[#080A32]">
        <div className="">
          <Container>
            <div className="w-full h-[1px] bg-[#3D414C]" />
            <div className="w-full flex py-[100px]">
              <div className="w-1/2">
                <img
                  className="w-[212px]"
                  src="/footer/footerlogo.png"
                  alt=""
                />
                <div className="w-[413px] mt-[25px]">
                  <p className="text-md text-[#B6B8BC] leading-[28px] font-normal">
                    We're a team of experienced designers, developers, and
                    marketers, passionate about delivering exceptional digital
                    solutions.
                  </p>
                  <p className="text-md text-[#B6B8BC] leading-[28px] font-normal mt-[40px]">
                    contect@sourceexpert.com
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-inter font-bold text-md leading-[28px] text-[#B6B8BC] mb-24">
                      Menu
                    </p>
                    <ul tabIndex={0} className="mt-3 w-52">
                      <li className="text-md font-inter font-light leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Home</Link>
                      </li>
                      <li className="text-md font-inter font-light leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Services</Link>
                      </li>
                      <li className="text-md font-inter font-light leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">About Us</Link>
                      </li>
                      <li className="text-md font-inter font-light leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Project</Link>
                      </li>
                      <li className="text-md font-inter font-light leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-inter font-bold text-md leading-[28px] text-[#B6B8BC] mb-24">
                      Support
                    </p>
                    <ul tabIndex={0} className="mt-3 w-52">
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">FAQ</Link>
                      </li>
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Privacy Policy</Link>
                      </li>
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-inter font-bold text-md leading-[28px] text-[#B6B8BC] mb-24">
                      Social Media
                    </p>
                    <ul tabIndex={0} className="mt-3 w-52">
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Linkedin</Link>
                      </li>
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Linkedin</Link>
                      </li>
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">Instagram</Link>
                      </li>
                      <li className="text-md font-inter font-normal leading-[28px] text-[#B6B8BC] mb-24">
                        <Link href="#">GitHub</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#3D414C]" />
          </Container>
          <div className="text-center">
            <p className="text-md text-[#B6B8BC] leading-[28px] font-normal py-[40px]">
              Copyright © 2024 by SourceExpert. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
