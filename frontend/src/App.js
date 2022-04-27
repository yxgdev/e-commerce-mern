import "./App.css";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Categories/Footer/Footer";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import AllProductPage from "./components/Pages/AllProductPage";
import CheckOutPage from "./components/Pages/CheckOutPage";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import ProductPage from "./components/Pages/ProductPage";
import RegisterPage from "./components/Pages/RegisterPage";
import Slider from "./components/Slider/Slider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from "./components/Pages/SuccessPage";
import FailurePage from "./components/Pages/FailurePage";
import SearchResultPage from "./components/Pages/SearchResultPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
        <Route path="/search" element={<SearchResultPage />} />

        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        {/* <AllProductPage /> */}
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
        {/* <CheckOutPage /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
