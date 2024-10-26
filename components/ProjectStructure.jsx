"use client"

import React, { useState } from "react";
import { Folder, File, ChevronRight, ChevronDown } from "lucide-react";

const ProjectStructure = ({ structure }) => {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (path) => {
    setOpenFolders(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const renderStructure = (item, path = "") => {
    if (!item) {
      console.error("Undefined item in project structure");
      return null;
    }

    const currentPath = `${path}/${item.name}`;
    const isOpen = openFolders[currentPath];

    if (item.type === "file") {
      return (
        <div key={currentPath} className="flex items-center py-1" style={{ paddingLeft: `${path.split('/').length * 1.5}rem` }}>
          <File className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-sm">{item.name}</span>
        </div>
      );
    }

    return (
      <div key={currentPath}>
        <div
          className="flex items-center py-1 cursor-pointer hover:bg-gray-100"
          style={{ paddingLeft: `${path.split('/').length * 1.5}rem` }}
          onClick={() => toggleFolder(currentPath)}
        >
          {isOpen ? (
            <ChevronDown className="w-4 h-4 mr-1 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1 text-gray-500" />
          )}
          <Folder className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm font-medium">{item.name}</span>
        </div>
        {isOpen && item.children && (
          <div>
            {item.children.map((child) => renderStructure(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-md w-full">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Project Structure</h2>
      <div className="rounded-md dark:text-gray-300">
        {structure ? renderStructure(structure) : <p>No structure available</p>}
      </div>
    </div>
  );
};

export default ProjectStructure;
