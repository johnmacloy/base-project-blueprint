import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import ProductQuickViewModal from "@/components/ProductQuickViewModal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter, Grid, List } from "lucide-react";
import headphones from "@/assets/headphones.jpg";
import smartphone from "@/assets/smartphone.jpg";
import watch from "@/assets/watch.jpg";
import laptop from "@/assets/laptop.jpg";
import keyboard from "@/assets/keyboard.jpg";
import camera from "@/assets/camera.jpg";

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      image: headphones,
      images: [headphones, smartphone, watch, laptop],
      rating: 5,
      reviews: 127,
      isOnSale: true,
      discount: 20
    },
    {
      id: 2,
      name: "Latest Smartphone Pro Max",
      price: 999.99,
      image: smartphone,
      images: [smartphone, headphones, camera],
      rating: 4,
      reviews: 89,
      isOnSale: false
    },
    {
      id: 3,
      name: "Luxury Smart Watch",
      price: 399.99,
      originalPrice: 499.99,
      image: watch,
      images: [watch, smartphone, headphones, laptop, camera],
      rating: 4,
      reviews: 203,
      isOnSale: true,
      discount: 25
    },
    {
      id: 4,
      name: "Ultra-thin Laptop",
      price: 1299.99,
      image: laptop,
      images: [laptop, keyboard, smartphone],
      rating: 5,
      reviews: 156,
      isOnSale: false
    },
    {
      id: 5,
      name: "Mechanical Gaming Keyboard",
      price: 149.99,
      originalPrice: 199.99,
      image: keyboard,
      images: [keyboard, laptop, headphones],
      rating: 4,
      reviews: 78,
      isOnSale: true,
      discount: 25
    },
    {
      id: 6,
      name: "Professional DSLR Camera",
      price: 899.99,
      image: camera,
      images: [camera, laptop, smartphone, watch],
      rating: 5,
      reviews: 234,
      isOnSale: false
    }
  ];

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-6">
          <span>Home</span> / <span className="text-text-primary capitalize">{category}</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2 capitalize">
              {category} Products
            </h1>
            <p className="text-text-secondary">
              Showing 1-{products.length} of {products.length} products
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 md:mt-0">
            {/* View Toggle */}
            <div className="hidden sm:flex border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort */}
            <Select defaultValue="featured">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full sm:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-full lg:w-80 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-card p-6 rounded-lg space-y-6">
              <h3 className="font-semibold text-lg text-text-primary">Filters</h3>

              {/* Categories */}
              <div>
                <h4 className="font-medium text-text-primary mb-3">Categories</h4>
                <div className="space-y-2">
                  {["Electronics", "Gaming", "Photography", "Audio", "Computers"].map((categoryFilter) => (
                    <div key={categoryFilter} className="flex items-center space-x-2">
                      <Checkbox id={categoryFilter} />
                      <label htmlFor={categoryFilter} className="text-sm text-text-secondary">
                        {categoryFilter}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-text-primary mb-3">Price Range</h4>
                <div className="px-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2000}
                    min={0}
                    step={50}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-text-secondary">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="font-medium text-text-primary mb-3">Brands</h4>
                <div className="space-y-2">
                  {["Apple", "Samsung", "Sony", "Canon", "Logitech"].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label htmlFor={brand} className="text-sm text-text-secondary">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <Button variant="outline" className="w-full">
                Clear All Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline">Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>

        <ProductQuickViewModal
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={handleCloseQuickView}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;