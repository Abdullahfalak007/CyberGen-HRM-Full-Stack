// src/components/ListView.js
import React from "react";

const ListView = ({ resumes }) => {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-gray-300 md:border-none block md:table-row">
          <th className="p-2 md:table-cell">ID</th>
          <th className="p-2 md:table-cell">Name</th>
          <th className="p-2 md:table-cell">Ask AI</th>
          <th className="p-2 md:table-cell">Similarity Score</th>
          <th className="p-2 md:table-cell">Applied Date</th>
          <th className="p-2 md:table-cell">Actions</th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {resumes.map((resume) => (
          <tr
            key={resume.id}
            className="border border-gray-300 md:border-none block md:table-row"
          >
            <td className="p-2 md:table-cell">{resume.id}</td>
            <td className="p-2 md:table-cell">{resume.name}</td>
            <td className="p-2 md:table-cell">
              <button className="bg-customblue text-white p-1 rounded">
                Ask AI
              </button>
            </td>
            <td className="p-2 md:table-cell">{resume.similarityScore}%</td>
            <td className="p-2 md:table-cell">{resume.appliedDate}</td>
            <td className="p-2 md:table-cell">
              <button className="bg-red-500 text-white p-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListView;
