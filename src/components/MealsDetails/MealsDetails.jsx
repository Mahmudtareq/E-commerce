/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const MealsDetails = () => {
  const singleMeals = useLoaderData();
  // console.log(singleMeals.meals[0]);
  return (
    <div>
      <h1>meals details :{singleMeals.meals[0].strArea}</h1>
    </div>
  );
};

export default MealsDetails;
