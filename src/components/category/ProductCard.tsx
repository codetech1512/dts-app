import { ImageWithFallback } from '../figma/ImageWithFallback';
import universalProductImage from '/placeholder-product.svg';
import desktopProductImage from '/desktop1.png';
import networkingProductImage from '/placeholder-networking.svg';

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  badge: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  badgeColor: string;
  onClick: (productId: string) => void;
  category?: string;
}

export function ProductCard({ product, viewMode, badgeColor, onClick, category }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', product.id);
  };

  // Use category-specific images for different product types
  const getProductImage = () => {
    if (category === 'desktop' || category === 'desktops') {
      return desktopProductImage;
    }
    if (category === 'networking' || category === 'network') {
      return networkingProductImage;
    }
    return universalProductImage;
  };

  if (viewMode === 'list') {
    return (
      <div
        className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex overflow-hidden w-full"
        style={{ height: '180px', minHeight: '180px', maxHeight: '180px' }}
        onClick={() => onClick(product.id)}
      >
        <div className="relative w-40 h-full flex-shrink-0">
          <img
            src={getProductImage()}
            alt="Samsung Memory Module"
            className="object-contain bg-white w-full h-full p-2"
          />
        </div>
        
        <div className="flex flex-col flex-1 p-3 min-w-0 overflow-hidden">
          <div className="flex-1 min-h-0 overflow-hidden">
            <h3 className="text-sm text-black mb-2 break-words whitespace-normal leading-tight overflow-hidden" style={{ fontWeight: 600 }}>
              M393ABG40M52-CAE Samsung 256GB
            </h3>
            <div className="text-xs text-black mb-1 break-words whitespace-normal overflow-hidden" style={{ fontWeight: 600 }}>
              Part-Number: M386ABG40M51-CAE
            </div>
            <div className="text-xs text-black mb-2 break-words whitespace-normal overflow-hidden" style={{ fontWeight: 600 }}>
              Manufacturer: Samsung
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-black" style={{ fontWeight: 600 }}>$1,176.92</span>
              <span className="text-sm text-black line-through" style={{ fontWeight: 600 }}>$2,615.38</span>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors w-full"
              style={{ fontWeight: 600 }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col overflow-hidden border-r border-b border-gray-200 w-full"
      style={{ height: '400px', minHeight: '400px', maxHeight: '400px' }}
      onClick={() => onClick(product.id)}
    >
      {/* Image Section - Fixed height */}
      <div className="relative w-full h-40 bg-white flex-shrink-0">
        <img
          src={getProductImage()}
          alt="Samsung Memory Module"
          className="object-contain w-full h-full p-3"
        />
      </div>
      
      {/* Content Section - Fill remaining space */}
      <div className="flex flex-col flex-1 p-3 min-h-0 overflow-hidden">
        {/* Product Info - Take available space but allow content to determine height */}
        <div className="flex-grow-0 min-h-0">
          <h3 className="text-sm text-black mb-2 break-words whitespace-normal leading-tight" style={{ fontWeight: 600 }}>
            M393ABG40M52-CAE Samsung 256GB
          </h3>
          
          <div className="text-xs text-black mb-2 break-words whitespace-normal" style={{ fontWeight: 600 }}>
            Part-Number: M386ABG40M51-CAE
          </div>
          
          <div className="text-xs text-black mb-2 break-words whitespace-normal" style={{ fontWeight: 600 }}>
            Manufacturer: Samsung
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-sm text-black" style={{ fontWeight: 600 }}>$1,176.92</span>
            <span className="text-sm text-black line-through" style={{ fontWeight: 600 }}>$2,615.38</span>
          </div>
        </div>
        
        {/* Button Section - Fixed at bottom with minimal spacing */}
        <div className="flex-shrink-0 mt-auto">
          <button
            onClick={handleAddToCart}
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition-colors w-full"
            style={{ fontWeight: 600 }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}