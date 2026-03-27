import { useState } from "react";
import { loginUser } from "../services/authService";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      alert("Login Success");
      window.location.href = "/dashboard";
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-500">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
        <h2 className="mb-4">Login</h2>
        <input name="email" placeholder="Email" className="block mb-2 border p-2" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input name="password" type="password" placeholder="Password" className="block mb-2 border p-2" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}

export default Login;