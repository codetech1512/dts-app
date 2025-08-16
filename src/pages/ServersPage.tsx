import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryLayout } from '../components/category/CategoryLayout';
import { ProductCard } from '../components/category/ProductCard';
import { useFilters } from '../hooks/useFilters';
import { serverProducts } from '../constants/products';
import { serverFilters } from '../constants/filters';

export function ServersPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { filters, handleFilterChange } = useFilters({
    brand: [],
    processor: [],
    memory: [],
    formFactor: [],
    priceRange: [],
    condition: []
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <CategoryLayout
      title="Enterprise Servers"
      description="High-performance rack mount and tower servers for enterprise computing, virtualization, and data center applications."
      products={serverProducts}
      filterOptions={serverFilters}
      filters={filters}
      viewMode={viewMode}
      onFilterChange={handleFilterChange}
      onViewModeChange={setViewMode}
    >
      {serverProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          badgeColor="bg-purple-500"
          onClick={handleProductClick}
        />
      ))}
    </CategoryLayout>
  );
}