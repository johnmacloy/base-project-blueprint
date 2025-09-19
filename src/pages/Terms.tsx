import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Terms & Conditions</h1>
          <p className="text-text-secondary">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                By accessing and using this website, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                Permission is granted to temporarily download one copy of the materials on EStore's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-text-secondary ml-4">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                We strive to provide accurate product information, including descriptions, images, and pricing. 
                However, we do not warrant that product descriptions or other content is accurate, complete, 
                reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, 
                or omissions and to change or update information at any time without prior notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Acceptance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                Your receipt of an order confirmation does not signify our acceptance of your order, nor does 
                it constitute confirmation of our offer to sell. We reserve the right at any time after receipt 
                of your order to accept or decline your order for any reason.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing and Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                All prices are in USD and are subject to change without notice. We reserve the right to modify 
                prices at any time. Payment is due in full at the time of purchase.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• We accept major credit cards, PayPal, and other approved payment methods</li>
                <li>• All transactions are processed securely</li>
                <li>• You are responsible for any applicable taxes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping and Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                We will make every effort to ship your order within our stated timeframes. However, delivery 
                dates are estimates and we cannot guarantee delivery by any specific date. Risk of loss and 
                title for items pass to you upon delivery to the carrier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for safeguarding the password and for all 
                activities that occur under your account.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• You must be at least 18 years old to create an account</li>
                <li>• One account per person</li>
                <li>• You are responsible for maintaining account security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                In no event shall EStore or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on EStore's website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-1 text-text-secondary">
                <p>Email: legal@estore.com</p>
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

export default Terms;