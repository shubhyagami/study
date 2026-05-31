import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, BrainCircuit, ChevronRight } from 'lucide-react';
import { technologies, lessons } from '../data/techData';
import { quizQuestions, topicQuizData } from '../data/quizData';
import Quiz from '../components/Quiz';

export default function CourseDetail() {
  const { techId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('topics');
  const [quizLevel, setQuizLevel] = useState('easy');
  const tech = technologies.find(t => t.id === techId);

  if (!tech) return <div className="container"><div className="empty-state"><h3>Technology not found</h3></div></div>;

  const techQs = quizQuestions[techId];
  const progress = JSON.parse(localStorage.getItem('ire-progress') || '{}');

  return (
    <div className="container">
      <button className="btn btn-secondary btn-sm" style={{ marginBottom: 16 }} onClick={() => navigate('/courses')}>
        <ChevronLeft size={16} /> Back to Courses
      </button>

      <div className="card" style={{ marginBottom: 24, background: 'linear-gradient(135deg, var(--bg-card), transparent)', borderColor: tech.color }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: tech.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>{tech.icon}</div>
          <div>
            <h1 style={{ fontSize: '1.5rem' }}>{tech.name}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{tech.topics.length} topics • {tech.topics.filter(t => t.level === 'Beginner').length} Beginner • {tech.topics.filter(t => t.level === 'Intermediate').length} Intermediate • {tech.topics.filter(t => t.level === 'Advanced').length} Advanced</p>
            <div className="progress-bar" style={{ maxWidth: 300, marginTop: 8 }}>
              <div className="progress-fill" style={{ width: `${progress[techId] || 0}%`, background: tech.gradient }} />
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className={`tab ${tab === 'topics' ? 'active' : ''}`} onClick={() => setTab('topics')}><BookOpen size={16} style={{ marginRight: 6 }} /> Topics</button>
        <button className={`tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}><BrainCircuit size={16} style={{ marginRight: 6 }} /> Quizzes</button>
      </div>

      {tab === 'topics' && (
        <div>
          {['Beginner', 'Intermediate', 'Advanced'].map(level => {
            const levelTopics = tech.topics.filter(t => t.level === level);
            if (!levelTopics.length) return null;
            return (
              <div key={level} style={{ marginBottom: 24 }}>
                <h3 style={{ marginBottom: 12, fontSize: '1rem', color: level === 'Beginner' ? 'var(--success)' : level === 'Intermediate' ? 'var(--warning)' : 'var(--danger)' }}>
                  {level === 'Beginner' ? '🌱' : level === 'Intermediate' ? '🌿' : '🔥'} {level}
                </h3>
                <div className="grid-2">
                  {levelTopics.map(topic => {
                    const lesson = lessons[topic.id];
                    const topicQuiz = topicQuizData[topic.id];
                    return (
                      <div key={topic.id} className="card card-hover" style={{ cursor: 'pointer' }} onClick={() => navigate(`/courses/${techId}/${topic.id}`)}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <h4 style={{ fontSize: '0.95rem', marginBottom: 8 }}>{topic.name}</h4>
                          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                            {topicQuiz && <span className="tag" style={{ background: 'rgba(108,99,255,0.1)', color: 'var(--primary-light)' }}>{topicQuiz.length} Qs</span>}
                            <span className={`tag ${level === 'Beginner' ? 'tag-beginner' : level === 'Intermediate' ? 'tag-intermediate' : 'tag-advanced'}`}>{level}</span>
                          </div>
                        </div>
                        {lesson && <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: 8 }}>{lesson.duration} • {lesson.introduction?.substring(0, 80)}...</p>}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 500 }}>
                          Start Lesson <ChevronRight size={14} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'quiz' && techQs && (
        <div>
          <div className="tabs" style={{ marginBottom: 20 }}>
            {['easy', 'medium', 'hard'].map(level => (
              <button key={level} className={`tab ${quizLevel === level ? 'active' : ''}`} onClick={() => setQuizLevel(level)}>
                {level === 'easy' ? '🟢' : level === 'medium' ? '🟡' : '🔴'} {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
          <Quiz questions={techQs[quizLevel] || []} techName={tech.name} />
        </div>
      )}
    </div>
  );
}
