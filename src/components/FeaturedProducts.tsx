import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function FeaturedProducts() {
  const navigate = useNavigate();
  
  const featuredProducts = [
    {
      id: '1',
      name: 'Dell OptiPlex 7090 Desktop',
      category: 'Desktop Computers',
      price: '$899',
      originalPrice: '$1,099',
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Flagship',
      specs: ['Intel Core i7-11700', '16GB DDR4 RAM', '512GB NVMe SSD']
    },
    {
      id: '2',
      name: 'HP EliteDesk 800 G9 Mini',
      category: 'Desktop Computers',
      price: '$749',
      originalPrice: null,
      rating: 4.8,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Compact',
      specs: ['Intel Core i5-12500T', '8GB DDR4 RAM', '256GB NVMe SSD']
    },
    {
      id: '3',
      name: 'Dell PowerEdge R750 Server',
      category: 'Servers',
      price: '$4,299',
      originalPrice: '$4,899',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Enterprise',
      specs: ['Intel Xeon Silver 4314', '32GB DDR4 RAM', '1TB NVMe SSD']
    },
    {
      id: '4',
      name: 'Cisco Catalyst 9300 Switch',
      category: 'Networking',
      price: '$2,849',
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Professional',
      specs: ['48-Port Gigabit', 'Layer 3 Switching', 'PoE+ Support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-5xl text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Top-rated products trusted by IT professionals worldwide
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-2 border-[var(--dark-green-accent)] text-[var(--dark-green-accent)] hover:bg-[var(--dark-green-accent)] hover:text-white transition-all duration-300"
            onClick={() => navigate('/desktops')}
          >
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="bg-white border border-gray-200 hover:border-[var(--dark-green-accent)] hover:shadow-lg transition-all duration-500 group overflow-hidden animate-fade-in-up flex flex-col h-full cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative">
                <div className="p-3 bg-white relative overflow-hidden">
                  {/* Green layering on top */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-4 opacity-30"
                    style={{
                      background: `linear-gradient(90deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 50%, var(--dark-green-primary) 100%)`
                    }}
                  />
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 relative z-10"
                  />
                </div>
                <Badge 
                  className={`absolute top-6 left-6 backdrop-blur-sm border border-white/20 z-20 ${
                    product.badge === 'Flagship' 
                      ? 'bg-orange-600/80 hover:bg-orange-700/80' 
                      : product.badge === 'Compact'
                      ? 'bg-blue-600/80 hover:bg-blue-700/80'
                      : product.badge === 'Enterprise'
                      ? 'bg-purple-600/80 hover:bg-purple-700/80'
                      : 'bg-[var(--dark-green-primary)]/80 hover:bg-[var(--dark-green-secondary)]/80'
                  }`}
                >
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-4 flex flex-col h-full">
                <div className="mb-2">
                  <span className="text-[var(--dark-green-accent)] text-sm">{product.category}</span>
                  <h3 className="text-gray-900 text-lg leading-tight mt-1">{product.name}</h3>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Specs */}
                <div className="mb-4 space-y-1 flex-grow">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="text-gray-600 text-sm">
                      • {spec}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-900 text-xl">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 text-sm line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full text-white transition-all duration-300 hover:scale-105 mt-auto"
                  style={{
                    background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 100%)`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}