import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface Review {
  id: number;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  notHelpful: number;
  verified: boolean;
}

interface ProductReviewsProps {
  productId: number;
  averageRating: number;
  totalReviews: number;
}

const ProductReviews = ({ productId, averageRating, totalReviews }: ProductReviewsProps) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: "",
    comment: ""
  });

  const [reviews] = useState<Review[]>([
    {
      id: 1,
      userName: "John D.",
      rating: 5,
      title: "Amazing sound quality!",
      comment: "These headphones exceeded my expectations. The noise cancellation is incredible and the battery life is outstanding. Perfect for long flights and daily commuting.",
      date: "2024-03-10",
      helpful: 24,
      notHelpful: 2,
      verified: true
    },
    {
      id: 2,
      userName: "Sarah M.",
      rating: 4,
      title: "Great headphones with minor issues",
      comment: "Overall very satisfied with the purchase. Sound quality is excellent and they're comfortable for long periods. Only complaint is that they can feel a bit heavy after several hours of use.",
      date: "2024-03-08",
      helpful: 18,
      notHelpful: 1,
      verified: true
    },
    {
      id: 3,
      userName: "Mike R.",
      rating: 5,
      title: "Worth every penny",
      comment: "Best headphones I've ever owned. The app integration is seamless and the quick charge feature is a lifesaver. Highly recommend to anyone looking for premium audio.",
      date: "2024-03-05",
      helpful: 31,
      notHelpful: 0,
      verified: false
    }
  ]);

  const ratingDistribution = [
    { stars: 5, count: 85, percentage: 67 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 4, percentage: 3 },
    { stars: 1, count: 3, percentage: 2 }
  ];

  const renderStars = (rating: number, size: "sm" | "md" = "sm") => {
    const sizeClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`${sizeClass} ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`} 
      />
    ));
  };

  const handleSubmitReview = () => {
    console.log("New review:", newReview);
    setShowReviewForm(false);
    setNewReview({ rating: 5, title: "", comment: "" });
  };

  return (
    <div className="space-y-8">
      {/* Reviews Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center">
          <div className="text-4xl font-bold text-text-primary mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center mb-2">
            {renderStars(Math.floor(averageRating), "md")}
          </div>
          <p className="text-text-secondary">Based on {totalReviews} reviews</p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <span className="text-sm text-text-secondary w-8">
                {rating.stars}★
              </span>
              <Progress value={rating.percentage} className="flex-1 h-2" />
              <span className="text-sm text-text-secondary w-8">
                {rating.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Button */}
      <div className="text-center">
        <Button 
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-primary hover:bg-primary/90"
        >
          Write a Review
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Write Your Review</h3>
          
          <div className="space-y-4">
            {/* Rating */}
            <div>
              <Label>Your Rating</Label>
              <div className="flex gap-1 mt-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setNewReview(prev => ({ ...prev, rating: index + 1 }))}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    <Star 
                      className={`h-6 w-6 ${
                        index < newReview.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300 hover:text-yellow-400'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <Label htmlFor="reviewTitle">Review Title</Label>
              <input
                id="reviewTitle"
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Summarize your experience..."
                className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Comment */}
            <div>
              <Label htmlFor="reviewComment">Your Review</Label>
              <Textarea
                id="reviewComment"
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Tell us about your experience with this product..."
                rows={4}
                className="mt-1"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button onClick={handleSubmitReview} className="bg-primary hover:bg-primary/90">
                Submit Review
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-card p-6 rounded-lg border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-text-secondary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-text-primary">{review.userName}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  )}
                  <span className="text-sm text-text-secondary">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(review.rating)}
                  <span className="font-semibold text-text-primary">{review.title}</span>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {review.comment}
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 text-text-secondary hover:text-text-primary">
                    <ThumbsUp className="h-3 w-3" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1 text-text-secondary hover:text-text-primary">
                    <ThumbsDown className="h-3 w-3" />
                    Not helpful ({review.notHelpful})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default ProductReviews;