export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">
        RuralStay AI
      </h1>

      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/" className="hover:underline">About</a>
        <a href="/" className="hover:underline">Dashboard</a>
        <a href="/" className="hover:underline">Login</a>
      </div>
    </nav>
  );
}