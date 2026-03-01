export default function ProductPreview() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold">
            Built to remember the moments that matter
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Memora keeps track of conversations, memories,
            and people so you never lose context again.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#111] p-8 rounded-xl border border-gray-800">

            <p className="text-gray-400 text-sm">
              Recent Memory
            </p>

            <p className="mt-3 text-lg">
              Met Sarah today — she loves matcha.
            </p>

            <p className="text-gray-500 text-sm mt-4">
              March 16, 2026
            </p>

          </div>


          <div className="bg-[#111] p-8 rounded-xl border border-gray-800">

            <p className="text-gray-400 text-sm">
              Person Profile
            </p>

            <p className="mt-3 text-lg">
              Sarah Chen
            </p>

            <ul className="mt-4 text-gray-400 text-sm space-y-2">

              <li>• Loves matcha</li>
              <li>• Planning Japan trip</li>
              <li>• Started a podcast</li>

            </ul>

          </div>


          <div className="bg-[#111] p-8 rounded-xl border border-gray-800">

            <p className="text-gray-400 text-sm">
              Relationship Graph
            </p>

            <p className="mt-3 text-lg">
              Visualize how people connect
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Friends, colleagues, communities
            </p>

          </div>


          <div className="bg-[#111] p-8 rounded-xl border border-gray-800">

            <p className="text-gray-400 text-sm">
              Conversation Context
            </p>

            <p className="mt-3 text-lg">
              Last conversation
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Asked about her startup idea.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}