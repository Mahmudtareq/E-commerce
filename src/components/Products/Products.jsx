import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";
const Products = () => {
  const products = useLoaderData();
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [productSearchResult, setProductSearchResult] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setProductSearchQuery(e.target.value);
    // Filter the meals based on the search query
    const filterProduct = products.filter((product) =>
      product.name.toLowerCase().includes(productSearchQuery.toLowerCase())
    );
    setProductSearchResult(filterProduct);
  };
  return (
    <div>
      <h1 className="text-center p-3 text-4xl">All Products</h1>
      <div className=" my-8 flex items-center justify-center">
        <input
          type="text"
          value={productSearchQuery}
          onChange={handleInputChange}
          placeholder="Search by Prodeuct name"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="container lg:mx-auto my-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 ">
        {productSearchQuery.trim() === "" ? (
          // If search query is empty or cleared, show all products
          products.length > 0 ? (
            products.map((item) => <Product key={item.id} product={item} />)
          ) : (
            // If no available data, show "no data"
            <p className="text-center capitalize text-xl mb-5 text-fuchsia-600">
              No data is available
            </p>
          )
        ) : productSearchResult.length > 0 ? (
          // If search results available, show them
          productSearchResult.map((item) => (
            <Product key={item.id} product={item} />
          ))
        ) : (
          // If no matching search results found, show "no item"
          <p className="text-center capitalize text-xl mb-5 text-red-700">
            Search item is not available. Please search another one.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
