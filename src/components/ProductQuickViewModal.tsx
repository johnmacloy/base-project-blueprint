import { Star, ShoppingCart, Heart, X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface Product {
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

interface ProductQuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickViewModal = ({ product, isOpen, onClose }: ProductQuickViewModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

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

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Quick View Product</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-6 w-6"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            {product.isOnSale && product.discount && (
              <Badge className="absolute top-4 left-4 bg-destructive text-white z-10">
                -{product.discount}%
              </Badge>
            )}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 md:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {product.name}
              </h2>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-text-secondary">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-text-secondary line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.isOnSale && product.discount && (
                  <Badge variant="destructive" className="ml-2">
                    Save {product.discount}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-text-primary mb-3">Description</h3>
              <p className="text-text-secondary leading-relaxed">
                This premium product offers exceptional quality and performance. 
                Built with the latest technology and designed for durability, 
                it's the perfect choice for customers who demand excellence.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="border-t pt-6">
              <label className="block text-sm font-medium text-text-primary mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange('decrease')}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange('increase')}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 text-sm text-text-secondary space-y-2">
              <p>• Free shipping on orders over $50</p>
              <p>• 30-day return policy</p>
              <p>• 1-year manufacturer warranty</p>
              <p>• Secure payment processing</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickViewModal;