import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Animation */}
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-primary animate-bounce" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Oops! Page Not Found
            </h2>
            
            <p className="text-lg text-text-secondary mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <p className="text-text-secondary mb-8">
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                {location.pathname}
              </span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <Link to="/shop">
                <Button variant="outline" className="px-6 py-3">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
              
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="px-6 py-3"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link 
                  to="/shop" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Shop All Products
                </Link>
                <Link 
                  to="/deals" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Today's Deals
                </Link>
                <Link 
                  to="/categories" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Categories
                </Link>
                <Link 
                  to="/contact" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/about" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  to="/faq" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Help & FAQ
                </Link>
                <Link 
                  to="/wishlist" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  My Wishlist
                </Link>
                <Link 
                  to="/account" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  My Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
