import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryLayout } from '../components/category/CategoryLayout';
import { ProductCard } from '../components/category/ProductCard';
import { useFilters } from '../hooks/useFilters';
import { networkingProducts } from '../constants/products';
import { networkingFilters } from '../constants/filters';

export function NetworkingPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { filters, handleFilterChange } = useFilters({
    brand: [],
    type: [],
    ports: [],
    speed: [],
    priceRange: [],
    condition: []
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <CategoryLayout
      title="Networking Equipment"
      description="Enterprise-grade switches, routers, firewalls, and wireless solutions for modern network infrastructure."
      products={networkingProducts}
      filterOptions={networkingFilters}
      filters={filters}
      viewMode={viewMode}
      onFilterChange={handleFilterChange}
      onViewModeChange={setViewMode}
    >
      {networkingProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          badgeColor="bg-blue-600"
          onClick={handleProductClick}
          category="networking"
        />
      ))}
    </CategoryLayout>
  );
}