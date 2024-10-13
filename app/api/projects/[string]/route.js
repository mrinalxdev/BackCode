import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  const projectsPath = path.join(process.cwd(), "projects.json");
  const projectsData = fs.readFileSync(projectsPath, "utf8");
  const projects = JSON.parse(projectsData);

  const project = projects.find((p) => p.link.endsWith(params.string));

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}
