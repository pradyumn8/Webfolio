import React, { useState } from "react";

const Timeline = () => {
  const [timeline] = useState([
    {
      _id: "1",
      title: "Matrix",
      timeline: { from: "2015", to: "2016" },
      description: "Matrix from NIC Janghai, UP Board",
    },
    {
      _id: "2",
      title: "Intermidiate",
      timeline: { from: "2017", to: "2018" },
      description: "Intermidiate from NIC Janghai, UP Board",
    },
    {
      _id: "3",
      title: "Bachelor of Computer Application",
      timeline: { from: "2019", to: "2022" },
      description: "Bachelor of Computer Application from University of Allahabad",
    },
    {
      _id: "4",
      title: "Internship at ASPIRANT SOLUTIONS",
      timeline: { from: "March 2023", to: "September 2023" },
      description: "Worked as Trainee Web Developer at Aspirant Solutions Mumbai",
    },
    {
      _id: "5",
      title: "Master of Computer Application",
      timeline: { from: "2022", to: "Present" },
      description: "Master of Computer Application from IGNOU",
    },
  ]);

  return (
    <div>
      <h1 className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] mb-4 font-extrabold">Timeline</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {timeline &&
          timeline.map((element) => (
            <li className="mb-10 ms-6" key={element._id}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {element.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {element.timeline.from} - {element.timeline.to ? element.timeline.to : "Present"}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {element.description}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Timeline;
