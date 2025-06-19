
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Globe, Users, Award, Building2 } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Mission",
      description: "Empower public and private sectors to manage projects seamlessly with cutting-edge technology and compliance-first approach."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Vision", 
      description: "Become the leading project management system for regulated and infrastructure-heavy industries across the globe."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Inspired by project management excellence from Saudi Arabia, Qatar, and London, bringing world-class solutions together."
    }
  ];

  const team = [
    {
      region: "Saudi Arabia",
      office: "Riyadh",
      focus: "Public Sector & Compliance",
      icon: <Building2 className="h-12 w-12 text-primary" />
    },
    {
      region: "Qatar",
      office: "Doha", 
      focus: "Construction & Infrastructure",
      icon: <Award className="h-12 w-12 text-primary" />
    },
    {
      region: "United Kingdom",
      office: "London",
      focus: "Enterprise Technology",
      icon: <Users className="h-12 w-12 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-muted font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">Trackfinity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're revolutionizing project management by combining the best practices from leading markets 
            in Saudi Arabia, Qatar, and the United Kingdom.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              Three strategic locations, one unified vision for project management excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((office, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">{office.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{office.region}</h3>
                  <p className="text-primary font-semibold mb-3">{office.office}</p>
                  <p className="text-gray-600">{office.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Trackfinity was born from the recognition that modern project management requires 
              more than just task tracking. In today's complex business environment, teams need 
              sophisticated tools that can handle enterprise-level collaboration, strict compliance 
              requirements, and the unique challenges of construction and infrastructure projects.
            </p>
            <p>
              Drawing inspiration from the innovative project management practices in Saudi Arabia's 
              Vision 2030 initiatives, Qatar's infrastructure excellence, and London's financial 
              and technology sectors, we've created a platform that brings together the best of 
              all worlds.
            </p>
            <p>
              Whether you're managing a government initiative, coordinating a construction project, 
              or leading an enterprise team, Trackfinity provides the tools, compliance features, 
              and insights you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
