import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <Link to="/contact" className="hover:text-orange cursor-pointer">Customer Service</Link>
            <Link to="/track-order" className="hover:text-orange cursor-pointer">Track Your Order</Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-white">
              E<span className="text-orange">Store</span>
            </Link>
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
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-orange">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" className="text-white hover:text-orange relative">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/10 py-3">
          <div className="flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-orange">
                  <Menu className="h-4 w-4 mr-2" />
                  All Categories
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>Shop by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Electronics</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/category/smartphones" className="w-full">Smartphones</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/laptops" className="w-full">Laptops</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/tablets" className="w-full">Tablets</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/headphones" className="w-full">Headphones</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/cameras" className="w-full">Cameras</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Clothing</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/category/clothing-men" className="w-full">Men</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/clothing-women" className="w-full">Women</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/clothing-kids" className="w-full">Kids</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Home & Garden</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/category/furniture" className="w-full">Furniture</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/kitchen" className="w-full">Kitchen</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/garden" className="w-full">Garden</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/decor" className="w-full">Home Decor</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Sports & Outdoors</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/category/fitness" className="w-full">Fitness</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/outdoor" className="w-full">Outdoor</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/sports-equipment" className="w-full">Sports Equipment</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Books</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/category/fiction" className="w-full">Fiction</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/non-fiction" className="w-full">Non-Fiction</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/textbooks" className="w-full">Textbooks</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Beauty & Health</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/category/skincare" className="w-full">Skincare</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/makeup" className="w-full">Makeup</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/category/health" className="w-full">Health</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="flex gap-6">
              <Link to="/" className="text-white hover:text-orange transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-orange transition-colors">About</Link>
              <Link to="/shop" className="text-white hover:text-orange transition-colors">Shop</Link>
              <Link to="/contact" className="text-white hover:text-orange transition-colors">Contact Us</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;