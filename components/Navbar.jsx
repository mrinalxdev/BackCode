import { Brain, Github, PenBox } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl flex items-center gap-2">
        <Brain /> BackCode
      </h1>

      <div className="flex gap-4">
        <Button className="flex gap-2">
          <Github />
          <span>Star this project</span>
        </Button>
        <Button className="flex gap-2">
          <PenBox />
          <span>Contribute</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
