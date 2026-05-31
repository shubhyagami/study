import { useNavigate } from 'react-router-dom';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import { roadmapLevels } from '../data/interviewData';
import { technologies } from '../data/techData';

export default function Roadmap() {
  const navigate = useNavigate();
  const progress = JSON.parse(localStorage.getItem('ire-progress') || '{}');
  const overall = Math.round(technologies.reduce((s, t) => s + (progress[t.id] || 0), 0) / technologies.length);

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><Target size={14} /> Personalized Path</div>
          <h1>Your Learning Roadmap</h1>
          <p style={{ color: 'var(--text-secondary)' }}>A structured 10-week journey from foundations to project-ready engineer. Based on your assessment, focus on your weak areas.</p>
          <div className="hero-actions" style={{ marginTop: 16 }}>
            <button className="btn btn-primary" onClick={() => navigate('/assessment')}>Update Assessment</button>
            <button className="btn btn-secondary" onClick={() => navigate('/courses')}>Start Learning</button>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 32, textAlign: 'center', padding: 32 }}>
          <h3 style={{ marginBottom: 8 }}>Overall Progress</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: overall >= 80 ? 'var(--success)' : overall >= 50 ? 'var(--warning)' : 'var(--danger)' }}>{overall}%</div>
          <div className="progress-bar" style={{ maxWidth: 400, margin: '12px auto', height: 10 }}>
            <div className="progress-fill" style={{ width: `${overall}%`, background: 'linear-gradient(90deg, var(--primary), var(--success))' }} />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            {overall < 40 ? 'Start your journey with Level 1: Foundations' :
             overall < 60 ? 'Building core skills - continue to Level 3' :
             overall < 80 ? 'Strong progress - focus on interview preparation' :
             'Excellent! You\'re almost interview ready!'}
          </p>
        </div>

        <div className="roadmap-container">
          {roadmapLevels.map((level, idx) => {
            const isActive = idx === 0 || (progress && Object.values(progress).some(v => v > 0));
            return (
              <div key={idx} className="roadmap-level">
                <div className="roadmap-level-marker" style={{ background: level.color }}>
                  {idx + 1}
                </div>
                <div className={`roadmap-level-card ${isActive ? 'card-hover' : ''}`} style={{ opacity: isActive ? 1 : 0.6 }}>
                  <div className="roadmap-level-header">
                    <div>
                      <div className="roadmap-level-name">{level.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{level.duration}</div>
                    </div>
                    <span className="roadmap-level-duration">{level.topics.reduce((s, t) => s + t.items.length, 0)} topics</span>
                  </div>

                  <div className="roadmap-tech-items">
                    {level.topics.map((group, gi) => (
                      <div key={gi} className="roadmap-tech-group">
                        <div className="roadmap-tech-name"><span>{technologies.find(t => t.id === group.tech)?.icon}</span> {technologies.find(t => t.id === group.tech)?.name || group.tech}</div>
                        <ul className="roadmap-tech-items-list">
                          {group.items.map((item, ii) => (
                            <li key={ii}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="roadmap-milestones">
                    <h4>🏁 Milestones</h4>
                    <ul>
                      {level.milestones.map((m, mi) => (
                        <li key={mi}><CheckCircle size={10} style={{ marginRight: 4 }} /> {m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/courses')}>
            <ArrowRight size={18} /> Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
