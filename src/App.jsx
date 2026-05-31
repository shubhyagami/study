import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, GraduationCap, LayoutDashboard, BookOpen, Code, MessageSquare, Target, Briefcase, ClipboardList } from 'lucide-react';
import HomePage from './pages/Home';
import AssessmentPage from './pages/Assessment';
import DashboardPage from './pages/Dashboard';
import CoursesPage from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import LessonPage from './pages/Lesson';
import PlaygroundPage from './pages/Playground';
import TutorPage from './pages/Tutor';
import InterviewPage from './pages/Interview';
import RoadmapPage from './pages/Roadmap';
import ProjectsPage from './pages/Projects';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('ire-theme') || 'dark');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ire-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/assessment', label: 'Assessment' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/courses', label: 'Courses' },
    { to: '/roadmap', label: 'Roadmap' },
    { to: '/playground', label: 'Playground' },
    { to: '/interview', label: 'Interview' },
    { to: '/tutor', label: 'AI Tutor' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-icon">🎯</span>
          Interview Ready
        </NavLink>
        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:techId" element={<CourseDetail />} />
          <Route path="/courses/:techId/:topicId" element={<LessonPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
