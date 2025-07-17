import React from 'react';
import '../styles/globals.css';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--light-grey)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            color: 'var(--medium-grey)', 
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: 'var(--spacing-sm)'
          }}>
            Get To Know More
          </div>
          <h2 className="section-title">About Me</h2>
        </div>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'grid',
          gap: 'var(--spacing-lg)'
        }}>
          <div>
            <p className="mb-md">
              I'm Justin, a passionate fullstack developer based in Brooklyn, NY. 
              I love creating digital experiences that not only look great but also 
              solve real problems for users. My approach combines clean, maintainable 
              code with intuitive user interfaces.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or enjoying the vibrant tech 
              community here in New York.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-md)',
            marginTop: 'var(--spacing-lg)'
          }}>
            <div style={{ 
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--primary-white)',
              borderRadius: '8px',
              border: '1px solid var(--border-grey)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)'
            }}>
              <div style={{ 
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={experienceIcon} 
                  alt="Experience" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div>
                <h4 className="mb-sm">Experience</h4>
                <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  <strong>2+ years</strong>
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--medium-grey)', marginBottom: '0' }}>
                  Frontend Development
                </p>
              </div>
            </div>
            
            <div style={{ 
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--primary-white)',
              borderRadius: '8px',
              border: '1px solid var(--border-grey)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)'
            }}>
              <div style={{ 
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={educationIcon} 
                  alt="Education" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div>
                <h4 className="mb-sm">Education</h4>
                <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  <strong>B.Sc. Degree</strong>
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--medium-grey)', marginBottom: '0' }}>
                  Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 