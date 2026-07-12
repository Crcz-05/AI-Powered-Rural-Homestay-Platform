"use client";

import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setLoggedIn(!!token);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedIn(false);

    alert("Logged out successfully!");

    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">

      <h1 className="font-bold text-xl">
        RuralStay AI
      </h1>

      <div className="flex items-center gap-4">

        <a href="/" className="hover:underline">
          Home
        </a>

        <a href="/about" className="hover:underline">
          About
        </a>

        <a href="/dashboard" className="hover:underline">
          Dashboard
        </a>

        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:underline"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="hover:underline">
              Login
            </a>

            <a href="/register" className="hover:underline">
              Register
            </a>
          </>
        )}

        <ThemeToggle />

      </div>

    </nav>
  );
}