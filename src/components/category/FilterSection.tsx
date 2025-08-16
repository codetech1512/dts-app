import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FilterSectionProps {
  title: string;
  options: string[];
  category: string;
  filters: Record<string, string[]>;
  onFilterChange: (category: string, value: string, checked: boolean) => void;
}

export function FilterSection({ title, options, category, filters, onFilterChange }: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const selectedFilters = filters[category] || [];

  return (
    <div className="border-b border-gray-300 pb-3 mb-4 last:border-b-0 last:pb-0 last:mb-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left mb-3 hover:text-[var(--color-dark-green-secondary)] transition-colors"
      >
        <h4 className="font-semibold text-black text-sm" style={{ fontWeight: 600 }}>{title}</h4>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      
      {isExpanded && (
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedFilters.includes(option)}
                onChange={(e) => onFilterChange(category, option, e.target.checked)}
                className="rounded border-gray-400 bg-white focus:ring-[var(--color-dark-green-secondary)] focus:ring-offset-0 h-4 w-4"
                style={{ 
                  backgroundColor: 'white',
                  borderColor: '#9ca3af',
                  borderWidth: '2px'
                }}
              />
              <span className="text-xs text-black group-hover:text-[var(--color-dark-green-secondary)] transition-colors" style={{ fontWeight: 600 }}>
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}