import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryLayout } from '../components/category/CategoryLayout';
import { ProductCard } from '../components/category/ProductCard';
import { useFilters } from '../hooks/useFilters';
import { peripheralProducts } from '../constants/products';
import { peripheralFilters } from '../constants/filters';

export function PeripheralsPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { filters, handleFilterChange } = useFilters({
    category: [],
    brand: [],
    connectivity: [],
    resolution: [],
    priceRange: [],
    condition: []
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <CategoryLayout
      title="Peripherals & Accessories"
      description="Professional monitors, keyboards, mice, printers, and audio equipment for complete workspace solutions."
      products={peripheralProducts}
      filterOptions={peripheralFilters}
      filters={filters}
      viewMode={viewMode}
      onFilterChange={handleFilterChange}
      onViewModeChange={setViewMode}
    >
      {peripheralProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          badgeColor="bg-green-500"
          onClick={handleProductClick}
        />
      ))}
    </CategoryLayout>
  );
}