export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 py-24 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-green-800">
        Discover Authentic Rural Homestays
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Experience village life, local culture, and hidden destinations
        through AI-powered homestay recommendations tailored just for you.
      </p>

      <div className="mt-8">
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg shadow-lg">
          Explore Homestays
        </button>
      </div>
    </section>
  );
}