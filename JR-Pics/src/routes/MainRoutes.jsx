import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OrderScreen from "../pages/OrderScreen";
import AdminUserScreen from "../pages/AdminUserScreen";
import AdminMenuScreen from "../pages/AdminMenuScreen";
import AdminOrderScreen from "../pages/AdminOrderScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import AdminProtectedRoutes from "./AdminProtectedRoutes";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/beach" element={<BeachScreen />} />
        <Route
          path="/sports"
          element={
            <SportScreen />
          }
        />
        <Route path="/travel" element={<TravelScreen />} />
        <Route path="/food" element={<FoodScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;