type CardProps = {
  title: string;
  location: string;
};

export default function Card({ title, location }: CardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-2xl font-bold text-green-800">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {location}
      </p>
    </div>
  );
}