import React, { useState, useEffect } from 'react';
import '../styles/globals.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-grey)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--spacing-md) 0'
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--primary-black)',
            textDecoration: 'none'
          }}>
            JP
          </a>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-lg)',
            alignItems: 'center'
          }}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={{
                  color: 'var(--primary-black)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--medium-grey)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--primary-black)';
                }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="./assets/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary-black)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0',
                border: '1px solid var(--primary-black)',
                borderRadius: '4px',
                paddingLeft: '1rem',
                paddingRight: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-white)';
                e.currentTarget.style.backgroundColor = 'var(--primary-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--primary-black)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 