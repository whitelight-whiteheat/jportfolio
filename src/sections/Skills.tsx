import React from 'react';
import '../styles/globals.css';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 90, status: 'Experienced' },
    { name: 'CSS3', level: 85, status: 'Experienced' },
    { name: 'SASS', level: 75, status: 'Intermediate' },
    { name: 'JavaScript', level: 70, status: 'Intermediate' },
    { name: 'React', level: 75, status: 'Intermediate' },
    { name: 'Node.js', level: 70, status: 'Intermediate' }
  ];

  const backendSkills = [
    { name: 'Express.js', level: 70, status: 'Intermediate' },
    { name: 'PostgreSQL', level: 65, status: 'Intermediate' },
    { name: 'Git', level: 80, status: 'Experienced' },
    { name: 'Docker', level: 60, status: 'Basic' }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number; status: string } }> = ({ skill }) => (
    <div style={{ 
      padding: 'var(--spacing-md)',
      backgroundColor: 'var(--primary-white)',
      borderRadius: '8px',
      border: '1px solid var(--border-grey)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 'var(--spacing-sm)'
      }}>
        <h4 style={{ marginBottom: '0' }}>{skill.name}</h4>
        <span style={{ 
          color: 'var(--medium-grey)', 
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          {skill.status}
        </span>
      </div>
      <div style={{ 
        width: '100%', 
        height: '8px', 
        backgroundColor: 'var(--light-grey)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${skill.level}%`, 
          height: '100%', 
          backgroundColor: 'var(--primary-black)',
          borderRadius: '4px',
          transition: 'width 0.8s ease'
        }}></div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            color: 'var(--medium-grey)', 
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: 'var(--spacing-sm)'
          }}>
            Explore My
          </div>
          <h2 className="section-title">Skills & Experience</h2>
        </div>
        
        {/* Frontend Skills */}
        <div className="mb-xl">
          <h3 className="text-center mb-lg" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <span style={{ fontSize: '1.5rem' }}>💻</span>
            Frontend Development
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-md)'
          }}>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-center mb-lg" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🗄️</span>
            Backend & Tools
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-md)'
          }}>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 