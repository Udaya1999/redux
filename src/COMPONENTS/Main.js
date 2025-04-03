import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import cartImg from "../UTILS/cart.png";
import store from "../UTILS/store.png";
import cartslice from "../UTILS/cartslice.png";
import dispatch from "../UTILS/dispatch.png";
import selector from "../UTILS/selector.png";

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleDownloadNotes = () => {
    const pdfUrl = "/redux_notes.pdf"; // Ensure this file is placed in the public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "ReactNotes.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-4/5 mx-auto min-h-screen p-8 bg-gradient-to-br from-purple-200 to-blue-200 shadow-2xl rounded-3xl border border-gray-400">
      {/* HEADER */}
      <h1 className="text-5xl font-bold text-center text-purple-900 mb-8 underline decoration-wavy">
        Redux Overview
      </h1>

      {/* EXPLORE SECTION */}
      <div className="text-center mb-6 p-4 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">
          Explore how Redux works! Go to
          <span
            onClick={() => navigate("/products")}
            className="ml-2 text-blue-600 font-bold cursor-pointer hover:underline hover:text-blue-800 transition-all"
          >
            Products
          </span>
          _and see it in action.
        </h2>
        <p className="text-gray-600 mt-2">
          Try adding items to the cart, removing them, or clearing the cart by clicking the{" "}
          <strong>"Clear Cart"</strong> button.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <p className="text-lg text-gray-700 mb-4 text-center">
        In our React application, there is a <strong>Data Layer</strong> and a <strong>UI Layer</strong>.
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li><strong>Redux</strong> operates in the Data Layer.</li>
        <li>Both layers work together to manage the application state.</li>
      </ul>

      {/* EXAMPLE: CART */}
      <h2 className="text-2xl font-semibold mt-6 text-blue-800">Example: Cart</h2>
      <p className="text-gray-700">When we click on Add, the cart should increase by +1 using Redux.</p>
      <img
        src={cartImg}
        alt="Cart Example"
        className="w-full md:w-3/4 mx-auto my-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={() => setSelectedImage(cartImg)}
      />

      {/* REDUX STORE */}
      <h2 className="text-2xl font-semibold mt-6 text-blue-800">Redux Store</h2>
      <p className="text-gray-700">
        The Redux store is a large object that contains application data and is kept in a global central place.
      </p>
      <p className="text-gray-700">
        In a React application, any component can access the data from the Redux store using selectors.
      </p>
      <img
        src={store}
        alt="Redux Store Diagram"
        className="w-full md:w-3/4 mx-auto my-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={() => setSelectedImage(store)}
      />

      {/* SLICES */}
      <h2 className="text-2xl font-semibold mt-6 text-blue-800">Slices</h2>
      <p className="text-gray-700">
        Logical partitions of the store are called <strong>Slices</strong>, which represent different sub-parts of the Redux store.
      </p>
      <p className="text-gray-700">Examples: Cart, User, etc.</p>
      <img
        src={cartslice}
        alt="Redux Slices"
        className="w-full md:w-3/4 mx-auto my-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={() => setSelectedImage(cartslice)}
      />

      {/* DISPATCHING ACTIONS */}
      <h2 className="text-2xl font-semibold mt-6 text-blue-800">Dispatching Actions</h2>
      <p className="text-gray-700">
        When we click on the Add button, we need to <strong>dispatch</strong> an action to update the state.
      </p>
      <p className="text-gray-700">
        This action calls a function that modifies the cart, known as a <strong>Reducer</strong>.
      </p>
      <img
        src={dispatch}
        alt="Dispatch Flow Diagram"
        className="w-full md:w-3/4 mx-auto my-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={() => setSelectedImage(dispatch)}
      />

      {/* SELECTORS */}
      <h2 className="text-2xl font-semibold mt-6 text-blue-800">How to Read Data from the Store</h2>
      <p className="text-gray-700">
        We use the <strong>Selector</strong> to read data from the Redux store.
      </p>
      <p className="text-gray-700">
        This process is called <strong>subscribing to the store</strong>, ensuring that when data updates, components using that data also update automatically.
      </p>
      <img
        src={selector}
        alt="Redux Selector"
        className="w-full md:w-3/4 mx-auto my-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={() => setSelectedImage(selector)}
      />

      {/* KEY CONCEPTS */}
      <h2 className="text-2xl font-semibold mt-6 text-blue-800">Key Concepts</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li><strong>Store & Slices</strong></li>
        <li><strong>Actions</strong></li>
        <li><strong>Dispatch</strong></li>
        <li><strong>Reducers</strong></li>
        <li><strong>Selectors</strong></li>
        <li><strong>Subscription</strong></li>
      </ul>

      {/* DOWNLOAD REACT NOTES */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownloadNotes}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          📥 Download React Notes
        </button>
      </div>

      {/* IMAGE POPUP MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-3xl max-h-[80vh] rounded-xl shadow-2xl transition-transform scale-105"
          />
        </div>
      )}
    </div>
  );
};

export default Main;
