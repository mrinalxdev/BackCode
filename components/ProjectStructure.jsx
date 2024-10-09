"use client";
import { Folder, File, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const ProjectStructure = ({ structure }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderStructure = (item, depth = 0) => {
    const paddingLeft = `${depth * 1.5}rem`;

    if (item.type === "file") {
      return (
        <div
          key={item.name}
          className="flex items-center py-1"
          style={{ paddingLeft }}
        >
          <File className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-sm">{item.name}</span>
        </div>
      );
    }

    return (
      <div key={item.name}>
        <div
          className="flex items-center py-1 cursor-pointer hover:bg-gray-100"
          style={{ paddingLeft }}
          onClick={toggleOpen}
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
          <div className="ml-4">
            {item.children.map((child) => renderStructure(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-4 max-w-md w-full">
      <h2 className="text-lg font-semibold mb-4">Project Structure</h2>
      <div className="rounded-md">{renderStructure(structure)}</div>
    </div>
  );
};

export default function Component() {
  const projectStructure = {
    name: "jwt-auth",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Header.js", type: "file" },
              { name: "Footer.js", type: "file" },
            ],
          },
          {
            name: "pages",
            type: "folder",
            children: [
              { name: "index.js", type: "file" },
              { name: "about.js", type: "file" },
            ],
          },
          {
            name: "styles",
            type: "folder",
            children: [{ name: "globals.css", type: "file" }],
          },
        ],
      },
      { name: "app.js", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
    ],
  };

  return <ProjectStructure structure={projectStructure} />;
}
