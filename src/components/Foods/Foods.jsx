/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const Foods = () => {
  const foods = useLoaderData();
  const allMealas = foods.meals || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchresult] = useState([]);
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    // Filter the meals based on the search query
    const filteredMeals = allMealas.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase().slice(0, 3))
    );
    setSearchresult(filteredMeals);
  };
  // const handleSearch = () => {
  //   if (searchQuery.trim() === "") {
  //     // If the search query is empty, show all meals
  //     setSearchresult([]);
  //   } else {
  //     // Filter the meals based on the search query
  //     const filteredMeals = allMealas.filter((meal) =>
  //       meal.strMeal
  //         .toLowerCase()
  //         .includes(searchQuery.toLowerCase().slice(0, 3))
  //     );
  //     setSearchresult(filteredMeals);
  //   }
  // };
  return (
    <div>
      <div className=" my-5 flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search by meal name"
          className="input input-bordered input-info w-full max-w-xs"
        />
        {/* <button className="btn btn-outline ml-2 p-3" onClick={handleSearch}>
          Search
        </button> */}
      </div>
      <div className="container mx-auto my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {searchQuery.trim() === "" ? (
          allMealas.length > 0 ? (
            allMealas.map((item) => <Food key={item.idMeal} food={item} />)
          ) : (
            <p className="capitalize text-xl mb-5 text-fuchsia-700">
              data item is not available.
            </p>
          )
        ) : searchResult.length > 0 ? (
          searchResult.map((item) => <Food key={item.idMeal} food={item} />)
        ) : (
          <p className="text-center capitalize text-xl mb-5 text-red-700">
            Search Item is not aviable . ! pls search another one
          </p>
        )}
      </div>
    </div>
  );
};

export default Foods;
