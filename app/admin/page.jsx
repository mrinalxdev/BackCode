import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function AdminPanel() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    languages: "",
    desc: "",
    link: "",
    brief: "",
    projectStructure: { name: "", type: "folder", children: [] },
    files: [],
  });

  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleStructureChange = (e) => {
    try {
      const parsedStructure = JSON.parse(e.target.value);
      setNewProject((prev) => ({ ...prev, projectStructure: parsedStructure }));
    } catch (error) {
      console.error("Invalid JSON for project structure:", error);
    }
  };

  const handleFileAdd = () => {
    setNewProject((prev) => ({
      ...prev,
      files: [...prev.files, { name: "", content: "" }],
    }));
  };

  const handleFileChange = (index, field, value) => {
    setNewProject((prev) => ({
      ...prev,
      files: prev.files.map((file, i) =>
        i === index ? { ...file, [field]: value } : file
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      if (response.ok) {
        const updatedProjects = await response.json();
        setProjects(updatedProjects);
        setNewProject({
          title: "",
          languages: "",
          desc: "",
          link: "",
          brief: "",
          projectStructure: { name: "", type: "folder", children: [] },
          files: [],
        });
      } else {
        const errorData = await response.json();
        console.error("Error adding project:", errorData.error);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Card>
          <CardHeader>Project Details</CardHeader>
          <CardContent className="space-y-4">
            <Input
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
              placeholder="Project Title"
              required
            />
            <Input
              name="languages"
              value={newProject.languages}
              onChange={handleInputChange}
              placeholder="Languages (comma-separated)"
              required
            />
            <Textarea
              name="desc"
              value={newProject.desc}
              onChange={handleInputChange}
              placeholder="Short Description"
              required
            />
            <Input
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
              placeholder="Link"
              required
            />
            <Textarea
              name="brief"
              value={newProject.brief}
              onChange={handleInputChange}
              placeholder="Project Brief"
              required
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Project Structure</CardHeader>
          <CardContent>
            <Textarea
              name="projectStructure"
              value={JSON.stringify(newProject.projectStructure, null, 2)}
              onChange={handleStructureChange}
              placeholder="Project Structure (JSON format)"
              required
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Files</CardHeader>
          <CardContent>
            {newProject.files.map((file, index) => (
              <div key={index} className="mb-4">
                <Input
                  value={file.name}
                  onChange={(e) =>
                    handleFileChange(index, "name", e.target.value)
                  }
                  placeholder="File Name"
                  className="mb-2"
                />
                <Textarea
                  value={file.content}
                  onChange={(e) =>
                    handleFileChange(index, "content", e.target.value)
                  }
                  placeholder="File Content"
                />
              </div>
            ))}
            <Button type="button" onClick={handleFileAdd} className="mt-2">
              Add File
            </Button>
          </CardContent>
        </Card>

        <Button type="submit">Add Project</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Existing Projects</h2>
        {projects.map((project) => (
          <Card key={project.id} className="mb-4">
            <CardHeader>{project.title}</CardHeader>
            <CardContent>{project.desc}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
