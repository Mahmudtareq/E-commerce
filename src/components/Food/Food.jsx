/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const {
    idMeal,
    strArea,
    strIngredient1,
    strMealThumb,
    strInstructions,
    strMeal,
  } = food;
  return (
    <div className="card lg:max-w-[300]   bg-base-100 shadow-xl">
      <figure className="">
        <img src={strMealThumb} alt="Meals" className="h-[220px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {strMeal}
          <div className="badge badge-secondary">{strIngredient1}</div>
        </h2>
        <p className="text-red-400 text-justify">
          Description: {strInstructions.slice(0, 100)}
        </p>
        <p className="text-lg fs-4 text-gray-950">Area : {strArea}</p>
        <div className="card-actions justify-end">
          <Link to={`/foods/${idMeal}`}>
            <button className="btn btn-outline">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
