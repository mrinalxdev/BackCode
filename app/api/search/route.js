import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  const projectsPath = path.join(process.cwd(), "projects.json");
  const projectsData = fs.readFileSync(projectsPath, "utf8");
  const projects = JSON.parse(projectsData);

  if (q) {
    const results = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(q.toLowerCase()) ||
        project.languages.toLowerCase().includes(q.toLowerCase()) ||
        project.desc.toLowerCase().includes(q.toLowerCase())
    );
    return NextResponse.json(results);
  } else {
    return NextResponse.json(projects);
  }
}
