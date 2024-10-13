import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-tomorrow.css";
import { ChevronRight, ChevronDown, File } from "lucide-react";

const CodeViewer = ({ files }) => {
  const [activeFile, setActiveFile] = useState(files[0]?.name);
  const [expandedFolders, setExpandedFolders] = useState({});

  useEffect(() => {
    Prism.highlightAll();
  }, [activeFile]);

  const toggleFolder = (folderPath) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderPath]: !prev[folderPath],
    }));
  };

  const getLanguage = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'js': return 'javascript';
      case 'py': return 'python';
      case 'java': return 'java';
      case 'cs': return 'csharp';
      default: return 'javascript'; // default to javascript
    }
  };

  const renderFileTree = (items, path = "") => {
    return items.map((item) => {
      const itemPath = `${path}/${item.name}`;
      if (item.type === "folder") {
        const isExpanded = expandedFolders[itemPath];
        return (
          <div key={itemPath}>
            <div
              className="flex items-center py-1 px-2 cursor-pointer hover:bg-gray-700"
              onClick={() => toggleFolder(itemPath)}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 mr-1 text-blue-300" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-1 text-blue-300" />
              )}
              <span className="text-sm text-blue-300">{item.name}</span>
            </div>
            {isExpanded && item.children && (
              <div className="ml-4">
                {renderFileTree(item.children, itemPath)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div
            key={itemPath}
            className={`flex items-center py-1 px-2 cursor-pointer ${
              activeFile === item.name ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveFile(item.name)}
          >
            <File className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm text-gray-300">{item.name}</span>
          </div>
        );
      }
    });
  };

  const activeFileContent = files.find(file => file.name === activeFile)?.content || 'No content available';
  const language = getLanguage(activeFile);

  return (
    <div className="flex h-[500px] border border-gray-700 rounded-lg overflow-hidden bg-gray-900 text-white">
      <div className="w-1/4 border-r border-gray-700 overflow-y-auto">
        {renderFileTree(files)}
      </div>
      <div className="w-3/4 overflow-y-auto code-viewer">
        <pre className="p-4 text-sm">
          <code className={`language-${language}`}>
            {activeFileContent}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeViewer;