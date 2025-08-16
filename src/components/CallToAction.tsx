import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function CallToAction() {
  const benefits = [
    'Enterprise-grade reliability',
    'Competitive bulk pricing',
    '24/7 technical support',
    'Fast nationwide shipping'
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, var(--dark-green-primary) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, var(--dark-green-secondary) 0%, transparent 50%),
          linear-gradient(135deg, var(--grey-darkest) 0%, var(--grey-darker) 100%)
        `
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--dark-green-primary) 25%, transparent 25%),
            linear-gradient(-45deg, var(--dark-green-primary) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, var(--dark-green-secondary) 75%),
            linear-gradient(-45deg, transparent 75%, var(--dark-green-secondary) 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      />

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to Upgrade Your 
            <span className="block bg-gradient-to-r from-[var(--dark-green-light)] to-white bg-clip-text text-transparent">
              IT Infrastructure?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses who trust DT Supply for their technology needs. 
            Get started with a custom quote today and discover why we're the preferred IT partner.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center md:justify-start space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-[var(--dark-green-light)]" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-white border-2 border-transparent hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 100%)`
              }}
            >
              Request Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              className="border-2 border-white bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
            >
              Call Sales Team
            </Button>
          </div>

          <p className="text-gray-400 mt-6">
            Questions? Call us at <span className="text-white">1-800-DT-SUPPLY</span> or chat with our experts below
          </p>
        </div>
      </div>
    </section>
  );
}