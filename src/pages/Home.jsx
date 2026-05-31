import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, BookOpen, BarChart3, MessageSquare, Target, Briefcase, GraduationCap, Code } from 'lucide-react';
import { technologies } from '../data/techData';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="hero fade-in">
        <div className="hero-badge">
          <Zap size={14} /> Master Java, Spring Boot, MySQL & More
        </div>
        <h1>From Forgotten Knowledge to<br /><span>Interview Ready Engineer</span></h1>
        <p>
          Personalized AI-powered learning platform that assesses your skills, fills knowledge gaps,
          and prepares you for technical interviews and real-world projects in 30-60 days.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/assessment')}>
            <Zap size={18} /> Start Skill Assessment
          </button>
          <button className="btn btn-secondary btn-lg" onClick={() => navigate('/courses')}>
            <BookOpen size={18} /> Browse Courses
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="hero-stat-value">7</div><div className="hero-stat-label">Technologies</div></div>
          <div className="hero-stat"><div className="hero-stat-value">50+</div><div className="hero-stat-label">Topics</div></div>
          <div className="hero-stat"><div className="hero-stat-value">200+</div><div className="hero-stat-label">MCQ Questions</div></div>
          <div className="hero-stat"><div className="hero-stat-value">5</div><div className="hero-stat-label">Guided Projects</div></div>
        </div>
      </div>

      <div className="section-header"><h2>Technologies You'll Master</h2></div>
      <div className="tech-grid">
        {technologies.map(t => (
          <div key={t.id} className="tech-card" onClick={() => navigate(`/courses/${t.id}`)}>
            <div className="tech-card-header">
              <div className="tech-card-icon" style={{ background: t.gradient }}>{t.icon}</div>
              <h3>{t.name}</h3>
            </div>
            <p>{t.topics.length} topics • {t.topics.filter(tp => tp.level === 'Beginner').length} Beginner • {t.topics.filter(tp => tp.level === 'Intermediate').length} Intermediate • {t.topics.filter(tp => tp.level === 'Advanced').length} Advanced</p>
            <div className="tech-card-topics">
              {t.topics.slice(0, 4).map(tp => <span key={tp.id} className="tech-card-topic">{tp.name}</span>)}
              {t.topics.length > 4 && <span className="tech-card-topic">+{t.topics.length - 4} more</span>}
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${t.progress || 0}%`, background: t.gradient }} /></div>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: 40 }}><h2>How It Works</h2></div>
      <div className="grid-3">
        {[
          { icon: <ClipboardList size={24} />, title: 'Assess', desc: 'Take a diagnostic test to identify your strengths and weaknesses across all technologies.' },
          { icon: <Target size={24} />, title: 'Personalized Roadmap', desc: 'Get a custom learning path from beginner to project-ready based on your gaps.' },
          { icon: <BookOpen size={24} />, title: 'Learn Visually', desc: 'Interactive diagrams, code examples, and visual explanations for every concept.' },
          { icon: <MessageSquare size={24} />, title: 'AI Tutor', desc: 'Ask questions, get explanations, and receive personalized guidance anytime.' },
          { icon: <Code size={24} />, title: 'Practice & Play', desc: 'Interactive playgrounds for Java, SQL, and Spring Boot simulations.' },
          { icon: <Briefcase size={24} />, title: 'Interview Ready', desc: 'Simulate interviews with real questions, voice/text answers, and feedback.' },
        ].map((f, i) => (
          <div key={i} className="card card-hover" style={{ textAlign: 'center', padding: 32 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(108,99,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}>
              {f.icon}
            </div>
            <h3 style={{ marginBottom: 8, fontSize: '1.05rem' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '60px 0 20px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 12 }}>Ready to Become Interview Ready?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Start your personalized learning journey today.</p>
        <button className="btn btn-primary btn-lg" onClick={() => navigate('/assessment')}>
          <Zap size={18} /> Begin Your Assessment
        </button>
      </div>
    </div>
  );
}

function ClipboardList(props) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg> }
