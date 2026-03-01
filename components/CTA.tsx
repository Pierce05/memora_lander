import Container from "@/components/Container"
export default function CTA() {
  return (
    <section className="py-32 bg-black text-white">
        <Container>
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-semibold">
          Start remembering better.
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Memora helps you stay thoughtful in a busy world.
        </p>

        <div className="mt-10">

          <button className="bg-[#FF5C8A] text-white px-8 py-4 rounded-xl text-lg hover:opacity-90 transition">
            Get Started
          </button>

        </div>

      </div>
      </Container>

    </section>
  )
}