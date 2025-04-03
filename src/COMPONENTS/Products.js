import React from "react";
import useFetchData from "../customHooks/FetchData";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const { data, loading, error } = useFetchData(
    "https://dummyjson.com/recipes"
  );

  // Debugging
  // console.log(data?.recipes); // This ensures it doesn't break if data is undefined

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
