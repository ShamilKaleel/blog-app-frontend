//i need to set all routes here
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Uncomment and define your NotFound component if needed */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
