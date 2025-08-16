import { useState } from 'react';

export function useFilters(initialFilters: Record<string, string[]>) {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [category]: checked 
        ? [...(prev[category] || []), value]
        : (prev[category] || []).filter(item => item !== value)
    }));
  };

  return { filters, handleFilterChange };
}