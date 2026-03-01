import Container from "@/components/Container"
export default function Features() {
  return (
    <section id="features" className="py-32 bg-white">

      <Container>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold">
            Everything you need to remember people
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Memora helps you capture moments, understand relationships,
            and stay thoughtful in every interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-8 bg-gray-50 hover:shadow-lg transition rounded-xl">
            <h3 className="text-xl font-semibold">
              Memory Capture
            </h3>

            <p className="mt-4 text-gray-600">
              Quickly log memories about people.
              Small moments, conversations, or things they love.
            </p>
          </div>

          <div className="p-8 bg-gray-50 hover:shadow-lg transition rounded-xl">
            <h3 className="text-xl font-semibold">
              People Profiles
            </h3>

            <p className="mt-4 text-gray-600">
              Every person gets a profile with their history,
              interests, and important life updates.
            </p>
          </div>

          <div className="p-8 bg-gray-50 hover:shadow-lg transition rounded-xl">
            <h3 className="text-xl font-semibold">
              Relationship Graph
            </h3>

            <p className="mt-4 text-gray-600">
              Visualize how people in your life connect with
              each other through an interactive relationship map.
            </p>
          </div>

          <div className="p-8 bg-gray-50 hover:shadow-lg transition rounded-xl">
            <h3 className="text-xl font-semibold">
              Conversation Context
            </h3>

            <p className="mt-4 text-gray-600">
              Before meeting someone, instantly see what you last
              talked about and what they mentioned.
            </p>
          </div>

        </div>

      </div>
      </Container>

    </section>
  )
}