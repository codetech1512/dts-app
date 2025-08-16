export const desktopFilters = {
  brand: ['Dell', 'HP', 'Lenovo', 'IBM'],
  processor: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'AMD Ryzen 5', 'AMD Ryzen 7'],
  memory: ['4GB', '8GB', '16GB', '32GB', '64GB'],
  storage: ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD', '1TB HDD', '2TB HDD'],
  priceRange: ['Under $500', '$500 - $750', '$750 - $1000', '$1000 - $1500', 'Over $1500'],
  condition: ['New', 'Refurbished', 'Open Box']
};

export const laptopFilters = {
  brand: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Apple'],
  processor: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'AMD Ryzen 5', 'AMD Ryzen 7'],
  memory: ['8GB', '16GB', '32GB', '64GB'],
  screenSize: ['13.3"', '14"', '15.6"', '16"', '17.3"'],
  priceRange: ['Under $1000', '$1000 - $1500', '$1500 - $2000', '$2000 - $2500', 'Over $2500'],
  condition: ['New', 'Refurbished', 'Open Box']
};

export const serverFilters = {
  brand: ['Dell', 'HP', 'Lenovo', 'Cisco', 'IBM'],
  processor: ['Intel Xeon E', 'Intel Xeon Bronze', 'Intel Xeon Silver', 'Intel Xeon Gold', 'Intel Xeon Platinum', 'AMD EPYC'],
  memory: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB+'],
  formFactor: ['1U Rack', '2U Rack', '4U Rack', 'Tower', 'Blade', 'Micro Server'],
  priceRange: ['Under $2000', '$2000 - $3000', '$3000 - $5000', '$5000 - $10000', 'Over $10000'],
  condition: ['New', 'Refurbished', 'Open Box']
};

export const networkingFilters = {
  brand: ['Cisco', 'HPE', 'Ubiquiti', 'NETGEAR', 'Juniper', 'Fortinet'],
  type: ['Managed Switch', 'Unmanaged Switch', 'Smart Switch', 'Layer 3 Switch', 'Router', 'Firewall', 'Access Point', 'Cloud Switch'],
  ports: ['8 Port', '16 Port', '24 Port', '48 Port', '96 Port'],
  speed: ['Fast Ethernet', '1 Gigabit', '10 Gigabit', '25 Gigabit', '40 Gigabit', '100 Gigabit'],
  priceRange: ['Under $500', '$500 - $1000', '$1000 - $2000', '$2000 - $5000', 'Over $5000'],
  condition: ['New', 'Refurbished', 'Open Box']
};

export const componentFilters = {
  category: ['CPU', 'Memory', 'Storage', 'Graphics', 'Motherboard', 'Power Supply', 'Cooling'],
  brand: ['Intel', 'AMD', 'NVIDIA', 'Samsung', 'Corsair', 'G.Skill', 'Kingston', 'Western Digital', 'ASUS', 'MSI'],
  socket: ['LGA 1700', 'LGA 4189', 'AM4', 'AM5', 'DDR4', 'DDR5', 'M.2 NVMe', 'PCIe 4.0', 'PCIe 5.0'],
  performance: ['Entry Level', 'Mainstream', 'High Performance', 'High-End', 'Professional', 'Enterprise'],
  priceRange: ['Under $100', '$100 - $300', '$300 - $500', '$500 - $1000', '$1000 - $2000', 'Over $2000'],
  condition: ['New', 'Refurbished', 'Open Box']
};

export const peripheralFilters = {
  category: [
    "Monitor",
    "Keyboard",
    "Mouse",
    "Printer",
    "Scanner",
    "Headset",
    "Webcam",
    "Speaker",
    "Docking Station",
  ],
  brand: [
    "Dell",
    "HP",
    "LG",
    "Logitech",
    "Jabra",
    "Canon",
    "Epson",
    "Microsoft",
    "ASUS",
    "Corsair",
    "Sony",
  ],
  connectivity: [
    "USB",
    "USB-C",
    "Wireless",
    "Bluetooth",
    "Ethernet",
    "HDMI",
    "DisplayPort",
  ],
  resolution: [
    "1080p FHD",
    "1440p QHD",
    "4K UHD",
    "5K",
    "8K",
    "1200 DPI",
    "2400 DPI",
    "N/A",
  ],
  priceRange: [
    "Under $50",
    "$50 - $100",
    "$100 - $250",
    "$250 - $500",
    "$500 - $1000",
    "Over $1000",
  ],
  condition: ["New", "Refurbished", "Open Box"],
};