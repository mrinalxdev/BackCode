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
        <Card className="cursor-pointer hover:shadow-xl">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <div>
              <Badge>{languages}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{desc}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Post;
