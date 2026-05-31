export const interviewQuestions = {
  java: {
    beginner: [
      { question: 'What is Java and why is it platform-independent?', answer: 'Java is a high-level, OOP language. It achieves platform independence through JVM - compiled bytecode runs on any JVM regardless of underlying OS.' },
      { question: 'Explain the difference between JDK, JRE, and JVM.', answer: 'JVM executes bytecode. JRE = JVM + libraries (for running). JDK = JRE + development tools (for developing).' },
      { question: 'What are primitive data types in Java?', answer: 'byte (1B), short (2B), int (4B), long (8B), float (4B), double (8B), boolean (1bit), char (2B).' },
      { question: 'What is the difference between == and .equals()?', answer: '== compares references (memory addresses) for objects. .equals() compares actual content/values. For primitives, == compares values.' },
      { question: 'Explain method overloading vs overriding.', answer: 'Overloading: same method name, different parameters (compile-time polymorphism). Overriding: subclass redefines parent method (runtime polymorphism).' }
    ],
    intermediate: [
      { question: 'How does HashMap work internally?', answer: 'HashMap uses an array of buckets (linked lists or trees). put(): hashCode() -> index -> store key-value. get(): hashCode() -> index -> find by equals(). Load factor (0.75) triggers rehashing.' },
      { question: 'What is the difference between ArrayList and LinkedList?', answer: 'ArrayList: array-based, O(1) get, O(n) insert/delete middle. LinkedList: doubly-linked list, O(n) get, O(1) insert/delete at ends. ArrayList uses less memory.' },
      { question: 'Explain the volatile keyword.', answer: 'volatile ensures that a variable\'s value is always read from main memory, not thread cache. It provides visibility guarantees but not atomicity.' },
      { question: 'What is the difference between checked and unchecked exceptions?', answer: 'Checked (compile-time): must be handled/caught or declared (IOException, SQLException). Unchecked (runtime): RuntimeException subclasses, don\'t require handling (NullPointerException).' },
      { question: 'How does Garbage Collection work in Java?', answer: 'GC automatically deletes unreachable objects. Generational: Young Gen (Eden, S0, S1) -> Minor GC, Old Gen -> Major GC. Mark-Sweep-Compact algorithm.' }
    ],
    advanced: [
      { question: 'What is the difference between synchronized and ReentrantLock?', answer: 'synchronized: implicit lock, simpler, can\'t interrupt. ReentrantLock: explicit, can interrupt, tryLock(), fair ordering, multiple condition variables. Prefer synchronized for simplicity, ReentrantLock for advanced scenarios.' },
      { question: 'Explain the Java Memory Model (JMM).', answer: 'JMM defines how threads interact via memory. Rules: happens-before relationship, volatile semantics, synchronized blocks establish memory barriers. Ensures visibility and ordering guarantees.' },
      { question: 'How does ConcurrentHashMap achieve thread-safety?', answer: 'Java 8+: uses CAS operations for inserts and synchronized on specific bins for updates. Divides map into segments/bins, allowing concurrent reads and limited concurrent writes. No full map locking.' },
      { question: 'What are CompletableFuture and its advantages?', answer: 'CompletableFuture implements Future and CompletionStage. Supports: thenApply (transform), thenCompose (chain), thenCombine (merge), exceptionally (error handling), allOf/anyOf (multiple futures). Enables functional, non-blocking async programming.' },
      { question: 'Explain the Stream API collect() method and Collectors.', answer: 'collect() is a terminal operation that accumulates stream elements. Common collectors: toList(), toSet(), toMap(), groupingBy(), partitioningBy(), joining(), summarizingInt().' }
    ]
  },
  'spring-boot': {
    beginner: [
      { question: 'What is Spring Boot?', answer: 'Spring Boot is a framework that simplifies Spring application development with auto-configuration, embedded servers, and starter dependencies. Reduces boilerplate configuration.' },
      { question: 'What is Dependency Injection?', answer: 'DI is a design pattern where objects receive dependencies from an external source (Spring container) rather than creating them. Promotes loose coupling and testability.' },
      { question: 'Explain @RestController vs @Controller.', answer: '@Controller returns view names (MVC). @RestController = @Controller + @ResponseBody, returns JSON/XML directly from REST endpoints.' },
      { question: 'What is application.properties?', answer: 'Configuration file for Spring Boot. Sets server port, database connection, logging levels, etc. Can use .yml format too.' },
      { question: 'What are Maven and its key concepts?', answer: 'Maven is a build automation tool. Key: pom.xml (project config), dependencies, plugins, phases (compile, test, package, install).' }
    ],
    intermediate: [
      { question: 'How does @Transactional work?', answer: 'Spring creates an AOP proxy. On @Transactional methods: begin transaction -> execute method -> commit on success / rollback on RuntimeException. Can configure propagation, isolation, timeout.' },
      { question: 'Explain Spring Boot auto-configuration.', answer: '@EnableAutoConfiguration uses spring.factories files. @Conditional annotations check classpath, bean existence, property values. Auto-configures DataSource, JPA, Security, etc.' },
      { question: 'What is the difference between @Component, @Service, @Repository?', answer: 'All are stereotype annotations for component scanning. @Service: service layer (business logic). @Repository: persistence layer (DB exception translation). @Component: generic bean.' },
      { question: 'How do you handle exceptions in REST APIs?', answer: '@ExceptionHandler in @ControllerAdvice class. Map exceptions to HTTP status codes. Return consistent error response objects (timestamp, message, status, error).' },
      { question: 'What is JPA and Hibernate?', answer: 'JPA is the Java specification for ORM. Hibernate is the most popular JPA implementation. Maps Java objects to database tables. Provides: @Entity, @Table, @Column, @OneToMany, @ManyToOne.' }
    ],
    advanced: [
      { question: 'How does Spring Security filter chain work?', answer: 'Chain of Filter instances. Each filter checks authentication/authorization. Key filters: SecurityContextPersistenceFilter, UsernamePasswordAuthenticationFilter, ExceptionTranslationFilter, FilterSecurityInterceptor. Order matters.' },
      { question: 'Explain JWT authentication flow in Spring Boot.', answer: '1) Login: authenticate -> generate JWT (with subject, roles, expiry). 2) Client sends JWT in Authorization header. 3) JwtAuthenticationFilter validates token, sets SecurityContext. 4) Requests proceed if authenticated.' },
      { question: 'What are Spring profiles?', answer: '@Profile activates beans conditionally by environment (dev, test, prod). Configure with application-{profile}.properties. Activate via spring.profiles.active.' },
      { question: 'Explain microservices architecture patterns in Spring Boot.', answer: 'Patterns: Service Discovery (Eureka), API Gateway (Zuul/Gateway), Config Server (Spring Cloud Config), Circuit Breaker (Resilience4j), Distributed Tracing (Sleuth + Zipkin).' },
      { question: 'How does Spring Boot manage bean lifecycle?', answer: 'Container: instantiate -> populate properties -> set bean name -> set bean factory -> pre-init (BeanPostProcessor) -> init (@PostConstruct, InitializingBean) -> ready -> pre-destroy (@PreDestroy) -> destroy.' }
    ]
  },
  mysql: {
    beginner: [
      { question: 'What is a database?', answer: 'An organized collection of structured data. RDBMS (like MySQL) stores data in tables with rows and columns, supporting SQL queries.' },
      { question: 'What is a PRIMARY KEY?', answer: 'Uniquely identifies each row. Must be unique and NOT NULL. A table can have only one primary key (can be composite).' },
      { question: 'What is the difference between DELETE and TRUNCATE?', answer: 'DELETE: DML, can use WHERE, logs each row, slower, keeps auto-increment. TRUNCATE: DDL, removes all rows, no logging per row, faster, resets auto-increment.' },
      { question: 'What is a JOIN?', answer: 'JOIN combines rows from two+ tables based on a related column. Types: INNER, LEFT, RIGHT, FULL, CROSS.' },
      { question: 'What is normalization?', answer: 'Process of organizing data to reduce redundancy. 1NF: atomic columns. 2NF: remove partial dependencies. 3NF: remove transitive dependencies.' }
    ],
    intermediate: [
      { question: 'What is an index and when would you use it?', answer: 'Index speeds up SELECT queries by creating a data structure (B-tree) for fast lookup. Use on columns in WHERE, JOIN, ORDER BY. Trade-off: slower INSERT/UPDATE.' },
      { question: 'Explain ACID properties.', answer: 'Atomicity: all or nothing. Consistency: valid state before/after. Isolation: concurrent transactions don\'t interfere. Durability: committed data persists.' },
      { question: 'What are isolation levels in MySQL?', answer: 'READ UNCOMMITTED (dirty reads), READ COMMITTED (no dirty reads, non-repeatable reads), REPEATABLE READ (default in MySQL, phantom reads possible), SERIALIZABLE (fully isolated, slowest).' },
      { question: 'What is a stored procedure?', answer: 'Precompiled SQL code stored in database. Accepts parameters, returns results. Benefits: performance, security, reusability. Equivalent to a database function.' },
      { question: 'What is the N+1 query problem and how to solve it?', answer: 'One query for parent + N queries for children. Solution: use JOIN FETCH (JPQL), @EntityGraph, or batch fetching to load related entities in one query.' }
    ],
    advanced: [
      { question: 'How does MySQL handle deadlocks?', answer: 'Deadlock: Transaction A locks row 1, waits for row 2; B locks row 2, waits for row 1. MySQL detects deadlocks and rolls back the transaction that did the least work (innodb_deadlock_detect).' },
      { question: 'Explain query optimization techniques.', answer: 'Use EXPLAIN to analyze. Techniques: proper indexes, avoid SELECT *, use LIMIT, avoid functions in WHERE, optimize JOINs, use covering indexes, partition large tables.' },
      { question: 'What is the difference between clustered and non-clustered indexes?', answer: 'Clustered: determines physical order of data (InnoDB primary key). One per table. Non-clustered: separate structure with pointer to data. Multiple allowed.' },
      { question: 'How does MVCC work in MySQL?', answer: 'Multi-Version Concurrency Control: each transaction sees a snapshot of data at its start time. Undo logs store old versions for rollback. Enables non-locking reads.' },
      { question: 'What is sharding in MySQL?', answer: 'Horizontal partitioning across multiple databases. Each shard holds a subset of data. Improves scalability but adds complexity for joins, transactions, and schema changes.' }
    ]
  },
  iot: {
    beginner: [
      { question: 'What is IoT?', answer: 'Internet of Things: network of physical devices (sensors, actuators) connected to the internet for data collection, monitoring, and control.' },
      { question: 'What is MQTT?', answer: 'Lightweight publish-subscribe messaging protocol for IoT. Uses a broker to route messages by topic. Ideal for constrained devices and low-bandwidth networks.' },
      { question: 'What is the difference between Arduino and ESP32?', answer: 'Arduino: simpler, more GPIO pins, no built-in WiFi (needs shield). ESP32: built-in WiFi + Bluetooth, faster, more memory, ideal for IoT projects.' },
      { question: 'What is a sensor?', answer: 'Device that measures physical quantities (temperature, humidity, motion, light, pressure) and converts to electrical signals for processing.' }
    ],
    intermediate: [
      { question: 'Explain MQTT QoS levels.', answer: 'QoS 0: at most once (fire and forget). QoS 1: at least once (guaranteed delivery, may duplicate). QoS 2: exactly once (highest reliability, slowest).' },
      { question: 'What is the role of an IoT gateway?', answer: 'Connects IoT devices to cloud. Handles: protocol translation (MQTT->HTTP), data preprocessing, security, local decision-making, buffering for offline scenarios.' },
      { question: 'What is edge computing in IoT?', answer: 'Processing data near the source (sensors/devices) instead of cloud. Reduces latency, bandwidth usage, and enables real-time decisions. Example: smart camera processing video locally.' }
    ],
    advanced: [
      { question: 'How would you design a smart city IoT architecture?', answer: 'Layers: 1) Perception (sensors, cameras, actuators), 2) Network (WiFi, LoRaWAN, 5G, MQTT), 3) Edge processing (gateways, local analytics), 4) Cloud (data lake, AI/ML), 5) Application (dashboards, alerts, APIs).' },
      { question: 'What security considerations are important for IoT?', answer: 'Device authentication, encrypted communication (TLS), secure boot, firmware updates, data encryption at rest, network segmentation, API security, regular patching.' },
      { question: 'Explain how you would implement OTA updates for IoT devices.', answer: 'OTA layers: 1) Cloud stores firmware versions, 2) Device checks for updates, 3) Downloads in chunks (with integrity verification), 4) Writes to secondary partition, 5) Switches boot partition, 6) Rollback on failure. Use MQTT/HTTP for delivery.' }
    ]
  },
  linux: {
    beginner: [
      { question: 'What is Linux?', answer: 'Open-source Unix-like operating system. Popular for servers, development, and cloud. Known for stability, security, and command-line interface.' },
      { question: 'What is the difference between an absolute and relative path?', answer: 'Absolute: starts with /, full path from root (e.g., /home/user/file.txt). Relative: relative to current directory (e.g., ../docs/file.txt).' },
      { question: 'What does chmod do?', answer: 'Changes file permissions. Format: chmod [who][+-=][permissions]. Numbers: r=4, w=2, x=1. 755 = rwxr-xr-x.' },
      { question: 'How do you create a new file in Linux?', answer: 'touch filename (creates empty file), echo "text" > file, nano/vim file (text editors).' }
    ],
    intermediate: [
      { question: 'How do you check system resource usage?', answer: 'top/htop (processes), free -h (memory), df -h (disk), du -sh (directory size), netstat/ss (network), iostat (I/O).' },
      { question: 'What is a Linux service and how do you manage it?', answer: 'Background process managed by systemd. Commands: systemctl start|stop|restart|enable|disable service-name. Check status: systemctl status service-name.' },
      { question: 'What is SSH and how does it work?', answer: 'Secure Shell: encrypted remote access protocol. Uses public-key cryptography. Typical port 22. Command: ssh user@hostname. Key-based auth with ssh-keygen.' }
    ],
    advanced: [
      { question: 'How do you debug a Linux performance issue?', answer: 'Method: 1) top/htop for CPU/memory, 2) iostat for disk I/O, 3) vmstat for system processes, 4) netstat/ss for network, 5) strace for system calls, 6) perf for profiling.' },
      { question: 'Explain Linux process states.', answer: 'R (running/runnable), S (sleeping/interruptible), D (uninterruptible sleep, waiting for I/O), Z (zombie, finished but not reaped by parent), T (stopped/traced).' },
      { question: 'How does Linux handle memory management?', answer: 'Virtual memory with paging. MMU translates virtual to physical addresses. Swap space extends RAM. OOM killer terminates processes when memory exhausted. Cgroups limit resource usage.' }
    ]
  },
  git: {
    beginner: [
      { question: 'What is Git?', answer: 'Distributed version control system. Tracks changes, enables collaboration, supports branching/merging. Each developer has full repository copy.' },
      { question: 'What is the difference between git add and git commit?', answer: 'git add stages changes (prepares them). git commit saves staged changes to repository with a message. Add is like selecting files, commit is like saving them.' },
      { question: 'What is a branch in Git?', answer: 'Lightweight movable pointer to a commit. Enables parallel development. Default branch is main/master. Create: git branch feature, Switch: git checkout/switch feature.' }
    ],
    intermediate: [
      { question: 'How do you resolve a merge conflict?', answer: '1) git status shows conflicting files, 2) Edit files to resolve conflicts (<<<<<<<, =======, >>>>>>> markers), 3) git add files, 4) git commit to complete merge.' },
      { question: 'What is the difference between merge and rebase?', answer: 'merge: creates merge commit, preserves history. rebase: reapplies commits on new base, linear history. Rebase is cleaner but rewrites history (don\'t rebase public branches).' },
      { question: 'What is a GitHub Pull Request workflow?', answer: '1) Fork/clone repo, 2) Create feature branch, 3) Make changes and commit, 4) Push branch to remote, 5) Open PR on GitHub, 6) Code review and discussion, 7) Merge PR, 8) Delete feature branch.' }
    ],
    advanced: [
      { question: 'What is git bisect?', answer: 'Binary search through commit history to find the commit that introduced a bug. Commands: git bisect start, git bisect bad (current broken), git bisect good (last known working). Git checks out middle commit each time.' },
      { question: 'How do you handle large files in Git?', answer: 'Git LFS (Large File Storage) replaces large files with text pointers. For binary assets, media, datasets. Alternative: git-annex for managing files without storing in repo.' },
      { question: 'What are git hooks and how are they used?', answer: 'Scripts that run automatically on Git events. Client-side: pre-commit (lint), pre-push (test). Server-side: pre-receive (policy check), post-receive (deploy). Stored in .git/hooks/.' }
    ]
  }
};

export const roadmapLevels = [
  {
    level: 1,
    name: 'Foundations',
    duration: 'Week 1-2',
    color: '#f89820',
    topics: [
      { tech: 'Java', items: ['Java Basics', 'Variables & Data Types', 'Operators', 'Control Statements', 'Loops', 'Arrays', 'Strings', 'Methods'] },
      { tech: 'MySQL', items: ['Database Fundamentals', 'Tables & Relationships', 'CRUD Queries', 'Basic Joins'] },
      { tech: 'Linux', items: ['Basic Commands', 'File System', 'Permissions'] },
      { tech: 'Git', items: ['Git Basics', 'Branching'] }
    ],
    milestones: ['Write your first Java program', 'Create and query a MySQL database', 'Navigate Linux command line', 'Push code to GitHub']
  },
  {
    level: 2,
    name: 'Core Development',
    duration: 'Week 3-4',
    color: '#6db33f',
    topics: [
      { tech: 'Java', items: ['OOP Concepts', 'Collections Framework', 'Exception Handling', 'File Handling'] },
      { tech: 'Spring Boot', items: ['Spring Fundamentals', 'Dependency Injection', 'IoC Container', 'Maven'] },
      { tech: 'MySQL', items: ['Advanced Joins', 'Indexes', 'Views', 'Normalization'] },
      { tech: 'Thymeleaf', items: ['Templates', 'Forms', 'Loops & Conditionals', 'Fragments'] }
    ],
    milestones: ['Build OOP-based Java application', 'Create first Spring Boot REST API', 'Design normalized database schema', 'Build Thymeleaf UI with forms']
  },
  {
    level: 3,
    name: 'Project Building',
    duration: 'Week 5-6',
    color: '#4479a1',
    topics: [
      { tech: 'Spring Boot', items: ['REST APIs', 'CRUD Operations', 'Validation', 'JPA & Hibernate', 'Spring Boot Architecture'] },
      { tech: 'MySQL', items: ['Stored Procedures', 'Transactions', 'Query Optimization'] },
      { tech: 'Thymeleaf', items: ['Spring Boot Integration', 'Validation', 'CRUD UI Development'] },
      { tech: 'IoT', items: ['IoT Fundamentals', 'MQTT', 'Arduino/ESP32', 'Cloud Integration'] }
    ],
    milestones: ['Build CRUD application with Spring Boot + JPA + Thymeleaf', 'Implement transaction management', 'Design and deploy IoT sensor monitoring', 'Complete Student Management System project']
  },
  {
    level: 4,
    name: 'Interview Preparation',
    duration: 'Week 7-8',
    color: '#f05032',
    topics: [
      { tech: 'Java', items: ['Multithreading', 'Streams API', 'Lambda Expressions', 'Generics', 'Design Patterns'] },
      { tech: 'Spring Boot', items: ['Security & JWT', 'Microservices Introduction', 'Profiles', 'Logging'] },
      { tech: 'All', items: ['Interview Questions (all levels)', 'MCQ Practice', 'Coding Exercises', 'SQL Challenges'] }
    ],
    milestones: ['Complete all technology interview questions', 'Pass mock technical interviews', 'Achieve 80%+ on all MCQ assessments', 'Review all weak areas identified by assessments']
  },
  {
    level: 5,
    name: 'Project Ready',
    duration: 'Week 9-10',
    color: '#00bcd4',
    topics: [
      { tech: 'Projects', items: ['Student Management System', 'Employee Portal', 'Inventory Management', 'IoT Dashboard', 'Smart Permit System'] },
      { tech: 'Deployment', items: ['Linux Deployment', 'Docker Basics', 'CI/CD Introduction', 'Cloud Deployment'] },
      { tech: 'DevOps', items: ['REST API Best Practices', 'System Design Basics', 'Code Review', 'Documentation'] }
    ],
    milestones: ['Complete 2 guided projects end-to-end', 'Deploy application on Linux server', 'Set up CI/CD pipeline', 'Receive Interview Ready certification']
  }
];
