import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Track Your Order</h1>
        <p className="text-text-secondary">Enter your order number to track your shipment.</p>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;