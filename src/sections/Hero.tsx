import React from 'react';
import '../styles/globals.css';
import profilePic from '../assets/profile-pic.png';

const Hero: React.FC = () => {
  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, var(--light-grey) 0%, var(--primary-white) 100%)'
    }}>
      <div className="container">
        <div className="hero-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-xl)',
          alignItems: 'center'
        }}>
          {/* Left side - Text content */}
          <div className="hero-text text-left">
            <div className="mb-md" style={{ 
              color: 'var(--medium-grey)', 
              fontSize: '1.25rem',
              fontWeight: '400'
            }}>
              Hello, I'm
            </div>
            <h1 className="mb-md">
              Justin Potter
            </h1>
            <h2 className="mb-lg" style={{ 
              color: 'var(--medium-grey)', 
              fontWeight: '400',
              fontSize: '1.5rem'
            }}>
              Fullstack Developer
            </h2>
            <p className="mb-lg" style={{ 
              fontSize: '1.25rem',
              lineHeight: '1.8'
            }}>
              Crafting seamless digital experiences with modern technologies. 
              Based in Brooklyn, NY, I specialize in building user-focused web applications 
              that combine elegant design with robust functionality.
            </p>
            <div className="mb-lg">
              <a href="#contact" className="btn" style={{ marginRight: 'var(--spacing-md)' }}>
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
            <div className="hero-socials" style={{ 
              display: 'flex', 
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap'
            }}>
              <a href="https://www.linkedin.com/in/justin-mpotter/" target="_blank" rel="noopener noreferrer" style={{ 
                color: 'var(--medium-grey)', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--medium-grey)';
              }}>
                💼
              </a>
              <a href="https://github.com/whitelight-whiteheat" target="_blank" rel="noopener noreferrer" style={{ 
                color: 'var(--medium-grey)', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--medium-grey)';
              }}>
                📱
              </a>
              <a href="mailto:Bjmpotter@gmail.com" style={{ 
                color: 'var(--medium-grey)', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--medium-grey)';
              }}>
                📧
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="hero-profile-image" style={{
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              width: '400px',
              height: '400px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              border: '4px solid var(--primary-white)'
            }}>
              <img 
                src={profilePic} 
                alt="Justin Potter" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 