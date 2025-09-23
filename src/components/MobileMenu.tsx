import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag, 
  Heart, 
  User, 
  Search,
  ChevronRight,
  ChevronDown,
  Truck,
  Phone,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: ShoppingBag,
      label: "Shop",
      href: "/shop",
    },
    {
      icon: Search,
      label: "Search",
      href: "/search",
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/wishlist",
    },
    {
      icon: User,
      label: "Account",
      href: "/dashboard",
    },
    {
      icon: Truck,
      label: "Track Order",
      href: "/track-order",
    },
  ];

  const categories = [
    { 
      name: "Electronics", 
      href: "/category/electronics",
      subcategories: [
        { name: "Smartphones", href: "/category/smartphones" },
        { name: "Laptops", href: "/category/laptops" },
        { name: "Tablets", href: "/category/tablets" },
        { name: "Headphones", href: "/category/headphones" },
        { name: "Cameras", href: "/category/cameras" },
      ]
    },
    { 
      name: "Clothing", 
      href: "/category/fashion",
      subcategories: [
        { name: "Men", href: "/category/clothing-men" },
        { name: "Women", href: "/category/clothing-women" },
        { name: "Kids", href: "/category/clothing-kids" },
      ]
    },
    { 
      name: "Home & Garden", 
      href: "/category/home",
      subcategories: [
        { name: "Furniture", href: "/category/furniture" },
        { name: "Kitchen", href: "/category/kitchen" },
        { name: "Garden", href: "/category/garden" },
        { name: "Home Decor", href: "/category/decor" },
      ]
    },
    { 
      name: "Sports & Outdoors", 
      href: "/category/sports",
      subcategories: [
        { name: "Fitness", href: "/category/fitness" },
        { name: "Outdoor", href: "/category/outdoor" },
        { name: "Sports Equipment", href: "/category/sports-equipment" },
      ]
    },
    { 
      name: "Books", 
      href: "/category/books",
      subcategories: [
        { name: "Fiction", href: "/category/fiction" },
        { name: "Non-Fiction", href: "/category/non-fiction" },
        { name: "Textbooks", href: "/category/textbooks" },
      ]
    },
    { 
      name: "Beauty & Health", 
      href: "/category/beauty",
      subcategories: [
        { name: "Skincare", href: "/category/skincare" },
        { name: "Makeup", href: "/category/makeup" },
        { name: "Health", href: "/category/health" },
      ]
    },
  ];

  const accountLinks = [
    { name: "Login", href: "/login", icon: User },
    { name: "Register", href: "/register", icon: User },
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Orders", href: "/orders" },
    { name: "Wishlist", href: "/wishlist", icon: Heart },
    { name: "Address Book", href: "/address-book" },
    { name: "Account Settings", href: "/account-settings" },
  ];

  const shoppingLinks = [
    { name: "Shopping Cart", href: "/cart", icon: ShoppingBag },
    { name: "Checkout", href: "/checkout" },
    { name: "Deals & Offers", href: "/deals" },
    { name: "Compare Products", href: "/compare" },
  ];

  const supportLinks = [
    { name: "Help & FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact Us", href: "/contact", icon: Phone },
    { name: "Track Order", href: "/track-order", icon: Truck },
    { name: "Order Confirmation", href: "/order-confirmation" },
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Return Policy", href: "/return-policy" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-orange">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-80 p-0 bg-white flex flex-col h-full">
        <SheetHeader className="p-6 bg-navy text-white flex-shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white">
              <Link to="/" onClick={handleLinkClick} className="text-xl font-bold">
                E<span className="text-orange">Store</span>
              </Link>
            </SheetTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Main Navigation */}
          <div className="p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-3 rounded-lg text-text-primary hover:bg-muted transition-colors"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto text-text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Categories with Submenus */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <Collapsible 
                  key={category.href}
                  open={expandedCategories[category.name]}
                  onOpenChange={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center">
                    <Link
                      to={category.href}
                      onClick={handleLinkClick}
                      className="flex-1 flex items-center p-2 rounded-lg text-text-primary hover:bg-muted transition-colors"
                    >
                      <span>{category.name}</span>
                    </Link>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-2 h-auto"
                      >
                        {expandedCategories[category.name] ? (
                          <ChevronDown className="h-4 w-4 text-text-secondary" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-text-secondary" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="ml-4 mt-1">
                    <div className="space-y-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={handleLinkClick}
                          className="block p-2 pl-4 rounded-lg text-sm text-text-secondary hover:bg-muted transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          <Separator />

          {/* Account Links */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
              Account & Orders
            </h3>
            <div className="space-y-1">
              {accountLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-lg text-text-primary hover:bg-muted transition-colors"
                >
                  {link.icon && <link.icon className="h-4 w-4 text-primary" />}
                  <span className="text-sm">{link.name}</span>
                  <ChevronRight className="h-4 w-4 ml-auto text-text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Shopping Links */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
              Shopping
            </h3>
            <div className="space-y-1">
              {shoppingLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-lg text-text-primary hover:bg-muted transition-colors"
                >
                  {link.icon && <link.icon className="h-4 w-4 text-primary" />}
                  <span className="text-sm">{link.name}</span>
                  <ChevronRight className="h-4 w-4 ml-auto text-text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Support Links */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
              Support & Info
            </h3>
            <div className="space-y-1">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-lg text-text-secondary hover:bg-muted transition-colors"
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Quick Actions */}
          <div className="p-4 space-y-3">
            <Link to="/login" onClick={handleLinkClick}>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In / Register
              </Button>
            </Link>
            
            <Link to="/deals" onClick={handleLinkClick}>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Today's Deals
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 bg-muted/30 border-t flex-shrink-0">
          <div className="text-center text-xs text-text-secondary">
            <p className="mb-1">Free shipping on orders over $50</p>
            <p>Customer Service: 1-800-ESTORE</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;