export default function Navbar() {
  return (
    <nav className="w-full py-6 backdrop-blur-md bg-black/60 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

        <div className="text-xl font-semibold">
          Memora
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#">Features</a>
          <a href="#">Product</a>
          <a href="#">About</a>
        </div>

        <button className="bg-[#FF5C8A] text-white px-4 py-2 rounded-lg">
          Get Started
        </button>

      </div>
    </nav>
  );
}