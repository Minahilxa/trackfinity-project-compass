
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const offices = [
    {
      city: "Riyadh",
      country: "Saudi Arabia",
      address: "King Fahd Road, Business District",
      phone: "+966 11 234 5678",
      hours: "Sunday - Thursday: 9:00 AM - 6:00 PM"
    },
    {
      city: "Doha",
      country: "Qatar", 
      address: "West Bay, Financial District",
      phone: "+974 4444 5678",
      hours: "Sunday - Thursday: 9:00 AM - 6:00 PM"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "Canary Wharf, Financial Centre",
      phone: "+44 20 7123 4567",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-muted font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project management needs. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">hello@trackfinity.io</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Phone Support</p>
                        <p className="text-gray-600">Available in all regions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Response</h3>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call our regional offices directly.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Demo Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600">
              We're here to support you across three strategic locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                  <p className="text-primary font-semibold mb-3">{office.country}</p>
                  <p className="text-gray-600 mb-2">{office.address}</p>
                  <p className="text-gray-600 mb-2 flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {office.phone}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {office.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
