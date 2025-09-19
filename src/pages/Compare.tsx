import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Compare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Compare Products</h1>
        <p className="text-text-secondary">Compare features and prices of different products.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Compare;