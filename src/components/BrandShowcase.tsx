const brands = [
  { name: "Apple", logo: "🍎" },
  { name: "Samsung", logo: "📱" },
  { name: "Sony", logo: "🎧" },
  { name: "Dell", logo: "💻" },
  { name: "Canon", logo: "📷" },
  { name: "Nike", logo: "👟" }
];

const BrandShowcase = () => {
  return (
    <section className="py-12 bg-section border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-text-primary mb-2">
            Trusted Brands
          </h3>
          <p className="text-text-secondary">
            We partner with the world's leading brands
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-background transition-colors duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-2">{brand.logo}</div>
              <span className="text-sm font-medium text-text-secondary">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;