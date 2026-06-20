import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-10 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          About RuralStay AI
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          RuralStay AI is an AI-powered rural homestay booking platform
          designed to help travelers discover authentic village stays
          across India. Our recommendation system suggests homestays
          based on traveler preferences, budget, and interests.
        </p>

        <div  className="card-dark mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3">
            Our Mission
          </h2>

          <p className="text-gray-600">
            To promote sustainable tourism and support local rural
            communities by connecting travelers with unique and
            authentic homestay experiences.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}