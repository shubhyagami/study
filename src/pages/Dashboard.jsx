import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, BookOpen, Code, Trophy, Target, TrendingUp, Award, Zap } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { technologies } from '../data/techData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState({});
  const [streak, setStreak] = useState(0);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('ire-progress') || '{}');
    setProgress(saved);
    const vc = parseInt(localStorage.getItem('ire-visits') || '0') + 1;
    localStorage.setItem('ire-visits', vc.toString());
    setVisitCount(vc);
    const s = Math.min(Math.floor(vc / 1), 30);
    setStreak(s);
  }, []);

  const radarData = technologies.map(t => ({
    tech: t.name,
    score: progress[t.id] || 0,
    fullMark: 100,
    color: t.color,
  }));

  const totalScore = technologies.length > 0 ? Math.round(technologies.reduce((s, t) => s + (progress[t.id] || 0), 0) / technologies.length) : 0;
  const readiness = Math.min(totalScore + streak, 100);

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><Trophy size={14} /> Interview Readiness Score</div>
          <h1 style={{ fontSize: '2.5rem' }}>Your Progress Dashboard</h1>
        </div>

        <div className="dashboard-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(108,99,255,0.1)', color: 'var(--primary)' }}><Award size={24} /></div>
            <div className="stat-content">
              <div className="stat-value" style={{ color: readiness >= 80 ? 'var(--success)' : readiness >= 50 ? 'var(--warning)' : 'var(--danger)' }}>{readiness}%</div>
              <div className="stat-label">Interview Readiness</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--success)' }}><TrendingUp size={24} /></div>
            <div className="stat-content">
              <div className="stat-value">{totalScore}%</div>
              <div className="stat-label">Overall Knowledge</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--warning)' }}><Zap size={24} /></div>
            <div className="stat-content">
              <div className="stat-value">{streak}</div>
              <div className="stat-label">Day Study Streak</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--info)' }}><Target size={24} /></div>
            <div className="stat-content">
              <div className="stat-value">{visitCount}</div>
              <div className="stat-label">Total Sessions</div>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ margin: '24px 0' }}>
          <div className="card">
            <h3 style={{ marginBottom: 16 }}>Skill Radar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="var(--border-color)" />
                <PolarAngleAxis dataKey="tech" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
                <Radar name="Skills" dataKey="score" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 16 }}>Technology Scores</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={radarData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} />
                <YAxis type="category" dataKey="tech" width={100} tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} />
                <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {radarData.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 16 }}>Technology Progress</h3>
          {technologies.map(t => (
            <div key={t.id} className="skill-item" style={{ cursor: 'pointer' }} onClick={() => navigate(`/courses/${t.id}`)}>
              <span className="skill-name" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span>{t.icon}</span> {t.name}</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${progress[t.id] || 0}%`, background: t.gradient }} />
                </div>
              </div>
              <span className="skill-percent">{progress[t.id] || 0}%</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {progress && Object.values(progress).some(v => v >= 0) ? (
            <>
              <button className="btn btn-primary" onClick={() => navigate('/roadmap')}><Target size={16} /> View Roadmap</button>
              <button className="btn btn-secondary" onClick={() => navigate('/courses')}><BookOpen size={16} /> Continue Learning</button>
              <button className="btn btn-secondary" onClick={() => navigate('/interview')}><Code size={16} /> Practice Interview</button>
            </>
          ) : (
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/assessment')}><Zap size={18} /> Take Assessment First</button>
          )}
        </div>
      </div>
    </div>
  );
}
