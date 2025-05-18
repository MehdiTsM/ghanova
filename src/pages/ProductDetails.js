import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import OrderModal from '../OrderModal';

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products[productId];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return <div className="text-center text-red-600 mt-10">Produit non trouvé</div>;
  }

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
    >
      <FaChevronRight className="text-customColor text-lg" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
    >
      <FaChevronLeft className="text-customColor text-lg" />
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-customColor hover:underline font-semibold"
      >
        ← Retour
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Carousel */}
        <div className="w-full h-[400px] relative rounded overflow-hidden shadow-md">
          <Slider {...sliderSettings}>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx}`}
                className="w-full h-[400px] object-cover rounded"
              />
            ))}
          </Slider>
        </div>

        {/* Product Info */}
        <div className="space-y-6 h-full flex flex-col justify-around">
          <div>
            <h1 className="text-3xl font-bold text-customColor2">{product.name}</h1>
            <p className="text-xl font-semibold text-customColor">{product.price}</p>
            <p className="text-gray-700 leading-relaxed">{product.details}</p>
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-customColor hover:bg-customColor3 text-white font-semibold py-2 px-6 rounded transition-all"
            >
              Commander
            </button>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        productName={product.name}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ProductDetails;
