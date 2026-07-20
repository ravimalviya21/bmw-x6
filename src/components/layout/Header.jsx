import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = 'unset';

    const element = document.getElementById(targetId);
    console.log(">>>> check element", element);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="site-header transparent">
        <div className="header-container">
          <a href="#" className="logo-link" onClick={(e) => handleLinkClick(e, 'hero')}>
            X6 <span className="logo-accent">SERIES</span>
          </a>

          <nav className="nav-menu">
            <li><a href="#overview" className="nav-link" onClick={(e) => handleLinkClick(e, 'overview')}>Overview</a></li>
            <li><a href="#features" className="nav-link" onClick={(e) => handleLinkClick(e, 'features')}>Features</a></li>
            <li><a href="#specs" className="nav-link" onClick={(e) => handleLinkClick(e, 'specs')}>Specs</a></li>
            <li>
              <a
                href="#book-now"
                className="btn-cta"
                onClick={(e) => handleLinkClick(e, 'book-now')}
              >
                Book Now
              </a>
            </li>
          </nav>

          <button
            className="mobile-nav-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <a href="#overview" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, 'overview')}>
              Overview
            </a>
          </li>
          <li>
            <a href="#features" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, 'features')}>
              Features
            </a>
          </li>
          <li>
            <a href="#specs" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, 'specs')}>
              Specifications
            </a>
          </li>
        </ul>
        <a
          href="#book-now"
          className="btn-primary-large"
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          onClick={(e) => handleLinkClick(e, 'book-now')}
        >
          Book Now <ArrowRight size={18} />
        </a>
      </div>
    </>
  );
};

export default Header;
