import { useState } from "react";
import { Calendar, Clock, Mail, Bell, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Launch date (example: 30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log("Email subscription:", email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="h-4 w-4" />
            Something Amazing Is Coming
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            We're Almost
            <span className="block text-primary">Ready!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            We're putting the finishing touches on something incredible. Get ready for a shopping experience 
            like no other with exclusive deals, premium products, and lightning-fast delivery.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
              Launching In
            </span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-md mx-auto">
            {[
              { label: "Days", value: "30" },
              { label: "Hours", value: "14" },
              { label: "Minutes", value: "27" },
              { label: "Seconds", value: "43" }
            ].map((unit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 md:p-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold">{unit.value}</span>
                </div>
                <span className="text-xs md:text-sm text-text-secondary font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg mb-12">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Get Notified</h3>
            </div>
            
            <p className="text-text-secondary mb-6">
              Be the first to know when we launch and get exclusive early access to amazing deals!
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNotifyMe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 px-6">
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">You're All Set!</h4>
                <p className="text-text-secondary">
                  We'll send you an email as soon as we launch.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "⚡",
              title: "Lightning Fast",
              description: "Ultra-fast loading and seamless shopping experience"
            },
            {
              icon: "🎯",
              title: "Premium Quality",
              description: "Carefully curated products from trusted brands"
            },
            {
              icon: "🚚",
              title: "Free Delivery",
              description: "Free shipping on all orders, no minimum required"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h4>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-text-secondary mb-6">
            Want to explore what we have ready now?
          </p>
          <Link to="/">
            <Button variant="outline" className="px-8 py-3">
              Visit Current Store
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-text-secondary mb-4">
            Join 10,000+ others waiting for launch
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs text-text-secondary">As featured in:</div>
            <div className="flex gap-6 text-xs text-text-secondary">
              <span>TechCrunch</span>
              <span>Forbes</span>
              <span>Wired</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;