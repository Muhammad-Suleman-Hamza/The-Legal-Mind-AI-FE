// src/auth/useAuth.ts
import { useState, useEffect } from "react";

export type UserRole = "Admin" | "Partner" | "Junior";

export const useAuth = () => {
  const [user, setUser] = useState<{ name: string; roles: UserRole[] } | null>({
    name: "Muhammad",
    roles: ["Admin"], // default to Admin for demo
  });
  const [token, setToken] = useState<string | null>(null);

  // Simulate login
  const login = (username: string) => {
    // Dummy roles for demonstration
    const roles: UserRole[] =
      username === "admin" ? ["Admin"] :
      username === "partner" ? ["Partner"] :
      ["Junior"];

    setUser({ name: username, roles });
    setToken("dummy-token-123"); // dummy token
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
    setToken(null);
  };

  // Simulate silent token refresh every 5 minutes
  useEffect(() => {
    if (!token) return;
    const interval = setInterval(() => {
      console.log("Refreshing token silently...");
      setToken("dummy-token-123"); // reset token
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [token]);

  const hasUploadAccess = () =>
    user?.roles.includes("Admin") || user?.roles.includes("Partner");

  return { user, token, login, logout, hasUploadAccess };
};
