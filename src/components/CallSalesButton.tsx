import { Phone } from 'lucide-react';
import { Button } from './ui/button';

export function CallSalesButton() {
  return (
    <Button
      className="fixed bottom-6 left-6 z-40 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      onClick={() => window.open('tel:+1-800-DT-SUPPLY', '_self')}
    >
      <Phone className="w-5 h-5 mr-2" />
      Call Sales Team
    </Button>
  );
}