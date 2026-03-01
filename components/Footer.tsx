import Container from "@/components/Container"
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
        <Container>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-white text-lg font-semibold">
            Memora
          </h3>

          <p className="mt-4 text-sm">
            A personal memory system for relationships.
          </p>
        </div>

        <div>

          <h4 className="text-white font-medium">
            Product
          </h4>

          <ul className="mt-4 space-y-2 text-sm">
            <li>Features</li>
            <li>Product</li>
            <li>Roadmap</li>
          </ul>

        </div>

        <div>

          <h4 className="text-white font-medium">
            Company
          </h4>

          <ul className="mt-4 space-y-2 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>

        </div>

      </div>

      <div className="text-center text-xs mt-16 text-gray-600">
        © 2026 Memora. All rights reserved.
      </div>
      </Container>
    </footer>
  )
}