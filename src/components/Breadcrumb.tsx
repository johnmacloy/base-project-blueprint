import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-text-secondary mb-6 ${className}`}
      aria-label="Breadcrumb"
    >
      {/* Home Link */}
      <Link 
        to="/" 
        className="flex items-center hover:text-primary transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.length > 0 && <ChevronRight className="h-4 w-4 text-text-secondary/50" />}
      
      {/* Breadcrumb Items */}
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {item.href ? (
            <Link 
              to={item.href}
              className="hover:text-primary transition-colors capitalize"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary font-medium capitalize">
              {item.label}
            </span>
          )}
          
          {/* Separator for non-last items */}
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 text-text-secondary/50" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;