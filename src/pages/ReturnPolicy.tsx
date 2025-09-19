import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Return & Refund Policy</h1>
        <p className="text-text-secondary">Information about returns, refunds and exchanges.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;