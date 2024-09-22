import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  preload: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>MeetMinds - Connect with Fellow Researchers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-16 h-[100vh] overflow-hidden">
        <h1 className={`${poppins.className} text-6xl font-bold text-center`}>
          Connect <span className="text-yellow-500">Collaborate</span> and
          Innovate
        </h1>
        <p className="text-xl mt-4 mb-6 text-center max-w-2xl mx-auto">
          Join a community where curiosity meets collaboration. Share your
          research, exchange ideas, and drive innovation with enthusiasts across
          all fields.
        </p>
        <div className="flex justify-center gap-5 mt-[3rem]">
          <Link
            href="/recent-posts"
          >
            <Button variant="outline" className="py-6 px-6">
              Start Exploring
            </Button>
          </Link>
          <Link
            href="/community"
          >
            <Button variant="primary" className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 py-6 px-6 font-bold">
              Join Community
            </Button>
          </Link>
        </div>
        <div className="relative h-full mt-20 overflow-hidden rounded-3xl flex items-center justify-center">
          <img
            src="/banner.png"
            className="object-contain h-full shadow-2xl rounded-2xl drop-shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
