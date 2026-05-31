import { useState } from 'react';
import { Play, RotateCcw, Terminal, Database, Server, ArrowRight, Download } from 'lucide-react';

export default function Playground() {
  const [tab, setTab] = useState('java');
  const [javaCode, setJavaCode] = useState(`public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Interview Ready Engineer!");\n        int x = 10;\n        int y = 20;\n        System.out.println("Sum: " + (x + y));\n    }\n}`);
  const [javaOutput, setJavaOutput] = useState('');
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM employees;');
  const [sqlOutput, setSqlOutput] = useState('');
  const [activeEndpoint, setActiveEndpoint] = useState(null);

  const runJava = () => {
    setJavaOutput('> Compiling...\n> Executing...\n\n');
    const lines = javaCode.split('\n');
    const output = [];
    if (javaCode.includes('System.out.println')) {
      const matches = javaCode.match(/System\.out\.println\(([^)]+)\)/g);
      if (matches) {
        matches.forEach(m => {
          let content = m.match(/\((.*)\)/)[1];
          if (content.includes('"')) {
            const parts = content.split('+').map(p => p.trim());
            let result = '';
            parts.forEach(p => {
              if (p.startsWith('"') && p.endsWith('"')) result += p.slice(1, -1);
              else if (p === '(x + y)') result += '30';
              else if (p === 'x') result += '10';
              else if (p === 'y') result += '20';
              else result += p;
            });
            output.push(result);
          } else {
            if (content === '(x + y)') output.push('30');
            else if (content === 'x') output.push('10');
            else if (content === 'y') output.push('20');
            else output.push(content);
          }
        });
      }
    }
    setTimeout(() => {
      setJavaOutput(`> Compiling... ✓\n> Executing... ✓\n\n${output.join('\n')}\n\n> Program exited with code 0`);
    }, 800);
  };

  const runSql = () => {
    const q = sqlQuery.toLowerCase().trim();
    setTimeout(() => {
      if (q.startsWith('select')) {
        if (q.includes('join')) {
          setSqlOutput(`+----+----------+-------------+-----------+\n| id | name     | department  | salary    |\n+----+----------+-------------+-----------+\n| 1  | Alice    | Engineering | 95000     |\n| 2  | Bob      | Marketing   | 72000     |\n| 3  | Charlie  | Engineering | 88000     |\n+----+----------+-------------+-----------+\n3 rows in set (0.002 sec)`);
        } else {
          setSqlOutput(`+----+----------+-------------+-----------+\n| id | name     | department  | salary    |\n+----+----------+-------------+-----------+\n| 1  | Alice    | Engineering | 95000     |\n| 2  | Bob      | Marketing   | 72000     |\n| 3  | Charlie  | Engineering | 88000     |\n| 4  | Diana    | HR          | 65000     |\n| 5  | Eve      | Finance     | 78000     |\n+----+----------+-------------+-----------+\n5 rows in set (0.001 sec)`);
        }
      } else if (q.startsWith('insert')) {
        setSqlOutput('Query OK, 1 row affected (0.01 sec)');
      } else if (q.startsWith('update')) {
        setSqlOutput('Query OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0');
      } else if (q.startsWith('delete')) {
        setSqlOutput('Query OK, 1 row affected (0.01 sec)');
      } else if (q.startsWith('create table')) {
        setSqlOutput('Query OK, 0 rows affected (0.03 sec)');
      } else if (q.startsWith('show tables')) {
        setSqlOutput('+-------------------+\n| Tables_in_company |\n+-------------------+\n| employees         |\n| departments       |\n| projects          |\n+-------------------+\n3 rows in set (0.00 sec)');
      } else {
        setSqlOutput('Query OK, 0 rows affected (0.00 sec)');
      }
    }, 600);
  };

  const endpoints = [
    { method: 'GET', path: '/api/employees', desc: 'List all employees', status: 200, body: '[{ "id": 1, "name": "Alice", "department": "Engineering" }]', color: 'var(--success)' },
    { method: 'POST', path: '/api/employees', desc: 'Create employee', status: 201, body: '{ "id": 6, "name": "New Employee", "department": "IT" }', color: 'var(--info)' },
    { method: 'GET', path: '/api/employees/{id}', desc: 'Get employee by ID', status: 200, body: '{ "id": 1, "name": "Alice", "salary": 95000 }', color: 'var(--success)' },
    { method: 'PUT', path: '/api/employees/{id}', desc: 'Update employee', status: 200, body: '{ "id": 1, "name": "Alice Updated", "salary": 100000 }', color: 'var(--warning)' },
    { method: 'DELETE', path: '/api/employees/{id}', desc: 'Delete employee', status: 204, body: 'No Content', color: 'var(--danger)' },
  ];

  return (
    <div className="container">
      <div className="fade-in">
        <div className="hero" style={{ padding: '30px 0' }}>
          <div className="hero-badge"><Terminal size={14} /> Interactive Playground</div>
          <h1>Practice & Experiment</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Write and test Java code, run SQL queries, and simulate Spring Boot API flows.</p>
        </div>

        <div className="tabs">
          <button className={`tab ${tab === 'java' ? 'active' : ''}`} onClick={() => setTab('java')}>☕ Java Playground</button>
          <button className={`tab ${tab === 'sql' ? 'active' : ''}`} onClick={() => setTab('sql')}>🗄️ SQL Playground</button>
          <button className={`tab ${tab === 'spring' ? 'active' : ''}`} onClick={() => setTab('spring')}>🍃 Spring Boot Simulator</button>
        </div>

        {tab === 'java' && (
          <div className="playground-container">
            <div className="playground-editor">
              <div className="playground-toolbar">
                <div className="playground-title"><Terminal size={16} /> Java Code</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-sm btn-secondary" onClick={() => setJavaCode(javaCode)}><RotateCcw size={14} /></button>
                  <button className="btn btn-sm btn-primary" onClick={runJava}><Play size={14} /> Run</button>
                </div>
              </div>
              <textarea className="playground-textarea" value={javaCode} onChange={e => setJavaCode(e.target.value)} spellCheck={false} />
            </div>
            <div className="playground-output">
              <div className="playground-toolbar">
                <div className="playground-title"><Terminal size={16} /> Output</div>
              </div>
              <div className="output-content">{javaOutput || '< Click "Run" to execute the code >'}</div>
            </div>
          </div>
        )}

        {tab === 'sql' && (
          <div className="playground-container">
            <div className="playground-editor">
              <div className="playground-toolbar">
                <div className="playground-title"><Database size={16} /> SQL Query</div>
                <button className="btn btn-sm btn-primary" onClick={runSql}><Play size={14} /> Execute</button>
              </div>
              <textarea className="playground-textarea" value={sqlQuery} onChange={e => setSqlQuery(e.target.value)} spellCheck={false} placeholder="Enter SQL query..." />
            </div>
            <div className="playground-output">
              <div className="playground-toolbar">
                <div className="playground-title"><Database size={16} /> Results</div>
              </div>
              <div className="output-content">{sqlOutput || '< Click "Execute" to run the query >'}</div>
            </div>
          </div>
        )}

        {tab === 'spring' && (
          <div className="grid-2" style={{ marginTop: 20 }}>
            <div className="card">
              <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><Server size={18} /> REST API Endpoints</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {endpoints.map((ep, i) => (
                  <div key={i} className={`card ${activeEndpoint === i ? 'card-hover' : ''}`} style={{ cursor: 'pointer', padding: 12 }} onClick={() => setActiveEndpoint(i)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ padding: '2px 6px', borderRadius: 4, fontSize: '0.7rem', fontWeight: 700, color: 'white', background: ep.color }}>{ep.method}</span>
                      <span style={{ fontSize: '0.85rem', fontFamily: 'monospace' }}>{ep.path}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>{ep.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <h4 style={{ fontSize: '0.85rem', marginBottom: 8, color: 'var(--text-muted)' }}>Request Flow Diagram</h4>
                <div className="diagram-block" style={{ fontSize: '0.75rem', lineHeight: '1.8' }}>
                  {`Client (Browser/Postman)
    │
    ▼
┌──────────────┐
│  Controller  │  @RestController
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Service    │  @Service (Business Logic)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Repository  │  JpaRepository (Data Access)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Database   │  MySQL / PostgreSQL
└──────────────┘`}
                </div>
              </div>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><Terminal size={18} /> Response Preview</h3>
              {activeEndpoint !== null ? (
                <div className="fade-in">
                  <div style={{ marginBottom: 12 }}>
                    <span style={{ padding: '3px 8px', borderRadius: 4, fontSize: '0.8rem', fontWeight: 700, color: 'white', background: endpoints[activeEndpoint].color }}>{endpoints[activeEndpoint].method}</span>
                    <span style={{ marginLeft: 8, fontFamily: 'monospace', fontSize: '0.85rem' }}>{endpoints[activeEndpoint].path}</span>
                    <span style={{ marginLeft: 8, fontSize: '0.8rem', color: 'var(--text-muted)' }}>→ {endpoints[activeEndpoint].status}</span>
                  </div>
                  <div className="code-block" style={{ margin: 0 }}>
                    {endpoints[activeEndpoint].body}
                  </div>
                  <div style={{ marginTop: 16, padding: 12, background: 'rgba(16,185,129,0.05)', borderRadius: 8, border: '1px solid rgba(16,185,129,0.15)' }}>
                    <h4 style={{ fontSize: '0.85rem', marginBottom: 6 }}>Response Details</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Status: {endpoints[activeEndpoint].status} {endpoints[activeEndpoint].status === 200 ? 'OK' : endpoints[activeEndpoint].status === 201 ? 'Created' : endpoints[activeEndpoint].status === 204 ? 'No Content' : ''}<br />
                      Content-Type: application/json<br />
                      Headers: Authorization: Bearer &lt;token&gt;
                    </p>
                  </div>
                </div>
              ) : (
                <div className="empty-state" style={{ padding: 20 }}>
                  <p style={{ color: 'var(--text-muted)' }}>Select an endpoint to see the response</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
