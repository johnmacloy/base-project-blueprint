import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Privacy Policy</h1>
        <p className="text-text-secondary">Our privacy policy and data protection information.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;