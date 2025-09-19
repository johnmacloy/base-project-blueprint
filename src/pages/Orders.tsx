import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Eye, Download, Truck, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Orders = () => {
  const orders = [
    {
      id: "ES2024-001234",
      date: "2024-03-10",
      status: "delivered",
      total: 1415.97,
      items: [
        { name: "Premium Wireless Headphones", quantity: 2, price: 199.99 },
        { name: "Latest Smartphone Pro Max", quantity: 1, price: 999.99 }
      ]
    },
    {
      id: "ES2024-001233", 
      date: "2024-03-08",
      status: "shipped",
      total: 399.99,
      items: [
        { name: "Luxury Smart Watch", quantity: 1, price: 399.99 }
      ]
    },
    {
      id: "ES2024-001232",
      date: "2024-03-05",
      status: "processing",
      total: 149.99,
      items: [
        { name: "Mechanical Gaming Keyboard", quantity: 1, price: 149.99 }
      ]
    },
    {
      id: "ES2024-001231",
      date: "2024-02-28",
      status: "cancelled",
      total: 899.99,
      items: [
        { name: "Professional DSLR Camera", quantity: 1, price: 899.99 }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { label: "Delivered", className: "bg-green-100 text-green-800" },
      shipped: { label: "Shipped", className: "bg-blue-100 text-blue-800" },
      processing: { label: "Processing", className: "bg-orange-100 text-orange-800" },
      cancelled: { label: "Cancelled", className: "bg-red-100 text-red-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={config.className}>
        {config.label}
      </Badge>
    );
  };

  const filterOrdersByStatus = (status?: string) => {
    if (!status || status === "all") return orders;
    return orders.filter(order => order.status === status);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb & Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">My Orders</h1>
            <p className="text-text-secondary">Track and manage your orders</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          {["all", "processing", "shipped", "delivered", "cancelled"].map((status) => (
            <TabsContent key={status} value={status} className="mt-6">
              <div className="space-y-4">
                {filterOrdersByStatus(status === "all" ? undefined : status).map((order) => (
                  <div key={order.id} className="bg-card rounded-lg p-6 border">
                    {/* Order Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-4 mb-2 md:mb-0">
                        <Package className="h-5 w-5 text-text-secondary" />
                        <div>
                          <h3 className="font-semibold text-text-primary">{order.id}</h3>
                          <p className="text-sm text-text-secondary">
                            Ordered on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {getStatusBadge(order.status)}
                        <span className="font-semibold text-text-primary">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-text-primary mb-2">Items:</p>
                      <div className="space-y-1">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-text-secondary">
                              {item.name} (x{item.quantity})
                            </span>
                            <span className="text-text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Actions */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                      
                      {order.status === "shipped" || order.status === "delivered" ? (
                        <Link to="/track-order">
                          <Button variant="outline" size="sm">
                            <Truck className="h-3 w-3 mr-1" />
                            Track Order
                          </Button>
                        </Link>
                      ) : null}
                      
                      {order.status === "delivered" && (
                        <>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Invoice
                          </Button>
                          <Button variant="outline" size="sm">
                            Reorder
                          </Button>
                        </>
                      )}
                      
                      {order.status === "processing" && (
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Cancel Order
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                
                {filterOrdersByStatus(status === "all" ? undefined : status).length === 0 && (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-text-primary mb-2">
                      No orders found
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {status === "all" 
                        ? "You haven't placed any orders yet."
                        : `No ${status} orders found.`
                      }
                    </p>
                    <Link to="/shop">
                      <Button className="bg-primary hover:bg-primary/90">
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;