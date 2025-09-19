import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, X, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import headphones from "@/assets/headphones.jpg";
import smartphone from "@/assets/smartphone.jpg";
import watch from "@/assets/watch.jpg";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      image: headphones,
      inStock: true,
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Latest Smartphone Pro Max",
      price: 999.99,
      image: smartphone,
      inStock: true,
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Luxury Smart Watch",
      price: 399.99,
      originalPrice: 499.99,
      image: watch,
      inStock: false,
      rating: 4,
      reviews: 203
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-sm ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart className="h-16 w-16 text-text-secondary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-text-primary mb-4">Your Wishlist is Empty</h1>
            <p className="text-text-secondary mb-8">Save items you love by clicking the heart icon.</p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/90">
                Discover Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">My Wishlist</h1>
            <p className="text-text-secondary">{wishlistItems.length} items saved</p>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-card rounded-lg overflow-hidden group relative">
              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-medium">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">
                  {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm text-text-secondary">({item.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-text-secondary line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90" 
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  
                  <Link to={`/product/${item.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              // Add all in-stock items to cart
              const inStockItems = wishlistItems.filter(item => item.inStock);
              console.log('Adding to cart:', inStockItems);
            }}
          >
            Add All to Cart ({wishlistItems.filter(item => item.inStock).length})
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => setWishlistItems([])}
          >
            Clear Wishlist
          </Button>
          
          <Link to="/shop">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>

        {/* Share Wishlist */}
        <div className="text-center mt-8">
          <p className="text-text-secondary mb-4">Share your wishlist with friends and family</p>
          <div className="flex justify-center gap-2">
            <Button variant="outline" size="sm">Share via Email</Button>
            <Button variant="outline" size="sm">Copy Link</Button>
            <Button variant="outline" size="sm">Share on Social</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;