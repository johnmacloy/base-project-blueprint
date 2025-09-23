import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "@/components/ui/toast-provider";

// Main Pages
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

// User Account Pages  
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import AddressBook from "./pages/AddressBook";
import AccountSettings from "./pages/AccountSettings";

// Utility Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ReturnPolicy from "./pages/ReturnPolicy";

// Ecommerce Specific
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";
import Deals from "./pages/Deals";
import OrderTracking from "./pages/OrderTracking";
import Compare from "./pages/Compare";
import ComingSoon from "./pages/ComingSoon";
import Maintenance from "./pages/Maintenance";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ToastProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />

          {/* User Account Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/address-book" element={<AddressBook />} />
          <Route path="/account-settings" element={<AccountSettings />} />

          {/* Utility Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />

          {/* Ecommerce Specific */}
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/maintenance" element={<Maintenance />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </ToastProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
