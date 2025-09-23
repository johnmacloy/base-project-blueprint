import { useState, useRef, useEffect } from "react";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface SearchSuggestion {
  id: string;
  text: string;
  category?: string;
  isRecent?: boolean;
  isTrending?: boolean;
}

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ 
  placeholder = "Search for products...", 
  className = "",
  onSearch 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions] = useState<SearchSuggestion[]>([
    { id: "1", text: "wireless headphones", category: "Electronics", isRecent: true },
    { id: "2", text: "smartphone", category: "Electronics", isTrending: true },
    { id: "3", text: "laptop", category: "Electronics", isRecent: true },
    { id: "4", text: "gaming keyboard", category: "Electronics", isTrending: true },
    { id: "5", text: "smart watch", category: "Electronics", isTrending: true },
    { id: "6", text: "camera", category: "Electronics" },
    { id: "7", text: "bluetooth speaker", category: "Electronics" },
    { id: "8", text: "tablet", category: "Electronics" }
  ]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter suggestions based on query
  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  // Handle search submission
  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      setIsOpen(false);
      setQuery(searchQuery);
      onSearch?.(searchQuery);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    handleSearch(suggestion.text);
  };

  // Clear search
  const clearSearch = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-4 pr-20 py-2 bg-white text-gray-900 border-0 rounded-lg text-sm md:text-base"
        />
        
        {/* Clear button */}
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-12 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        
        {/* Search button */}
        <Button 
          onClick={() => handleSearch()}
          size="sm"
          className="absolute right-1 top-1 bg-orange hover:bg-orange/90 text-white px-2 md:px-4"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Search Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {query && filteredSuggestions.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs text-text-secondary border-b border-border bg-muted/30">
                Suggestions
              </div>
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3 border-b border-border/50 last:border-b-0"
                >
                  <div className="flex items-center gap-2 flex-1">
                    {suggestion.isRecent && (
                      <Clock className="h-4 w-4 text-text-secondary" />
                    )}
                    {suggestion.isTrending && (
                      <TrendingUp className="h-4 w-4 text-primary" />
                    )}
                    <Search className="h-4 w-4 text-text-secondary" />
                    <span className="text-text-primary">{suggestion.text}</span>
                  </div>
                  {suggestion.category && (
                    <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded">
                      {suggestion.category}
                    </span>
                  )}
                </button>
              ))}
            </>
          )}
          
          {!query && (
            <>
              {/* Recent Searches */}
              <div className="px-4 py-2 text-xs text-text-secondary border-b border-border bg-muted/30">
                Recent Searches
              </div>
              {suggestions.filter(s => s.isRecent).slice(0, 3).map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3"
                >
                  <Clock className="h-4 w-4 text-text-secondary" />
                  <span className="text-text-primary">{suggestion.text}</span>
                </button>
              ))}
              
              {/* Trending Searches */}
              <div className="px-4 py-2 text-xs text-text-secondary border-b border-border bg-muted/30">
                Trending Searches
              </div>
              {suggestions.filter(s => s.isTrending).slice(0, 3).map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3"
                >
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-text-primary">{suggestion.text}</span>
                </button>
              ))}
            </>
          )}
          
          {query && filteredSuggestions.length === 0 && (
            <div className="px-4 py-6 text-center text-text-secondary">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No suggestions found</p>
              <p className="text-xs mt-1">Try searching for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;