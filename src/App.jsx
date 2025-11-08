import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page routes */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Main pages routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Not fount page routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
