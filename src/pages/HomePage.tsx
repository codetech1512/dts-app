import { Hero } from '../components/Hero';
import { ProductCategories } from '../components/ProductCategories';
import { CallToAction } from '../components/CallToAction';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Contact } from '../components/Contact';
import { Industries } from '../components/Industries';

export function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <CallToAction />
      <FeaturedProducts />
      <Contact />
      <Industries />
    </>
  );
}