import Container from "@/components/Container"

export default function Hero() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* Gradient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-pink-500 opacity-20 blur-[160px] rounded-full" />
      </div>

      <Container>

        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Remember the people
            <br />
            who matter.
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Memora is a personal memory system for relationships.
            Capture small details about people and remember
            the moments that make connections meaningful.
          </p>

          <div className="mt-8">
            <button className="bg-[#FF5C8A] text-white px-8 py-4 rounded-xl text-lg hover:opacity-90 transition">
              Start remembering better
            </button>
          </div>

          {/* Floating UI Card */}
          <div className="mt-16 bg-white text-black shadow-2xl rounded-xl p-6 text-left max-w-md mx-auto">

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

      </Container>

    </section>
  )
}