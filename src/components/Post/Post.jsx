import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  //   console.log(post);
  const { body, title, id } = post;
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h3 className="card-title text-cyan-300 text-start">{title}</h3>
        <p className="text-justify p-2">{body}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
