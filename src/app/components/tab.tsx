"use client"
import React, { useState } from "react"

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("UI/UX Design")

  const tabs = [
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "Devops Solutions",
  ]

  const projects = {
    "UI/UX Design": [
      {
        image: "https://via.placeholder.com/300", // Replace with your image URL
        title: "Title 1",
        description:
          "We are designed to help your business thrive in the online world.",
      },
      {
        image: "https://via.placeholder.com/300", // Replace with your image URL
        title: "Title 2",
        description:
          "We are designed to help your business thrive in the online world.",
      },
    ],
    "Web Development": [
      {
        image: "https://via.placeholder.com/300",
        title: "Web Dev Project",
        description: "Innovative web solutions for your needs.",
      },
    ],
    // Add more categories as needed
  }

  return (
    <div className="bg-[#0F102F] p-8 text-white">
      {/* Tabs */}
      <div className="tabs justify-center mb-8">
        {tabs.map((tab) => (
          <a
            key={tab}
            className={`tab tab-lg ${activeTab === tab ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects[activeTab]?.map((project, index) => (
          <div
            key={index}
            className="card bg-[#1A1B40] shadow-xl p-6 rounded-lg text-center"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full">
                <span className="text-[#0F102F] text-xl font-bold">→</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8">
        <div className="btn-group">
          <button className="btn btn-circle bg-white text-black">1</button>
          <button className="btn btn-circle bg-gray-500 text-black">2</button>
          <button className="btn btn-circle bg-gray-500 text-black">3</button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
