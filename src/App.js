import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./COMPONENTS/Header";
import Products from "./COMPONENTS/Products";
import Cart from "./COMPONENTS/Cart";
import Main from "./COMPONENTS/Main";
import appStore from "./Redux/app.Store";
import { Provider } from "react-redux";
import Footer from "./Footer";
// import ReduxPage from "./pages/ReduxPage"; // The page displayed when clicking the logo

function App() {
  return (
    <Provider store={appStore}>
    <div className="pt-24">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<ReduxPage />} /> */}
     <Route path="/" element={<Main />} />
    
          <Route path="/main" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
