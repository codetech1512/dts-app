import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'Servers & Workstations',
        'Networking Equipment',
        'Storage Solutions',
        'Computing Components',
        'Monitors & Displays',
        'Security Appliances'
      ]
    },
    {
      title: 'Solutions',
      links: [
        'Enterprise IT',
        'Cloud Infrastructure',
        'Data Center Solutions',
        'Network Security',
        'Backup & Recovery',
        'Virtualization'
      ]
    },
    {
      title: 'Support',
      links: [
        'Technical Support',
        'Product Documentation',
        'Download Center',
        'Warranty Information',
        'RMA Process',
        'Training Resources'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Dynamic Tech Supply',
        'Careers',
        'News & Press',
        'Partner Program',
        'Certifications',
        'Contact Us'
      ]
    }
  ];

  return (
    <footer className="bg-[var(--grey-darkest)]">
      {/* Newsletter Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div 
            className="p-8 rounded-2xl shadow-lg"
            style={{
              background: `linear-gradient(90deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 50%, var(--dark-green-primary) 100%)`
            }}
          >
            <div className="grid lg:grid-cols-2 gap-6 items-center animate-fade-in-up">
              <div>
                <h3 className="text-2xl text-white mb-2">Stay Updated with Dynamic Tech Supply</h3>
                <p className="text-gray-200">
                  Get the latest product updates and exclusive offers delivered to your inbox.
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 py-3 px-4 bg-white/10 text-white placeholder-gray-300 rounded-lg border border-white/20 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 backdrop-blur-sm transition-all"
                />
                <Button className="bg-white text-[var(--dark-green-primary)] hover:bg-gray-100 px-6 transition-all duration-300 hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Section */}
      <div className="py-8 bg-white"></div>

      {/* Main Footer Content */}
      <div 
        className="py-16 border-t border-[var(--grey-medium)]"
        style={{
          background: `linear-gradient(180deg, var(--grey-darkest) 0%, var(--grey-darker) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
                  }}
                >
                  <span className="text-white text-xl relative z-10">DTS</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-white text-2xl tracking-wide">Dynamic Tech Supply</h3>
                  <p className="text-[var(--grey-lighter)] text-sm tracking-wider">Enterprise IT Solutions</p>
                </div>
              </div>
              
              <p className="text-[var(--grey-lighter)] leading-relaxed">
                Your trusted partner for enterprise IT technology solutions. We provide cutting-edge hardware, 
                networking equipment, and comprehensive support services to businesses worldwide.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
                    }}
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[var(--grey-lighter)]">1-800-DYNAMIC (396-2642)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
                    }}
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[var(--grey-lighter)]">sales@dynamictechsupply.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
                    }}
                  >
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[var(--grey-lighter)]">123 Tech Street, Silicon Valley, CA 94000</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-medium)] transition-all">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-medium)] transition-all">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-medium)] transition-all">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-medium)] transition-all">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-white text-lg">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-[var(--grey-medium)]" />

      {/* Bottom Footer */}
      <div className="py-6 bg-[var(--grey-darkest)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                          <div className="text-[var(--grey-lighter)] text-sm">
              © 2025 Dynamic Tech Supply. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
                              <a href="#" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] transition-colors">
                  Privacy Policy
              </a>
                              <a href="#" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] transition-colors">
                  Terms of Service
              </a>
                              <a href="#" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] transition-colors">
                  Cookie Policy
              </a>
                              <a href="#" className="text-[var(--grey-lighter)] hover:text-[var(--dark-green-accent)] transition-colors">
                  Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}