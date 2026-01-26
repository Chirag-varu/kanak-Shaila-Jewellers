import React, { useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

const DEMO_EMAIL = "demo@example.com";
const DEMO_PASSWORD = "demopassword";

const Login: React.FC = () => {
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: Accept only demo credentials
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      login();
      navigate("/");
    } else {
      setError("Invalid credentials. Use demo details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <div className="text-xs text-gray-500 mt-4 text-center">
          Demo: Email: demo@example.com | Password: demopassword
        </div>
      </form>
    </div>
  );
};

export default Login;
