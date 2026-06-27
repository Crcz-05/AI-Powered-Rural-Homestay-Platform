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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />

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