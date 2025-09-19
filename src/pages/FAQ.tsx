import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and international shipping options are also available. You'll receive a tracking number once your order ships."
        },
        {
          question: "What are your shipping costs?",
          answer: "Free standard shipping on orders over $50. For orders under $50, standard shipping is $5.99. Express shipping is $12.99 regardless of order value. International shipping rates vary by destination."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order ships, you'll receive an email with a tracking number. You can also track your order by logging into your account and visiting the Orders section."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "You can modify or cancel your order within 1 hour of placing it. After that, orders are processed for shipping and cannot be changed. Contact customer service immediately if you need assistance."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy on most items. Products must be in original condition with tags attached. Some items like personalized products or perishables cannot be returned."
        },
        {
          question: "How do I return an item?",
          answer: "Log into your account, go to Orders, and select 'Return Item' next to the product. Print the prepaid return label and ship it back. Refunds are processed within 5-7 business days after we receive your return."
        },
        {
          question: "Do you offer exchanges?",
          answer: "Yes! You can exchange items for a different size or color within 30 days. The exchange process is the same as returns - just select 'Exchange' instead of 'Return' when initiating the process."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "Do I need an account to shop?",
          answer: "No, you can checkout as a guest. However, creating an account allows you to track orders, save favorites, view purchase history, and checkout faster on future orders."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely. We use industry-standard SSL encryption to protect your payment information. We're also PCI DSS compliant and never store your full credit card details on our servers."
        }
      ]
    },
    {
      category: "Products & Pricing",
      questions: [
        {
          question: "Are your product photos accurate?",
          answer: "We strive to show products as accurately as possible. Colors may vary slightly due to monitor settings. All product dimensions and specifications are clearly listed on each product page."
        },
        {
          question: "Do you price match?",
          answer: "We offer competitive pricing and occasionally run price matching promotions. Sign up for our newsletter to be notified of special offers and price matching opportunities."
        },
        {
          question: "How often do you restock items?",
          answer: "Restock timing varies by product. Popular items are restocked regularly, while seasonal items may have limited availability. Sign up for restock notifications on out-of-stock product pages."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Find answers to common questions about orders, shipping, returns, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search FAQs..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-secondary">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="mt-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Still have questions?</h2>
            <p className="text-text-secondary mb-6">
              Can't find what you're looking for? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary px-6 py-2 rounded-md text-center">
                Contact Support
              </a>
              <a href="tel:1-800-378673" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md text-center hover:opacity-90 transition-colors">
                Call 1-800-ESTORE
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;