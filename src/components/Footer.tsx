import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      <div className="bg-orange/10 border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">Get the latest deals and product updates</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-0 md:w-80"
              />
              <Button className="bg-orange hover:bg-orange/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              E<span className="text-orange">Store</span>
            </h2>
            <p className="text-white/80 mb-4">
              Your trusted destination for quality products at unbeatable prices. 
              Shop with confidence and enjoy fast, reliable delivery.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Electronics</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Fashion</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Home & Garden</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Sports</a></li>
              <li><a href="#" className="text-white/80 hover:text-orange transition-colors">Books</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange" />
                <span className="text-white/80">1-800-ESTORE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange" />
                <span className="text-white/80">support@estore.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange" />
                <span className="text-white/80">123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 EStore. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-orange transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;