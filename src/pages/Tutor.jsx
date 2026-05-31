import { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';
import { technologies } from '../data/techData';

const initialMessages = [
  { role: 'ai', content: "Hello! I'm your AI Learning Assistant. I can help you with:\n\n• Explaining Java, Spring Boot, MySQL, and other concepts\n• Generating code examples\n• Creating practice questions\n• Suggesting what to learn next\n• Answering interview questions\n\nWhat would you like to learn today?" }
];

const tutorResponses = {
  hello: "Hello! 👋 I'm your AI Tutor. Ask me anything about Java, Spring Boot, MySQL, IoT, Linux, or Git!",
  java: "Java is a high-level, object-oriented programming language. Key concepts:\n\n**Core Features:**\n• Platform-independent (JVM)\n• Object-oriented (OOP)\n• Strong memory management (GC)\n• Rich API ecosystem\n\n**Where to start?**\n1. Basics: variables, data types, operators\n2. Control flow: if-else, loops\n3. OOP: classes, inheritance, polymorphism\n4. Collections: List, Set, Map\n5. Advanced: Streams, Lambdas, Threads\n\nWant me to explain any specific Java topic?",
  'spring boot': "Spring Boot simplifies Java enterprise development. Here's the overview:\n\n**Key Concepts:**\n• Auto-configuration\n• Embedded Tomcat/Jetty\n• Starter dependencies\n• Actuator for monitoring\n\n**Typical Flow:**\nController → Service → Repository → Database\n\n**Would you like me to explain:**\n1. Dependency Injection?\n2. REST API creation?\n3. JPA & Hibernate?\n4. Security & JWT?",
  mysql: "MySQL is a popular RDBMS. Core concepts:\n\n**Relations:** Tables with rows & columns\n**Keys:** Primary Key (unique ID), Foreign Key (relationship)\n**SQL Types:**\n• DDL: CREATE, ALTER, DROP\n• DML: SELECT, INSERT, UPDATE, DELETE\n• DCL: GRANT, REVOKE\n\n**Practice tips:** Focus on JOINs, subqueries, and indexing for interviews!",
  'what is': (q) => `Great question! Let me explain "${q.replace('what is', '').trim()}":

1. **Definition:** It's a fundamental concept in software development
2. **Why it matters:** Understanding this helps you write better code
3. **Example:** In practice, you'd use it when building real applications

Would you like me to provide code examples or dive deeper?`,
  default: "That's a great topic! Here's what I can help with:\n\n1. **Concepts** - I can explain any Java, Spring Boot, MySQL, IoT, Linux, or Git concept\n2. **Code Examples** - I can show you practical code snippets\n3. **Interview Prep** - I can generate interview questions\n4. **Learning Path** - I can suggest what to study next\n\nCould you be more specific about what you'd like to learn? Try asking about:\n• A specific Java feature (OOP, Collections, Streams)\n• Spring Boot (DI, REST, JPA, Security)\n• SQL queries (JOINs, Indexes, Optimization)\n• IoT (MQTT, ESP32, Sensors)\n• Linux commands or Git workflows"
};

export default function Tutor() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const msgsEndRef = useRef(null);

  useEffect(() => { msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  const generateResponse = (userMsg) => {
    const lower = userMsg.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return tutorResponses.hello;
    if (lower.includes('java') && !lower.includes('script')) return tutorResponses.java;
    if (lower.includes('spring')) return tutorResponses['spring boot'];
    if (lower.includes('mysql') || lower.includes('sql') || lower.includes('database') || lower.includes('query')) return tutorResponses.mysql;
    if (lower.includes('what is')) return tutorResponses['what is'](userMsg);
    if (lower.includes('collections') || lower.includes('list') || lower.includes('map') || lower.includes('set'))
      return "**Java Collections Framework:**\n\n**List:** Ordered, allows duplicates (ArrayList, LinkedList)\n**Set:** No duplicates (HashSet, TreeSet, LinkedHashSet)\n**Map:** Key-value pairs (HashMap, TreeMap, LinkedHashMap)\n**Queue:** FIFO order (PriorityQueue, LinkedList)\n\n**Key differences:**\n• ArrayList: fast get, slow insert/delete middle\n• HashMap: O(1) get/put with hashCode\n• HashSet: backed by HashMap, unique elements only\n\nWant code examples for any of these?";
    if (lower.includes('jwt') || lower.includes('security') || lower.includes('authentication'))
      return "**Spring Security & JWT Authentication Flow:**\n\n1. User logs in with credentials\n2. Server validates → generates JWT token\n3. Client stores token (localStorage/cookie)\n4. Client sends token in Authorization header\n5. Filter validates token on each request\n6. User is authenticated!\n\n**JWT Structure:** header.payload.signature\n\nWant me to show you the configuration code?";
    if (lower.includes('thread') || lower.includes('multithreading') || lower.includes('concurrent'))
      return "**Java Multithreading Basics:**\n\n**Creating threads:**\n1. extends Thread class\n2. implements Runnable interface\n3. implements Callable (returns value)\n\n**Synchronization:**\n• synchronized keyword\n• ReentrantLock\n• volatile for visibility\n\n**ExecutorService:**\n• FixedThreadPool, CachedThreadPool\n• CompletableFuture for async operations\n\nCommon interview topics: race conditions, deadlocks, thread safety!";
    if (lower.includes('interview') || lower.includes('question'))
      return "**Common Interview Questions by Level:**\n\n**Beginner:**\n• What is the difference between JDK, JRE, JVM?\n• Explain OOP principles\n• What is the difference between == and .equals()?\n\n**Intermediate:**\n• How does HashMap work internally?\n• Explain synchronized keyword\n• What is dependency injection?\n\n**Advanced:**\n• How does ConcurrentHashMap achieve thread-safety?\n• Explain Spring Boot auto-configuration\n• What are ACID properties?\n\nWant me to answer any of these in detail?";
    return tutorResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = generateResponse(userMsg);
      setMessages(m => [...m, { role: 'ai', content: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
  };

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><Sparkles size={14} /> AI-Powered</div>
          <h1>AI Learning Tutor</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Ask anything about Java, Spring Boot, MySQL, IoT, Linux, or Git. Get instant explanations and examples.</p>
        </div>

        <div className="tutor-container">
          <div className="tutor-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`tutor-message ${msg.role === 'user' ? '' : ''}`}>
                <div className={`tutor-avatar ${msg.role === 'ai' ? 'ai' : 'user'}`}>
                  {msg.role === 'ai' ? <Bot size={18} /> : '👤'}
                </div>
                <div className={`tutor-bubble ${msg.role === 'user' ? 'user-bubble' : ''}`}>
                  {msg.content.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="tutor-message">
                <div className="tutor-avatar ai"><Bot size={18} /></div>
                <div className="tutor-bubble">
                  <span className="pulse" style={{ display: 'inline-flex', gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }} />
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }} />
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={msgsEndRef} />
          </div>

          <div className="tutor-input-area">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question (e.g., 'Explain OOP concepts' or 'How does JWT work?')"
            />
            <button className="btn btn-primary" onClick={handleSend} disabled={!input.trim()}><Send size={16} /></button>
          </div>

          <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Explain OOP concepts', 'How does HashMap work?', 'What is DI?', 'SQL JOIN examples', 'JWT auth flow', 'Git branching'].map((sug, i) => (
              <button key={i} className="btn btn-sm btn-secondary" onClick={() => { setInput(sug); }}>{sug}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
