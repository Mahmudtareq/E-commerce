import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { name, imageURL, description, id } = product;
  return (
    <div className="card card-compact w-[290px] bg-base-100 shadow-xl">
      <figure className="max-h-[200px] w-full">
        <img src={imageURL} alt="Shoes" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
