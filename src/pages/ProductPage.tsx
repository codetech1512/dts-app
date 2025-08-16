import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Truck, HeadphonesIcon, Check, ShoppingCart, Phone, Mail, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { useState } from 'react';
import productImage from '/desktop1.png';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [bulkFormData, setBulkFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qty: ''
  });

  // Sample product data for demonstration
  const product = {
    id: id || '1',
    sku: 'DELL-OP7090-DT-I7',
    name: 'Dell OptiPlex 7090 Desktop',
    brand: 'Dell',
    category: 'Desktop Computers',
    price: 899.00,
    originalPrice: 1099.00,
    image: productImage,
    availability: 'In Stock (25 units)',
    partNumber: 'DELL-OP7090-DT-I7-001',
    warranty: '3 Years Limited Warranty',
    description: 'The Dell OptiPlex 7090 Desktop represents the pinnacle of business computing, engineered for professionals who demand exceptional performance and reliability. This flagship system features cutting-edge Intel Core i7 processing power, generous memory, and lightning-fast storage in a sleek, professional design perfect for modern offices.',
    rating: 4.9,
    reviews: 342
  };

  const handleBulkFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bulk quote request:', bulkFormData);
    // Handle bulk quote submission
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { productId: product.id, quantity });
  };

  const handleGetQuote = () => {
    console.log('Get quote for:', product.id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-[var(--grey-dark)] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-[var(--dark-green-accent)] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      {/* Spacing between header and product content */}
      <div className="py-6"></div>

      {/* Main Container with 1-inch left border */}
      <div className="w-full pl-24 pr-8 max-w-[1600px] mx-auto">
        {/* Top Section - Image, Product Info, and Forms */}
        <div className="flex gap-8">
          {/* Left Column - Product Image and Description */}
          <div className="flex-shrink-0" style={{ width: '390px' }}>
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="border border-gray-300 rounded-lg mb-6"
              style={{ width: '390px', height: '390px', objectFit: 'contain' }}
            />
            
            {/* Product Description Section - Directly below image */}
            <div style={{ width: '790px' }}>
              <h2 className="text-2xl text-black mb-4">Product Description</h2>
              <p className="text-black leading-relaxed mb-8">{product.description}</p>
              
              {/* Information Tables - Directly below description */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
                {/* General Information Table */}
                <Card className="rounded-none">
                  <CardHeader className="bg-[var(--dark-green-secondary)] text-white rounded-none">
                    <CardTitle>General Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Product Line</TableCell>
                          <TableCell className="text-black">OptiPlex</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Product Series</TableCell>
                          <TableCell className="text-black">7090 Series</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Product Type</TableCell>
                          <TableCell className="text-black">Desktop Computer</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Technical Information Table */}
                <Card className="rounded-none">
                  <CardHeader className="bg-[var(--dark-green-secondary)] text-white rounded-none">
                    <CardTitle>Technical Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Storage Capacity</TableCell>
                          <TableCell className="text-black">512GB NVMe SSD</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Cache Storage</TableCell>
                          <TableCell className="text-black">16MB L3 Cache</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Maximum Data Transfer Rate</TableCell>
                          <TableCell className="text-black">3200 MHz DDR4</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">RPM</TableCell>
                          <TableCell className="text-black">N/A (SSD)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Drive Type</TableCell>
                          <TableCell className="text-black">M.2 NVMe SSD</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-black">Drive Width</TableCell>
                          <TableCell className="text-black">22mm (M.2 2280)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Product Info Section - Adjacent to image column */}
          <div className="flex-1 min-w-0 max-w-[450px]" style={{ maxHeight: '390px', overflow: 'hidden' }}>
            {/* Product Title */}
            <h1 className="text-3xl text-black mb-6">{product.name}</h1>

            {/* Product Details */}
            <div className="space-y-3 mb-6">
              <div className="text-black">
                <span className="font-semibold">Availability:</span> {product.availability}
              </div>
              <div className="text-black">
                <span className="font-semibold">Brand:</span> {product.brand}
              </div>
              <div className="text-black">
                <span className="font-semibold">Part Number:</span> {product.partNumber}
              </div>
              <div className="text-black">
                <span className="font-semibold">Warranty:</span> {product.warranty}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl text-black">${product.price.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <div className="flex items-center border-2 border-gray-300 rounded bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 py-3 text-black text-lg min-w-[60px] text-center font-semibold bg-gray-50">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="text-white px-6 py-3 text-lg h-auto"
                style={{
                  background: `linear-gradient(135deg, var(--dark-green-secondary) 0%, var(--dark-green-accent) 100%)`
                }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <Button
                onClick={handleGetQuote}
                variant="outline"
                className="border-2 border-[var(--dark-green-secondary)] text-[var(--dark-green-secondary)] hover:bg-[var(--dark-green-secondary)] hover:text-white px-6 py-3 text-lg h-auto"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Forms Column - Bulk Form and Contact */}
          <div className="w-96 space-y-8 flex-shrink-0 ml-auto">
            {/* Bulk Quantity Form */}
            <Card className="border-[var(--dark-green-secondary)] rounded-none">
              <CardHeader className="bg-[var(--dark-green-secondary)] text-white rounded-none">
                <CardTitle className="text-lg">Looking for a Bulk Quantity of {product.partNumber}?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleBulkFormSubmit} className="space-y-6">
                  {/* First Row - Full Name and Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-black">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={bulkFormData.fullName}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, fullName: e.target.value })}
                        className="mt-1 bg-white border-2 border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)] text-black placeholder-gray-500 py-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-black">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={bulkFormData.email}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, email: e.target.value })}
                        className="mt-1 bg-white border-2 border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)] text-black placeholder-gray-500 py-3"
                      />
                    </div>
                  </div>

                  {/* Second Row - Phone and Quantity */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-black">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        value={bulkFormData.phone}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, phone: e.target.value })}
                        className="mt-1 bg-white border-2 border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)] text-black placeholder-gray-500 py-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="qty" className="text-black">Quantity</Label>
                      <Input
                        id="qty"
                        placeholder="Enter quantity"
                        value={bulkFormData.qty}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, qty: e.target.value })}
                        className="mt-1 bg-white border-2 border-gray-300 focus:border-[var(--dark-green-accent)] focus:ring-[var(--dark-green-accent)] text-black placeholder-gray-500 py-3"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white rounded-none py-4 text-lg font-semibold"
                    style={{
                      background: `linear-gradient(135deg, var(--dark-green-secondary) 0%, var(--dark-green-accent) 100%)`
                    }}
                  >
                    Submit Quote Request
                  </Button>

                  {/* Quote Processing Information */}
                  <div className="text-sm text-gray-600 mt-4 p-3 bg-gray-50 rounded-none border">
                    <p>Quotes processed weekdays 6:00 am - 6:00 pm (PST), with 5-10 minute response time. Holiday submissions addressed next working day.</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Us Box */}
            <Card className="border-[var(--dark-green-secondary)] rounded-none">
              <CardHeader className="bg-[var(--dark-green-secondary)] text-white rounded-none">
                <CardTitle className="text-lg">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-black">
                    <Phone className="w-4 h-4 mr-2 text-[var(--dark-green-secondary)]" />
                    <span>1-800-TECH-SUPPLY</span>
                  </div>
                  <div className="flex items-center text-black">
                    <Mail className="w-4 h-4 mr-2 text-[var(--dark-green-secondary)]" />
                    <span>sales@dynamictechsupply.com</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[var(--dark-green-secondary)] text-[var(--dark-green-secondary)] hover:bg-[var(--dark-green-secondary)] hover:text-white mt-3 rounded-none py-4 text-lg font-semibold"
                  >
                    Live Chat Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>




      </div>
    </div>
  );
}