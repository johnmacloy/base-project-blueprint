import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, X, Plus, Check, Minus } from "lucide-react";

const Compare = () => {
  const comparedProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      rating: 4.8,
      reviews: 1542,
      image: "/placeholder.svg",
      features: {
        "Battery Life": "30 hours",
        "Noise Cancellation": "Active",
        "Connectivity": "Bluetooth 5.2",
        "Weight": "250g",
        "Warranty": "2 years",
        "Water Resistance": "IPX4",
        "Driver Size": "40mm",
        "Charging": "USB-C Fast Charge"
      },
      pros: ["Excellent sound quality", "Long battery life", "Comfortable fit"],
      cons: ["Premium price", "Large carrying case"]
    },
    {
      id: 2,
      name: "Budget Wireless Earbuds",
      price: 79.99,
      rating: 4.2,
      reviews: 856,
      image: "/placeholder.svg",
      features: {
        "Battery Life": "6 hours + case",
        "Noise Cancellation": "Passive",
        "Connectivity": "Bluetooth 5.0",
        "Weight": "45g",
        "Warranty": "1 year",
        "Water Resistance": "IPX5",
        "Driver Size": "12mm",
        "Charging": "USB-C"
      },
      pros: ["Affordable price", "Compact design", "Good for workouts"],
      cons: ["Average sound quality", "Short battery life"]
    },
    {
      id: 3,
      name: "Studio Monitor Headphones",
      price: 199.99,
      rating: 4.6,
      reviews: 634,
      image: "/placeholder.svg",
      features: {
        "Battery Life": "N/A (Wired)",
        "Noise Cancellation": "Passive",
        "Connectivity": "3.5mm + 6.35mm",
        "Weight": "380g",
        "Warranty": "3 years",
        "Water Resistance": "None",
        "Driver Size": "50mm",
        "Charging": "N/A"
      },
      pros: ["Accurate sound reproduction", "Professional grade", "Durable build"],
      cons: ["Wired only", "Heavy for long use"]
    }
  ];

  const allFeatures = [
    "Battery Life",
    "Noise Cancellation", 
    "Connectivity",
    "Weight",
    "Warranty",
    "Water Resistance",
    "Driver Size",
    "Charging"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Compare Products</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Compare features, specifications, and prices side by side to make the best purchasing decision.
          </p>
        </div>

        {/* Add Products Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-text-primary mb-2">Add Products to Compare</h2>
                <p className="text-text-secondary">You can compare up to 4 products at once</p>
              </div>
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Product Cards Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-sm font-medium text-text-secondary">Features</div>
              {comparedProducts.map((product) => (
                <Card key={product.id} className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="absolute top-2 right-2 text-text-secondary hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  
                  <CardContent className="p-4">
                    <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    
                    <h3 className="font-semibold text-text-primary mb-2 text-sm line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3 h-3 fill-current text-yellow-400" />
                      <span className="text-xs text-text-secondary">{product.rating} ({product.reviews})</span>
                    </div>
                    
                    <div className="text-lg font-bold text-text-primary mb-3">
                      ${product.price}
                    </div>
                    
                    <Button className="w-full btn-primary text-xs py-2">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {allFeatures.map((feature, index) => (
                  <div key={feature} className={`grid grid-cols-4 gap-4 p-4 ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
                    <div className="font-medium text-text-primary text-sm">{feature}</div>
                    {comparedProducts.map((product) => (
                      <div key={`${product.id}-${feature}`} className="text-text-secondary text-sm">
                        {product.features[feature] || "N/A"}
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pros and Cons */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="text-sm font-medium text-text-secondary">Pros & Cons</div>
              {comparedProducts.map((product) => (
                <Card key={`${product.id}-pros-cons`}>
                  <CardContent className="p-4">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center">
                        <Check className="w-3 h-3 mr-1" />
                        Pros
                      </h4>
                      <ul className="text-xs text-text-secondary space-y-1">
                        {product.pros.map((pro, index) => (
                          <li key={index}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-destructive mb-2 flex items-center">
                        <Minus className="w-3 h-3 mr-1" />
                        Cons
                      </h4>
                      <ul className="text-xs text-text-secondary space-y-1">
                        {product.cons.map((con, index) => (
                          <li key={index}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Comparisons */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Popular Comparisons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start p-4 h-auto">
                <div className="text-left">
                  <div className="font-medium text-sm">iPhone 15 vs Samsung Galaxy S24</div>
                  <div className="text-xs text-text-secondary">Smartphones</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start p-4 h-auto">
                <div className="text-left">
                  <div className="font-medium text-sm">MacBook Air vs Dell XPS 13</div>
                  <div className="text-xs text-text-secondary">Laptops</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start p-4 h-auto">
                <div className="text-left">
                  <div className="font-medium text-sm">AirPods Pro vs Sony WH-1000XM5</div>
                  <div className="text-xs text-text-secondary">Headphones</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Compare;