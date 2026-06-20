type CardProps = {
  title: string;
  location: string;
};

export default function Card({
  title,
  location,
}: CardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
        alt="Homestay"
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-green-800">
          {title}
        </h2>

        <p className="text-gray-600 mt-2">
          📍 {location}
        </p>

        <p className="mt-3 text-gray-700">
          Enjoy authentic rural hospitality,
          traditional food, and scenic landscapes.
        </p>

        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          View Details
        </button>
      </div>
    </div>
  );
}