import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mb-6">
      {/* Carousel */}
      <div className="mb-12 max-w-6xl mx-auto">
        <BannerCarousel />
      </div>

      {/* Product Section */}
      <section id="products" className="max-w-7xl mx-auto my-4">
        <h2 className="text-3xl font-semibold text-customColor2 my-8 text-center">
          Produits
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <Link key={index} to={`/product/${index}`} className="w-full sm:w-[48%] lg:w-[48%] xl:w-[40%]">
              <ProductCard
                images={product.images}
                name={product.name}
                price={product.price}
                details={product.details}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
