import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Clear Cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Handle Remove Item
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">🛒 Your Cart</h1>
        <button
          className="text-lg font-semibold text-white bg-red-500 px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border"
            >
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 font-bold text-lg">₹{item.price}</p>
                <p className="text-green-600 text-sm font-medium">
                  ★ {item.rating} ({item.reviewCount})
                </p>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </div>

              {/* Right Side - Image & Remove Button */}
              <div className="relative w-28 h-28 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition"
                />
                <button
                  className="absolute bottom-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded-md shadow-md hover:bg-red-600 transition"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty Cart Message
        <div className="text-center text-gray-500 mt-10">
          <p className="text-xl">Your cart is empty 🛍️</p>
          <p className="text-sm mt-2">
            Add some delicious meals to your cart.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
