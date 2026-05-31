import { useNavigate } from 'react-router-dom';
import { technologies } from '../data/techData';
import { quizQuestions } from '../data/quizData';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function Courses() {
  const navigate = useNavigate();
  const progress = JSON.parse(localStorage.getItem('ire-progress') || '{}');

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><BookOpen size={14} /> Learning Paths</div>
          <h1>Choose Your Technology</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Master each technology from beginner to advanced with structured lessons, quizzes, and practice exercises.</p>
        </div>

        {technologies.map(tech => {
          const totalQs = quizQuestions[tech.id] ? Object.values(quizQuestions[tech.id]).reduce((s, qs) => s + qs.length, 0) : 0;
          const levelCounts = { Beginner: 0, Intermediate: 0, Advanced: 0 };
          tech.topics.forEach(tp => { levelCounts[tp.level]++; });
          return (
            <div key={tech.id} className="card card-hover" style={{ marginBottom: 16, cursor: 'pointer' }} onClick={() => navigate(`/courses/${tech.id}`)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: tech.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                  {tech.icon}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontSize: '1.15rem' }}>{tech.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    {tech.topics.length} topics • {levelCounts.Beginner} Beginner • {levelCounts.Intermediate} Intermediate • {levelCounts.Advanced} Advanced • {totalQs} MCQs
                  </p>
                  <div className="progress-bar" style={{ marginTop: 8 }}>
                    <div className="progress-fill" style={{ width: `${progress[tech.id] || 0}%`, background: tech.gradient }} />
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: progress[tech.id] >= 70 ? 'var(--success)' : progress[tech.id] >= 40 ? 'var(--warning)' : 'var(--text-muted)' }}>
                    {progress[tech.id] || 0}%
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mastery</div>
                </div>
                <ChevronRight size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
