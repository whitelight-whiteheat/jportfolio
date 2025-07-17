import React from 'react';
import '../styles/globals.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--primary-black)',
      color: 'var(--primary-white)',
      padding: 'var(--spacing-lg) 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-md)'
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--primary-white)',
            marginBottom: 'var(--spacing-sm)'
          }}>
            Justin Potter
          </div>
          
          {/* Tagline */}
          <p style={{
            color: 'var(--medium-grey)',
            fontSize: '1rem',
            marginBottom: 'var(--spacing-md)',
            maxWidth: '400px'
          }}>
            Fullstack Developer passionate about creating meaningful digital experiences
          </p>
          
          {/* Quick Links */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href="#about" style={{
              color: 'var(--medium-grey)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              About
            </a>
            <span style={{ color: 'var(--medium-grey)' }}>•</span>
            <a href="#experience" style={{
              color: 'var(--medium-grey)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              Experience
            </a>
            <span style={{ color: 'var(--medium-grey)' }}>•</span>
            <a href="#projects" style={{
              color: 'var(--medium-grey)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              Projects
            </a>
            <span style={{ color: 'var(--medium-grey)' }}>•</span>
            <a href="#contact" style={{
              color: 'var(--medium-grey)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              Contact
            </a>
          </div>
          
          {/* Social Links */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)',
            justifyContent: 'center'
          }}>
            <a href="https://www.linkedin.com/in/justin-mpotter/" target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--medium-grey)',
              fontSize: '1.2rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              💼
            </a>
            <a href="https://github.com/whitelight-whiteheat" target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--medium-grey)',
              fontSize: '1.2rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              📱
            </a>
            <a href="mailto:Bjmpotter@gmail.com" style={{
              color: 'var(--medium-grey)',
              fontSize: '1.2rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-grey)';
            }}>
              📧
            </a>
          </div>
          
          {/* Copyright */}
          <div style={{
            borderTop: '1px solid var(--dark-grey)',
            paddingTop: 'var(--spacing-md)',
            width: '100%',
            maxWidth: '400px'
          }}>
            <p style={{
              color: 'var(--medium-grey)',
              fontSize: '0.9rem',
              marginBottom: '0'
            }}>
              © {currentYear} Justin Potter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 