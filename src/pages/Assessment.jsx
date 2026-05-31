import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, XCircle, BarChart3 } from 'lucide-react';
import { assessmentQuestions } from '../data/quizData';
import { technologies } from '../data/techData';

export default function Assessment() {
  const [step, setStep] = useState('intro');
  const [currentTech, setCurrentTech] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const techIds = assessmentQuestions.map(aq => aq.techId);

  const handleAnswer = (idx) => {
    const key = `${techIds[currentTech]}-${currentQ}`;
    setAnswers(a => ({ ...a, [key]: idx }));
    const qs = assessmentQuestions[currentTech].questions;
    if (currentQ < qs.length - 1) {
      setCurrentQ(c => c + 1);
    } else if (currentTech < assessmentQuestions.length - 1) {
      setCurrentTech(c => c + 1);
      setCurrentQ(0);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const scores = {};
    assessmentQuestions.forEach((aq, ti) => {
      let correct = 0;
      aq.questions.forEach((q, qi) => {
        const key = `${aq.techId}-${qi}`;
        if (answers[key] === q.correct) correct++;
      });
      scores[aq.techId] = Math.round((correct / aq.questions.length) * 100);
    });
    setResults(scores);
    const existing = JSON.parse(localStorage.getItem('ire-progress') || '{}');
    Object.keys(scores).forEach(k => { existing[k] = scores[k]; });
    localStorage.setItem('ire-progress', JSON.stringify(existing));
  };

  if (results) {
    const total = Object.values(results).reduce((a, b) => a + b, 0) / Object.keys(results).length;
    const weak = Object.entries(results).filter(([,v]) => v < 40).map(([k]) => technologies.find(t => t.id === k)?.name || k);
    const strong = Object.entries(results).filter(([,v]) => v >= 70).map(([k]) => technologies.find(t => t.id === k)?.name || k);

    return (
      <div className="container">
        <div className="hero fade-in">
          <div className="hero-badge"><CheckCircle size={14} /> Assessment Complete</div>
          <h1>Your Skill Assessment Results</h1>
          <div className="quiz-score" style={{ fontSize: '3rem', fontWeight: 800, color: total >= 60 ? 'var(--success)' : total >= 40 ? 'var(--warning)' : 'var(--danger)' }}>
            {Math.round(total)}%
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>Overall Knowledge Score</p>
        </div>

        <div className="section-header"><h2>Technology Scores</h2></div>
        <div className="card" style={{ padding: 32 }}>
          {Object.entries(results).map(([techId, score]) => {
            const tech = technologies.find(t => t.id === techId);
            return (
              <div key={techId} className="skill-item">
                <span className="skill-name" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{tech?.icon}</span> {tech?.name}
                </span>
                <div className="skill-bar-wrap">
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${score}%`, background: score >= 70 ? 'var(--success)' : score >= 40 ? 'var(--warning)' : 'var(--danger)' }} />
                  </div>
                </div>
                <span className="skill-percent" style={{ color: score >= 70 ? 'var(--success)' : score >= 40 ? 'var(--warning)' : 'var(--danger)' }}>{score}%</span>
              </div>
            );
          })}
        </div>

        <div className="grid-2" style={{ margin: '24px 0' }}>
          <div className="card" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
            <h3 style={{ color: 'var(--danger)', marginBottom: 12 }}>⚠️ Weak Areas (Need Focus)</h3>
            {weak.length ? weak.map(w => <div key={w} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>{w}</div>) : <p style={{ color: 'var(--text-secondary)' }}>No weak areas identified!</p>}
          </div>
          <div className="card" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
            <h3 style={{ color: 'var(--success)', marginBottom: 12 }}>✅ Strong Areas</h3>
            {strong.length ? strong.map(s => <div key={s} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>{s}</div>) : <p style={{ color: 'var(--text-secondary)' }}>Keep learning to build strengths!</p>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', padding: '20px 0' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/dashboard')}><BarChart3 size={18} /> View Dashboard</button>
          <button className="btn btn-secondary btn-lg" onClick={() => navigate('/roadmap')}><ArrowRight size={18} /> Personalized Roadmap</button>
        </div>
      </div>
    );
  }

  if (step === 'intro') {
    return (
      <div className="container">
        <div className="hero fade-in">
          <div className="hero-badge"><BarChart3 size={14} /> Step 1 of 2</div>
          <h1>Skill Assessment</h1>
          <p>Answer questions across all 7 technologies. This helps us create your personalized learning roadmap.</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
            {assessmentQuestions.map((aq, i) => {
              const t = technologies.find(tc => tc.id === aq.techId);
              return <li key={aq.techId} className="tag" style={{ background: 'rgba(108,99,255,0.1)', color: 'var(--primary-light)', padding: '6px 14px' }}>{t?.icon} {t?.name} ({aq.questions.length} Qs)</li>;
            })}
          </ul>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => setStep('quiz')}><ArrowRight size={18} /> Start Assessment</button>
          </div>
        </div>
      </div>
    );
  }

  const aq = assessmentQuestions[currentTech];
  const q = aq?.questions[currentQ];
  const tech = technologies.find(t => t.id === aq?.techId);
  const total = assessmentQuestions.reduce((s, a) => s + a.questions.length, 0);
  const answered = Object.keys(answers).length;

  return (
    <div className="container">
      <div className="section-header">
        <h2><span style={{ marginRight: 8 }}>{tech?.icon}</span> {tech?.name} Assessment</h2>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{answered + 1} of {total}</span>
      </div>
      <div className="progress-bar" style={{ marginBottom: 24 }}><div className="progress-fill" style={{ width: `${(answered / total) * 100}%`, background: 'var(--primary)' }} /></div>
      <div className="quiz-container fade-in" key={`${tech?.id}-${currentQ}`}>
        <div className="quiz-question-card">
          <div className="quiz-question-number">Question {answered + 1}</div>
          <div className="quiz-question">{q?.question}</div>
          <div className="quiz-options">
            {q?.options.map((opt, i) => (
              <div key={i} className={`quiz-option ${answers[`${tech?.id}-${currentQ}`] === i ? 'selected' : ''}`} onClick={() => handleAnswer(i)}>
                {String.fromCharCode(65 + i)}. {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
