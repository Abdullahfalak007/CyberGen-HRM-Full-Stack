import React from "react";
import checkmark from "../checkmark.png"; // Adjust the extension if it's a png

const getColorForScore = (score) => {
  if (score > 70) return "bg-green-500";
  if (score >= 40) return "bg-orange-500";
  return "bg-red-500";
};

const ResumeDetailsGridBox = ({ resume }) => {
  const scoreColor = getColorForScore(resume.similarityScore);

  return (
    <div className="border p-4 m-2 rounded-md shadow-md w-full max-w-xs bg-[#e8f4ff]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center bg-customblue p-1 rounded-xl px-2">
          <img
            src={"../../ask_ai_icon.svg"}
            alt="Ask AI Icon"
            className="w-5 h-5"
          />
          <span className="text-white ml-2 text-[0.533rem] text-md">
            Ask AI
          </span>
        </div>
        <input
          type="checkbox"
          className="appearance-none h-5 w-5 border border-gray-300 rounded-full focus:outline-none checked:bg-blue-600 checked:border-transparent"
          style={{
            backgroundImage: "none",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          onChange={(e) => {
            e.target.style.backgroundImage = e.target.checked
              ? `url(${checkmark})`
              : "none";
          }}
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-[0.75rem] text-md">ID: {resume.id}</p>
        <p
          className={`px-3 py-1 w-12 text-white ${scoreColor} text-xs rounded-l-md -mr-[17px]`}
        >
          {resume.similarityScore}%
        </p>
      </div>
      <p className="text-customblue mb-2 text-md text-[0.938rem] text-md">
        Name: {resume.name}
      </p>
      <p className="mb-2 text-[0.75rem] text-md">
        Applied on: {resume.appliedDate}
      </p>
      <div className="flex justify-between mb-2 space-x-1">
        <button
          style={{ fontSize: "0.445rem" }}
          className="bg-customblue text-white py-1 px-2 rounded-lg whitespace-nowrap flex items-center"
        >
          Original Resume
          <img
            src={"../../download_cv_icon.svg"}
            alt="CV Icon"
            className="w-3 h-3 ml-1"
          />
        </button>
        <button
          style={{ fontSize: "0.445rem" }}
          className="bg-customblue text-white py-1 px-2 rounded-lg whitespace-nowrap flex items-center"
        >
          Resume Branded
          <img
            src={"../../download_cv_icon.svg"}
            alt="CV Icon"
            className="w-3 h-3 ml-1"
          />
        </button>
        <button
          style={{ fontSize: "0.445rem" }}
          className="bg-customblue text-white py-1 px-2 rounded-lg whitespace-nowrap flex items-center"
        >
          Resume Summary
          <img
            src={"../../view_resume_icon.svg"}
            alt="CV Icon"
            className="w-3 h-3 ml-1"
          />
        </button>
      </div>
      <div className="flex justify-around space-x-1 mt-5">
        <button className=" text-customblue py-1 px-3 rounded-lg text-[0.533rem] text-md bg-white whitespace-nowrap">
          Approve Applicant
        </button>
        <button className=" text-customblue py-1 px-3 rounded-lg text-[0.533rem] text-md bg-white whitespace-nowrap">
          Not Considered
        </button>
      </div>
    </div>
  );
};
export default ResumeDetailsGridBox;
