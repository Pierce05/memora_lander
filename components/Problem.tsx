import Container from "@/components/Container"
export default function Problem() {
  return (
    <section className="py-28 bg-white">

      <Container>
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-semibold">
          We forget more than we realize.
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          In modern life we track everything.
        </p>

        <div className="mt-6 space-y-2 text-lg text-gray-700">

          <p>Meetings.</p>
          <p>Tasks.</p>
          <p>Deadlines.</p>
          <p>Productivity.</p>

        </div>

        <p className="mt-10 text-lg text-gray-600 max-w-2xl mx-auto">
          But we forget the small details about the people in our lives.
          Not because we don’t care.
          Because life gets busy.
        </p>

      </div>
      </Container>
    </section>
  );
}