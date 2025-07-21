import React from 'react';
import '../styles/globals.css';
import project1Image from '../assets/landingpage.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'CommerceFlow',
      subtitle: 'Full-Stack E-commerce Platform',
      description: 'A modern full-stack e-commerce platform featuring user authentication, product management, shopping cart functionality, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TypeScript'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Admin dashboard for product management',
        'Responsive design for all devices'
      ],
      imageUrl: project1Image,
      liveUrl: 'https://commerce-flow-v2.vercel.app/',
      githubUrl: 'https://github.com/whitelight-whiteheat/commerceFlow-v2.git',
      category: 'fullstack',
      status: 'live',
      complexity: 'Advanced',
      developmentTime: '3 months',
      featured: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return '#10B981';
      case 'demo': return '#F59E0B';
      case 'development': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'live': return 'Live';
      case 'demo': return 'Demo';
      case 'development': return 'In Development';
      default: return 'Unknown';
    }
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--light-grey)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            color: 'var(--medium-grey)', 
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: 'var(--spacing-sm)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            My Work
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            color: 'var(--medium-grey)',
            fontSize: '1.1rem'
          }}>
            A collection of projects that showcase my skills in full-stack development, 
            user experience design, and problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--spacing-lg)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'var(--primary-white)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid var(--border-grey)',
                transition: 'all 0.4s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--spacing-sm)',
                  left: 'var(--spacing-sm)',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'var(--primary-white)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  zIndex: 2
                }}>
                  ⭐ Featured
                </div>
              )}

              {/* Status Badge */}
              <div style={{
                position: 'absolute',
                top: 'var(--spacing-sm)',
                right: 'var(--spacing-sm)',
                backgroundColor: getStatusColor(project.status),
                color: 'var(--primary-white)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                zIndex: 2
              }}>
                {getStatusLabel(project.status)}
              </div>

              {/* Project Image */}
              <div style={{ 
                height: '250px', 
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
                
                {/* Image Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.parentElement!.querySelector('img')!.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                  e.currentTarget.parentElement!.querySelector('img')!.style.transform = 'scale(1)';
                }}>
                  <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)'
                  }}>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: 'var(--primary-white)',
                        color: 'var(--primary-black)',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
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
                        padding: '0.75rem',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(-5deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      }}
                    >
                      📱
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: 'var(--spacing-lg)' }}>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '0.25rem',
                    color: 'var(--primary-black)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--medium-grey)', 
                    fontSize: '1rem',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    {project.subtitle}
                  </p>
                </div>

                <p style={{ 
                  color: 'var(--medium-grey)', 
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  {project.description}
                </p>

                {/* Project Metrics */}
                <div style={{ 
                  display: 'flex', 
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-md)',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--medium-grey)'
                  }}>
                    <span style={{ fontSize: '1.1rem' }}>⚡</span>
                    {project.complexity}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--medium-grey)'
                  }}>
                    <span style={{ fontSize: '1.1rem' }}>⏱️</span>
                    {project.developmentTime}
                  </div>
                </div>

                {/* Technologies */}
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--dark-grey)'
                  }}>
                    Technologies
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem'
                  }}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} style={{
                        padding: '0.4rem 0.8rem',
                        backgroundColor: 'var(--light-grey)',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        border: '1px solid var(--border-grey)',
                        color: 'var(--dark-grey)',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--dark-grey)'
                  }}>
                    Key Features
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: '0',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '0.5rem'
                  }}>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: 'var(--medium-grey)'
                      }}>
                        <span style={{ 
                          color: '#10B981', 
                          marginRight: '0.5rem',
                          fontSize: '1rem'
                        }}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li style={{ 
                        fontSize: '0.85rem',
                        color: 'var(--medium-grey)',
                        fontStyle: 'italic'
                      }}>
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Project Links */}
                <div style={{ 
                  display: 'flex', 
                  gap: 'var(--spacing-sm)',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    style={{
                      flex: '1',
                      textAlign: 'center',
                      minWidth: '120px'
                    }}
                  >
                    View Live
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                    style={{
                      flex: '1',
                      textAlign: 'center',
                      minWidth: '120px'
                    }}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 