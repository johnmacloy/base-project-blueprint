import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Gift } from "lucide-react";

const SpecialOffers = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-text-secondary">
            Limited time deals you don't want to miss
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flash Sale */}
          <div className="bg-gradient-to-br from-offer to-offer/80 text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Zap className="w-8 h-8 text-yellow-300" />
            </div>
            <Badge className="bg-white/20 text-white mb-4">Flash Sale</Badge>
            <h3 className="text-2xl font-bold mb-2">Up to 70% Off</h3>
            <p className="text-white/90 mb-4">Electronics & Gadgets</p>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Ends in 2 days</span>
            </div>
            <Button variant="secondary" className="bg-white text-offer hover:bg-white/90">
              Shop Now
            </Button>
          </div>

          {/* Free Shipping */}
          <div className="bg-gradient-to-br from-accent to-accent/80 text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Gift className="w-8 h-8 text-blue-200" />
            </div>
            <Badge className="bg-white/20 text-white mb-4">Free Shipping</Badge>
            <h3 className="text-2xl font-bold mb-2">Orders Over $50</h3>
            <p className="text-white/90 mb-6">Fast & reliable delivery</p>
            <Button variant="secondary" className="bg-white text-accent hover:bg-white/90">
              Learn More
            </Button>
          </div>

          {/* Member Exclusive */}
          <div className="bg-gradient-to-br from-navy to-navy/80 text-white p-8 rounded-xl relative overflow-hidden md:col-span-2 lg:col-span-1">
            <Badge className="bg-primary text-white mb-4">Members Only</Badge>
            <h3 className="text-2xl font-bold mb-2">Extra 15% Off</h3>
            <p className="text-white/90 mb-6">Join our premium membership</p>
            <Button className="bg-primary hover:bg-primary/90">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;