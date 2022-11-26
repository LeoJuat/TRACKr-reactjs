import { Navigate } from "react-router-dom";

const PublicRoutes = (children, props) => {
  return props.isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoutes;
