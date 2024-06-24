// src/components/GridView.js
import React from "react";
import ResumeDetailsGridBox from "./ResumeDetailsGridBox";

const GridView = ({ resumes }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {resumes.map((resume) => (
        <div key={resume.id} className="p-2 sm:w-1/3">
          <ResumeDetailsGridBox resume={resume} />
        </div>
      ))}
    </div>
  );
};

export default GridView;
