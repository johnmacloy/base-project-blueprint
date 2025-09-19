import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">FAQ</h1>
        <p className="text-text-secondary">Find answers to frequently asked questions.</p>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;