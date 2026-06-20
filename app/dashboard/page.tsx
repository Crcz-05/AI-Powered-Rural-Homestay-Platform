import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="card-dark bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">
              Recent Bookings
            </h2>

            <p className="mt-2 text-gray-600">
              View your latest homestay reservations.
            </p>
          </div>

          <div className="card-dark bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">
              AI Recommendations
            </h2>

            <p className="mt-2 text-gray-600">
              Personalized rural stays suggested by AI.
            </p>
          </div>

          <div className="card-dark bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">
              Saved Homestays
            </h2>

            <p className="mt-2 text-gray-600">
              Your favorite properties.
            </p>
          </div>

          <div className="card-dark bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">
              Travel Insights
            </h2>

            <p className="mt-2 text-gray-600">
              Explore trending rural destinations.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}