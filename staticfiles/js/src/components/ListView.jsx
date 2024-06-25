// // src/components/ListView.js
// import React from "react";

// const ListView = ({ resumes }) => {
//   return (
//     <table className="min-w-full border-collapse block md:table">
//       <thead className="block md:table-header-group">
//         <tr className="border border-gray-300 md:border-none block md:table-row">
//           <th className="p-2 md:table-cell">ID</th>
//           <th className="p-2 md:table-cell">Name</th>
//           <th className="p-2 md:table-cell">Ask AI</th>
//           <th className="p-2 md:table-cell">Similarity Score</th>
//           <th className="p-2 md:table-cell">Applied Date</th>
//           <th className="p-2 md:table-cell">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="block md:table-row-group">
//         {resumes.map((resume) => (
//           <tr
//             key={resume.id}
//             className="border border-gray-300 md:border-none block md:table-row"
//           >
//             <td className="p-2 md:table-cell">{resume.id}</td>
//             <td className="p-2 md:table-cell">{resume.name}</td>
//             <td className="p-2 md:table-cell">
//               <button className="bg-customblue text-white p-1 rounded">
//                 Ask AI
//               </button>
//             </td>
//             <td className="p-2 md:table-cell">{resume.similarityScore}%</td>
//             <td className="p-2 md:table-cell">{resume.appliedDate}</td>
//             <td className="p-2 md:table-cell">
//               <button className="bg-red-500 text-white p-1 rounded">
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ListView;

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
      <thead className="block md:table-header-group">
        <tr className="border border-gray-300 md:border-none block md:table-row">
          <th className="p-2 md:table-cell">
            <div className="flex items-center">
              <span>ID</span>
              <div className="flex flex-col ml-2">
                <img src={ArrowUp} alt="Up" />
                <img src={ArrowDown} alt="Down" />
              </div>
            </div>
          </th>
          <th className="p-2 md:table-cell">
            <div className="flex items-center">
              <span>Name</span>
              <div className="flex flex-col ml-2">
                <img src={ArrowUp} alt="Up" />
                <img src={ArrowDown} alt="Down" />
              </div>
            </div>
          </th>
          <th className="p-2 md:table-cell">
            <div className="flex items-center">
              <span>Ask AI</span>
              <div className="flex flex-col ml-2">
                <img src={ArrowUp} alt="Up" />
                <img src={ArrowDown} alt="Down" />
              </div>
            </div>
          </th>
          <th className="p-2 md:table-cell">
            <div className="flex items-center">
              <span>Similarity Score</span>
              <div className="flex flex-col ml-2">
                <img src={ArrowUp} alt="Up" />
                <img src={ArrowDown} alt="Down" />
              </div>
            </div>
          </th>
          <th className="p-2 md:table-cell">
            <div className="flex items-center">
              <span>Applied on</span>
              <div className="flex flex-col ml-2">
                <img src={ArrowUp} alt="Up" />
                <img src={ArrowDown} alt="Down" />
              </div>
            </div>
          </th>
          <th className="p-2 md:table-cell">
            <div className="flex items-center">
              <span>Action</span>
              <div className="flex flex-col ml-2">
                <img src={ArrowUp} alt="Up" />
                <img src={ArrowDown} alt="Down" />
              </div>
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
            <td className="p-2 md:table-cell">
              <input type="checkbox" className="mr-2" />
              {resume.id}
            </td>
            <td className="p-2 md:table-cell">{resume.name}</td>
            <td className="p-2 md:table-cell">
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
            <td className="p-2 md:table-cell">{resume.similarityScore}%</td>
            <td className="p-2 md:table-cell">{resume.appliedDate}</td>
            <td className="p-2 md:table-cell flex">
              <button onClick={() => handleIconClick("icon1")}>
                <img
                  src={approve_applicant_icon}
                  alt="icon1"
                  className="mr-1"
                />
              </button>
              <button onClick={() => handleIconClick("icon2")}>
                <img src={not_considered_icon} alt="icon2" className="mr-1" />
              </button>
              <button onClick={() => handleIconClick("icon3")}>
                <img src={branded_resume} alt="icon3" className="mr-1" />
              </button>
              <button onClick={() => handleIconClick("icon4")}>
                <img src={download_resume} alt="icon4" className="mr-1" />
              </button>
              <button onClick={() => handleIconClick("icon5")}>
                <img src={view_resume} alt="icon5" className="mr-1" />
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
