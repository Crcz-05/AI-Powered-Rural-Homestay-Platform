"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Register() {
  const router = useRouter();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      setSuccess("Registration successful! Redirecting to Login...");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setError("Unable to connect to server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-50 p-8">

        <div className="card-dark bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Create Account
          </h1>

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg"
              required
            />

            {error && (
              <p className="text-red-600 text-sm">
                {error}
              </p>
            )}

            {success && (
              <p className="text-green-700 text-sm">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>

          </form>

          <p className="text-center mt-5">

            Already have an account?

            <a
              href="/login"
              className="text-green-700 font-semibold ml-2"
            >
              Login
            </a>

          </p>

        </div>

      </main>

      <Footer />
    </div>
  );
}