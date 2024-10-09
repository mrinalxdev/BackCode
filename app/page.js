
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Post from "../components/Post"

const items = [
  {
    id: 1,
    title: "JWT Authentication",
    languages: "Node.js",
    desc: "JWT Authentication: Implements secure user authentication using JSON Web Tokens (JWT), handling user sessions and protecting routes.",
    link: "/post/jwtauthentication"
  },
  {
    id: 2,
    title: "Rate Limitter",
    languages: "JavaScript",
    desc: "Rate limiter: Controls traffic flow, limits requests, and throttles excessive usage to prevent overload, DDoS attacks, and ensure stability.",
    link: "/post/ratelimiter"
  },
  {
    id: 3,
    title: "CRUD API with MongoDB",
    languages: "Node.js, MongoDB",
    desc: "CRUD API: Provides endpoints for creating, reading, updating, and deleting resources, built using MongoDB as the database.",
    link: "/post/crudapi"
  },
  {
    id: 4,
    title: "File Upload Service",
    languages: "Python, Flask",
    desc: "File Upload: Service for handling file uploads with validation and storage on the server, ensuring secure and efficient file handling.",
    link: "/post/fileuploadservice"
  },
  {
    id: 5,
    title: "WebSocket Chat App",
    languages: "JavaScript, Node.js",
    desc: "WebSocket Chat: Real-time communication app using WebSocket protocol, allowing users to send and receive messages instantly.",
    link: "/post/websocketchat"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mt-[4rem]">
        <Banner />
      </div>

      <div className="mt-[2rem] grid lg:grid-cols-3 md:grid-cols-2  gap-5 ">
        {items.map((item, id) => (
          <Post title={item.title} languages={item.languages} desc={item.desc} link={item.link} />
        ))}
      </div>
    </div>
  );
}
