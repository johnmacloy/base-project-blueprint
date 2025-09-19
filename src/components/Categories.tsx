import { Smartphone, Headphones, Watch, Laptop, Gamepad2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    count: "1,234 items",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Headphones", 
    icon: Headphones,
    count: "856 items",
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Watches",
    icon: Watch,
    count: "432 items", 
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Laptops",
    icon: Laptop,
    count: "678 items",
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: "923 items",
    color: "bg-red-100 text-red-600"
  },
  {
    name: "Cameras",
    icon: Camera,
    count: "345 items",
    color: "bg-teal-100 text-teal-600"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-text-secondary">
            Explore our wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col items-center p-6 h-auto bg-white hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`p-4 rounded-full mb-3 ${category.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {category.count}
                </p>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;