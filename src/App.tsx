import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatSupport } from './components/ChatSupport';
import { CallSalesButton } from './components/CallSalesButton';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { DesktopsPage } from './pages/DesktopsPage';
import { LaptopsPage } from './pages/LaptopsPage';
import { ServersPage } from './pages/ServersPage';
import { NetworkingPage } from './pages/NetworkingPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { PeripheralsPage } from './pages/PeripheralsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';
import { ProductPage } from './pages/ProductPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/desktops" element={<DesktopsPage />} />
          <Route path="/laptops" element={<LaptopsPage />} />
          <Route path="/servers" element={<ServersPage />} />
          <Route path="/networking" element={<NetworkingPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/peripherals" element={<PeripheralsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* Catch-all route for preview and other URLs */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <ChatSupport />
        <CallSalesButton />
      </div>
    </Router>
  );
}