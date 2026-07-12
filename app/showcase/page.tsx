import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Showcase() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 p-10">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          RuralStay AI Showcase
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Explore the key features of our AI-powered Rural Homestay Booking Platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-700">
              AI Recommendations
            </h2>
            <p className="mt-3 text-gray-600">
              Smart recommendations based on your travel preferences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-700">
              Rural Homestays
            </h2>
            <p className="mt-3 text-gray-600">
              Discover authentic village stays across India.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-700">
              Secure Booking
            </h2>
            <p className="mt-3 text-gray-600">
              Book your favorite homestay with a secure authentication system.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}