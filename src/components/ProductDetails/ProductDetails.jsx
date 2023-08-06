/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const findPalette = (products, productId) => {
  return products.find((palette) => palette.id === productId);
};

const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch("/products.json");
    const products = await response.json();
    return findPalette(products, +productId);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const matchedProduct = await fetchProductDetails(productId);
      setProduct(matchedProduct);
    };

    fetchData();
  }, [productId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto my-5">
      {product ? (
        <div className="card card-compact w-[290px] bg-base-100 shadow-xl">
          <figure className="max-h-[200px] w-full">
            <img src={product?.imageURL} alt="Shoes" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.name}</h2>
            <p>{product?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-600 text-2xl">No Data Found</p>
      )}
    </div>
  );
};

export default ProductDetails;
