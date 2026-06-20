import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">
        RuralStay AI
      </h1>

      <div className="flex items-center gap-4">
        <a href="/" className="hover:underline">
          Home
        </a>

        <a href="/about" className="hover:underline">
          About
        </a>

        <a href="/dashboard" className="hover:underline">
          Dashboard
        </a>

        <a href="/login" className="hover:underline">
          Login
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}