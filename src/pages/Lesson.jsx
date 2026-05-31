import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Layers, BookOpen, Code, MessageSquare } from 'lucide-react';
import { lessons, technologies } from '../data/techData';
import { topicQuizData } from '../data/quizData';
import Quiz from '../components/Quiz';

export default function LessonPage() {
  const { techId, topicId } = useParams();
  const navigate = useNavigate();
  const lesson = lessons[topicId];
  const tech = technologies.find(t => t.id === techId);

  if (!lesson) {
    return <div className="container"><div className="empty-state"><h3>Lesson not found</h3><p>The lesson you're looking for doesn't exist yet.</p></div></div>;
  }

  const topicQs = topicQuizData[topicId] || [];

  return (
    <div className="container">
      <button className="btn btn-secondary btn-sm" style={{ marginBottom: 16 }} onClick={() => navigate(`/courses/${techId}`)}>
        <ChevronLeft size={16} /> Back to {tech?.name}
      </button>

      <div className="lesson-container fade-in">
        <div className="lesson-header">
          <h1>{lesson.title}</h1>
          <div className="lesson-meta">
            {lesson.level && <span><Layers size={14} /> {lesson.level}</span>}
            {lesson.duration && <span><Clock size={14} /> {lesson.duration}</span>}
            {tech && <span><BookOpen size={14} /> {tech.name}</span>}
          </div>
        </div>

        {lesson.introduction && (
          <div className="lesson-section">
            <h2>📖 Introduction</h2>
            <p>{lesson.introduction}</p>
          </div>
        )}

        {lesson.whyUsed && (
          <div className="lesson-section">
            <h2>❓ Why It Is Used</h2>
            <p>{lesson.whyUsed}</p>
          </div>
        )}

        {lesson.realProjectExample && (
          <div className="lesson-section" style={{ borderLeft: '3px solid var(--success)' }}>
            <h2>🏗️ Real Project Example</h2>
            <p>{lesson.realProjectExample}</p>
          </div>
        )}

        {lesson.diagram && (
          <div className="lesson-section">
            <h2>📊 Visual Diagram</h2>
            <div className="diagram-block">{lesson.diagram}</div>
          </div>
        )}

        {lesson.keyPoints && lesson.keyPoints.length > 0 && (
          <div className="lesson-section">
            <h2>🎯 Key Points</h2>
            <ul className="key-points">
              {lesson.keyPoints.map((kp, i) => <li key={i}>{kp}</li>)}
            </ul>
          </div>
        )}

        {lesson.code && (
          <div className="lesson-section">
            <h2><Code size={18} /> Code Example</h2>
            <pre className="code-block">{lesson.code}</pre>
            {lesson.codeExplanation && (
              <pre className="code-block" style={{ background: 'rgba(108,99,255,0.05)', borderColor: 'rgba(108,99,255,0.15)' }}>{lesson.codeExplanation}</pre>
            )}
          </div>
        )}

        {lesson.exercise && (
          <div className="lesson-section" style={{ borderLeft: '3px solid var(--warning)' }}>
            <h2>✍️ Hands-on Exercise</h2>
            <p>{lesson.exercise}</p>
          </div>
        )}

        {lesson.interviewQuestions && lesson.interviewQuestions.length > 0 && (
          <div className="lesson-section">
            <h2><MessageSquare size={18} /> Common Interview Questions</h2>
            {lesson.interviewQuestions.map((q, i) => (
              <div key={i} className="interview-q">{q}</div>
            ))}
          </div>
        )}

        {topicQs.length > 0 && (
          <div className="lesson-section">
            <h2>🧠 Topic Quiz</h2>
            <Quiz questions={topicQs} techName={lesson.title} />
          </div>
        )}
      </div>
    </div>
  );
}
