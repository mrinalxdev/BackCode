"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, File } from "lucide-react";

const CodeViewer = ({ files }) => {
  const [activeFile, setActiveFile] = useState(files[0].name);
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleFolder = (folderPath) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderPath]: !prev[folderPath],
    }));
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

  // const activeFileContent = files.find(file => file.name === activeFile)?.content || ''
  const activeFileContent =
    files.find((file) => file.name === activeFile)?.content ||
    "No content available";

  return (
    <div className="flex h-[500px] border border-gray-700 rounded-lg overflow-hidden bg-gray-900 text-white">
      <div className="w-1/4 border-r border-gray-700 overflow-y-auto">
        {renderFileTree(files)}
      </div>
      <div className="w-3/4 overflow-y-auto code-viewer">
        <pre className="p-4 text-sm">
          <code className="text-gray-300 whitespace-pre-wrap">
            {activeFileContent}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default function Component() {
  const files = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Header.js",
              type: "file",
              content: `import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My App</Link>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;`,
            },
            {
              name: "Footer.js",
              type: "file",
              content: `import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="underline">Privacy Policy</a> | 
          <a href="/terms" className="underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;`,
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "Home.js",
              type: "file",
              content: `import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg">This is the home page of our amazing application.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;`,
            },
            {
              name: "About.js",
              type: "file",
              content: `import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          We are a passionate team dedicated to creating amazing web applications.
        </p>
        <p className="text-lg">
          Our mission is to make the web a better place, one app at a time.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;`,
            },
          ],
        },
        {
          name: "styles.css",
          type: "file",
          content: `@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  font-family: 'Inter', sans-serif;
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}`,
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      content: `{
  "name": "my-react-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "tailwindcss": "^3.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`,
    },
    {
      name: "README.md",
      type: "file",
      content: `# My React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### \`npm test\`

Launches the test runner in the interactive watch mode.

### \`npm run build\`

Builds the app for production to the \`build\` folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).`,
    },
  ];

  return <CodeViewer files={files} />;
}
