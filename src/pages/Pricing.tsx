
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for small teams getting started with project management",
      features: [
        "Task boards and basic project management",
        "1 user included",
        "Basic reporting and analytics",
        "5GB storage",
        "Email support",
        "Mobile app access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Growth",
      price: "$49",
      period: "per month",
      description: "Ideal for growing teams that need advanced collaboration features",
      features: [
        "All Starter features included",
        "Up to 10 users",
        "Advanced integrations (Slack, Teams, etc.)",
        "Time tracking and timesheets",
        "Custom workflows and templates",
        "Priority email support",
        "50GB storage",
        "Advanced reporting and analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "For large organizations requiring compliance tools and unlimited scale",
      features: [
        "All Growth features included",
        "Unlimited users",
        "Compliance tools and audit logs",
        "On-premises deployment option",
        "Single Sign-On (SSO)",
        "24/7 phone and email support",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security features"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-muted font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-primary bg-white' : 'bg-white'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      {plan.price !== "Free" && plan.price !== "Custom" && (
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      )}
                      {plan.price === "Custom" && (
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan at any time?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a long-term commitment?</h3>
              <p className="text-gray-600">No, all our plans are month-to-month with no long-term contracts. You can cancel anytime.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer discounts for nonprofits or educational institutions?</h3>
              <p className="text-gray-600">Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of teams who trust Trackfinity for their project management needs.
          </p>
          <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90 text-lg px-8 py-3">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
