import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Logo from '../images/ghanovaLogo.png';
function Footer() {
  return (
    <footer className="bg-customColor2 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Brand & Description */}
        <div className="flex-1 flex flex-col items-center">
          <img src={Logo} className="w-24 object-contain"/>
          <p className="text-sm text-gray-200 max-w-sm text-center">
            Votre boutique de confiance pour des vêtements de sport stylés, confortables et de qualité supérieure.
          </p>
        </div>



        {/* Contact & Social */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-center">
          <h3 className="text-lg font-semibold mb-3 text-customColor">Contact</h3>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-customColor3 transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-customColor3 transition"><FaInstagram size={20} /></a>
            <a href="mailto:contact@ghanovawear.com" className="hover:text-customColor3 transition"><FaEnvelope size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} <span className='text-customColor'>GhanovaWear</span>. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;

