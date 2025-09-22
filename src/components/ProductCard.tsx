import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isOnSale?: boolean;
  discount?: number;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  isOnSale = false,
  discount 
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <div className="product-card group transition-all duration-300">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        {isOnSale && discount && (
          <Badge className="absolute top-2 left-2 bg-offer-red text-white z-10">
            -{discount}%
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className="h-4 w-4 hover:text-offer transition-colors" />
        </Button>
        
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay with quick view button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-white text-navy hover:bg-gray-100 transition-all duration-300">
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text-primary line-clamp-2 group-hover:text-teal transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-text-secondary">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-text-secondary line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 group">
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;