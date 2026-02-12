import React, { useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../utils/user.service";
import { addHistory } from "../utils/history.service";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await loginUser(email, password);
      await addHistory("LOGIN", email);
      login(userData);

      if (userData.role === "admin") {
        navigate("/admin");
      } else if (userData.role === "owner") {
        navigate("/owner");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      const code = err.code;
      if (code === "auth/invalid-credential") {
        setError("Invalid email or password");
      } else if (code === "auth/user-not-found") {
        setError("No account found with this email");
      } else if (code === "auth/wrong-password") {
        setError("Incorrect password");
      } else if (code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError(err.message || "Login failed");
      }
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
            required
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
            required
          />
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <div className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
