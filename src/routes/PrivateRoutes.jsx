// import PropTypes from "prop-types";

// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router";

// const PrivateRoutes = ({ children }) => {
//   const { userInfo } = useSelector((state) => state.auth);
//   if (!userInfo) {
//     return <Navigate to="/login" replace />;
//   }

//   return children || <Outlet />;
// };

// PrivateRoutes.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PrivateRoutes;

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  return children || <Outlet />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
