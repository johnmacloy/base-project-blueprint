import { ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import MobileMenu from "@/components/MobileMenu";
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
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg border-0 m-0">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden sm:flex items-center justify-between py-2 border-b border-white/10">
          <div className="text-sm">
            <span className="text-secondary-foreground">Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4 text-sm">
            <Link to="/contact" className="hover:text-orange cursor-pointer">Customer Service</Link>
            <Link to="/track-order" className="hover:text-orange cursor-pointer">Track Your Order</Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-3 md:py-4 gap-2">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              E<span className="text-orange">Store</span>
            </Link>
          </div>

          {/* Search bar - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex flex-1 max-w-xl lg:max-w-2xl mx-3 lg:mx-8">
            <SearchBar placeholder="Search for products..." />
          </div>

          {/* User actions */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            {/* Mobile search icon */}
            <Link to="/search" className="sm:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:text-orange p-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </Link>

            <Link to="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-white hover:text-orange px-2 md:px-3">
                <User className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
                <span className="hidden lg:inline text-sm">Account</span>
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="text-white hover:text-orange relative px-2 md:px-3">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
                <span className="hidden lg:inline text-sm">Cart</span>
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                  3
                </span>
              </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden ml-1">
              <MobileMenu />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden pb-3">
          <SearchBar placeholder="Search products..." />
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:block border-t border-white/10 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 lg:gap-6 overflow-x-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-orange whitespace-nowrap px-3">
                    <Menu className="h-4 w-4 mr-2" />
                    <span className="hidden lg:inline">All Categories</span>
                    <span className="lg:hidden">Categories</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white z-50">
                <DropdownMenuLabel>Shop by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Electronics</span>
                  </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-white z-60">
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
            
            <div className="flex gap-3 lg:gap-6">
              <Link to="/" className="text-white hover:text-orange transition-colors whitespace-nowrap text-sm">Home</Link>
              <Link to="/about" className="text-white hover:text-orange transition-colors whitespace-nowrap text-sm">About</Link>
              <Link to="/shop" className="text-white hover:text-orange transition-colors whitespace-nowrap text-sm">Shop</Link>
              <Link to="/contact" className="text-white hover:text-orange transition-colors whitespace-nowrap text-sm">Contact</Link>
            </div>

            {/* Other Pages Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-orange whitespace-nowrap px-3">
                  <span className="hidden lg:inline">Other Pages</span>
                  <span className="lg:hidden">More</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white z-50">
                <DropdownMenuLabel>Account & Orders</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="w-full">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/wishlist" className="w-full">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/address-book" className="w-full">Address Book</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account-settings" className="w-full">Account Settings</Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Shopping</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/cart" className="w-full">Shopping Cart</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/checkout" className="w-full">Checkout</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/deals" className="w-full">Deals & Offers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/compare" className="w-full">Compare Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/search" className="w-full">Search</Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Support & Info</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/track-order" className="w-full">Track Order</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/order-confirmation" className="w-full">Order Confirmation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/privacy-policy" className="w-full">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/terms" className="w-full">Terms of Service</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/return-policy" className="w-full">Return Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;