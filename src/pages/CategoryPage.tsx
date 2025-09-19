import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();
  
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 1542,
      image: "/placeholder.svg",
      badge: "Best Seller",
      discount: 25
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.6,
      reviews: 856,
      image: "/placeholder.svg",
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "4K Action Camera",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.4,
      reviews: 634,
      image: "/placeholder.svg",
      discount: 25
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 79.99,
      rating: 4.3,
      reviews: 423,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 967,
      image: "/placeholder.svg",
      discount: 33
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 39.99,
      rating: 4.2,
      reviews: 245,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2 capitalize">
              {category} Products
            </h1>
            <p className="text-text-secondary">
              Showing {products.length} results for "{category}"
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4" />
              </Button>
            </div>
            
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-text-primary mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">Under $50</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">$50 - $100</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">$100 - $200</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">Over $200</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Customer Rating</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span className="text-text-secondary text-sm ml-1">4.5 & up</span>
                        </div>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span className="text-text-secondary text-sm ml-1">4.0 & up</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Brand</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">TechBrand</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">AudioPro</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">SmartDevice</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant={product.badge === "Best Seller" ? "default" : "secondary"}>
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  
                  {product.discount && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="destructive" className="text-sm font-bold">
                        -{product.discount}%
                      </Badge>
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-current text-yellow-400" />
                          <span className="text-sm text-text-secondary ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-text-secondary">({product.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-text-secondary line-through">
                            ${product.originalPrice}
                          </span>
                        )}
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
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;