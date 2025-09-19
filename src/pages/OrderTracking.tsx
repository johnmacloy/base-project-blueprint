import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Truck, CheckCircle, MapPin, Clock, Search, Phone, Mail } from "lucide-react";
import { useState } from "react";

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  const orderDetails = {
    orderNumber: "EST-2024-001234",
    trackingNumber: "1Z999AA1234567890",
    status: "In Transit",
    estimatedDelivery: "March 15, 2024",
    currentLocation: "New York Distribution Center",
    carrier: "UPS",
    items: [
      { name: "Wireless Bluetooth Headphones", quantity: 1, image: "/placeholder.svg" },
      { name: "Phone Case", quantity: 1, image: "/placeholder.svg" }
    ]
  };

  const trackingHistory = [
    {
      date: "March 13, 2024 - 2:15 PM",
      location: "New York Distribution Center",
      status: "In Transit",
      description: "Package is on the way to the next facility",
      completed: true
    },
    {
      date: "March 13, 2024 - 8:30 AM",
      location: "Philadelphia Processing Facility",
      status: "Departed Facility",
      description: "Package has departed the facility",
      completed: true
    },
    {
      date: "March 12, 2024 - 11:45 PM",
      location: "Philadelphia Processing Facility",
      status: "Arrived at Facility",
      description: "Package arrived at processing facility",
      completed: true
    },
    {
      date: "March 12, 2024 - 6:00 PM",
      location: "Atlanta, GA",
      status: "Shipped",
      description: "Package has been shipped from our warehouse",
      completed: true
    },
    {
      date: "March 12, 2024 - 2:30 PM",
      location: "Atlanta, GA",
      status: "Order Processed",
      description: "Order has been processed and packaged",
      completed: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Track Your Order</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Enter your order number or tracking number to get real-time updates on your shipment.
          </p>
        </div>

        {/* Search Section */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="tracking">Order Number or Tracking Number</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="tracking"
                    placeholder="Enter your tracking number (e.g., 1Z999AA1234567890)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleSearch} className="btn-primary">
                    <Search className="w-4 h-4 mr-2" />
                    Track
                  </Button>
                </div>
              </div>
              
              <div className="text-center text-text-secondary text-sm">
                <p>Don't have your tracking number? <a href="/orders" className="text-teal hover:underline">Check your orders</a></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {showResults && (
          <div className="space-y-6">
            {/* Order Status Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Truck className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-2">{orderDetails.status}</Badge>
                    <p className="text-text-secondary text-sm">Your package is on its way</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-text-primary">{orderDetails.estimatedDelivery}</p>
                    <p className="text-text-secondary text-sm">Estimated Delivery</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-text-primary">{orderDetails.currentLocation}</p>
                    <p className="text-text-secondary text-sm">Current Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Order Number:</span>
                    <span className="font-semibold text-text-primary">{orderDetails.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Tracking Number:</span>
                    <span className="font-semibold text-text-primary">{orderDetails.trackingNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Carrier:</span>
                    <span className="font-semibold text-text-primary">{orderDetails.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Status:</span>
                    <Badge variant="outline">{orderDetails.status}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Items in this Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {orderDetails.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-text-primary">{item.name}</p>
                          <p className="text-text-secondary text-sm">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tracking History */}
            <Card>
              <CardHeader>
                <CardTitle>Tracking History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingHistory.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${
                          event.completed ? 'bg-primary' : 'bg-muted'
                        } flex items-center justify-center`}>
                          {event.completed && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        {index < trackingHistory.length - 1 && (
                          <div className={`w-0.5 h-8 ${
                            event.completed ? 'bg-primary' : 'bg-muted'
                          }`} />
                        )}
                      </div>
                      
                      <div className="flex-1 pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <p className="font-semibold text-text-primary">{event.status}</p>
                          <p className="text-text-secondary text-sm">{event.date}</p>
                        </div>
                        <p className="text-text-secondary text-sm mb-1">{event.location}</p>
                        <p className="text-text-secondary text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Section */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Need Help with Your Order?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                    <Button variant="outline" className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Support
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Results State */}
        {!showResults && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-text-primary mb-2">Order Tracking</h3>
                <p className="text-text-secondary text-sm">Get real-time updates on your package location and delivery status.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-text-primary mb-2">Delivery Updates</h3>
                <p className="text-text-secondary text-sm">Receive notifications about important delivery milestones.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-text-primary mb-2">Delivery Confirmation</h3>
                <p className="text-text-secondary text-sm">Get notified when your package is successfully delivered.</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;