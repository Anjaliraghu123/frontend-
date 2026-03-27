import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AdminPanel from "./pages/AdminPanel";
import CompanyPanel from "./pages/CompanyPanel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/company" element={<CompanyPanel />} />
      </Routes>
    </Router>
  );
}

export default App;