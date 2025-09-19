import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b border-white/10">
          <div className="text-sm">
            <span className="text-secondary-foreground">Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hover:text-orange cursor-pointer">Customer Service</span>
            <span className="hover:text-orange cursor-pointer">Track Your Order</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">
              E<span className="text-orange">Store</span>
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-2 bg-white text-gray-900 border-0 rounded-lg"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1 bg-orange hover:bg-orange/90 text-white px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="text-white hover:text-orange">
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>
            
            <Button variant="ghost" className="text-white hover:text-orange relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/10 py-3">
          <div className="flex items-center gap-8">
            <Button variant="ghost" className="text-white hover:text-orange">
              <Menu className="h-4 w-4 mr-2" />
              All Categories
            </Button>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-orange transition-colors">Electronics</a>
              <a href="#" className="text-white hover:text-orange transition-colors">Fashion</a>
              <a href="#" className="text-white hover:text-orange transition-colors">Home</a>
              <a href="#" className="text-white hover:text-orange transition-colors">Sports</a>
              <a href="#" className="text-white hover:text-orange transition-colors">Books</a>
              <a href="#" className="text-white hover:text-orange transition-colors">Deals</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;