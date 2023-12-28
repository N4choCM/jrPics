import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorScreen from "../pages/ErrorScreen";

const AdminRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AdminRoutes;