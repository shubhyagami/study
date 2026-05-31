import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, Search, BookOpen } from 'lucide-react';
import { interviewQuestions } from '../data/interviewData';
import { technologies } from '../data/techData';

export default function Interview() {
  const [tech, setTech] = useState('java');
  const [level, setLevel] = useState('beginner');
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState('');

  const techObj = technologies.find(t => t.id === tech);
  const questions = interviewQuestions[tech]?.[level] || [];

  const filtered = search
    ? questions.filter(q => q.question.toLowerCase().includes(search.toLowerCase()))
    : questions;

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><Briefcase size={14} /> Interview Preparation</div>
          <h1>Technical Interview Practice</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Practice with real interview questions organized by technology and difficulty level.</p>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          {['java', 'spring-boot', 'mysql', 'iot', 'linux', 'git'].map(t => {
            const tObj = technologies.find(tc => tc.id === t);
            return (
              <button key={t} className={`btn btn-sm ${tech === t ? 'btn-primary' : 'btn-secondary'}`} onClick={() => { setTech(t); setExpanded(null); }}>
                {tObj?.icon} {tObj?.name}
              </button>
            );
          })}
        </div>

        <div className="tabs">
          {['beginner', 'intermediate', 'advanced'].map(l => (
            <button key={l} className={`tab ${level === l ? 'active' : ''}`} onClick={() => { setLevel(l); setExpanded(null); }}>
              {l === 'beginner' ? '🌱' : l === 'intermediate' ? '🌿' : '🔥'} {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>

        <div className="form-group" style={{ maxWidth: 400, marginBottom: 20 }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-muted)' }} />
            <input className="form-input" style={{ paddingLeft: 36 }} placeholder="Search questions..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: 40 }}>
            <p style={{ color: 'var(--text-muted)' }}>No questions found for this filter.</p>
          </div>
        ) : (
          filtered.map((q, i) => (
            <div key={i} className="interview-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => setExpanded(expanded === i ? null : i)}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 4, display: 'block' }}>Question {i + 1}</span>
                  <div className="interview-question" style={{ marginBottom: 0, fontSize: '1rem' }}>{q.question}</div>
                </div>
                <div style={{ marginLeft: 16, flexShrink: 0, color: 'var(--text-muted)' }}>
                  {expanded === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              {expanded === i && (
                <div className="interview-answer fade-in">
                  <strong>💡 Answer:</strong><br /><br />
                  {q.answer}
                </div>
              )}
              {expanded !== i && (
                <button className="interview-answer-toggle" style={{ marginTop: 12 }} onClick={() => setExpanded(i)}>
                  <BookOpen size={14} style={{ marginRight: 6 }} /> Show Answer
                </button>
              )}
            </div>
          ))
        )}

        <div className="card" style={{ marginTop: 24, background: 'rgba(108,99,255,0.05)', borderColor: 'rgba(108,99,255,0.15)' }}>
          <h3 style={{ marginBottom: 8 }}>📝 Interview Tips</h3>
          <ul className="key-points">
            <li>Practice answering out loud, not just in your head</li>
            <li>Use the STAR method for scenario questions (Situation, Task, Action, Result)</li>
            <li>Always explain your thought process while solving problems</li>
            <li>If you don't know something, be honest and explain what you do know</li>
            <li>Review the specific technology's weak areas identified in your assessment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
