import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing quality products and super fast shipping! I've been shopping here for over a year and never been disappointed.",
    location: "New York, USA"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "Best customer service I've ever experienced. They helped me choose the perfect laptop and even offered a great discount.",
    location: "California, USA"
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 5,
    comment: "The return policy is fantastic and the products are exactly as described. Highly recommend this store!",
    location: "London, UK"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-secondary">
            Don't just take our word for it - here's what our customers think
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-text-secondary mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;