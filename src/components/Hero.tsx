import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <img 
        src={heroBanner} 
        alt="Shop the latest products"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
      
      {/* Content */}
      <div className="absolute inset-0 container mx-auto px-4 flex items-center">
        <div className="max-w-lg text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing 
            <span className="block text-orange">Deals</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Shop the latest products with unbeatable prices and fast shipping
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;