import { Truck, Shield, Headphones, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $50. Fast and reliable shipping worldwide."
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is safe with our SSL encryption technology."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock customer service."
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day return policy. No questions asked, hassle-free returns."
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;