import { ReactNode, useState } from 'react';
import { Grid, List, Filter, Search } from 'lucide-react';
import { FilterSection } from './FilterSection';

interface CategoryLayoutProps {
  title: string;
  description: string;
  products: any[];
  filterOptions: Record<string, string[]>;
  filters: Record<string, string[]>;
  viewMode: 'grid' | 'list';
  onFilterChange: (category: string, value: string, checked: boolean) => void;
  onViewModeChange: (mode: 'grid' | 'list') => void;
  children: ReactNode;
}

export function CategoryLayout({
  title,
  description,
  products,
  filterOptions,
  filters,
  viewMode,
  onFilterChange,
  onViewModeChange,
  children
}: CategoryLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Category Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-dark-green-secondary)] focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-4">
          {/* Left Sidebar - Filters */}
          <div className="w-64 bg-white border border-gray-300 rounded-lg shadow-sm sticky top-6">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-5">
                <Filter className="h-5 w-5 text-[var(--color-dark-green-secondary)]" />
                <h3 className="text-lg font-semibold text-black">Filter Products</h3>
              </div>
              
              {Object.entries(filterOptions).map(([key, options]) => (
                <FilterSection
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  options={options}
                  category={key}
                  filters={filters}
                  onFilterChange={onFilterChange}
                />
              ))}
              
              <div className="space-y-3 mt-5 pt-4 border-t border-gray-300">
                <button 
                  className="w-full text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                  style={{
                    background: `linear-gradient(135deg, var(--color-dark-green-secondary) 0%, var(--color-dark-green-accent) 100%)`
                  }}
                >
                  Apply Filters
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-black px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - Products */}
          <div className="flex-1 min-w-0">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg border border-gray-300">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-sm text-gray-600">
                  Showing {products.length} of {products.length} products
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onViewModeChange('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[var(--color-dark-green-secondary)] text-white' : 'text-gray-500 hover:text-black'} transition-colors`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onViewModeChange('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-[var(--color-dark-green-secondary)] text-white' : 'text-gray-500 hover:text-black'} transition-colors`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
                <select className="bg-white border border-gray-300 text-black px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-dark-green-secondary)]">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid - responsive grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-3 xl:grid-cols-4 gap-0' : 'flex flex-col gap-0'}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}