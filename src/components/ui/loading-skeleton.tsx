import { Skeleton } from "@/components/ui/skeleton";

// Product Card Skeleton
export const ProductCardSkeleton = () => (
  <div className="bg-card rounded-lg p-4 border animate-fade-in">
    <Skeleton className="w-full h-48 rounded-lg mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-1/2 mb-2" />
    <div className="flex items-center gap-2 mb-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded" />
        ))}
      </div>
      <Skeleton className="h-4 w-16" />
    </div>
    <div className="flex items-center justify-between">
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-9 w-24 rounded-lg" />
    </div>
  </div>
);

// Product Grid Skeleton
export const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

// Category Card Skeleton  
export const CategoryCardSkeleton = () => (
  <div className="bg-card rounded-lg p-6 border text-center animate-fade-in">
    <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
    <Skeleton className="h-5 w-24 mx-auto mb-2" />
    <Skeleton className="h-4 w-16 mx-auto" />
  </div>
);

// Order Item Skeleton
export const OrderItemSkeleton = () => (
  <div className="bg-card rounded-lg p-6 border animate-fade-in">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <Skeleton className="w-5 h-5 rounded" />
        <div>
          <Skeleton className="h-5 w-28 mb-1" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
    
    <div className="mb-4">
      <Skeleton className="h-4 w-12 mb-2" />
      <div className="space-y-1">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-8 w-24 rounded-lg" />
      ))}
    </div>
  </div>
);

// Page Loading Skeleton
export const PageLoadingSkeleton = () => (
  <div className="container mx-auto px-4 py-8 animate-fade-in">
    <div className="mb-8">
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-5 w-48" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <ProductGridSkeleton count={6} />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-40 w-full rounded-lg" />
      </div>
    </div>
  </div>
);