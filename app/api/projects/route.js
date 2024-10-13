import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const projectsPath = path.join(process.cwd(), "projects.json");
  const projectsData = await fs.readFile(projectsPath, "utf8");
  const projects = JSON.parse(projectsData);
  return NextResponse.json(projects);
}

export async function POST(request) {
  try {
    const projectsPath = path.join(process.cwd(), "projects.json");
    const projectsData = await fs.readFile(projectsPath, "utf8");
    const projects = JSON.parse(projectsData);

    const newProject = await request.json();


    if (
      !newProject.title ||
      !newProject.languages ||
      !newProject.desc ||
      !newProject.link
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }


    try {
      if (typeof newProject.projectStructure === "string") {
        newProject.projectStructure = JSON.parse(newProject.projectStructure);
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid project structure JSON" },
        { status: 400 }
      );
    }

    newProject.id = projects.length + 1;
    projects.push(newProject);

    await fs.writeFile(projectsPath, JSON.stringify(projects, null, 2));
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error in POST /api/projects:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
