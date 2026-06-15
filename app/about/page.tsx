import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-3xl font-bold">
          About Us
        </h1>

        <p className="mt-4">
          This platform helps travelers discover authentic rural homestays using AI-powered recommendations.
        </p>
      </main>

      <Footer />
    </>
  );
}