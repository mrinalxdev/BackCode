"use client"

import { Brain, Github, PenBox, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl flex items-center gap-2">
        <Brain /> BackCode
      </h1>

      <div className="flex gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
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
