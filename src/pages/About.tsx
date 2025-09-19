import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">About EStore</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're passionate about bringing you the best products at unbeatable prices, 
            with exceptional customer service that puts you first.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed">
                At EStore, we believe shopping should be simple, enjoyable, and rewarding. 
                Since our founding, we've been committed to curating high-quality products 
                from trusted brands while providing an exceptional online shopping experience. 
                Our mission is to make premium products accessible to everyone, backed by 
                outstanding customer service and fast, reliable delivery.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Customer First</h3>
              <p className="text-text-secondary">Your satisfaction is our top priority in everything we do.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Quality Products</h3>
              <p className="text-text-secondary">We carefully select only the best products for our customers.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Global Reach</h3>
              <p className="text-text-secondary">Serving customers worldwide with fast, reliable shipping.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Community</h3>
              <p className="text-text-secondary">Building lasting relationships with our customers and partners.</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                <p className="text-text-secondary">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <p className="text-text-secondary">Products Sold</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-text-secondary">Countries Served</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default About;