"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

type Homestay = {
  id: number;
  name: string;
  location: string;
  price: number;
};

export default function Home() {
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);

  const [budget, setBudget] = useState("");
  const [preferences, setPreferences] = useState("");

  const [aiLoading, setAiLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => res.json())
      .then((data) => {
        setHomestays(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  async function getRecommendation() {
    if (!budget || !preferences) {
      alert("Please enter budget and preferences.");
      return;
    }

    setAiLoading(true);
    setRecommendation("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          budget,
          preferences,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
      } else {
        setRecommendation(data.recommendation);
      }
    } catch (err) {
      console.log(err);
      setError("Unable to connect to AI service.");
    }

    setAiLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">

        <Hero />

        {/* AI Recommendation Section */}

        <section className="bg-green-100 py-12 px-8">

          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            AI Homestay Recommendation
          </h2>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">

            <input
              type="number"
              placeholder="Enter your Budget (₹)"
              className="w-full border rounded-lg p-3 mb-4"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />

            <textarea
              placeholder="Example: Peaceful mountain stay with waterfalls, local food and nature."
              className="w-full border rounded-lg p-3 mb-4 h-32"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            />

            <button
              onClick={getRecommendation}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Get AI Recommendation
            </button>

            {aiLoading && (
              <div className="mt-6">
                <Loader />
                <p className="text-center mt-3 font-semibold">
                  AI is finding your perfect homestay...
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-6">
                {error}
              </div>
            )}

            {recommendation && (
              <div className="bg-green-50 border rounded-xl p-6 mt-6 whitespace-pre-wrap">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  AI Recommendation
                </h3>

                <p>{recommendation}</p>
              </div>
            )}

          </div>

        </section>

        {/* Homestays */}

        <section className="p-8 bg-gray-50">

          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Featured Rural Homestays
          </h2>

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homestays.map((stay) => (
                <Card
                  key={stay.id}
                  title={stay.name}
                  location={stay.location}
                  price={stay.price}
                />
              ))}
            </div>
          )}

        </section>

        <section className="py-12 px-8 text-center">

          <h2 className="text-3xl font-bold text-green-800">
            Why Choose RuralStay AI?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-8">

            <div className="card-dark bg-green-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">AI Recommendations</h3>
              <p className="mt-2 text-gray-600">
                Personalized homestays based on your travel preferences.
              </p>
            </div>

            <div className="card-dark bg-green-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">Authentic Experiences</h3>
              <p className="mt-2 text-gray-600">
                Stay with local families and experience rural culture.
              </p>
            </div>

            <div className="card-dark bg-green-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">Sustainable Tourism</h3>
              <p className="mt-2 text-gray-600">
                Support local communities and responsible travel.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}