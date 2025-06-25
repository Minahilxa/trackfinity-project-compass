
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, HardHat, Zap, GraduationCap, Users } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Building2 className="h-16 w-16 text-primary" />,
      title: "Government Agencies",
      description: "Streamline public sector project management with compliance-first features, audit trails, and lifecycle templates designed for government initiatives.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      features: [
        "Compliance & audit logs",
        "Public sector templates",
        "Budget tracking & reporting",
        "Stakeholder management"
      ],
      cta: "Explore Government Solutions"
    },
    {
      icon: <HardHat className="h-16 w-16 text-primary" />,
      title: "Construction Companies",
      description: "Manage complex construction projects with Gantt charts, contractor scheduling, and material tracking from groundbreaking to completion.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      features: [
        "Gantt charts & dependencies",
        "Contractor management",
        "Material tracking",
        "Site progress monitoring"
      ],
      cta: "View Construction Tools"
    },
    {
      icon: <Zap className="h-16 w-16 text-primary" />,
      title: "Engineering Firms",
      description: "Coordinate technical projects with precision using advanced project planning, resource allocation, and engineering-specific workflows.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      features: [
        "Technical documentation",
        "Resource optimization",
        "Quality assurance workflows",
        "Client collaboration portals"
      ],
      cta: "Discover Engineering Features"
    },
    {
      icon: <Users className="h-16 w-16 text-primary" />,
      title: "Tech & Software Teams",
      description: "Accelerate software development with agile project management, sprint planning, and real-time collaboration tools built for modern tech teams.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      features: [
        "Agile & sprint planning",
        "Code integration",
        "Real-time collaboration",
        "Performance analytics"
      ],
      cta: "See Tech Solutions"
    },
    {
      icon: <GraduationCap className="h-16 w-16 text-primary" />,
      title: "Educational Institutions",
      description: "Manage academic projects, research initiatives, and institutional operations with tools designed for educational environments.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      features: [
        "Academic project templates",
        "Research management",
        "Student collaboration",
        "Institution-wide reporting"
      ],
      cta: "Explore Education Tools"
    }
  ];

  return (
    <div className="min-h-screen bg-muted font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Solutions for <span className="text-primary">Every Industry</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From government agencies to construction companies, we provide specialized tools and workflows designed for your specific industry needs.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={`${solution.title} solution preview`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {solution.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get started with a solution tailored specifically for your industry's unique challenges and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              Schedule Consultation
            </Button>
            <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90 text-lg px-8 py-3">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
