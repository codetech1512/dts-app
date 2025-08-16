import { Card, CardContent } from './ui/card';
import { Building2, Heart, GraduationCap, Factory, Shield, Briefcase } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      id: 1,
      name: 'Enterprise Business',
      description: 'Complete IT infrastructure solutions for large corporations',
      icon: Building2,
      stats: '500+ Companies'
    },
    {
      id: 2,
      name: 'Healthcare',
      description: 'HIPAA-compliant systems and medical-grade computing solutions',
      icon: Heart,
      stats: '200+ Hospitals'
    },
    {
      id: 3,
      name: 'Higher Education',
      description: 'Educational technology solutions for universities and colleges',
      icon: GraduationCap,
      stats: '150+ Universities'
    },
    {
      id: 4,
      name: 'Manufacturing',
      description: 'Industrial-grade computing and automation systems',
      icon: Factory,
      stats: '300+ Facilities'
    },
    {
      id: 5,
      name: 'Government & Defense',
      description: 'Secure, compliant IT solutions for government agencies',
      icon: Shield,
      stats: '75+ Agencies'
    },
    {
      id: 6,
      name: 'Small & Medium Business',
      description: 'Cost-effective IT solutions for growing businesses',
      icon: Briefcase,
      stats: '1000+ SMBs'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl text-gray-900 mb-6">
            Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by organizations across diverse industries worldwide
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={industry.id} 
                className="bg-white border border-gray-200 hover:border-[var(--dark-green-accent)] hover:shadow-lg transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl text-gray-900 mb-2">{industry.name}</h3>
                  <span className="text-sm text-[var(--dark-green-accent)] mb-3 block">{industry.stats}</span>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}