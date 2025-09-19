import { Link } from "react-router-dom";
import { CheckCircle, Download, Truck, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OrderConfirmation = () => {
  const orderNumber = "ES2024-001234";
  const estimatedDelivery = "March 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-text-primary mb-2">Order Confirmed!</h1>
            <p className="text-lg text-text-secondary">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-card rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Order Number</h3>
                <p className="text-text-secondary">{orderNumber}</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Estimated Delivery</h3>
                <p className="text-text-secondary">{estimatedDelivery}</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Total Amount</h3>
                <p className="text-text-secondary">$1,415.97</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Payment Method</h3>
                <p className="text-text-secondary">**** **** **** 3456</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-card rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Order Items</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="font-medium text-text-primary">Premium Wireless Headphones</p>
                  <p className="text-sm text-text-secondary">Quantity: 2</p>
                </div>
                <p className="font-medium text-text-primary">$399.98</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="font-medium text-text-primary">Latest Smartphone Pro Max</p>
                  <p className="text-sm text-text-secondary">Quantity: 1</p>
                </div>
                <p className="font-medium text-text-primary">$999.99</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-text-primary mb-1">Order Processing</h4>
              <p className="text-sm text-text-secondary">We're preparing your items</p>
            </div>
            <div className="text-center p-4">
              <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-text-primary mb-1">Shipping</h4>
              <p className="text-sm text-text-secondary">Items will be shipped soon</p>
            </div>
            <div className="text-center p-4">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-text-primary mb-1">Delivery</h4>
              <p className="text-sm text-text-secondary">Est. {estimatedDelivery}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/track-order">
              <Button className="bg-primary hover:bg-primary/90">
                <Truck className="h-4 w-4 mr-2" />
                Track Your Order
              </Button>
            </Link>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            <Link to="/shop">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold text-text-primary mb-2">Need Help?</h3>
            <p className="text-text-secondary mb-4">
              If you have any questions about your order, feel free to contact our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="sm">Contact Support</Button>
              </Link>
              <Button variant="outline" size="sm">Call: 1-800-ESTORE</Button>
            </div>
          </div>

          {/* Email Confirmation Note */}
          <p className="text-sm text-text-secondary mt-8">
            A confirmation email with order details has been sent to your email address.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;