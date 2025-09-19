import { Link } from "react-router-dom";
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  Settings, 
  ShoppingBag,
  CreditCard,
  Bell,
  Star,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const UserDashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2023",
    avatar: null,
    loyaltyPoints: 2450,
    nextTierPoints: 3000,
    totalOrders: 24,
    totalSpent: 4599.97
  };

  const recentOrders = [
    {
      id: "ES2024-001234",
      date: "2024-03-10",
      status: "delivered",
      total: 1415.97,
      items: 3
    },
    {
      id: "ES2024-001233", 
      date: "2024-03-08",
      status: "shipped",
      total: 399.99,
      items: 1
    },
    {
      id: "ES2024-001232",
      date: "2024-03-05",
      status: "processing",
      total: 149.99,
      items: 1
    }
  ];

  const quickStats = [
    {
      label: "Active Orders",
      value: "2",
      icon: Package,
      color: "text-blue-600"
    },
    {
      label: "Wishlist Items",
      value: "12",
      icon: Heart,
      color: "text-red-600"
    },
    {
      label: "Loyalty Points",
      value: user.loyaltyPoints.toLocaleString(),
      icon: Star,
      color: "text-yellow-600"
    },
    {
      label: "Total Saved",
      value: "$234",
      icon: TrendingUp,
      color: "text-green-600"
    }
  ];

  const quickActions = [
    {
      title: "Track Orders",
      description: "Monitor your recent purchases",
      icon: Package,
      link: "/orders",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Manage Wishlist",
      description: "View saved items",
      icon: Heart,
      link: "/wishlist",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Address Book",
      description: "Update shipping addresses",
      icon: MapPin,
      link: "/address-book",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Account Settings",
      description: "Manage your preferences",
      icon: Settings,
      link: "/account-settings",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { label: "Delivered", className: "bg-green-100 text-green-800" },
      shipped: { label: "Shipped", className: "bg-blue-100 text-blue-800" },
      processing: { label: "Processing", className: "bg-orange-100 text-orange-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={config.className}>
        {config.label}
      </Badge>
    );
  };

  const loyaltyProgress = (user.loyaltyPoints / user.nextTierPoints) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-text-secondary">
            Member since {user.memberSince} • {user.totalOrders} orders completed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-4 text-center">
                      <Icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your latest purchases and their status</CardDescription>
                </div>
                <Link to="/orders">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Package className="h-5 w-5 text-text-secondary" />
                        <div>
                          <p className="font-medium text-text-primary">{order.id}</p>
                          <p className="text-sm text-text-secondary">
                            {new Date(order.date).toLocaleDateString()} • {order.items} items
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(order.status)}
                        <p className="text-sm font-medium text-text-primary mt-1">
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your account and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link key={index} to={action.link}>
                        <div className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                          <div className={`p-3 rounded-lg ${action.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-text-primary">{action.title}</h3>
                            <p className="text-sm text-text-secondary">{action.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{user.name}</h3>
                  <p className="text-sm text-text-secondary">{user.email}</p>
                </div>
                
                <Link to="/account-settings">
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Loyalty Program */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Loyalty Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current Points</span>
                    <span className="font-medium">{user.loyaltyPoints.toLocaleString()}</span>
                  </div>
                  <Progress value={loyaltyProgress} className="mb-2" />
                  <p className="text-xs text-text-secondary">
                    {user.nextTierPoints - user.loyaltyPoints} points to next tier
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Rewards Available:</h4>
                  <div className="space-y-1 text-xs text-text-secondary">
                    <p>• $10 off next order (1000 pts)</p>
                    <p>• Free shipping (500 pts)</p>
                    <p>• Exclusive member deals</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" size="sm">
                  View Rewards
                </Button>
              </CardContent>
            </Card>

            {/* Account Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Account Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Orders</span>
                  <span className="font-medium">{user.totalOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Spent</span>
                  <span className="font-medium">${user.totalSpent.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Avg Order Value</span>
                  <span className="font-medium">${(user.totalSpent / user.totalOrders).toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-text-primary">Order shipped</p>
                      <p className="text-text-secondary text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-text-primary">Points earned</p>
                      <p className="text-text-secondary text-xs">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;