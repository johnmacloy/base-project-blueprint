import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Truck, Shield, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const orderItems = [
    { name: "Premium Wireless Headphones", quantity: 2, price: 199.99 },
    { name: "Latest Smartphone Pro Max", quantity: 1, price: 999.99 }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shippingCost = shippingMethod === "express" ? 15.99 : 0;
  const total = subtotal + tax + shippingCost;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-6">
          <Link to="/">Home</Link> / <Link to="/cart">Cart</Link> / <span className="text-text-primary">Checkout</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-text-primary">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main Street" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" placeholder="10001" />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Shipping Method</h2>
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="standard" id="standard" />
                  <div className="flex-1">
                    <label htmlFor="standard" className="font-medium cursor-pointer">
                      Standard Shipping
                    </label>
                    <p className="text-sm text-text-secondary">5-7 business days • Free</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="express" id="express" />
                  <div className="flex-1">
                    <label htmlFor="express" className="font-medium cursor-pointer">
                      Express Shipping
                    </label>
                    <p className="text-sm text-text-secondary">2-3 business days • $15.99</p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Payment Method</h2>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mb-6">
                <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-4 w-4" />
                  <label htmlFor="card" className="cursor-pointer">Credit/Debit Card</label>
                </div>
                <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <label htmlFor="paypal" className="cursor-pointer">PayPal</label>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2 mt-6">
                <Checkbox id="billing" />
                <label htmlFor="billing" className="text-sm">
                  Billing address same as shipping address
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <p className="font-medium text-text-primary">{item.name}</p>
                      <p className="text-sm text-text-secondary">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pt-4 border-t border-border">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="text-text-primary">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tax</span>
                  <span className="text-text-primary">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-text-primary">Total</span>
                    <span className="text-text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/order-confirmation">
                <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
                  Complete Order
                </Button>
              </Link>

              {/* Security badges */}
              <div className="flex items-center justify-center gap-4 text-xs text-text-secondary">
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="h-3 w-3" />
                  <span>Fast Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;