// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import logo from '../../images/logo-2150297_640.webp';
// import '../../css/test.css';

// const HrmJobs = () => {
//   return (<div>
//     <h1>Working</h1>
//     Welcome to the HRM Jobs page with React and JypeScript!....
//     <img src={logo} alt="Logo" />
//   </div>);
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.getElementById('root');
//   if (container) {
//     const root = createRoot(container);
//     root.render(<HrmJobs />);
//   } else {
//     console.error('React target container not found');
//   }
// });

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AnalyzingLoader from "./components/AnalyzingLoader";
import RankedResumes from "./components/RankedResumes";
import ProgressMilestone from "./components/ProgressMilestone";
import logo from "../../images/logo-2150297_640.webp";
import "../../css/test.css";
import "./tailwind.css";

const HrmJobs = () => {
  const [jobSelected, setJobSelected] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [extractionCompleted, setExtractionCompleted] = useState(false);

  const handleJobSelect = (event) => {
    setJobSelected(event.target.value !== "Select Job Post");
  };

  const handleFileUpload = (event) => {
    setResumeUploaded(event.target.files.length > 0);
  };

  const handleNextClick = () => {
    setNextClicked(true);
  };

  const handleExtractionComplete = () => {
    setExtractionCompleted(true);
  };

  return (
    <div className="flex h-full bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-selectedbg">
        <Navbar />

        <div className="p-4"></div>
        <ProgressMilestone
          jobSelected={jobSelected}
          resumeUploaded={resumeUploaded}
          nextClicked={nextClicked}
          extractionCompleted={extractionCompleted}
        />
        {!nextClicked && (
          <Form
            onJobSelect={handleJobSelect}
            onFileUpload={handleFileUpload}
            onNextClick={handleNextClick}
          />
        )}
        {nextClicked && !extractionCompleted && (
          <AnalyzingLoader onExtractionComplete={handleExtractionComplete} />
        )}
        {extractionCompleted && <RankedResumes />}
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<HrmJobs />);
  } else {
    console.error("React target container not found");
  }
});
