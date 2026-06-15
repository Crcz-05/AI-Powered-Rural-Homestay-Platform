import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-2 gap-4 p-6">
        <Card
          title="Mountain Homestay"
          location="Uttarakhand"
        />

        <Card
          title="Village Retreat"
          location="Himachal Pradesh"
        />
      </div>

      <Footer />
    </>
  );
}