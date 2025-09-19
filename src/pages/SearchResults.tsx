import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingCart, Search, Filter, X } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const searchResults = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 1234,
      image: "/placeholder.svg",
      category: "Electronics",
      discount: 31
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: 149.99,
      rating: 4.3,
      reviews: 856,
      image: "/placeholder.svg",
      category: "Wearables"
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 567,
      image: "/placeholder.svg",
      category: "Audio",
      discount: 25
    },
    {
      id: 4,
      name: "Wireless Gaming Mouse",
      price: 79.99,
      rating: 4.7,
      reviews: 1432,
      image: "/placeholder.svg",
      category: "Gaming"
    },
    {
      id: 5,
      name: "USB-C Fast Charger",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.2,
      reviews: 789,
      image: "/placeholder.svg",
      category: "Accessories",
      discount: 25
    },
    {
      id: 6,
      name: "Smartphone Camera Lens Kit",
      price: 49.99,
      rating: 4.1,
      reviews: 345,
      image: "/placeholder.svg",
      category: "Photography"
    }
  ];

  const activeFilters = ["Electronics", "Under $100"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for products..." 
                defaultValue={query}
                className="pl-10"
              />
            </div>
            <Button className="btn-primary">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-primary mb-1">
                Search Results {query && `for "${query}"`}
              </h1>
              <p className="text-text-secondary">
                Showing {searchResults.length} results
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                
                {/* Active Filters */}
                {activeFilters.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-text-primary mb-2 text-sm">Active Filters</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map((filter, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {filter}
                          <X className="w-3 h-3 ml-1 cursor-pointer" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Category</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-text-secondary text-sm">Electronics (3)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">Audio (2)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">Gaming (1)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">Accessories (2)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-text-secondary text-sm">Under $50 (2)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-text-secondary text-sm">$50 - $100 (3)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-text-secondary text-sm">$100+ (1)</span>
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
                          <span className="text-text-secondary text-sm ml-1">4.5 & up (2)</span>
                        </div>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span className="text-text-secondary text-sm ml-1">4.0 & up (5)</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full text-sm">
                    Clear All Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <Card key={product.id} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  {product.discount && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="destructive" className="text-sm font-bold">
                        -{product.discount}%
                      </Badge>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
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
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="px-8">
                Load More Results
              </Button>
            </div>
          </div>
        </div>

        {/* Related Searches */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="font-semibold text-text-primary mb-4">Related Searches</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">wireless earbuds</Button>
              <Button variant="outline" size="sm">bluetooth headphones</Button>
              <Button variant="outline" size="sm">gaming accessories</Button>
              <Button variant="outline" size="sm">smartphone accessories</Button>
              <Button variant="outline" size="sm">fitness trackers</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;