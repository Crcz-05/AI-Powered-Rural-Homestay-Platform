import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-50 p-8">
        <div className="card-dark bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Login
          </h1>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            New user? Create an account
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}