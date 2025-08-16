import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Desktop Supply</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for enterprise IT hardware solutions since 2010. Serving businesses across North America with cutting-edge technology and exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Desktop Supply began as a small team of IT professionals who recognized the need for a more personalized approach to enterprise hardware procurement. We started in a modest warehouse in Seattle, focusing on providing businesses with reliable desktop computers and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown into one of North America's leading IT hardware suppliers, serving thousands of businesses from startups to Fortune 500 companies. Our commitment to quality, competitive pricing, and expert support has remained unchanged since day one.
              </p>
              <p className="text-lg text-gray-600">
                Today, we offer a comprehensive range of IT solutions including desktops, laptops, servers, networking equipment, and custom-built systems, all backed by our industry-leading warranty and support services.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Desktop Supply team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a simple mission: to empower businesses with the technology they need to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Reliability</h3>
                <p className="text-gray-600">
                  We source only the highest quality hardware from trusted manufacturers, ensuring your investment delivers long-term value and dependable performance.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Partnership</h3>
                <p className="text-gray-600">
                  We build long-term relationships with our clients, serving as trusted advisors who understand your unique technology needs and business goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of technology trends to bring you the latest innovations that can give your business a competitive advantage in the marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind Desktop Supply's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
                    alt="Michael Chen - CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-green-600 font-semibold mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  20+ years in enterprise IT. Former systems engineer with expertise in large-scale deployments and strategic technology planning.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b632?w=300&h=300&fit=crop"
                    alt="Sarah Martinez - CTO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
                <p className="text-green-600 font-semibold mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Technology visionary with deep knowledge of emerging hardware trends, cloud integration, and enterprise architecture solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                    alt="David Kim - VP Sales"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">David Kim</h3>
                <p className="text-green-600 font-semibold mb-3">VP of Sales</p>
                <p className="text-gray-600 text-sm">
                  Customer-focused leader who has built lasting relationships with major enterprise clients across diverse industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100">
              Numbers that showcase our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <p className="text-green-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <p className="text-green-100">Systems Deployed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.8%</div>
              <p className="text-green-100">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-green-100">Expert Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600">
              Trusted by industry leaders and certified professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="h-12 flex items-center justify-center font-bold text-blue-600">Dell Partner</div>
              </div>
              <p className="text-sm text-gray-600">Authorized Reseller</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="h-12 flex items-center justify-center font-bold text-blue-600">HP Gold</div>
              </div>
              <p className="text-sm text-gray-600">Gold Partner</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="h-12 flex items-center justify-center font-bold text-red-600">Lenovo</div>
              </div>
              <p className="text-sm text-gray-600">Solution Provider</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="h-12 flex items-center justify-center font-bold text-green-600">ISO 9001</div>
              </div>
              <p className="text-sm text-gray-600">Quality Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="h-12 flex items-center justify-center font-bold text-purple-600">CompTIA</div>
              </div>
              <p className="text-sm text-gray-600">Certified Team</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="h-12 flex items-center justify-center font-bold text-indigo-600">VMware</div>
              </div>
              <p className="text-sm text-gray-600">Solution Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust Desktop Supply for their IT hardware needs. Let's discuss how we can support your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}