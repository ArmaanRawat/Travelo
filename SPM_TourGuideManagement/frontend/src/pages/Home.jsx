import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  const features = [
    {
      title: "Hotel Booking",
      description:
        "Find and book the best hotels for your stay with competitive prices and excellent service.",
      icon: "🏨",
      path: "/view/hotel",
    },
    {
      title: "Tour Guides",
      description:
        "Connect with experienced local tour guides who know the best spots and hidden gems.",
      icon: "👥",
      path: "/add/tourguide",
    },
    {
      title: "Travel Packages",
      description:
        "Discover curated travel packages that combine hotels, guides, and activities.",
      icon: "🎒",
      path: "/view/cuspackage",
    },
    {
      title: "Payment History",
      description:
        "Track all your bookings and payments in one convenient location.",
      icon: "💳",
      path: "/payment/history",
    },
  ];

  const stats = [
    { label: "Hotels Available", value: "500+" },
    { label: "Tour Guides", value: "200+" },
    { label: "Happy Travelers", value: "10K+" },
    { label: "Destinations", value: "50+" },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Travelo
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your ultimate travel companion for unforgettable adventures
          </p>
          {isAuthenticated ? (
            <div className="space-x-4">
              <Link to="/view/hotel">
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-blue-600">
                  Explore Hotels
                </Button>
              </Link>
              <Link to="/view/cuspackage">
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-blue-600">
                  View Packages
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/new+user/signup">
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-blue-600">
                  Get Started
                </Button>
              </Link>
              <Link to="/user/login">
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-blue-600">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link to={feature.path}>
                <Button variant="primary" size="small" fullWidth>
                  Explore
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Welcome Message for Authenticated Users */}
      {isAuthenticated && (
        <Card className="bg-blue-50 border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Welcome back, {user?.full_name || user?.user_name || "Traveler"}!
            </h3>
            <p className="text-blue-700">
              Ready to plan your next adventure? Check out our latest offers and
              start exploring.
            </p>
          </div>
        </Card>
      )}

      {/* Call to Action */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-600 mb-6">
          Join thousands of travelers who trust Travelo for their adventures.
        </p>
        <div className="space-x-4">
          <Link to="/view/hotel">
            <Button variant="primary" size="large">
              Browse Hotels
            </Button>
          </Link>
          <Link to="/view/cuspackage">
            <Button variant="outline" size="large">
              View Packages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
