"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Folder, File, Plus, Minus } from "lucide-react";

export default function AdminPanel() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    languages: "",
    desc: "",
    link: "",
    brief: "",
    projectStructure: { name: "root", type: "folder", children: [] },
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
          projectStructure: { name: "root", type: "folder", children: [] },
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

  const ProjectStructureItem = ({ item, path = [], onUpdate }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [newItemName, setNewItemName] = useState("");

    const handleToggle = () => setIsExpanded(!isExpanded);

    const handleAddItem = (type) => {
      const newItem = { name: newItemName, type, children: type === 'folder' ? [] : undefined };
      onUpdate([...path, 'children'], [...item.children, newItem]);
      setNewItemName("");
    };

    const handleRemoveItem = () => {
      const parentPath = path.slice(0, -1);
      const parentChildren = path.length > 0 ? getNestedValue(newProject.projectStructure, [...parentPath, 'children']) : newProject.projectStructure.children;
      const updatedChildren = parentChildren.filter((_, index) => index !== path[path.length - 1]);
      onUpdate([...parentPath, 'children'], updatedChildren);
    };

    return (
      <div className="ml-4">
        <div className="flex items-center">
          {item.type === 'folder' ? (
            <Button variant="ghost" size="sm" onClick={handleToggle}>
              {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
            </Button>
          ) : (
            <span className="w-6" />
          )}
          {item.type === 'folder' ? <Folder size={16} className="mr-2" /> : <File size={16} className="mr-2" />}
          <span>{item.name}</span>
          {path.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleRemoveItem}>
              <Minus size={16} />
            </Button>
          )}
        </div>
        {item.type === 'folder' && isExpanded && (
          <>
            <div className="flex items-center mt-2">
              <Input
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="New item name"
                className="mr-2"
              />
              <Button onClick={() => handleAddItem('file')} size="sm">Add File</Button>
              <Button onClick={() => handleAddItem('folder')} size="sm" className="ml-2">Add Folder</Button>
            </div>
            {item.children.map((child, index) => (
              <ProjectStructureItem
                key={index}
                item={child}
                path={[...path, 'children', index]}
                onUpdate={onUpdate}
              />
            ))}
          </>
        )}
      </div>
    );
  };

  const updateProjectStructure = (path, value) => {
    setNewProject((prev) => {
      const updatedStructure = { ...prev.projectStructure };
      let current = updatedStructure;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return { ...prev, projectStructure: updatedStructure };
    });
  };

  const getNestedValue = (obj, path) => {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contribution Panel</h1>
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
              className="min-h-[200px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Project Structure</CardHeader>
          <CardContent>
            <ProjectStructureItem
              item={newProject.projectStructure}
              onUpdate={updateProjectStructure}
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
                  className="min-h-[200px]"
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