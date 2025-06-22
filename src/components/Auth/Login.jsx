import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-4">
      <form
        className="bg-[#121212] shadow-2xl rounded-3xl p-8 w-full max-w-sm sm:max-w-md border border-gray-700"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email);
          console.log(password);
          setEmail("");
          setPassword("");
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-400">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            className="w-full p-3 border border-gray-700 bg-[#1f1f1f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
          <input
            className="w-full p-3 border border-gray-700 bg-[#1f1f1f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <small className="text-emerald-400 cursor-pointer text-sm font-semibold hover:underline">
            Sign Up
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
