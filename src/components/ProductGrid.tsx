import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductQuickViewModal from "./ProductQuickViewModal";
import headphones from "@/assets/headphones.jpg";
import smartphone from "@/assets/smartphone.jpg";
import watch from "@/assets/watch.jpg";
import laptop from "@/assets/laptop.jpg";
import keyboard from "@/assets/keyboard.jpg";
import camera from "@/assets/camera.jpg";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: headphones,
    images: [headphones, smartphone, watch, laptop],
    rating: 5,
    reviews: 127,
    isOnSale: true,
    discount: 20
  },
  {
    id: 2,
    name: "Latest Smartphone Pro Max",
    price: 999.99,
    image: smartphone,
    images: [smartphone, headphones, camera],
    rating: 4,
    reviews: 89,
    isOnSale: false
  },
  {
    id: 3,
    name: "Luxury Smart Watch",
    price: 399.99,
    originalPrice: 499.99,
    image: watch,
    images: [watch, smartphone, headphones, laptop, camera],
    rating: 4,
    reviews: 203,
    isOnSale: true,
    discount: 25
  },
  {
    id: 4,
    name: "Ultra-thin Laptop",
    price: 1299.99,
    image: laptop,
    images: [laptop, keyboard, smartphone],
    rating: 5,
    reviews: 156,
    isOnSale: false
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    originalPrice: 199.99,
    image: keyboard,
    images: [keyboard, laptop, headphones],
    rating: 4,
    reviews: 78,
    isOnSale: true,
    discount: 25
  },
  {
    id: 6,
    name: "Professional DSLR Camera",
    price: 899.99,
    image: camera,
    images: [camera, laptop, smartphone, watch],
    rating: 5,
    reviews: 234,
    isOnSale: false
  }
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-text-secondary">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
            View All Products
          </Link>
        </div>

        <ProductQuickViewModal
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={handleCloseQuickView}
        />
      </div>
    </section>
  );
};

export default ProductGrid;