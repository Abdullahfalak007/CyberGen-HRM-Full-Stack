import React, { useState } from "react";
import sidebarItems from "../data/sidebarItems.json"; // Assuming sidebarItems.json contains your data

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="relative flex h-100% w-[16rem] max-w-[20rem] flex-col bg-customblue py-4">
      <div className="flex items-center gap-4 p-4 mb-2">
        <img
          src="../../Logo_white.svg"
          alt="brand"
          className="w-[185px] h-[72px] pl-4"
        />
      </div>
      <nav
        id="sidebar"
        className="flex min-w-[240px] flex-col gap-1 py-2 font-display text-base font-normal"
      >
        {sidebarItems.map((item) => (
          <div
            key={item.text}
            className={`sidebar-item flex items-center w-full p-3 leading-tight transition-all outline-none text-start ${
              selectedItem === item
                ? "bg-selectedbg text-selectedtext border-l-4 border-tilecolor"
                : "text-white hover:bg-hoverbg"
            }`}
            role="button"
            tabIndex={0}
            onClick={() => handleItemClick(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleItemClick(item);
              }
            }}
          >
            <div className="grid mr-4 pl-4 place-items-left text-customsize">
              <img
                src={
                  selectedItem === item
                    ? item.imgSrc.replace("_white.svg", "_black.svg")
                    : item.imgSrc
                }
                alt=""
              />
            </div>
            {item.text}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
