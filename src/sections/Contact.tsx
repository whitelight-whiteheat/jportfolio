import React from 'react';
import '../styles/globals.css';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Contact: React.FC = () => {
  const contactInfo = {
    email: 'Bjmpotter@gmail.com',
    location: 'Brooklyn, NY',
    availability: 'Available for new opportunities'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/justin-mpotter/',
      icon: linkedinIcon
    },
    {
      name: 'GitHub',
      url: 'https://github.com/whitelight-whiteheat',
      icon: githubIcon
    },
    {
      name: 'Email',
      url: 'mailto:Bjmpotter@gmail.com',
      icon: emailIcon
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            color: 'var(--medium-grey)', 
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: 'var(--spacing-sm)'
          }}>
            Get in Touch
          </div>
          <h2 className="section-title">Let's Work Together</h2>
        </div>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p className="mb-lg" style={{ fontSize: '1.25rem' }}>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          {/* Contact Information */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <div style={{ 
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--light-grey)',
              borderRadius: '8px',
              border: '1px solid var(--border-grey)'
            }}>
              <div style={{ 
                width: '60px',
                height: '60px',
                margin: '0 auto var(--spacing-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={emailIcon} 
                  alt="Email" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h4 className="mb-sm">Email</h4>
              <a href={`mailto:${contactInfo.email}`} style={{ 
                color: 'var(--medium-grey)',
                fontSize: '1rem'
              }}>
                {contactInfo.email}
              </a>
            </div>
            
            <div style={{ 
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--light-grey)',
              borderRadius: '8px',
              border: '1px solid var(--border-grey)'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: 'var(--spacing-sm)',
                opacity: '0.7'
              }}>
                📍
              </div>
              <h4 className="mb-sm">Location</h4>
              <p style={{ 
                color: 'var(--medium-grey)',
                fontSize: '1rem',
                marginBottom: '0'
              }}>
                {contactInfo.location}
              </p>
            </div>
            
            <div style={{ 
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--light-grey)',
              borderRadius: '8px',
              border: '1px solid var(--border-grey)'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: 'var(--spacing-sm)',
                opacity: '0.7'
              }}>
                ✅
              </div>
              <h4 className="mb-sm">Status</h4>
              <p style={{ 
                color: 'var(--medium-grey)',
                fontSize: '1rem',
                marginBottom: '0'
              }}>
                {contactInfo.availability}
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mb-lg">
            <h3 className="mb-md">Connect With Me</h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'var(--light-grey)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-grey)',
                    textDecoration: 'none',
                    color: 'var(--primary-black)',
                    transition: 'all 0.3s ease',
                    minWidth: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.backgroundColor = 'var(--primary-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'var(--light-grey)';
                  }}
                >
                  <div style={{ 
                    width: '40px',
                    height: '40px',
                    marginBottom: 'var(--spacing-xs)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div>
            <h3 className="mb-md">Ready to start a project?</h3>
            <p className="mb-lg" style={{ fontSize: '1.1rem' }}>
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
            <a href={`mailto:${contactInfo.email}`} className="btn">
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 