import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Monitor, Server, Wifi, HardDrive, Cpu, Network } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function ProductCategories() {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 1,
      name: 'Desktop Computers',
      description: 'Professional desktop solutions for business and enterprise environments',
      icon: Monitor,
      image: '/desktop1.png',
      products: '350+ Products',
      route: '/desktops'
    },
    {
      id: 2,
      name: 'Servers & Workstations',
      description: 'High-performance servers and workstations for enterprise applications',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      products: '245+ Products',
      route: '/servers'
    },
    {
      id: 3,
      name: 'Networking Equipment',
      description: 'Routers, switches, and networking solutions for seamless connectivity',
      icon: Wifi,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      products: '180+ Products',
      route: '/networking'
    },
    {
      id: 4,
      name: 'Storage Solutions',
      description: 'Enterprise storage systems, NAS, and backup solutions',
      icon: HardDrive,
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      products: '320+ Products',
      route: '/components'
    },
    {
      id: 5,
      name: 'Computing Components',
      description: 'Processors, graphics cards, memory, and essential components',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      products: '450+ Products',
      route: '/components'
    },
    {
      id: 6,
      name: 'Network Security',
      description: 'Firewalls, security appliances, and protection solutions',
      icon: Network,
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      products: '95+ Products',
      route: '/networking'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl text-gray-900 mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of IT hardware and solutions designed to meet your business needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="bg-white border border-gray-200 hover:border-[var(--dark-green-accent)] hover:shadow-lg transition-all duration-500 group overflow-hidden animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(category.route)}
              >
                <div className="relative">
                  <div className="p-4 bg-white relative overflow-hidden">
                    {/* Green layering on top */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-6 opacity-30"
                      style={{
                        background: `linear-gradient(90deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 50%, var(--dark-green-primary) 100%)`
                      }}
                    />
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 relative z-10"
                    />
                  </div>
                  <div 
                    className="absolute top-8 left-8 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 z-20"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
                    }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 text-white z-20">
                    <span 
                      className="text-sm px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
                      style={{
                        background: `linear-gradient(135deg, var(--dark-green-primary)/80 0%, var(--dark-green-accent)/80 100%)`
                      }}
                    >
                      {category.products}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <Button 
                    className="w-full text-white border-2 border-[var(--dark-green-accent)] hover:bg-[var(--dark-green-accent)] transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 100%)`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(category.route);
                    }}
                  >
                    Browse Category
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}