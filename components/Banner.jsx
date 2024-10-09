import { Scale, Search, ShieldOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Banner = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto">
      <h1 className="text-center text-5xl font-bold">
        Search for most optimised backend code to integrate in your app
      </h1>

      <div className="m-4 mt-6 flex gap-2">
        <Input placeholder="Search for code ..." />
        <Button>
          <Search />
        </Button>
      </div>

      <div className="flex mx-auto gap-4">
        <Button
          variant="outline"
          className="flex gap-2 hover:shadow-lg duration-100 ease-in-out"
        >
          <Scale />
          optimized LoadBalancer
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 hover:shadow-lg duration-100 ease-in-out"
        >
          <ShieldOff />
          optimized Ratelimiter
        </Button>
      </div>
    </div>
  );
};

export default Banner;
