// "use client";

// import useEmblaCarousel from "embla-carousel-react";
// import { useState } from "react";
// import "tailwindcss/tailwind.css";

// const PortfolioSection = () => {
//   const [activeTab, setActiveTab] = useState("UI/UX Design");
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

//   const tabs = [
//     "UI/UX Design",
//     "Web Development",
//     "Mobile App Development",
//     "DevOps Solutions",
//   ];

//   const projects = {
//     "UI/UX Design": [
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_640.jpg",
//         title: "UI/UX Project 1",
//         description: "We create innovative designs to boost your business.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg",
//         title: "UI/UX Project 2",
//         description: "We focus on delivering delightful user experiences.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2017/03/16/00/27/peafowl-2147888_640.jpg",
//         title: "UI/UX Project 22",
//         description: "We focus on delivering delightful user experiences.",
//       },
//     ],
//     "Web Development": [
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg",
//         title: "Web Dev Project 1",
//         description: "Innovative solutions for dynamic web applications.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_640.jpg",
//         title: "Web Dev Project 2",
//         description: "Customized websites tailored to your needs.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_640.jpg",
//         title: "Web Dev Project 23",
//         description: "Customized websites tailored to your needs.",
//       },
//     ],
//     "Mobile App Development": [
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_640.jpg",
//         title: "App Dev Project 1",
//         description: "Feature-rich apps to scale your business.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2017/05/29/16/42/smartphone-2354157_640.jpg",
//         title: "App Dev Project 21",
//         description: "Feature-rich apps to scale your business.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489_640.jpg",
//         title: "App Dev Project 31",
//         description: "Feature-rich apps to scale your business.",
//       },
//     ],
//     "DevOps Solutions": [
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_640.jpg",
//         title: "DevOps Project 1",
//         description: "Streamlined operations for improved efficiency.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2024/02/26/17/05/cloud-8598424_640.jpg",
//         title: "DevOps Project 12",
//         description: "Streamlined operations for improved efficiency.",
//       },
//       {
//         image:
//           "https://cdn.pixabay.com/photo/2023/03/06/05/52/cloud-7832679_640.jpg",
//         title: "DevOps Project 13",
//         description: "Streamlined operations for improved efficiency.",
//       },
//     ],
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     if (emblaApi) emblaApi.reInit(); // Reinitialize Embla when the tab changes
//   };

//   return (
//     <div className="text-white flex flex-col items-center gap-[40px]">
//       {/* Tabs */}
//       <div className="tabs justify-evenly mb-8 bg-white p-4 rounded-[100px] gap-[24px] flex items-center w-[730px] h-[72px]">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`tab tab-lg ${
//               activeTab === tab
//                 ? "tab-active bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] text-white"
//                 : "text-[#6D7079]"
//             } font-inter font-medium text-base leading-[24px] rounded-[100px] w-[150px] h-[56px]`}
//             onClick={() => handleTabChange(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Embla Carousel */}
//       <div className="w-full max-w-[950px] overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {projects[activeTab]?.map((project, index) => (
//             <div key={index} className="embla__slide flex-shrink-0 px-4">
//               <div className="w-[630px] h-[755px] card bg-[#181D2A] shadow-xl p-[16px] rounded-[32px] border border-[#3D414C] text-center">
//                 {/* Project Image */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   // className="rounded-[20px] w-full max-h-[350px]  mx-auto"
//                   className="rounded-[20px] w-[598px] h-[579px] object-cover"
//                 />

//                 {/* Project Details */}
//                 <div className="mt-4">
//                   <h3 className="text-xl font-bold">{project.title}</h3>
//                   <p className="mt-2 text-sm">{project.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioSection;

"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [cursorStyle, setCursorStyle] = useState({ display: "none" });
  const cursorRef = useRef(null);

  const tabs = [
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "DevOps Solutions",
  ];

  const projects = {
    "UI/UX Design": [
      {
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_640.jpg",
        title: "UI/UX Project 1",
        description: "We create innovative designs to boost your business.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg",
        title: "UI/UX Project 2",
        description: "We focus on delivering delightful user experiences.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2017/03/16/00/27/peafowl-2147888_640.jpg",
        title: "UI/UX Project 22",
        description: "We focus on delivering delightful user experiences.",
        link: "https://example.com/uiux-project-1",
      },
    ],
    "Web Development": [
      {
        image:
          "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg",
        title: "Web Dev Project 1",
        description: "Innovative solutions for dynamic web applications.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_640.jpg",
        title: "Web Dev Project 2",
        description: "Customized websites tailored to your needs.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_640.jpg",
        title: "Web Dev Project 23",
        description: "Customized websites tailored to your needs.",
        link: "https://example.com/uiux-project-1",
      },
    ],
    "Mobile App Development": [
      {
        image:
          "https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_640.jpg",
        title: "App Dev Project 1",
        description: "Feature-rich apps to scale your business.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2017/05/29/16/42/smartphone-2354157_640.jpg",
        title: "App Dev Project 21",
        description: "Feature-rich apps to scale your business.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489_640.jpg",
        title: "App Dev Project 31",
        description: "Feature-rich apps to scale your business.",
        link: "https://example.com/uiux-project-1",
      },
    ],
    "DevOps Solutions": [
      {
        image:
          "https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_640.jpg",
        title: "DevOps Project 1",
        description: "Streamlined operations for improved efficiency.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2024/02/26/17/05/cloud-8598424_640.jpg",
        title: "DevOps Project 12",
        description: "Streamlined operations for improved efficiency.",
        link: "https://example.com/uiux-project-1",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2023/03/06/05/52/cloud-7832679_640.jpg",
        title: "DevOps Project 13",
        description: "Streamlined operations for improved efficiency.",
        link: "https://example.com/uiux-project-1",
      },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (emblaApi) emblaApi.reInit();
  };

  const handleMouseMove = (e) => {
    setCursorStyle({
      display: "block",
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    });
  };

  const handleMouseLeave = () => {
    setCursorStyle({ display: "none" });
  };

  const handleImageEnter = () => {
    setCursorStyle({ display: "none" });
  };

  const handleImageLeave = (e) => {
    handleMouseMove(e); // Show the cursor again after leaving the image
  };

  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (cursorEl) {
      cursorEl.style.position = "fixed";
      cursorEl.style.pointerEvents = "none";
      cursorEl.style.zIndex = "9999";
    }
  }, []);

  return (
    <div
      className="text-white flex flex-col items-center gap-[40px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tabs */}
      <div className="tabs justify-evenly mb-8 bg-white p-4 rounded-[100px] gap-[24px] flex items-center w-[730px] h-[72px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab tab-lg ${
              activeTab === tab
                ? "tab-active bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] text-white"
                : "text-[#6D7079]"
            } font-inter font-medium text-base leading-[24px] rounded-[100px] w-[150px] h-[56px]`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Embla Carousel */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects[activeTab]?.map((project, index) => (
            <div key={index} className="embla__slide flex-shrink-0 px-4">
              <div
                className="w-[630px] h-[755px] card bg-[#181D2A] shadow-xl p-[16px] rounded-[32px] border border-[#3D414C] text-center"
                onMouseEnter={handleImageEnter}
                onMouseLeave={handleImageLeave}
              >
                {/* Project Image */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-[20px] w-[598px] h-[579px] object-cover cursor-pointer"
                  />
                </a>

                {/* Project Details */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          ...cursorStyle,
          width: "150px",
          height: "150px",
          backgroundImage: `url('/about/SpecialIcon.png')`,
          backgroundSize: "cover",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default PortfolioSection;
