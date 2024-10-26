import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Post = ({ title, languages, desc, link }) => {
  return (
    <div className="size-xl mx-4">
      <Link href={`${link}`}>
        <Card className="cursor-pointer hover:shadow-xl transition-all duration-200 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">{title}</CardTitle>
            <div>
              <Badge className="dark:bg-gray-700 dark:text-white">{languages}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="dark:text-gray-300">{desc}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Post;
