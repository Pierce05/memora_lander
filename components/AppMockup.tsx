import Container from "@/components/Container"

export default function AppMockup() {
  return (
    <section className="py-32 bg-white">

      <Container>

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold">
            Your relationship memory, organized.
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Memora keeps track of people, conversations,
            and moments so you always have context.
          </p>

        </div>

        <div className="bg-white border rounded-2xl shadow-xl p-10 max-w-5xl mx-auto">

          <div className="flex justify-between items-center mb-8">

            <h3 className="font-semibold">
              Memora
            </h3>

            <input
              className="border rounded-lg px-4 py-2 text-sm"
              placeholder="Search people..."
            />

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-lg p-6">

              <h4 className="font-medium mb-4">
                Recent Memories
              </h4>

              <p className="text-sm text-gray-600">
                Met Sarah today — she loves matcha.
              </p>

              <p className="text-sm text-gray-600 mt-2">
                John started a new startup.
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Alex wants to visit Japan.
              </p>

            </div>

            <div className="border rounded-lg p-6">

              <h4 className="font-medium mb-4">
                Global Results
              </h4>

              <p className="text-sm text-gray-600">
                Sarah Chen
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Works at Stripe
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Loves matcha
              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  )
}