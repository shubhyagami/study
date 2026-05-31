import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

export default function Quiz({ questions, techName }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(null);

  if (!questions || questions.length === 0) {
    return <div className="card" style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>No questions available for this topic yet.</div>;
  }

  const handleAnswer = (idx) => {
    setAnswers(a => ({ ...a, [current]: idx }));
    setShowExplanation(current);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setShowExplanation(null);
    } else {
      setShowResults(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(null);
  };

  if (showResults) {
    const correct = Object.entries(answers).filter(([k, v]) => questions[parseInt(k)]?.correct === v).length;
    const percentage = Math.round((correct / questions.length) * 100);

    return (
      <div className="quiz-results fade-in">
        <div style={{ fontSize: '3rem', marginBottom: 8 }}>{percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '💪'}</div>
        <h3 style={{ marginBottom: 4 }}>Quiz Complete!</h3>
        <div className={`quiz-score ${percentage >= 80 ? 'good' : percentage >= 50 ? 'ok' : 'bad'}`}>
          {correct}/{questions.length} ({percentage}%)
        </div>
        <div className="progress-bar" style={{ maxWidth: 300, margin: '16px auto' }}>
          <div className="progress-fill" style={{ width: `${percentage}%`, background: percentage >= 80 ? 'var(--success)' : percentage >= 50 ? 'var(--warning)' : 'var(--danger)' }} />
        </div>

        <div style={{ marginTop: 24, textAlign: 'left' }}>
          {questions.map((q, i) => {
            const userAns = answers[i];
            const isCorrect = userAns === q.correct;
            return (
              <div key={i} className="card" style={{ marginBottom: 12, padding: 16, borderColor: isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  {isCorrect ? <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0, marginTop: 2 }} /> : <XCircle size={18} style={{ color: 'var(--danger)', flexShrink: 0, marginTop: 2 }} />}
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: 4 }}>{q.question}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Your answer: <span style={{ color: isCorrect ? 'var(--success)' : 'var(--danger)' }}>{q.options[userAns] || '(not answered)'}</span>
                      {!isCorrect && <span> • Correct answer: <span style={{ color: 'var(--success)' }}>{q.options[q.correct]}</span></span>}
                    </p>
                    <div className="quiz-explanation" style={{ marginTop: 8, fontSize: '0.8rem' }}>{q.explanation}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 20 }}>
          <button className="btn btn-primary" onClick={reset}><RefreshCw size={16} /> Retry Quiz</button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="quiz-question-card fade-in" key={current}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div className="quiz-question-number">Question {current + 1} of {questions.length}</div>
        <div className="progress-bar" style={{ width: 120, margin: 0 }}>
          <div className="progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%`, background: 'var(--primary)' }} />
        </div>
      </div>
      <div className="quiz-question">{q.question}</div>
      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (answers[current] === i) cls += ' selected';
          if (showExplanation !== null && q.correct === i) cls += ' correct';
          if (showExplanation !== null && answers[current] === i && q.correct !== i) cls += ' wrong';
          return (
            <div key={i} className={cls} onClick={() => !showExplanation && handleAnswer(i)}>
              {String.fromCharCode(65 + i)}. {opt}
            </div>
          );
        })}
      </div>
      {showExplanation !== null && (
        <div className="fade-in">
          <div className="quiz-explanation">
            <strong>💡 {answers[current] === q.correct ? 'Correct!' : 'Not quite.'}</strong><br />
            {q.explanation}
          </div>
          <button className="btn btn-primary btn-sm" style={{ marginTop: 12 }} onClick={nextQuestion}>
            {current < questions.length - 1 ? <>Next <ArrowRight size={14} /></> : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}
