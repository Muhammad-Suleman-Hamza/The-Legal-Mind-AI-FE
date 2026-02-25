// src/pages/Login.tsx
import React, { useState } from "react";
import { useAuth } from "@/auth/useAuth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleLogin = () => login(username);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="text"
        placeholder="Enter username (admin/partner/junior)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handleLogin}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};
