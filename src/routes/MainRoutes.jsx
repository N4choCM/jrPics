import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import BeachScreen from "../pages/BeachScreen";
import SportScreen from "../pages/SportScreen";
import TravelScreen from "../pages/TravelScreen";
import FoodScreen from "../pages/FoodScreen";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/beach" element={<BeachScreen />} />
        <Route path="/sports" element={<SportScreen />} />
        <Route path="/travel" element={<TravelScreen />} />
        <Route path="/food" element={<FoodScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
