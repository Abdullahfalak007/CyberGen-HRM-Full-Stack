import React, { useState } from "react";

const Form = ({ onJobSelect, onFileUpload, onNextClick }) => {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [skills, setSkills] = useState([]);
  const [editingSkillIndex, setEditingSkillIndex] = useState(null);
  const [newSkill, setNewSkill] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      if (onFileUpload) {
        onFileUpload(event);
      }
    }
  };

  const handleAddSkill = (event) => {
    if (event.key === "Enter" && newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleEditSkill = (index, newValue) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = newValue;
    setSkills(updatedSkills);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setEditingSkillIndex(null); // Exit edit mode if deleting the current skill
  };

  const SkillSpan = ({ skill, index }) => {
    return editingSkillIndex === index ? (
      <div className="relative inline-block">
        <input
          type="text"
          value={skills[index]}
          className="inline-block bg-white text-customblue border border-customblue rounded-full text-sm font-semibold mx-2 my-1"
          style={{
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingLeft: "12px",
            paddingRight: "16px",
          }}
          onChange={(e) => handleEditSkill(index, e.target.value)}
          onBlur={() => setEditingSkillIndex(null)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleEditSkill(index, e.target.value);
              setEditingSkillIndex(null); // Exit edit mode upon pressing Enter
            }
            if (e.key === "Backspace" && e.target.value.trim() === "") {
              handleDeleteSkill(index);
            }
            if (e.key === "Delete") {
              handleDeleteSkill(index);
            }
          }}
          autoFocus
        />
      </div>
    ) : (
      <span
        className="relative inline-block bg-white text-customblue border border-customblue rounded-full text-sm font-semibold mx-2 my-1"
        style={{
          paddingTop: "6px",
          paddingBottom: "6px",
          paddingLeft: "12px",
          paddingRight: "16px",
        }}
        onDoubleClick={() => setEditingSkillIndex(index)}
      >
        {skill}
        <button
          className="absolute top-1 right-1 text-red-500 ml-4"
          onClick={() => handleDeleteSkill(index)}
          style={{ marginLeft: "8px" }} // Add margin to the left of the icon
        >
          &#10005;
        </button>
      </span>
    );
  };

  return (
    <div className="flex-1 p-6 w-full">
      <div
        id="progress-container"
        className="flex justify-center items-center m-6"
      ></div>
      <div className="flex justify-center mt-3">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-[45%] p-3 md:mr-1 mb-3">
            <h2 className="text-lg font-display font-semibold mb-3">
              Select Job <span className="text-red-500">*</span>
            </h2>
            <div className="relative">
              <select
                id="job-select"
                className="block w-full px-4 py-2 rounded-md bg-white border-b border-gray-300 focus:outline-none focus:border-blue-500 shadow-bottom shadow-md"
                onChange={onJobSelect}
              >
                <option value="">Select Job Post</option>
                <option>Job Post 1</option>
                <option>Job Post 2</option>
                <option>Job Post 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
            <h2 className="text-lg font-display font-semibold mb-3 mt-3">
              Upload Resume
            </h2>
            <label htmlFor="resume-upload" className="block">
              <input
                type="file"
                id="resume-upload"
                className="hidden h-12"
                onChange={handleFileUpload}
              />
              <div className="w-full h-[16.5rem] p-3 flex items-center justify-center rounded-md cursor-pointer border-b border-gray-300 shadow-bottom shadow-md">
                {uploadedFileName ? (
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-customblue rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 7.293a1 1 0 00-1.414-1.414L8 11.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="ml-2">{uploadedFileName}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <img
                      src="../../Upload.svg"
                      alt="Upload Icon"
                      className="w-14 h-14 mr-2"
                    />
                    <span>Upload Resume</span>
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className="w-full md:w-[65%] p-3 md:ml-1">
            <h2 className="text-md font-display font-semibold mb-3">
              Job Requirement <span className="text-red-500">*</span>
            </h2>
            <textarea
              className="w-full h-[7.31rem] px-4 py-2 mb-3 rounded-md cursor-pointer border-b border-gray-300 shadow-bottom shadow-md resize-none"
              placeholder="Enter job requirements..."
            ></textarea>
            <h2 className="text-md font-display font-semibold mb-3">
              Skills <span className="text-red-500">*</span>
            </h2>
            <div
              id="dynamicContainer"
              className="flex flex-wrap justify-center border-b min-h-[10rem] border-gray-300 shadow-bottom shadow-md"
              style={{ padding: "3rem" }}
            >
              {skills.map((skill, index) => (
                <SkillSpan key={index} skill={skill} index={index} />
              ))}
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyUp={handleAddSkill}
                className="inline-block bg-white text-customblue border border-customblue rounded-full text-sm font-semibold mx-2 my-1"
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
                placeholder="Click here to add skill"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="mx-2 w-32 h-8 text-white bg-customblue rounded-md font-display font-semibold shadow-bottom text-base">
          Save
        </button>
        <button
          id="next-button"
          className="mx-2 w-32 h-8 text-white bg-customblue rounded-md font-display font-semibold shadow-bottom text-base"
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
