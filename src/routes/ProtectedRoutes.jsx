import { Navigate } from 'react-router-dom';
import { AppStateContext } from "../state/AppProvider";
import { useContext } from "react";

const ProtectedRoutes = ({ children }) => {
  const appStateContext = useContext(AppStateContext);
  if (appStateContext?.state.loggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;