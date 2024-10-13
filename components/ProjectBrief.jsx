"use client"

import React from "react";

const ProjectBrief = ({ brief }) => {
  return (
    <div className="p-4 max-w-xl">
      <h2 className="text-lg font-semibold mb-4">Project Brief</h2>
      <p>{brief}</p>
    </div>
  );
};

export default ProjectBrief;