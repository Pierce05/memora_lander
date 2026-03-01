import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Product from "@/components/Product"
import Features from "@/components/Features"
import ProductPreview from "@/components/ProductPreview"
import AppMockup from "@/components/AppMockup"
import Emotional from "@/components/Emotional"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <Features />
      <ProductPreview />
      <AppMockup />
      <Emotional />
      <CTA />
      <Footer />
      
    </main>
  );
}
