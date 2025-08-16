import { useState } from 'react';
import { ChevronDown, Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const productCategories = [
    { 
      name: 'Desktops', 
      path: '/desktops',
      subcategories: [
        { name: 'Business Desktops', path: '/desktops' },
        { name: 'Dell OptiPlex Series', path: '/desktops' },
        { name: 'HP EliteDesk Series', path: '/desktops' },
        { name: 'Gaming Desktops', path: '/desktops' },
        { name: 'Workstations', path: '/desktops' },
        { name: 'All-in-One PCs', path: '/desktops' },
        { name: 'Mini PCs', path: '/desktops' },
        { name: 'Refurbished Desktops', path: '/desktops' }
      ] 
    },
    { 
      name: 'Laptops', 
      path: '/laptops',
      subcategories: [
        { name: 'Business Laptops', path: '/laptops' },
        { name: 'Gaming Laptops', path: '/laptops' },
        { name: 'Ultrabooks', path: '/laptops' },
        { name: 'Workstation Laptops', path: '/laptops' },
        { name: '2-in-1 Convertibles', path: '/laptops' },
        { name: 'Rugged Laptops', path: '/laptops' },
        { name: 'Budget Laptops', path: '/laptops' },
        { name: 'MacBooks', path: '/laptops' }
      ] 
    },
    { 
      name: 'Servers', 
      path: '/servers',
      subcategories: [
        { name: 'Rack Mount Servers', path: '/servers' },
        { name: 'Tower Servers', path: '/servers' },
        { name: 'Blade Servers', path: '/servers' },
        { name: 'Storage Servers', path: '/servers' },
        { name: 'Edge Computing', path: '/servers' },
        { name: 'Server Accessories', path: '/servers' },
        { name: 'Virtualization', path: '/servers' },
        { name: 'Server Management', path: '/servers' }
      ] 
    },
    { 
      name: 'Networking', 
      path: '/networking',
      subcategories: [
        { name: 'Enterprise Switches', path: '/networking' },
        { name: 'Routers & Gateways', path: '/networking' },
        { name: 'Wireless Access Points', path: '/networking' },
        { name: 'Firewalls & Security', path: '/networking' },
        { name: 'Network Storage', path: '/networking' },
        { name: 'Cables & Adapters', path: '/networking' },
        { name: 'VoIP Systems', path: '/networking' },
        { name: 'Network Management', path: '/networking' }
      ] 
    },
    { 
      name: 'Components', 
      path: '/components',
      subcategories: [
        { name: 'Processors (CPU)', path: '/components' },
        { name: 'Graphics Cards (GPU)', path: '/components' },
        { name: 'Motherboards', path: '/components' },
        { name: 'Memory (RAM)', path: '/components' },
        { name: 'Storage (SSD/HDD)', path: '/components' },
        { name: 'Power Supplies', path: '/components' },
        { name: 'Cooling Systems', path: '/components' },
        { name: 'Cases & Accessories', path: '/components' }
      ] 
    },
    { 
      name: 'Peripherals', 
      path: '/peripherals',
      subcategories: [
        { name: 'Monitors & Displays', path: '/peripherals' },
        { name: 'Keyboards & Mice', path: '/peripherals' },
        { name: 'Printers & Scanners', path: '/peripherals' },
        { name: 'Audio & Headsets', path: '/peripherals' },
        { name: 'Webcams & Cameras', path: '/peripherals' },
        { name: 'Docking Stations', path: '/peripherals' },
        { name: 'External Storage', path: '/peripherals' },
        { name: 'Office Accessories', path: '/peripherals' }
      ] 
    }
  ];

  return (
    <header className="bg-[var(--grey-darker)] border-b border-[var(--grey-medium)]">
      {/* Top bar */}
      <div 
        className="py-2"
        style={{
          background: `linear-gradient(90deg, var(--dark-green-primary) 0%, var(--dark-green-secondary) 50%, var(--dark-green-primary) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <span className="text-white text-sm">24/7 Technical Support</span>
              <span className="text-white text-sm">Enterprise Solutions Available</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/services" className="text-white text-sm hover:text-[var(--dark-green-light)] transition-colors">Support</Link>
              <Link to="/contact" className="text-white text-sm hover:text-[var(--dark-green-light)] transition-colors">Contact</Link>
              <a href="#" className="text-white text-sm hover:text-[var(--dark-green-light)] transition-colors">Track Order</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--dark-green-primary) 0%, var(--dark-green-accent) 100%)`
              }}
            >
              <span className="text-white text-xl relative z-10">DTS</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            </div>
            <div>
              <h1 className="text-white text-2xl tracking-wide">Dynamic Tech Supply</h1>
              <p className="text-[var(--grey-lighter)] text-xs tracking-wider">Enterprise IT Solutions</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, categories..."
                className="w-full py-3 px-4 pr-12 bg-[var(--grey-medium)] text-white placeholder-[var(--grey-lighter)] rounded-lg border border-[var(--grey-light)] focus:outline-none focus:border-[var(--dark-green-accent)] focus:ring-2 focus:ring-[var(--dark-green-accent)]/20 transition-all"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--grey-lighter)] w-5 h-5" />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-medium)] transition-all">
              <User className="w-5 h-5 mr-2" />
              Account
            </Button>
            <Button variant="ghost" className="text-white hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-medium)] relative transition-all">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
              <span className="absolute -top-2 -right-2 bg-[var(--dark-green-primary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-glow">3</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className="border-t border-[var(--grey-light)]"
        style={{
          background: `linear-gradient(90deg, var(--grey-medium) 0%, var(--grey-light) 50%, var(--grey-medium) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3">
            <Button
              variant="ghost"
              className="text-white hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-dark)] lg:hidden transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>

            <div className="hidden lg:flex items-center space-x-8">
              {productCategories.map((category) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger 
                    className="flex items-center text-white hover:text-[var(--dark-green-accent)] hover:bg-[var(--grey-dark)] transition-all px-3 py-2 rounded-md bg-transparent border-none cursor-pointer"
                    onClick={() => navigate(category.path)}
                  >
                    {category.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[var(--grey-dark)] border border-[var(--grey-light)] shadow-xl">
                    {category.subcategories.map((subcategory) => (
                      <DropdownMenuItem 
                        key={subcategory.name} 
                        className="text-white hover:bg-[var(--dark-green-accent)] hover:text-white transition-all cursor-pointer"
                        onClick={() => navigate(subcategory.path)}
                      >
                        {subcategory.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
              
              <Link to="/services" className="text-white hover:text-[var(--dark-green-accent)] transition-colors">Services</Link>
              <Link to="/industries" className="text-white hover:text-[var(--dark-green-accent)] transition-colors">Industries</Link>
              <Link to="/about" className="text-white hover:text-[var(--dark-green-accent)] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}