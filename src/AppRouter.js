import SignupPage from "./pages/SignupPage";
import App from "./App";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import IsPrivate from "./components/IsPrivate/IsPrivate";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
      </Routes>
    </>
  );
}

export default AppRouter;
