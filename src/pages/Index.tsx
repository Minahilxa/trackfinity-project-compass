
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Shield, Building, BarChart3, CheckCircle, Zap, Target, Globe } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Smart Time-Tracking",
      description: "Real-time logs, team timesheets, and idle time detection"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Enterprise Collaboration",
      description: "Task boards, team chat, and role-based access control"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Compliance Ready",
      description: "Built-in audit logs and public sector templates"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Construction Tools",
      description: "Gantt charts, contractor logs, and resource scheduling"
    }
  ];

  const sectors = [
    { icon: <Shield className="h-12 w-12 text-secondary" />, title: "Government", desc: "Compliance & workflows" },
    { icon: <Building className="h-12 w-12 text-secondary" />, title: "Infrastructure", desc: "Timeline & cost tools" },
    { icon: <Zap className="h-12 w-12 text-secondary" />, title: "Engineering", desc: "File management & CAD" },
    { icon: <Target className="h-12 w-12 text-secondary" />, title: "Agencies", desc: "Project automation" }
  ];

  const testimonials = [
    { company: "Saudi Vision 2030 Project", text: "Trackfinity streamlined our compliance workflows." },
    { company: "Qatar Construction Ltd", text: "Perfect for managing complex infrastructure projects." },
    { company: "London Engineering Co", text: "The collaboration tools transformed our team productivity." }
  ];

  return (
    <div className="min-h-screen bg-accent font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Trackfinity: Smart Project Management. 
            <span className="block text-primary">Built for Growth.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-inter">
            From government compliance to construction tracking—Trackfinity empowers your team to build better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg px-8 py-3 font-poppins">
              Start Free
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 py-3 font-poppins">
              Book a Demo
            </Button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-primary/10">
              <div className="bg-gradient-to-br from-accent to-primary/5 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                <div className="text-center z-10">
                  <BarChart3 className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-700 text-lg font-poppins font-semibold">Interactive Dashboard Preview</p>
                  <p className="text-gray-500 font-inter">Real-time analytics, task boards, and collaboration tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Inspired by successful platforms from Saudi Arabia, Qatar, and London
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-inter">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Built For Modern Teams</h2>
            <p className="text-xl text-gray-600 font-inter">Tailored solutions for every industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{sector.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">{sector.title}</h3>
                  <p className="text-gray-600 font-inter">{sector.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Trusted by Leading Organizations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-accent to-white border-primary/20">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-700 mb-4 font-inter italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-secondary font-poppins">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Start Building Better Projects Today</h2>
          <p className="text-xl mb-8 text-green-100 font-inter">Choose the plan that fits your team's needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 font-poppins">Free</h3>
              <p className="text-green-100 font-inter">Perfect for individuals</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-2 border-white/30">
              <h3 className="font-bold text-lg mb-2 font-poppins">Team - $49/mo</h3>
              <p className="text-green-100 font-inter">Great for small teams</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 font-poppins">Enterprise</h3>
              <p className="text-green-100 font-inter">Custom solutions</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-3 font-poppins">
              View All Plans
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-3 font-poppins">
              Get Custom Quote
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-green-100 font-inter">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-white mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-white mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-white mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
