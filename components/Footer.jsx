import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Built by{" "}
            <Link
              href="https://mrinal-dev.vercel.app"
              className="font-medium text-primary hover:underline dark:text-gray-200"
            >
              @Hi_Mrinal
            </Link>
          </p>
        </div>
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white"
          >
            Github
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white"
          >
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}
