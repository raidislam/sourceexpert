"use client";
import CountUp from "react-countup";

export default function Achievements() {
  const stats = [
    { number: 2, label: "Years of Experiences" },
    { number: 150, label: "Project Completed" },
    { number: 120, label: "Satisfied Client" },
    { number: 5, label: "Awards Achieved" },
  ];

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] text-white py-8 px-4 md:px-20 rounded-[20px]">
      {stats.map((item, index) => (
        <div key={index} className="text-center p-[32px] w-[304px]">
          <h2 className="text-[72px] font-bold font-inter leading-[76px] ">
            <CountUp start={0} end={item.number} duration={3} />+
          </h2>
          <p className="text-[24px] font-medium font-inter leading-[28.8px] tracking-[2%] mt-[12px]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
