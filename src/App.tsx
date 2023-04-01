import "./App.css";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Utils/ProtectedRoutes";
function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
