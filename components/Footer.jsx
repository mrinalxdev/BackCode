import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href="https://mrinal-dev.vercel.app"
              className="font-medium text-primary hover:underline"
            >
              @Hi_Mrinal
            </Link>
          </p>
        </div>
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Github
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}
