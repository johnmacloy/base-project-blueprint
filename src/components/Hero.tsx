import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import laptop from "@/assets/laptop.jpg";
import smartphone from "@/assets/smartphone.jpg";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slides = [
    {
      image: heroBanner,
      title: "Discover Amazing",
      highlight: "Deals",
      description: "Shop the latest products with unbeatable prices and fast shipping",
      alt: "Shop the latest products",
      gradient: "from-purple-900/80 to-indigo-900/60"
    },
    {
      image: laptop,
      title: "Latest Tech",
      highlight: "Collection",
      description: "Explore cutting-edge laptops and computers for work and gaming",
      alt: "Latest laptop collection",
      gradient: "from-blue-900/80 to-cyan-900/60"
    },
    {
      image: smartphone,
      title: "Smart Mobile",
      highlight: "Devices",
      description: "Discover the newest smartphones with advanced features and design",
      alt: "Smart mobile devices",
      gradient: "from-emerald-900/80 to-teal-900/60"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative h-96 md:h-[600px] overflow-hidden group">
      <Carousel 
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              <div className="relative h-full w-full overflow-hidden">
                {/* Image with proper aspect ratio and positioning */}
                <div className="absolute inset-0">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-opacity duration-500`} />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent animate-pulse" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-start">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                      <div className="w-full flex items-center min-h-full">
                        <div className="max-w-2xl text-white z-10 relative">
                          <div className="mb-4">
                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                              New Collection
                            </span>
                          </div>
                          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                            {slide.title}
                            <span className="block text-orange drop-shadow-lg">{slide.highlight}</span>
                          </h1>
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed max-w-xl">
                            {slide.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button 
                              size="lg"
                              className="bg-gradient-to-r from-orange to-red-600 hover:from-orange/90 hover:to-red-600/90 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-orange/25 transition-all duration-300 w-full sm:w-auto group"
                            >
                              Shop Now
                              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block text-base sm:text-lg md:text-xl">→</span>
                            </Button>
                            <Button 
                              variant="outline" 
                              size="lg"
                              className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-navy px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                            >
                              Learn More
                            </Button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <div 
                    className="h-full bg-gradient-to-r from-orange to-red-600 transition-all duration-[5000ms] ease-linear"
                    style={{
                      width: current === index + 1 ? '100%' : '0%',
                    }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Enhanced Navigation */}
        <CarouselPrevious className="left-6 h-12 w-12 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300 hover:scale-110 shadow-lg" />
        <CarouselNext className="right-6 h-12 w-12 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300 hover:scale-110 shadow-lg" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index + 1 
                  ? 'bg-orange scale-125 shadow-lg shadow-orange/50' 
                  : 'bg-white/50 hover:bg-white/80 hover:scale-110'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
          {current} / {count}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;