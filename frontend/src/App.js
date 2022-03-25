import "./App.css";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Categories/Footer/Footer";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Location />
      <Footer />
    </>
  );
}

export default App;
