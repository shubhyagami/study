import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ChevronDown, ChevronUp, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/techData';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><GraduationCap size={14} /> Guided Projects</div>
          <h1>Build Real-World Projects</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Apply your skills with guided, full-stack projects. Each project includes architecture, database design, APIs, and source code.</p>
        </div>

        <div className="section-header"><h2>Available Projects</h2></div>

        {projects.map((project, i) => (
          <div key={project.id} className="card" style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => setExpanded(expanded === i ? null : i)}>
              <div>
                <h3 style={{ marginBottom: 4 }}>{project.name}</h3>
                <div className="project-tech-tags">
                  {project.tech.map(t => <span key={t} className="project-tech-tag">{t}</span>)}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: 8 }}>{project.description}</p>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                <span className={`tag ${project.difficulty === 'Advanced' ? 'tag-advanced' : 'tag-intermediate'}`}>{project.difficulty}</span>
                {expanded === i ? <ChevronUp size={20} style={{ color: 'var(--text-muted)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
              </div>
            </div>

            {expanded === i && (
              <div className="fade-in" style={{ marginTop: 20, borderTop: '1px solid var(--border-color)', paddingTop: 20 }}>
                {project.architecture && (
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ marginBottom: 8, fontSize: '0.95rem' }}>🏗️ Architecture</h4>
                    <div className="diagram-block">{project.architecture}</div>
                  </div>
                )}

                {project.databaseDesign && (
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ marginBottom: 8, fontSize: '0.95rem' }}>🗄️ Database Design</h4>
                    <div className="diagram-block">{project.databaseDesign}</div>
                  </div>
                )}

                {project.apis && (
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ marginBottom: 8, fontSize: '0.95rem' }}>🔌 API Endpoints</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {project.apis.map((api, ai) => (
                        <div key={ai} style={{ padding: '6px 12px', background: 'var(--bg-secondary)', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.85rem' }}>
                          {api}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.interviewQuestions && (
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ marginBottom: 8, fontSize: '0.95rem' }}>💼 Project Interview Questions</h4>
                    {project.interviewQuestions.map((q, qi) => (
                      <div key={qi} className="interview-q">{q}</div>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate('/courses')}>
                    <BookOpen size={14} /> Learn Required Skills
                  </button>
                  <button className="btn btn-secondary btn-sm">
                    <Code size={14} /> View Source Code
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BookOpen(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
}
