import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AnalyzingLoader from "./components/AnalyzingLoader";
import RankedResumes from "./components/RankedResumes";
import ProgressMilestone from "./components/ProgressMilestone";
import "tailwindcss/tailwind.css";

function App() {
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
}

export default App;
