import React from "react";
import { useDispatch } from "react-redux";
import { addIteam } from "../Redux/CartSlice";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handelAddItem = (recipe) => {
    dispatch(addIteam(recipe));
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden p-5 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      {/* Recipe Image */}
      <div className="w-full h-52 rounded-lg overflow-hidden shadow-md">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-gray-900">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mt-1">
          ⏳ Prep: {recipe.prepTimeMinutes} mins | 🍳 Cook: {recipe.cookTimeMinutes} mins
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        className="mt-5 bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-md 
                   hover:bg-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        onClick={() => handelAddItem(recipe)}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default RecipeCard;
