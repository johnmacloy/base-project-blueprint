import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          {category} Products
        </h1>
        <p className="text-text-secondary">Browse products in the {category} category.</p>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;