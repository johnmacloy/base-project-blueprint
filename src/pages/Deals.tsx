import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, ShoppingCart, Timer } from "lucide-react";

const Deals = () => {
  const flashDeals = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      originalPrice: 199.99,
      salePrice: 89.99,
      discount: 55,
      rating: 4.5,
      reviews: 1234,
      timeLeft: "2h 15m",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      originalPrice: 299.99,
      salePrice: 149.99,
      discount: 50,
      rating: 4.7,
      reviews: 856,
      timeLeft: "4h 32m",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "4K Webcam",
      originalPrice: 129.99,
      salePrice: 69.99,
      discount: 46,
      rating: 4.3,
      reviews: 423,
      timeLeft: "1h 47m",
      image: "/placeholder.svg"
    }
  ];

  const dailyDeals = [
    {
      id: 4,
      name: "Gaming Mechanical Keyboard",
      originalPrice: 159.99,
      salePrice: 99.99,
      discount: 38,
      rating: 4.6,
      reviews: 967,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Portable Power Bank",
      originalPrice: 49.99,
      salePrice: 29.99,
      discount: 40,
      rating: 4.4,
      reviews: 634,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      originalPrice: 79.99,
      salePrice: 39.99,
      discount: 50,
      rating: 4.2,
      reviews: 445,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-gradient-to-r from-primary/10 to-destructive/10 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Today's Deals</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            Don't miss out on these incredible limited-time offers! Save up to 70% on top-rated products.
          </p>
          <Badge variant="destructive" className="text-lg px-4 py-2">
            <Timer className="w-4 h-4 mr-2" />
            Limited Time Only
          </Badge>
        </div>

        {/* Flash Deals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Flash Deals</h2>
            <Badge variant="destructive" className="animate-pulse">
              Ending Soon!
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((deal) => (
              <Card key={deal.id} className="relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="destructive" className="text-sm font-bold">
                    -{deal.discount}%
                  </Badge>
                </div>
                
                <div className="absolute top-4 right-4 z-10 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {deal.timeLeft}
                </div>
                
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">{deal.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm text-text-secondary ml-1">{deal.rating}</span>
                      </div>
                      <span className="text-sm text-text-secondary">({deal.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-destructive">${deal.salePrice}</span>
                      <span className="text-lg text-text-secondary line-through">${deal.originalPrice}</span>
                    </div>
                    
                    <Button className="w-full btn-primary">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Deals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Daily Deals</h2>
            <Badge variant="secondary">24 Hours Only</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyDeals.map((deal) => (
              <Card key={deal.id} className="relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="text-sm font-bold">
                    -{deal.discount}%
                  </Badge>
                </div>
                
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">{deal.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm text-text-secondary ml-1">{deal.rating}</span>
                      </div>
                      <span className="text-sm text-text-secondary">({deal.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">${deal.salePrice}</span>
                      <span className="text-lg text-text-secondary line-through">${deal.originalPrice}</span>
                    </div>
                    
                    <Button className="w-full btn-primary">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <Card className="bg-navy text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Never Miss a Deal!</h2>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter and be the first to know about exclusive deals and flash sales.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;