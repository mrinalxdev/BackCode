"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectStructure from "@/components/ProjectStructure";
import Link from "next/link";
import ProjectBrief from "@/components/ProjectBrief";
import CodeViewer from "@/components/CodeViewer";

const ProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/projects/${params.string}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        return response.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [params.string]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>No project data available</div>;

  return (
    <div className="container mx-auto my-7 p-4">
      <div className="text-3xl font-bold flex justify-between">
        {project.title}
        <Link href={"/"}>
          <Button>Homepage</Button>
        </Link>
      </div>
      <div className="mt-5">
        <Badge>{project.languages}</Badge>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="mt-5 flex gap-6">
          <ProjectStructure structure={project.projectStructure} />
          <ProjectBrief brief={project.brief} />
        </div>
        <h1 className="text-xl p-[0.7rem] py-4 font-semibold">
          Code Walkthrough{" "}
        </h1>
        {project.files && project.files.length > 0 ? (
          <CodeViewer files={project.files} />
        ) : (
          <p>No files available for this project.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
