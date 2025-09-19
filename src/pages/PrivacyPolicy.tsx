import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-secondary">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Personal Information</h3>
                <p className="text-text-secondary">
                  We collect personal information you provide directly to us, such as when you create an account, 
                  make a purchase, subscribe to our newsletter, or contact us. This may include your name, email 
                  address, phone number, shipping address, payment information, and preferences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Automatically Collected Information</h3>
                <p className="text-text-secondary">
                  When you visit our website, we automatically collect certain information about your device and 
                  usage patterns, including your IP address, browser type, operating system, referring URLs, 
                  pages viewed, and the dates/times of visits.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-text-secondary">
                <li>• Process and fulfill your orders and transactions</li>
                <li>• Provide customer service and support</li>
                <li>• Send you promotional emails and marketing communications (with your consent)</li>
                <li>• Improve our website, products, and services</li>
                <li>• Detect and prevent fraud or unauthorized activities</li>
                <li>• Comply with legal obligations and enforce our terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• With service providers who assist us in operating our business</li>
                <li>• To comply with legal requirements or respond to lawful requests</li>
                <li>• To protect our rights, property, or safety, or that of others</li>
                <li>• In connection with a business transaction (merger, sale, etc.)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet or electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-text-secondary">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request portability of your data</li>
                <li>• Lodge a complaint with supervisory authorities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze 
                website traffic, and personalize content and advertisements. You can control cookie settings 
                through your browser preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 space-y-1 text-text-secondary">
                <p>Email: privacy@estore.com</p>
                <p>Phone: 1-800-ESTORE (378673)</p>
                <p>Address: 123 Commerce Street, Business District, New York, NY 10001</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;