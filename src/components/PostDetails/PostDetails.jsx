import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const singlePost = useLoaderData();
  const { body, title, id } = singlePost;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="container mx-auto my-5 card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>id:{id}</p>
        <h2 className="card-title text-start text-gray-700">{title}</h2>
        <p className="text-justify p-2">{body}</p>
        <div className="card-actions justify-end">
          <button onClick={handleBack} className="btn btn-primary">
            Back Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
