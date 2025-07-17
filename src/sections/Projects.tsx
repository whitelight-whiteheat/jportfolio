import React from 'react';
import '../styles/globals.css';
import projectImage from '../assets/landingpage.png';

const Projects: React.FC = () => {
  const project = {
    title: 'CommerceFlow',
    description: 'A modern full-stack e-commerce platform featuring user authentication, product management, shopping cart functionality, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Admin dashboard for product management',
      'Responsive design for all devices'
    ],
    imageUrl: projectImage,
    liveUrl: 'https://commerce-flow-v2.vercel.app/',
    githubUrl: 'https://github.com/whitelight-whiteheat/commerceFlow-v2.git'
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--light-grey)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            color: 'var(--medium-grey)', 
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: 'var(--spacing-sm)'
          }}>
            Browse My Recent
          </div>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          backgroundColor: 'var(--primary-white)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid var(--border-grey)'
        }}>
          {/* Project Image */}
          <div style={{ 
            height: '400px', 
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img 
              src={project.imageUrl} 
              alt="CommerceFlow E-commerce Platform" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Project Overlay with Links */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0';
            }}>
              <div style={{
                display: 'flex',
                gap: 'var(--spacing-md)'
              }}>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--primary-white)',
                    color: 'var(--primary-black)',
                    padding: '1rem',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  🔗
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--primary-white)',
                    color: 'var(--primary-black)',
                    padding: '1rem',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  📱
                </a>
              </div>
            </div>
            {/* Featured Badge */}
            <div style={{
              position: 'absolute',
              top: 'var(--spacing-md)',
              right: 'var(--spacing-md)',
              backgroundColor: 'var(--primary-black)',
              color: 'var(--primary-white)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              Featured
            </div>
          </div>
          
          {/* Project Content */}
          <div style={{ padding: 'var(--spacing-lg)' }}>
            <h3 className="mb-md">{project.title}</h3>
            <p className="mb-lg">{project.description}</p>
            
            {/* Technologies */}
            <div className="mb-lg">
              <h4 className="mb-sm">Technologies Used</h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-xs)'
              }}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--light-grey)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    border: '1px solid var(--border-grey)',
                    color: 'var(--dark-grey)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-lg">
              <h4 className="mb-sm">Key Features</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-xs)'
              }}>
                {project.features.map((feature, index) => (
                  <li key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: 'var(--medium-grey)'
                  }}>
                    <span style={{ 
                      color: 'var(--primary-black)', 
                      marginRight: 'var(--spacing-xs)',
                      fontSize: '1.2rem'
                    }}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Project Links */}
            <div style={{ 
              display: 'flex', 
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap'
            }}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                View Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 