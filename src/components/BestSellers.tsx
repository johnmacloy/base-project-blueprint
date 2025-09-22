import ProductCard from "./ProductCard";
import headphones from "@/assets/headphones.jpg";
import smartphone from "@/assets/smartphone.jpg";
import watch from "@/assets/watch.jpg";
import laptop from "@/assets/laptop.jpg";

const bestSellers = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: headphones,
    rating: 5,
    reviews: 1247,
    isOnSale: true,
    discount: 20
  },
  {
    id: 2,
    name: "Latest Smartphone Pro Max",
    price: 999.99,
    image: smartphone,
    rating: 5,
    reviews: 892,
    isOnSale: false
  },
  {
    id: 3,
    name: "Luxury Smart Watch",
    price: 399.99,
    originalPrice: 499.99,
    image: watch,
    rating: 4,
    reviews: 2034,
    isOnSale: true,
    discount: 25
  },
  {
    id: 4,
    name: "Ultra-thin Laptop",
    price: 1299.99,
    image: laptop,
    rating: 5,
    reviews: 1567,
    isOnSale: false
  }
];

const BestSellers = () => {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-text-secondary">
            Our most popular products loved by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;