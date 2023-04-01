import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const { isAdmin } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) {
      return navigate("/cart");
    }
  }, [isAdmin]);

  return children;
};

export default ProtectedRoute;
