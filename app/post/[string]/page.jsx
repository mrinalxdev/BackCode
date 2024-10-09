import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectStructure from "../../../components/ProjectStructure"
import Link from "next/link";
import ProjectBrief from "@/components/ProjectBrief";
import CodeViewer from "@/components/CodeViewer"

const Pages = () => {
  return (
    <div className="container mx-auto my-7 p-4">
      <div className="text-3xl font-bold flex justify-between">
        JWT Authentication
        <Link href={"/"}>
          <Button>Homepage</Button>
        </Link>
      </div>
      <div className="mt-5">
        <Badge>JavaScript</Badge>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="mt-5 flex gap-6">
            <ProjectStructure />
            <ProjectBrief />
        </div>
        <h1 className="text-xl p-[0.7rem] py-4 font-semibold">Code Walkthrough </h1>
        <CodeViewer /> 
      </div>
    </div>
  );
};

export default Pages;
