import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryLayout } from '../components/category/CategoryLayout';
import { ProductCard } from '../components/category/ProductCard';
import { useFilters } from '../hooks/useFilters';
import { componentProducts } from '../constants/products';
import { componentFilters } from '../constants/filters';

export function ComponentsPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { filters, handleFilterChange } = useFilters({
    category: [],
    brand: [],
    socket: [],
    performance: [],
    priceRange: [],
    condition: []
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <CategoryLayout
      title="Computer Components"
      description="High-performance processors, memory, storage, and graphics cards for custom builds and system upgrades."
      products={componentProducts}
      filterOptions={componentFilters}
      filters={filters}
      viewMode={viewMode}
      onFilterChange={handleFilterChange}
      onViewModeChange={setViewMode}
    >
      {componentProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          badgeColor="bg-orange-500"
          onClick={handleProductClick}
        />
      ))}
    </CategoryLayout>
  );
}