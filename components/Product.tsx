import Container from "@/components/Container"
export default function Product() {
  return (
    <section className="py-32">

      <Container>
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-semibold">
          A second brain for your relationships
        </h2>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          Memora quietly remembers the details that matter.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="font-medium">
              When you last met
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Instantly see when you last interacted with someone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="font-medium">
              What they told you
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Remember conversations and updates people shared.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="font-medium">
              What they care about
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Interests, plans, and moments that matter.
            </p>
          </div>

        </div>

      </div>
      </Container>

    </section>
  )
}