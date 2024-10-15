import { Brain, Github, PenBox } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl flex items-center gap-2">
        <Brain /> BackCode
      </h1>

      <div className="flex gap-4">
        <Link href={''}>
        </Link>
        <Link href={"/admin"}>
          <Button className="flex gap-2">
            <PenBox />
            <span>Contribute</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
