export default function Hero() {
  return (
    <section className="py-28">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Remember the people
          <br />
          who matter.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Memora is a personal memory system for relationships.
          Capture small details about people and remember
          the moments that make connections meaningful.
        </p>

        <div className="mt-8">
          <button className="bg-[#FF5C8A] text-white px-8 py-4 rounded-xl text-lg">
            Start remembering better
          </button>
        </div>

        <div className="mt-16 bg-white shadow-xl rounded-xl p-6 text-left max-w-md mx-auto">

          <p className="font-semibold">
            Sarah Chen
          </p>

          <p className="text-sm text-gray-500">
            Last met 2 weeks ago
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>• Loves matcha</p>
            <p>• Planning Japan trip</p>
            <p>• Started a podcast</p>
          </div>

        </div>

      </div>

    </section>
  );
}