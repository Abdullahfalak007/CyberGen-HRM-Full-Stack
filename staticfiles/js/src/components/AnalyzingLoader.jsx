// import React, { useEffect } from "react";

// const AnalyzingLoader = ({ onExtractionComplete }) => {
//   useEffect(() => {
//     // Simulate extraction process
//     setTimeout(() => {
//       onExtractionComplete();
//     }, 3000); // Adjust the timeout as needed
//   }, [onExtractionComplete]);

//   return (
//     <div className="flex justify-center items-center h-full">
//       <div className="loader">Loading...</div>
//     </div>
//   );
// };

// export default AnalyzingLoader;

import React, { useEffect } from "react";

const AnalyzingLoader = ({ onExtractionComplete }) => {
  useEffect(() => {
    // Simulate extraction process
    setTimeout(() => {
      onExtractionComplete();
    }, 3000); // Adjust the timeout as needed
  }, [onExtractionComplete]);

  return (
    <div className="flex justify-center items-center h-full">
      <div class="flex gap-4 p-4 flex-wrap justify-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
      </div>
    </div>
  );
};

export default AnalyzingLoader;
