
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Shield, Building, BarChart3, FileText, AlertTriangle, Calendar, DollarSign, Download } from 'lucide-react';

const Features = () => {
  const featureCategories = [
    {
      title: "Time-Tracking, Simplified",
      icon: <Clock className="h-12 w-12 text-primary" />,
      features: [
        { icon: <Clock className="h-6 w-6" />, title: "Automated Timesheets", description: "Smart time tracking with automatic project detection" },
        { icon: <FileText className="h-6 w-6" />, title: "Approval Flows", description: "Streamlined approval processes for time entries" },
        { icon: <BarChart3 className="h-6 w-6" />, title: "Time-Budget Analytics", description: "Real-time insights into time vs budget performance" }
      ]
    },
    {
      title: "Enterprise Collaboration",
      icon: <Users className="h-12 w-12 text-primary" />,
      features: [
        { icon: <Users className="h-6 w-6" />, title: "Task Boards & Chat", description: "Collaborative workspaces with integrated communication" },
        { icon: <Shield className="h-6 w-6" />, title: "Role-Based Access", description: "Granular permissions and security controls" },
        { icon: <FileText className="h-6 w-6" />, title: "Real-Time Editing", description: "Simultaneous document editing and collaboration" }
      ]
    },
    {
      title: "Public-Sector Compliance",
      icon: <Shield className="h-12 w-12 text-primary" />,
      features: [
        { icon: <FileText className="h-6 w-6" />, title: "Project Lifecycle Templates", description: "Pre-built templates for government projects" },
        { icon: <Shield className="h-6 w-6" />, title: "Audit Logs", description: "Complete audit trail for compliance requirements" },
        { icon: <AlertTriangle className="h-6 w-6" />, title: "Risk Management Reports", description: "Automated risk assessment and reporting" }
      ]
    },
    {
      title: "Construction & Infrastructure",
      icon: <Building className="h-12 w-12 text-primary" />,
      features: [
        { icon: <Calendar className="h-6 w-6" />, title: "Gantt Charts with Dependencies", description: "Visual project timelines with task dependencies" },
        { icon: <Users className="h-6 w-6" />, title: "Contractor Scheduling", description: "Manage subcontractors and resource allocation" },
        { icon: <DollarSign className="h-6 w-6" />, title: "Budgeting & Material Tracking", description: "Cost control and inventory management" }
      ]
    },
    {
      title: "Analytics Dashboard",
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      features: [
        { icon: <BarChart3 className="h-6 w-6" />, title: "Custom Views by User Roles", description: "Personalized dashboards for different team members" },
        { icon: <Download className="h-6 w-6" />, title: "PDF/CSV Exports", description: "Export reports in multiple formats" },
        { icon: <AlertTriangle className="h-6 w-6" />, title: "Alerts & Deadlines", description: "Automated notifications and deadline management" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-muted font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-primary">Modern Teams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to manage complex projects, ensure compliance, and collaborate effectively across your organization.
          </p>
        </div>
      </section>

      {/* Features Sections */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-muted' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-6 flex justify-center">{category.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Features;
