import React from 'react';
import Slider from 'react-slick';

function ProductCard({ images, name, price, details }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const truncate = (text, len) =>
    text.length > len ? text.substring(0, len) + '…' : text;

  return (
    <div className="bg-customColor/10 border border-customColor3 rounded-lg shadow hover:shadow-lg overflow-hidden hover:scale-105 hover:bg-customColor/20 hover:border-2 transition-all mx-4">
      <div className="h-64">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${name} ${idx}`}
              className="w-full h-64 object-cover"
            />
          ))}
        </Slider>
      </div>
      <div className="p-4 flex flex-col justify-between h-[180px]">
        <div>
          <h3 className="text-xl font-semibold text-customColor mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{truncate(details, 80)}</p>
        </div>
        <span className="text-[--customColor2] font-medium">{price}</span>
        <div className="flex items-center justify-between my-2">
          <button className="text-lg font-semibold text-white bg-customColor hover:bg-customColor3 w-full py-1 rounded transition-all">
            Voir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
