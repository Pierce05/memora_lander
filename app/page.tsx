import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Product from "@/components/Product"
import Features from "@/components/Features"
import ProductPreview from "@/components/ProductPreview"
import Emotional from "@/components/Emotional"
import CTA from "@/components/CTA"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <Features />
      <ProductPreview />
      <Emotional />
      <CTA />
    </main>
  );
}
