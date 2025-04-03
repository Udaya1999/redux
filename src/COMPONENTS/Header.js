import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [animate, setAnimate] = useState(false);

  // Trigger animation when cart updates
  useEffect(() => {
    if (cartItems.length > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); // Keep animation visible for 1.5 seconds
    }
  }, [cartItems]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-6 shadow-lg flex justify-between items-center z-50">
      {/* Logo - Navigates to Redux Page */}
      <div className="flex items-center">
        <Link to="/main">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.OAmfDOChK1XYh2NHZJLBBAAAAA&pid=Api&P=0&h=180"
            alt="redux-logo"
            className="w-12 h-12 mr-2 mix-blend-screen opacity-90 rounded-xl hover:scale-110 transition"
          />
        </Link>
        <span className="text-xl font-bold tracking-wide">Redux</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/products" className="hover:text-yellow-400 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="relative flex items-center hover:text-yellow-400 transition duration-300"
            >
              <span className="mr-2">Cart</span>
              <div className={`relative w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full bg-yellow-500 text-black transition-all duration-500 ${animate ? "animate-bounce scale-125" : ""}`}>
                {cartItems.length}
              </div>
              {animate && (
                <span className="absolute -top-3 -right-3 text-yellow-300 text-xs font-bold animate-pulse duration-2000">
                   🎉🎉🎉
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/aboutMe" className="hover:text-yellow-400 transition duration-300">
             About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
