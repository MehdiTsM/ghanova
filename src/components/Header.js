import React from 'react';
import Logo from '../images/ghanovaLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky w-full bg-customColor2 shadow-md shadow-customColor z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo */}
        <div className="flex items-center">
            <Link to="/">
                <img 
                    src={Logo} 
                    alt="Ghanova Logo"
                    className="w-24 object-contain"
                />
            </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
