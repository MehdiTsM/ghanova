import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const bannerImages = [
  '/images/banner1.jpg',
  '/images/banner6.jpg',
  '/images/banner5.jpg',
];

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-[70vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImages.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{
            color: 'black',
            WebkitTextStroke: '1px #111211',
            textShadow: `
              0 0 5px #70ba50,
              0 0 10px #038703,
              0 0 15px #636363,
              0 0 25px #6ef5a2,
              0 0 35px #636363
            `,
          }}
        >
          Bienvenue chez Ghanova Wear
        </h1>
        <ScrollLink
          to="products"
          smooth={true}
          duration={500}
          className="bg-customColor/90 hover:bg-customColor3 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition cursor-pointer"
        >
          Voir les produits
        </ScrollLink>
      </div>
    </div>
  );
}

export default BannerCarousel;
