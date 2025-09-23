import { useState, useEffect } from "react";
import { Settings, Clock, AlertTriangle, Mail, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Maintenance = () => {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState("2 hours 15 minutes");

  // Simulate progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 10;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Simulate countdown updates
  useEffect(() => {
    const times = [
      "2 hours 15 minutes",
      "2 hours 14 minutes", 
      "2 hours 13 minutes",
      "2 hours 12 minutes"
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % times.length;
      setTimeRemaining(times[index]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
          <AlertTriangle className="h-4 w-4" />
          Scheduled Maintenance
        </div>

        {/* Icon Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Settings className="h-12 w-12 text-primary animate-spin-slow" />
          </div>
          <div className="absolute -top-2 -right-2">
            <div className="w-6 h-6 bg-orange-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          We're Making Things Better
        </h1>
        
        <p className="text-lg text-text-secondary mb-2 leading-relaxed">
          Our store is temporarily down for scheduled maintenance to improve your shopping experience.
        </p>
        
        <p className="text-text-secondary mb-8">
          We're upgrading our systems to serve you better with faster performance and new features.
        </p>

        {/* Maintenance Progress */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw className="h-5 w-5 text-primary animate-spin" />
            <span className="text-sm font-medium text-text-primary">Maintenance Progress</span>
          </div>
          
          <Progress value={progress} className="mb-3" />
          
          <p className="text-sm text-text-secondary">
            {Math.round(progress)}% complete
          </p>
        </div>

        {/* Time Estimate */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-text-primary">Estimated Time Remaining</span>
          </div>
          
          <div className="text-2xl font-bold text-primary mb-2">
            {timeRemaining}
          </div>
          
          <p className="text-sm text-text-secondary">
            We'll be back online soon!
          </p>
        </div>

        {/* What's Being Updated */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            What's Being Updated
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-text-secondary">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Faster page loading
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Enhanced security
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              Improved checkout process
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              Better mobile experience
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Need Immediate Help?</span>
          </div>
          
          <p className="text-sm text-blue-800 mb-3">
            Our customer service team is still available during maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm">
            <a 
              href="mailto:support@estore.com" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@estore.com
            </a>
            <span className="hidden sm:inline text-blue-400">|</span>
            <a 
              href="tel:1-800-ESTORE" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              1-800-ESTORE
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
            className="px-6"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Check Again
          </Button>
          
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 px-6">
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-text-secondary">
            Maintenance started at 2:00 AM UTC | Follow us on social media for live updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;