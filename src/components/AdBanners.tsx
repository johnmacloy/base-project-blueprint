import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ArrowRight, Percent, Timer } from "lucide-react";
import { useState } from "react";

const AdBanners = () => {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [showSideBanner, setShowSideBanner] = useState(true);

  if (!showTopBanner && !showSideBanner) return null;

  return (
    <>
      {/* Top Banner */}
      {showTopBanner && (
        <div className="bg-gradient-to-r from-offer to-offer/90 text-white py-3 animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='white' strokeWidth='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 animate-slide-in-right">
                <Percent className="w-5 h-5 animate-float" />
                <span className="font-semibold">BLACK FRIDAY SALE</span>
                <Badge className="bg-white text-offer font-bold animate-pulse">50% OFF</Badge>
                <span className="hidden sm:inline">Use code: SAVE50</span>
                <div className="flex items-center gap-1 text-sm">
                  <Timer className="w-4 h-4" />
                  <span>Limited Time</span>
                </div>
              </div>
              <button
                onClick={() => setShowTopBanner(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Side Floating Banner */}
      {showSideBanner && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 animate-slide-in-right">
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-6 rounded-xl shadow-2xl max-w-xs relative overflow-hidden hover-scale">
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setShowSideBanner(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-center">
              <Badge className="bg-white text-primary mb-3 animate-pulse">New Arrival</Badge>
              <h3 className="font-bold text-lg mb-2">Latest Collection</h3>
              <p className="text-white/90 text-sm mb-4">Discover trending products with exclusive offers</p>
              
              <Button 
                variant="secondary" 
                size="sm" 
                className="bg-white text-primary hover:bg-white/90 group"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdBanners;