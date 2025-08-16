import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Monitor, Cpu, HardDrive, Server, Wifi, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '/hero1.png';
import serverImage from '/hero2.png';
import networkingImage from '/hero3.png';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBanners = [
    {
      id: 1,
      badge: 'Next-Gen AI Computing',
      title: 'NVIDIA DGX',
      subtitle: 'Professional Workstation',
      description: 'Unleash the power of artificial intelligence with NVIDIA\'s flagship DGX workstation. Featuring cutting-edge GPU architecture, enterprise-grade performance, and unmatched reliability for the most demanding AI and machine learning workloads.',
      image: heroImage,
      features: [
        { icon: Cpu, title: 'NVIDIA H100', subtitle: '8x GPUs' },
        { icon: HardDrive, title: '30TB Storage', subtitle: 'NVMe RAID' },
        { icon: Monitor, title: 'AI Optimized', subtitle: 'Enterprise' }
      ],
      primaryButton: 'Get Quote Now',
      secondaryButton: 'View Specifications',
      backgroundVariant: 'default'
    },
    {
      id: 2,
      badge: 'Enterprise Infrastructure',
      title: 'Dell PowerEdge',
      subtitle: 'Server Solutions',
      description: 'Transform your data center with Dell\'s industry-leading PowerEdge servers. Built for reliability, scalability, and performance to handle your most critical enterprise workloads with confidence.',
      image: serverImage,
      features: [
        { icon: Server, title: 'Intel Xeon', subtitle: 'Scalable' },
        { icon: Database, title: '128GB RAM', subtitle: 'DDR4 ECC' },
        { icon: HardDrive, title: '10TB Storage', subtitle: 'RAID 10' }
      ],
      primaryButton: 'Configure Server',
      secondaryButton: 'View Portfolio',
      backgroundVariant: 'server'
    },
    {
      id: 3,
      badge: 'Network Infrastructure',
      title: 'Cisco Catalyst',
      subtitle: 'Switching Solutions',
      description: 'Build a robust network foundation with Cisco\'s Catalyst switching portfolio. Advanced security, intelligent automation, and seamless scalability for modern enterprise networks.',
      image: networkingImage,
      features: [
        { icon: Wifi, title: '48-Port', subtitle: 'Gigabit' },
        { icon: Monitor, title: 'Layer 3', subtitle: 'Switching' },
        { icon: Database, title: 'PoE+', subtitle: 'Support' }
      ],
      primaryButton: 'Get Quote',
      secondaryButton: 'Learn More',
      backgroundVariant: 'networking'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroBanners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentBanner = heroBanners[currentSlide];

  // Background variations for different banners
  const getBackgroundStyle = (variant: string) => {
    switch (variant) {
      case 'server':
        return {
          background: `
            radial-gradient(circle at 30% 70%, var(--dark-green-secondary) 0%, transparent 45%),
            radial-gradient(circle at 70% 30%, var(--dark-green-accent) 0%, transparent 45%),
            linear-gradient(120deg, var(--grey-darkest) 0%, var(--grey-dark) 50%, var(--grey-darker) 100%)
          `
        };
      case 'networking':
        return {
          background: `
            radial-gradient(ellipse at 40% 60%, var(--dark-green-accent) 0%, transparent 40%),
            radial-gradient(circle at 60% 40%, var(--dark-green-light) 0%, transparent 35%),
            linear-gradient(45deg, var(--grey-darker) 0%, var(--grey-darkest) 40%, var(--grey-dark) 100%)
          `
        };
      default:
        return {
          background: `
            radial-gradient(circle at 20% 80%, var(--dark-green-primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--dark-green-secondary) 0%, transparent 50%),
            linear-gradient(135deg, var(--grey-darkest) 0%, var(--grey-darker) 100%)
          `
        };
    }
  };

  return (
    <section 
      className="relative py-20 overflow-hidden transition-all duration-700"
      style={getBackgroundStyle(currentBanner.backgroundVariant)}
    >
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          backgroundImage: currentBanner.backgroundVariant === 'server'
            ? `
              linear-gradient(60deg, var(--dark-green-secondary) 25%, transparent 25%),
              linear-gradient(-60deg, var(--dark-green-secondary) 25%, transparent 25%),
              linear-gradient(60deg, transparent 75%, var(--dark-green-accent) 75%),
              linear-gradient(-60deg, transparent 75%, var(--dark-green-accent) 75%)
            `
            : currentBanner.backgroundVariant === 'networking'
            ? `
              linear-gradient(30deg, var(--dark-green-accent) 25%, transparent 25%),
              linear-gradient(-30deg, var(--dark-green-accent) 25%, transparent 25%),
              linear-gradient(30deg, transparent 75%, var(--dark-green-light) 75%),
              linear-gradient(-30deg, transparent 75%, var(--dark-green-light) 75%)
            `
            : `
              linear-gradient(45deg, var(--dark-green-primary) 25%, transparent 25%),
              linear-gradient(-45deg, var(--dark-green-primary) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, var(--dark-green-secondary) 75%),
              linear-gradient(-45deg, transparent 75%, var(--dark-green-secondary) 75%)
            `,
          backgroundSize: currentBanner.backgroundVariant === 'server' 
            ? '80px 80px' 
            : currentBanner.backgroundVariant === 'networking' 
            ? '40px 40px' 
            : '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          animation: 'float 6s ease-in-out infinite'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <Badge 
              key={`badge-${currentBanner.id}`}
              className="mb-6 backdrop-blur-sm border border-white/20 bg-[var(--dark-green-primary)]/80 hover:bg-[var(--dark-green-secondary)]/80 text-white transition-all duration-500"
            >
              {currentBanner.badge}
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl text-white mb-6 leading-tight transition-all duration-500">
              <span className="bg-gradient-to-r from-white to-[var(--dark-green-light)] bg-clip-text text-transparent">
                {currentBanner.title}
              </span>
              <br />
              <span className="text-3xl lg:text-4xl text-white">
                {currentBanner.subtitle}
              </span>
            </h1>
            
            <p className="text-lg text-white mb-8 leading-relaxed max-w-2xl transition-all duration-500">
              <span>{currentBanner.description}</span>
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {currentBanner.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={`feature-${currentBanner.id}-${index}`} className="flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 hover:bg-white/15">
                    <div className="w-10 h-10 rounded-lg bg-[var(--dark-green-primary)] flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{feature.title}</div>
                      <div className="text-white/80 text-xs font-medium">{feature.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="text-white border-2 border-transparent hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 100%)`
                }}
              >
                {currentBanner.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-[var(--dark-green-accent)] text-[var(--dark-green-accent)] hover:bg-[var(--dark-green-accent)] hover:text-white transition-all duration-300"
              >
                {currentBanner.secondaryButton}
              </Button>
            </div>
          </div>

          {/* Right Content - Immersive Product Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Immersive background glow effects */}
              <div 
                className="absolute -inset-8 opacity-40 blur-3xl transition-all duration-700"
                style={{
                  background: currentBanner.backgroundVariant === 'server'
                    ? `radial-gradient(circle, var(--dark-green-light) 0%, var(--dark-green-secondary) 40%, transparent 70%)`
                    : currentBanner.backgroundVariant === 'networking'
                    ? `radial-gradient(circle, var(--dark-green-accent) 0%, var(--dark-green-light) 40%, transparent 70%)`
                    : `radial-gradient(circle, var(--dark-green-accent) 0%, var(--dark-green-primary) 40%, transparent 70%)`
                }}
              />
              <div 
                className="absolute -inset-12 opacity-20 blur-2xl transition-all duration-700"
                style={{
                  background: currentBanner.backgroundVariant === 'server'
                    ? `radial-gradient(ellipse 800px 400px, var(--dark-green-accent) 0%, transparent 50%)`
                    : currentBanner.backgroundVariant === 'networking'
                    ? `radial-gradient(ellipse 600px 300px, var(--dark-green-light) 0%, transparent 50%)`
                    : `radial-gradient(ellipse 800px 400px, var(--dark-green-secondary) 0%, transparent 50%)`
                }}
              />
              
              {/* 3D Product image - no container, immersive in background */}
              <div className="relative" style={{ perspective: '1000px' }}>
                <img
                  key={`image-${currentBanner.id}`}
                  src={currentBanner.image}
                  alt={`${currentBanner.title} ${currentBanner.subtitle}`}
                  className="w-full h-96 object-contain animate-float relative z-10 transition-all duration-700 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 20px var(--dark-green-accent))',
                    transform: 'rotateY(-10deg) rotateX(5deg)'
                  }}
                />
                
                {/* Reflection effect */}
                <div 
                  className="absolute top-96 left-0 right-0 h-48 opacity-20 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom, var(--dark-green-primary)/30 0%, transparent 100%)`,
                    transform: 'rotateX(180deg) translateY(-100%)',
                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                  }}
                />
              </div>


            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentSlide
                  ? 'bg-[var(--dark-green-accent)] shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}