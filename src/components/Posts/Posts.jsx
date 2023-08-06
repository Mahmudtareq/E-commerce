import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1 className="text-center my-3">All Post here </h1>
      <div className="container mx-auto gap-4 grid lg:grid-cols-3 md:grid-cols-2 my-5">
        {posts.slice(0, 50).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
