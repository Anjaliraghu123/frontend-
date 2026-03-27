import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/applications">Applications</Link>
      <Link to="/company">Company</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}

export default Navbar;