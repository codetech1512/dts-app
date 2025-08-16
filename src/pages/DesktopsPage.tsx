import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryLayout } from '../components/category/CategoryLayout';
import { ProductCard } from '../components/category/ProductCard';
import { useFilters } from '../hooks/useFilters';
import { desktopProducts } from '../constants/products';
import { desktopFilters } from '../constants/filters';

export function DesktopsPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { filters, handleFilterChange } = useFilters({
    brand: [],
    processor: [],
    memory: [],
    storage: [],
    priceRange: [],
    condition: []
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <CategoryLayout
      title="Desktop Computers"
      description="Professional desktop computers and workstations for business environments. Find the perfect system for your organization."
      products={desktopProducts}
      filterOptions={desktopFilters}
      filters={filters}
      viewMode={viewMode}
      onFilterChange={handleFilterChange}
      onViewModeChange={setViewMode}
    >
      {desktopProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          badgeColor="bg-red-500"
          onClick={handleProductClick}
          category="desktop"
        />
      ))}
    </CategoryLayout>
  );
}