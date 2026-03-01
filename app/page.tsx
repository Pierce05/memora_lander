import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Product from "@/components/Product"
import Features from "@/components/Features"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <Features />
    </main>
  );
}
