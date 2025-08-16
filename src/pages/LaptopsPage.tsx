import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryLayout } from '../components/category/CategoryLayout';
import { ProductCard } from '../components/category/ProductCard';
import { useFilters } from '../hooks/useFilters';
import { laptopProducts } from '../constants/products';
import { laptopFilters } from '../constants/filters';

export function LaptopsPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { filters, handleFilterChange } = useFilters({
    brand: [],
    processor: [],
    memory: [],
    screenSize: [],
    priceRange: [],
    condition: []
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <CategoryLayout
      title="Business Laptops"
      description="Professional laptops and mobile workstations designed for productivity and performance in business environments."
      products={laptopProducts}
      filterOptions={laptopFilters}
      filters={filters}
      viewMode={viewMode}
      onFilterChange={handleFilterChange}
      onViewModeChange={setViewMode}
    >
      {laptopProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          badgeColor="bg-blue-500"
          onClick={handleProductClick}
        />
      ))}
    </CategoryLayout>
  );
}