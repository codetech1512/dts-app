import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    partNumber: '',
    quantity: '',
    askingPrice: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      className="py-20"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, var(--dark-green-primary) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, var(--dark-green-secondary) 0%, transparent 50%),
          linear-gradient(135deg, var(--grey-darkest) 0%, var(--grey-darker) 100%)
        `
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-4xl text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Get in touch with our experts for personalized solutions.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/95 backdrop-blur-sm border border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 block">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partNumber" className="text-gray-700 block">Part Number</Label>
                  <Input
                    id="partNumber"
                    name="partNumber"
                    type="text"
                    placeholder="Product part number"
                    value={formData.partNumber}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-gray-700 block">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="How many units?"
                    min="1"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)]"
                  />
                </div>
              </div>



              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)]"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 100%)`
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            {/* Quick Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-[var(--dark-green-accent)] mb-2" />
                  <span className="text-sm text-gray-600">1-800-DT-SUPPLY</span>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-[var(--dark-green-accent)] mb-2" />
                  <span className="text-sm text-gray-600">sales@dtsupply.com</span>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-[var(--dark-green-accent)] mb-2" />
                  <span className="text-sm text-gray-600">Silicon Valley, CA</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}