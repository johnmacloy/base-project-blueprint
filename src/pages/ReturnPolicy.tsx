import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, Truck, RotateCcw } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Return & Refund Policy</h1>
          <p className="text-text-secondary">
            We want you to be completely satisfied with your purchase. Here's everything you need to know about returns and refunds.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-text-primary mb-2">30-Day Returns</h3>
              <p className="text-text-secondary text-sm">You have 30 days from delivery to return most items</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-text-primary mb-2">Free Return Shipping</h3>
              <p className="text-text-secondary text-sm">We provide prepaid return labels for your convenience</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-text-primary mb-2">Easy Process</h3>
              <p className="text-text-secondary text-sm">Start your return online in just a few clicks</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Return Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Returnable Items
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Electronics in original packaging</li>
                    <li>• Clothing with tags attached</li>
                    <li>• Books in resellable condition</li>
                    <li>• Home goods and accessories</li>
                    <li>• Unopened beauty products</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-destructive mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Non-Returnable Items
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Personalized or custom items</li>
                    <li>• Perishable goods</li>
                    <li>• Digital downloads</li>
                    <li>• Intimate apparel</li>
                    <li>• Items damaged by misuse</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Return an Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Start Return</h4>
                  <p className="text-text-secondary text-sm">Log into your account and select the item to return</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Print Label</h4>
                  <p className="text-text-secondary text-sm">Download and print the prepaid return shipping label</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Pack Item</h4>
                  <p className="text-text-secondary text-sm">Securely package the item in its original packaging</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Ship It</h4>
                  <p className="text-text-secondary text-sm">Drop off at any authorized shipping location</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Refund Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-text-primary mb-3">Processing Time</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Items received: 1-2 business days</li>
                    <li>• Refund processing: 3-5 business days</li>
                    <li>• Bank processing: 5-7 business days</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-text-primary mb-3">Refund Method</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Credit card: Original payment method</li>
                    <li>• PayPal: PayPal account</li>
                    <li>• Gift card: Store credit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exchanges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary mb-4">
                We offer exchanges for different sizes, colors, or similar items. The exchange process is the same 
                as returns - just select "Exchange" instead of "Return" when initiating the process.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-text-secondary text-sm">
                  <strong>Note:</strong> If the exchange item has a different price, you'll be charged or refunded 
                  the difference. Exchange shipping is free in both directions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Damaged or Defective Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary mb-4">
                If you receive a damaged or defective item, please contact us immediately. We'll provide a prepaid 
                return label and either send a replacement or issue a full refund.
              </p>
              <Button className="btn-primary">
                Report Damaged Item
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary mb-4">
                Have questions about returns or need assistance? Our customer service team is here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start">
                  <span>Chat Support</span>
                </Button>
                <Button variant="outline" className="justify-start">
                  <span>Call 1-800-ESTORE</span>
                </Button>
                <Button variant="outline" className="justify-start">
                  <span>Email Support</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;