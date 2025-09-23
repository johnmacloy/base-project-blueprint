import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import SpecialOffers from "@/components/SpecialOffers";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import BrandShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      <main>
        <HeroSlider />
        <Categories />
        <BestSellers />
        <SpecialOffers />
        <ProductGrid />
        <Features />
        <Testimonials />
        <Newsletter />
        <BrandShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
