// src/components/ListView.js
import React from "react";
import approve_applicant_icon from "../../../images/approve_applicant_icon.svg";
import not_considered_icon from "../../../images/not_considered_icon.svg";
import branded_resume from "../../../images/branded_resume.svg";
import download_resume from "../../../images/download_resume.svg";
import view_resume from "../../../images/view_resume.svg";
import Checkmark from "../../../images/checkmark.png";
import ArrowUp from "../../../images/arrow_up.svg";
import ArrowDown from "../../../images/arrow_down.svg";

const ListView = ({ resumes }) => {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group bg-customblue text-white rounded-t-lg">
        <tr className="border border-gray-300 md:border-none block md:table-row">
          <th className="p-2 md:table-cell text-center rounded-tl-lg">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-2">
                <img src={ArrowUp} alt="Up" className="w-3 h-3" />
                <img src={ArrowDown} alt="Down" className="w-3 h-3" />
              </div>
              <span>ID</span>
            </div>
          </th>
          <th className="p-2 md:table-cell text-center">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-2">
                <img src={ArrowUp} alt="Up" className="w-3 h-3" />
                <img src={ArrowDown} alt="Down" className="w-3 h-3" />
              </div>
              <span>Name</span>
            </div>
          </th>
          <th className="p-2 md:table-cell text-center">
            <div className="flex items-center justify-center">
              <span>Ask AI</span>
            </div>
          </th>
          <th className="p-2 md:table-cell text-center">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-2">
                <img src={ArrowUp} alt="Up" className="w-3 h-3" />
                <img src={ArrowDown} alt="Down" className="w-3 h-3" />
              </div>
              <span>Similarity Score</span>
            </div>
          </th>
          <th className="p-2 md:table-cell text-center">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-2">
                <img src={ArrowUp} alt="Up" className="w-3 h-3" />
                <img src={ArrowDown} alt="Down" className="w-3 h-3" />
              </div>
              <span>Applied on</span>
            </div>
          </th>
          <th className="p-2 md:table-cell text-center rounded-tr-lg">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-2">
                <img src={ArrowUp} alt="Up" className="w-3 h-3" />
                <img src={ArrowDown} alt="Down" className="w-3 h-3" />
              </div>
              <span>Action</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {resumes.map((resume) => (
          <tr
            key={resume.id}
            className="border border-gray-300 md:border-none block md:table-row"
          >
            <td className="p-2 md:table-cell text-center">
              <input type="checkbox" className="mr-2" />
              {resume.id}
            </td>
            <td className="p-2 md:table-cell text-center">{resume.name}</td>
            <td className="p-2 md:table-cell text-center">
              <input
                type="checkbox"
                className="appearance-none h-5 w-5 border-2 border-customblue rounded-full focus:outline-none checked:bg-blue-600 checked:border-transparent"
                style={{
                  backgroundImage: "none",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                onChange={(e) => {
                  e.target.style.backgroundImage = e.target.checked
                    ? `url(${Checkmark})`
                    : "none";
                }}
              />
            </td>
            <td className="p-2 md:table-cell text-center">
              {resume.similarityScore}%
            </td>
            <td className="p-2 md:table-cell text-center">
              {resume.appliedDate}
            </td>
            <td className="p-2 md:table-cell text-center flex justify-center items-center space-x-2">
              <button onClick={() => handleIconClick("icon1")}>
                <img
                  src={approve_applicant_icon}
                  alt="icon1"
                  className="w-6 h-6"
                />
              </button>
              <button onClick={() => handleIconClick("icon2")}>
                <img
                  src={not_considered_icon}
                  alt="icon2"
                  className="w-6 h-6"
                />
              </button>
              <button onClick={() => handleIconClick("icon3")}>
                <img src={branded_resume} alt="icon3" className="w-6 h-6" />
              </button>
              <button onClick={() => handleIconClick("icon4")}>
                <img src={download_resume} alt="icon4" className="w-6 h-6" />
              </button>
              <button onClick={() => handleIconClick("icon5")}>
                <img src={view_resume} alt="icon5" className="w-6 h-6" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const handleIconClick = (icon) => {
  alert(`Icon ${icon} clicked`);
};

export default ListView;
