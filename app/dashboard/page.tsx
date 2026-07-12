"use client";

import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Homestay = {
  id: number;
  name: string;
  location: string;
  price: number;
};

export default function Dashboard() {

  const router = useRouter();

  const [homestays, setHomestays] = useState<Homestay[]>([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const API = "http://localhost:5000/api/homestays";

  useEffect(() => {
  const checkAuth = async () => {
    // First check custom JWT
    const token = localStorage.getItem("token");

    if (token) {
      loadHomestays();
      return;
    }

    // Otherwise check Google OAuth session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      loadHomestays();
    } else {
      router.push("/login");
    }
  };

  checkAuth();
}, [router]);

 async function loadHomestays() {
  try {
    const token = localStorage.getItem("token");

    const headers: HeadersInit = {};

    // Only send Authorization if JWT exists
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(API, {
      headers,
    });

    const data = await res.json();

    console.log("Homestays:", data);

    if (Array.isArray(data)) {
      setHomestays(data);
    } else {
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
}

  async function handleSubmit() {

    if (!name || !location || !price) {
      alert("Please fill all fields");
      return;
    }

    const token = localStorage.getItem("token");

    if (editingId === null) {

      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          location,
          price: Number(price),
        }),
      });

    } else {

      await fetch(`${API}/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          location,
          price: Number(price),
        }),
      });

      setEditingId(null);
    }

    setName("");
    setLocation("");
    setPrice("");

    loadHomestays();
  }

  async function deleteHomestay(id: number) {

    if (!confirm("Delete this homestay?")) return;

    const token = localStorage.getItem("token");

    await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadHomestays();
  }

  function editHomestay(stay: Homestay) {

    setEditingId(stay.id);
    setName(stay.name);
    setLocation(stay.location);
    setPrice(stay.price.toString());

  }

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow p-8 bg-gray-100">

        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Admin Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            {editingId === null ? "Add Homestay" : "Update Homestay"}
          </h2>

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Homestay Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            {editingId === null ? "Add Homestay" : "Update Homestay"}
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">
                      {homestays.map((stay) => (

            <div
              key={stay.id}
              className="bg-white rounded-xl shadow p-5"
            >

              <h2 className="text-2xl font-bold">
                {stay.name}
              </h2>

              <p className="mt-2">
                📍 {stay.location}
              </p>

              <p className="mt-2 font-semibold text-green-700">
                ₹ {stay.price}
              </p>

              <div className="mt-5 flex gap-3">

                <button
                  onClick={() => editHomestay(stay)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteHomestay(stay.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

      <Footer />

    </div>
  );
}