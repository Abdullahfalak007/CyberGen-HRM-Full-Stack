// src/components/RankedResumes.js
import React, { useState, useEffect } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import resumesData from "../data/resumes.json"; // Import existing data
import axios from "axios"; // Import Axios for HTTP requests (you may need to install axios)

const RankedResumes = () => {
  const [view, setView] = useState("grid");
  const [loadedData, setLoadedData] = useState([]);

  // Function to fetch data from JSON file
  const fetchData = async () => {
    try {
      const response = await axios.get("/data/resumes.json"); // Adjust path if necessary
      setLoadedData(response.data); // Set loaded data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  // Combine existing data with loaded data
  const combinedResumes = [...resumesData, ...loadedData];

  return (
    <div className="p-6">
      <div className="mb-4 flex">
        <button
          className={`px-6 py-2 rounded-md ${
            view === "grid"
              ? "bg-customblue text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setView("grid")}
          style={{ marginRight: "-5px", zIndex: view === "grid" ? 1 : 0 }}
        >
          Grid
        </button>
        <button
          className={`px-6 py-2 rounded-md ${
            view === "list"
              ? "bg-customblue text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setView("list")}
          style={{ zIndex: view === "list" ? 1 : 0 }}
        >
          List
        </button>
      </div>
      {view === "grid" ? (
        <GridView resumes={combinedResumes} />
      ) : (
        <ListView resumes={combinedResumes} />
      )}
    </div>
  );
};

export default RankedResumes;
