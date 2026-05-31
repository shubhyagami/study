export const technologies = [
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#f89820',
    gradient: 'linear-gradient(135deg, #f89820, #ed7d0e)',
    progress: 0,
    topics: [
      { id: 'java-basics', name: 'Java Basics', level: 'Beginner' },
      { id: 'java-variables', name: 'Variables & Data Types', level: 'Beginner' },
      { id: 'java-operators', name: 'Operators', level: 'Beginner' },
      { id: 'java-control', name: 'Control Statements', level: 'Beginner' },
      { id: 'java-loops', name: 'Loops', level: 'Beginner' },
      { id: 'java-arrays', name: 'Arrays', level: 'Beginner' },
      { id: 'java-strings', name: 'Strings', level: 'Beginner' },
      { id: 'java-methods', name: 'Methods', level: 'Beginner' },
      { id: 'java-oop', name: 'OOP Concepts', level: 'Intermediate' },
      { id: 'java-collections', name: 'Collections Framework', level: 'Intermediate' },
      { id: 'java-exceptions', name: 'Exception Handling', level: 'Intermediate' },
      { id: 'java-file-io', name: 'File Handling', level: 'Intermediate' },
      { id: 'java-multithreading', name: 'Multithreading', level: 'Advanced' },
      { id: 'java-streams', name: 'Streams API', level: 'Advanced' },
      { id: 'java-lambda', name: 'Lambda Expressions', level: 'Advanced' },
      { id: 'java-generics', name: 'Generics', level: 'Advanced' },
      { id: 'java-design-patterns', name: 'Design Patterns', level: 'Advanced' },
    ]
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: '🍃',
    color: '#6db33f',
    gradient: 'linear-gradient(135deg, #6db33f, #4a8c2a)',
    progress: 0,
    topics: [
      { id: 'spring-fundamentals', name: 'Spring Fundamentals', level: 'Beginner' },
      { id: 'spring-di', name: 'Dependency Injection', level: 'Beginner' },
      { id: 'spring-ioc', name: 'IoC Container', level: 'Beginner' },
      { id: 'maven', name: 'Maven', level: 'Beginner' },
      { id: 'spring-architecture', name: 'Spring Boot Architecture', level: 'Intermediate' },
      { id: 'spring-rest', name: 'REST APIs', level: 'Intermediate' },
      { id: 'spring-crud', name: 'CRUD Operations', level: 'Intermediate' },
      { id: 'spring-validation', name: 'Validation', level: 'Intermediate' },
      { id: 'spring-jpa', name: 'JPA & Hibernate', level: 'Advanced' },
      { id: 'spring-security', name: 'Security & JWT', level: 'Advanced' },
      { id: 'spring-microservices', name: 'Microservices', level: 'Advanced' },
    ]
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: '🗄️',
    color: '#4479a1',
    gradient: 'linear-gradient(135deg, #4479a1, #2d5a7e)',
    progress: 0,
    topics: [
      { id: 'sql-basics', name: 'Database Fundamentals', level: 'Beginner' },
      { id: 'sql-tables', name: 'Tables & Relationships', level: 'Beginner' },
      { id: 'sql-crud', name: 'CRUD Queries', level: 'Beginner' },
      { id: 'sql-joins', name: 'Joins', level: 'Intermediate' },
      { id: 'sql-indexes', name: 'Indexes', level: 'Intermediate' },
      { id: 'sql-views', name: 'Views', level: 'Intermediate' },
      { id: 'sql-procedures', name: 'Stored Procedures', level: 'Advanced' },
      { id: 'sql-transactions', name: 'Transactions', level: 'Advanced' },
      { id: 'sql-normalization', name: 'Normalization', level: 'Advanced' },
      { id: 'sql-optimization', name: 'Query Optimization', level: 'Advanced' },
    ]
  },
  {
    id: 'thymeleaf',
    name: 'Thymeleaf',
    icon: '🌿',
    color: '#005f0f',
    gradient: 'linear-gradient(135deg, #005f0f, #003d0a)',
    progress: 0,
    topics: [
      { id: 'thymeleaf-templates', name: 'Templates', level: 'Beginner' },
      { id: 'thymeleaf-forms', name: 'Forms & Data Binding', level: 'Beginner' },
      { id: 'thymeleaf-loops', name: 'Loops & Conditionals', level: 'Beginner' },
      { id: 'thymeleaf-fragments', name: 'Fragments', level: 'Intermediate' },
      { id: 'thymeleaf-spring', name: 'Spring Boot Integration', level: 'Intermediate' },
      { id: 'thymeleaf-crud', name: 'CRUD UI Development', level: 'Advanced' },
    ]
  },
  {
    id: 'iot',
    name: 'IoT',
    icon: '📡',
    color: '#00bcd4',
    gradient: 'linear-gradient(135deg, #00bcd4, #008ba3)',
    progress: 0,
    topics: [
      { id: 'iot-fundamentals', name: 'IoT Fundamentals', level: 'Beginner' },
      { id: 'iot-sensors', name: 'Sensors & Microcontrollers', level: 'Beginner' },
      { id: 'iot-arduino', name: 'Arduino & ESP32', level: 'Intermediate' },
      { id: 'iot-mqtt', name: 'MQTT Protocol', level: 'Intermediate' },
      { id: 'iot-cloud', name: 'Cloud Integration', level: 'Advanced' },
      { id: 'iot-projects', name: 'Real-world Use Cases', level: 'Advanced' },
    ]
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: '🐧',
    color: '#fcc624',
    gradient: 'linear-gradient(135deg, #fcc624, #d4a800)',
    progress: 0,
    topics: [
      { id: 'linux-basics', name: 'Basic Commands', level: 'Beginner' },
      { id: 'linux-filesystem', name: 'File System', level: 'Beginner' },
      { id: 'linux-permissions', name: 'Permissions', level: 'Beginner' },
      { id: 'linux-processes', name: 'Processes & Services', level: 'Intermediate' },
      { id: 'linux-networking', name: 'Networking & SSH', level: 'Intermediate' },
      { id: 'linux-deployment', name: 'Deployment', level: 'Advanced' },
    ]
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: '🔀',
    color: '#f05032',
    gradient: 'linear-gradient(135deg, #f05032, #c73a1e)',
    progress: 0,
    topics: [
      { id: 'git-basics', name: 'Git Basics', level: 'Beginner' },
      { id: 'git-branching', name: 'Branching & Merging', level: 'Intermediate' },
      { id: 'git-collaboration', name: 'Pull Requests & Workflow', level: 'Intermediate' },
      { id: 'git-advanced', name: 'Advanced Git', level: 'Advanced' },
    ]
  }
];

export const lessons = {
  'java-basics': {
    title: 'Java Basics',
    techId: 'java',
    level: 'Beginner',
    duration: '30 min',
    introduction: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It follows the "Write Once, Run Anywhere" (WORA) principle, meaning compiled Java code can run on any platform that supports JVM.',
    whyUsed: 'Java is widely used for enterprise applications, Android development, web services, and large-scale systems because of its platform independence, strong memory management, and extensive ecosystem.',
    realProjectExample: 'In a Banking Application, Java handles transaction processing, account management, and secure data handling. The same code runs on Windows servers, Linux mainframes, and cloud platforms.',
    diagram: `+-------------------+
|   Java Source     |
|   (Hello.java)    |
+--------+----------+
         |
         v
+-------------------+
|   Java Compiler   |
|   (javac)         |
+--------+----------+
         |
         v
+-------------------+
|   Bytecode        |
|   (Hello.class)   |
+--------+----------+
         |
         v
+-------------------+
|   JVM (Platform)  |
+-------------------+
         |
         v
+-------------------+
|   Program Runs!   |
+-------------------+`,
    keyPoints: [
      'Java is platform-independent via JVM',
      'Object-oriented: everything is an object',
      'Strongly typed - variables must be declared',
      'Automatic garbage collection',
      'Rich standard library (Java API)',
      'Multithreaded by nature'
    ],
    interviewQuestions: [
      'Q: What is the difference between JDK, JRE, and JVM?',
      'Q: How does Java achieve platform independence?',
      'Q: What is the main() method and why is it static?',
      'Q: What are the primitive data types in Java?'
    ],
    exercise: 'Write a Java program that prints "Hello, Interview Ready Engineer!" and explains each part of the code.',
    code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Interview Ready Engineer!");
    }
}`,
    codeExplanation: `• public: Access modifier - accessible from anywhere
• class: Keyword to declare a class
• HelloWorld: Class name (must match filename)
• static: Makes main() a class-level method
• void: Returns nothing
• String[] args: Command-line arguments
• System.out.println(): Prints output to console`
  },
  'java-variables': {
    title: 'Variables & Data Types',
    techId: 'java',
    level: 'Beginner',
    duration: '25 min',
    introduction: 'Variables are containers for storing data values. Each variable in Java has a specific data type that determines the size and type of values it can hold.',
    whyUsed: 'Variables allow programs to store, modify, and retrieve data during execution. Data types ensure memory efficiency and type safety.',
    realProjectExample: 'In an Employee Management System, variables store employee IDs (int), names (String), salaries (double), and active status (boolean).',
    diagram: `+--------------------------------------------+
|           Java Data Types                    |
+--------------------------------------------+
| PRIMITIVE (8)          | REFERENCE          |
+------------------------+-------------------+
| byte (1 byte)          | String            |
| short (2 bytes)        | Arrays            |
| int (4 bytes)          | Classes           |
| long (8 bytes)         | Interfaces        |
| float (4 bytes)        |                   |
| double (8 bytes)       |                   |
| boolean (1 bit)        |                   |
| char (2 bytes)         |                   |
+------------------------+-------------------+`,
    keyPoints: [
      '8 primitive data types in Java',
      'Reference types store memory addresses',
      'Variables must be declared before use',
      'Type casting: implicit (widening) and explicit (narrowing)',
      'Local variables need initialization',
      'Constants use "final" keyword'
    ],
    interviewQuestions: [
      'Q: What is the difference between primitive and reference types?',
      'Q: What is type casting and when would you use it?',
      'Q: What is the default value of a local variable?',
      'Q: Explain the difference between float and double.'
    ],
    exercise: 'Create variables of each primitive type, print their values, and observe default values for class-level variables.',
    code: `public class DataTypesDemo {
    int instanceVar; // default 0
    static boolean classVar; // default false

    public static void main(String[] args) {
        int age = 25;
        double salary = 75000.50;
        char grade = 'A';
        boolean isEmployed = true;
        String name = "John Doe";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("Grade: " + grade);
        System.out.println("Employed: " + isEmployed);
        System.out.println("Default boolean: " + classVar);
    }
}`,
    codeExplanation: `• int: Stores whole numbers (4 bytes)
• double: Stores decimal numbers (8 bytes)
• char: Stores single character (2 bytes)
• boolean: Stores true/false
• String: Reference type for text
• Variables can be initialized at declaration
• Class-level variables get default values`
  },
  'java-operators': {
    title: 'Operators',
    techId: 'java',
    level: 'Beginner',
    duration: '25 min',
    introduction: 'Operators are special symbols that perform operations on variables and values. Java provides a rich set of operators.',
    whyUsed: 'Operators enable mathematical calculations, logical decisions, comparisons, and value assignments in programs.',
    diagram: `+----------------------------------------------------+
|              JAVA OPERATORS                        |
+----------------------------------------------------+
| Arithmetic:     +   -   *   /   %                  |
| Relational:     ==  !=  >   <   >=  <=             |
| Logical:        &&  ||  !                          |
| Assignment:     =   +=  -=  *=  /=  %=             |
| Unary:          ++  --  !                          |
| Bitwise:        &   |   ^   ~   <<  >>  >>>        |
| Ternary:        ? :                                |
+----------------------------------------------------+`,
    keyPoints: ['++ increments by 1, -- decrements by 1', '&& short-circuits (stops if first is false)', 'Ternary is shorthand if-else', '% gives remainder', '== compares references for objects, use .equals()']
  },
  'java-control': {
    title: 'Control Statements',
    techId: 'java',
    level: 'Beginner',
    duration: '30 min',
    introduction: 'Control statements determine the flow of execution in a program based on conditions or loops.',
    diagram: `+------------------------------------------+
|         CONTROL FLOW IN JAVA               |
+------------------------------------------+
|  if-else     |  switch    |  loops        |
+--------------+------------+---------------+
| if (cond) {  | switch(x){ | for(;;){}     |
|   // code    |   case 1:  | while(){}     |
| } else {     |   break;   | do{}while();  |
|   // code    |   default: |               |
| }            | }          |               |
+--------------+------------+---------------+`
  },
  'java-loops': {
    title: 'Loops',
    techId: 'java',
    level: 'Beginner',
    duration: '25 min',
    introduction: 'Loops repeat a block of code as long as a specified condition is true.',
    diagram: `+--------------------------------------------------+
|              LOOP TYPES                            |
+--------------------------------------------------+
| FOR LOOP      | WHILE LOOP    | DO-WHILE          |
+---------------+---------------+------------------+
| for(i=0;      | while(cond) { | do {              |
| i<5; i++) {   |   // code     |   // code         |
|   // code     | }             | } while(cond);    |
| }             |               |                   |
+---------------+---------------+------------------+
| Known iterations | Condition first | Runs once     |
+--------------------------------------------------+`
  },
  'java-arrays': {
    title: 'Arrays',
    techId: 'java',
    level: 'Beginner',
    duration: '30 min',
    introduction: 'An array is a container that holds a fixed number of values of a single type. Arrays are index-based (starting from 0).',
    diagram: `+----------------------------------------------------+
|              JAVA ARRAY LAYOUT                      |
+----------------------------------------------------+
| Index:  | [0]  | [1]  | [2]  | [3]  | [4]  |      |
+---------+------+------+------+------+------+      |
| Value:  | 10   | 20   | 30   | 40   | 50   |      |
+---------+------+------+------+------+------+      |
| Memory: | 0x100| 0x104| 0x108| 0x10C| 0x110|     |
+----------------------------------------------------+
| Declaration: int[] arr = new int[5];                |
| Initialization: int[] arr = {10, 20, 30, 40, 50}; |
+----------------------------------------------------+`
  },
  'java-oop': {
    title: 'OOP Concepts',
    techId: 'java',
    level: 'Intermediate',
    duration: '45 min',
    introduction: 'Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" that contain data and methods.',
    diagram: `+------------------------------------------------------+
|            FOUR PILLARS OF OOP                       |
+------------------------------------------------------+
| ENCAPSULATION | INHERITANCE | POLYMORPHISM | ABSTRACTION|
+---------------+-------------+--------------+-----------+
| Hide data     | IS-A        | Many forms   | Hide      |
| private vars  | extends     | Overloading  | complex   |
| getters/setters| super      | Overriding   | details   |
|               |             |              | abstract  |
+---------------+-------------+--------------+-----------+`,
    whyUsed: 'OOP helps organize code, makes it reusable, scalable, and easier to maintain by modeling real-world entities.',
    keyPoints: [
      'Encapsulation: Bundle data and methods, hide internal state',
      'Inheritance: Child class inherits from parent class',
      'Polymorphism: Same method name, different behavior',
      'Abstraction: Hide implementation details, show only functionality',
      'Class: Blueprint for objects',
      'Object: Instance of a class'
    ],
    interviewQuestions: [
      'Q: What is the difference between method overloading and overriding?',
      'Q: Can you override a private method?',
      'Q: What is the difference between abstract class and interface?',
      'Q: What is the diamond problem in inheritance?',
      'Q: Explain the super keyword'
    ],
    code: `// Encapsulation
public class Employee {
    private String name;  // private = hidden
    private double salary;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

// Inheritance
public class Developer extends Employee {
    private String programmingLanguage;
}

// Polymorphism
public class Payroll {
    void processPay(Employee e) {
        // Works for any Employee subclass
    }
}

// Abstraction
abstract class Database {
    abstract void connect();
    abstract void disconnect();
}`,
    codeExplanation: `• private: Only accessible within the class
• extends: Creates inheritance relationship
• @Override: Indicates method overriding
• abstract: Cannot be instantiated, must be subclassed
• this: Reference to current object
• super: Reference to parent class object`
  },
  'spring-fundamentals': {
    title: 'Spring Fundamentals',
    techId: 'spring-boot',
    level: 'Beginner',
    duration: '35 min',
    introduction: 'Spring is a lightweight framework for building enterprise Java applications. It provides infrastructure support for developing Java applications.',
    whyUsed: 'Spring simplifies enterprise development with dependency injection, aspect-oriented programming, and boilerplate code reduction.',
    realProjectExample: 'An e-commerce platform uses Spring for managing user sessions, handling transactions, and connecting to databases seamlessly.',
    diagram: `+----------------------------------------------------+
|           SPRING FRAMEWORK LAYERED ARCHITECTURE      |
+----------------------------------------------------+
|   Presentation Layer (Controllers)                  |
|   @Controller, @RestController                      |
+---------------------------+------------------------+
|   Service Layer           |   @Service             |
+---------------------------+------------------------+
|   Persistence Layer       |   @Repository          |
+---------------------------+------------------------+
|   Database Layer          |   MySQL/PostgreSQL     |
+----------------------------------------------------+`,
    keyPoints: ['Lightweight and non-invasive', 'IoC container manages objects', 'DI reduces coupling', 'AOP for cross-cutting concerns', 'Extensive ecosystem (Spring Boot, Cloud, Security)']
  },
  'spring-di': {
    title: 'Dependency Injection',
    techId: 'spring-boot',
    level: 'Beginner',
    duration: '30 min',
    introduction: 'Dependency Injection (DI) is a design pattern where objects receive their dependencies from an external source rather than creating them internally.',
    diagram: `+----------------------------------------------------------+
|            DEPENDENCY INJECTION FLOW                       |
+----------------------------------------------------------+
| Without DI:                                                |
| Car -> new Engine()  [Tightly coupled]                     |
|                                                            |
| With DI:                                                   |
| Car <- Engine (Injected) [Loosely coupled]                 |
|                                                            |
| Spring DI Types:                                           |
| 1. Field Injection:    @Autowired Engine engine;           |
| 2. Setter Injection:   @Autowired void setEngine()         |
| 3. Constructor Injection: Car(Engine engine) [RECOMMENDED] |
+----------------------------------------------------------+`,
    keyPoints: ['Reduces coupling between classes', 'Makes code testable (easy mocking)', 'Spring manages object lifecycle', 'Constructor injection is preferred', '@Autowired for automatic wiring']
  },
  'spring-rest': {
    title: 'REST APIs',
    techId: 'spring-boot',
    level: 'Intermediate',
    duration: '40 min',
    introduction: 'REST (REpresentational State Transfer) APIs use HTTP methods to perform CRUD operations on resources.',
    diagram: `+----------------------------------------------------------+
|          SPRING BOOT REST API FLOW                         |
+----------------------------------------------------------+
| Client (Browser/Postman)                                  |
|   |                                                       |
|   v                                                       |
+------------------+                                        |
| Controller Layer |  @RestController                       |
+------------------+                                        |
|   |                                                       |
|   v                                                       |
+------------------+                                        |
|  Service Layer   |  @Service                              |
+------------------+                                        |
|   |                                                       |
|   v                                                       |
+------------------+                                        |
| Repository Layer |  @Repository                           |
+------------------+                                        |
|   |                                                       |
|   v                                                       |
+------------------+                                        |
|    Database      |  MySQL                                 |
+----------------------------------------------------------+`,
    code: `@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.findAll();
    }

    @PostMapping
    public Employee create(@RequestBody Employee emp) {
        return service.save(emp);
    }

    @GetMapping("/{id}")
    public Employee getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody Employee emp) {
        return service.update(id, emp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}`,
    keyPoints: ['HTTP Methods: GET, POST, PUT, DELETE, PATCH', '@RequestMapping or shortcut annotations', '@RequestBody binds JSON to object', '@PathVariable extracts URL parameter', '@ResponseStatus for custom status codes']
  },
  'sql-joins': {
    title: 'SQL Joins',
    techId: 'mysql',
    level: 'Intermediate',
    duration: '35 min',
    introduction: 'JOINS combine rows from two or more tables based on a related column between them.',
    diagram: `+------------------------------------------------------+
|              SQL JOINS VISUALIZED                      |
+------------------------------------------------------+
| INNER JOIN:  Only matching rows in both tables        |
|  [A]----[B]  -> Rows where A.id = B.id               |
|                                                       |
| LEFT JOIN:  All rows from left, matching from right   |
|  [A]------- -> Includes all A rows                   |
|                                                       |
| RIGHT JOIN: All rows from right, matching from left   |
|  -------[B] -> Includes all B rows                   |
|                                                       |
| FULL JOIN:  All rows from both tables                 |
|  [A]--[B]  -> Everything everywhere                  |
+------------------------------------------------------+`,
    code: `-- INNER JOIN
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (all employees, even without department)
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;

-- Multiple JOINs
SELECT e.name, d.dept_name, p.project_name
FROM employees e
JOIN departments d ON e.dept_id = d.id
JOIN projects p ON e.id = p.employee_id;`,
    keyPoints: ['INNER JOIN returns only matches', 'LEFT JOIN keeps all left table rows', 'RIGHT JOIN keeps all right table rows', 'Always use table aliases for readability', 'Multiple JOINs are possible in one query']
  },
  'iot-mqtt': {
    title: 'MQTT Protocol',
    techId: 'iot',
    level: 'Intermediate',
    duration: '30 min',
    introduction: 'MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol designed for constrained devices and low-bandwidth networks.',
    diagram: `+----------------------------------------------------+
|              MQTT ARCHITECTURE                       |
+----------------------------------------------------+
|                     +--------+                       |
|  Temperature        |        |       Mobile App     |
|  Sensor ---+------->| BROKER |<-------+---Display   |
|            |        | (MQTT) |        |             |
|            |        +--------+        |             |
|            |                         |             |
|  Humidity   +---> Subscribe:        +---> Subscribe|
|  Sensor         "sensor/temp"          "sensor/#"  |
|                                                    |
| PUBLISH: sensor/temp {"value": 25.5}               |
| SUBSCRIBE: sensor/# (receives all sensor topics)   |
+----------------------------------------------------+`,
    keyPoints: ['Lightweight protocol for IoT', 'Publish-Subscribe model', 'MQTT Broker manages messages', 'Topics organize messages (hierarchical)', 'QoS levels: 0, 1, 2', 'Retained messages for late subscribers']
  },
  'git-branching': {
    title: 'Branching & Merging',
    techId: 'git',
    level: 'Intermediate',
    duration: '30 min',
    introduction: 'Branching allows you to create independent lines of development within a repository. Merging combines changes from different branches.',
    diagram: `+------------------------------------------------------+
|              GIT BRANCHING WORKFLOW                    |
+------------------------------------------------------+
| main:    A---B---C---D---E---F                       |
|                   \\         /                        |
| feature:           X---Y---Z                         |
|                                                       |
| Commands:                                             |
| git branch feature    # Create branch                 |
| git checkout feature  # Switch to branch              |
| git merge feature     # Merge into current branch    |
| git branch -d feature # Delete branch                |
+------------------------------------------------------+`,
    keyPoints: ['Branch is a lightweight pointer to a commit', 'main/master is the default branch', 'Feature branches isolate work', 'Merge conflicts need manual resolution', 'Pull requests review code before merging']
  },
  'linux-basics': {
    title: 'Basic Linux Commands',
    techId: 'linux',
    level: 'Beginner',
    duration: '25 min',
    introduction: 'Linux is an open-source operating system widely used for servers, development, and deployment. The command line is its primary interface.',
    diagram: `+------------------------------------------------------+
|            LINUX COMMAND STRUCTURE                    |
+------------------------------------------------------+
| command [options] [arguments]                         |
|                                                        |
| Examples:                                              |
| ls -la /home    (list directory contents)              |
| chmod 755 file  (change permissions)                  |
| grep "error" log.txt (search text)                    |
|                                                        |
| Basic Commands:                                        |
| pwd  - Print working directory                         |
| cd   - Change directory                                |
| ls   - List directory contents                         |
| mkdir- Create directory                                |
| rm   - Remove files/directories                        |
| cp   - Copy files/directories                          |
| mv   - Move/rename files                               |
+------------------------------------------------------+`,
    keyPoints: ['Everything is a file in Linux', 'Commands have options (flags) for modification', '| (pipe) chains commands', 'Root user has full system access', '. means current directory, .. means parent']
  },
  'java-strings': {
    title: 'Strings',
    techId: 'java', level: 'Beginner', duration: '30 min',
    introduction: 'Strings are sequences of characters used for text manipulation. String is a class (not a primitive) in Java.',
    whyUsed: 'Strings are essential for handling text data: user input, file content, messages, and display output.',
    realProjectExample: 'In a Login System, Strings store usernames, passwords, tokens, and validation messages.',
    diagram: `+------------------------------------------------------+
|              STRING OPERATIONS                        |
+------------------------------------------------------+
| String str = "Hello";
| str.length()    -> 5
| str.charAt(1)   -> 'e'
| str.substring(1,4) -> "ell"
| str.indexOf("l") -> 2
| str.toUpperCase() -> "HELLO"
| str.replace("l","p") -> "Heppo"
| str.split("e") -> ["H", "llo"]
| str.equals("Hello") -> true
+------------------------------------------------------+`,
    keyPoints: ['String is immutable (cannot be changed after creation)', 'String pool optimizes memory for literal strings', 'Use StringBuilder/StringBuffer for mutable strings', 'equals() compares content, == compares references', 'String methods return new strings (original unchanged)'],
    interviewQuestions: ['Q: Why is String immutable in Java?', 'Q: What is the String Pool?', 'Q: Difference between String, StringBuilder, StringBuffer?', 'Q: How does substring() work internally?'],
    code: `public class StringDemo {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");

        System.out.println(s1 == s2);      // true (same pool ref)
        System.out.println(s1 == s3);      // false (different objects)
        System.out.println(s1.equals(s3)); // true (same content)

        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        System.out.println(sb); // "Hello World" (mutable!)
    }
}`,
    codeExplanation: `• String literals use String Pool (interning)
• new String() creates new heap object
• == compares references; equals() compares content
• StringBuilder is mutable and faster for concatenation`
  },
  'java-methods': {
    title: 'Methods',
    techId: 'java', level: 'Beginner', duration: '25 min',
    introduction: 'Methods are reusable blocks of code that perform specific tasks. They accept inputs (parameters) and may return outputs.',
    whyUsed: 'Methods promote code reuse, modularity, and readability. Break complex problems into smaller, manageable pieces.',
    diagram: `+--------------------------------------------------+
|              METHOD STRUCTURE                      |
+--------------------------------------------------+
| accessModifier returnType name(params) {          |
|    // method body                                  |
|    return value;                                   |
| }                                                  |
|                                                    |
| Example:                                           |
| public int add(int a, int b) {                     |
|    return a + b;                                   |
| }                                                  |
+--------------------------------------------------+`,
    keyPoints: ['Methods must have a return type (void if no return)', 'Parameters are passed by value (primitives) or reference value (objects)', 'Method overloading: same name, different params', 'static methods belong to the class', 'Access modifiers control visibility'],
    interviewQuestions: ['Q: Can a method have multiple return statements?', 'Q: What is method overloading vs overriding?', 'Q: Can we overload main()?', 'Q: What is the difference between pass-by-value and pass-by-reference?'],
    code: `public class MethodDemo {
    // Method with parameters and return value
    public static int add(int a, int b) {
        return a + b;
    }

    // Overloaded method (different parameters)
    public static double add(double a, double b) {
        return a + b;
    }

    // Void method (no return)
    public static void printSum(int x, int y) {
        System.out.println("Sum: " + (x + y));
    }

    public static void main(String[] args) {
        System.out.println(add(5, 3));      // 8
        System.out.println(add(5.5, 3.2));  // 8.7
        printSum(10, 20);                   // Sum: 30
    }
}`
  },
  'java-collections': {
    title: 'Collections Framework',
    techId: 'java', level: 'Intermediate', duration: '45 min',
    introduction: 'The Collections Framework provides a unified architecture for storing and manipulating groups of objects. It includes interfaces, implementations, and algorithms.',
    whyUsed: 'Collections manage data efficiently: dynamic sizing, sorting, searching, and thread-safe operations without writing data structures from scratch.',
    diagram: `+----------------------------------------------------------+
|            JAVA COLLECTIONS HIERARCHY                    |
+----------------------------------------------------------+
| Iterable                                              |
|   +-- Collection                                      |
|       +-- List (ArrayList, LinkedList, Vector)        |
|       +-- Set (HashSet, LinkedHashSet, TreeSet)       |
|       +-- Queue (PriorityQueue, ArrayDeque)           |
|   +-- Map (HashMap, LinkedHashMap, TreeMap, Hashtable)|
+----------------------------------------------------------+
| List: Ordered, allows duplicates                       |
| Set: No duplicates                                     |
| Map: Key-value pairs                                   |
| Queue: FIFO order                                      |
+----------------------------------------------------------+`,
    keyPoints: ['List: ordered collection with duplicates (ArrayList O(1) get, LinkedList O(1) add/remove at ends)', 'Set: no duplicates (HashSet O(1), TreeSet sorted O(log n))', 'Map: key-value pairs (HashMap O(1), TreeMap sorted)', 'Collections utility class provides sort(), reverse(), shuffle()', 'Use generics for type safety (List<String>)'],
    interviewQuestions: ['Q: How does HashMap work internally?', 'Q: Difference between ArrayList and LinkedList?', 'Q: How does HashSet ensure uniqueness?', 'Q: What is the difference between HashMap and ConcurrentHashMap?', 'Q: What is the load factor in HashMap?'],
    code: `import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        // List
        List<String> list = new ArrayList<>();
        list.add("Apple"); list.add("Banana"); list.add("Apple");
        System.out.println("List: " + list); // [Apple, Banana, Apple]

        // Set (no duplicates)
        Set<String> set = new HashSet<>(list);
        System.out.println("Set: " + set); // [Apple, Banana]

        // Map
        Map<String, Integer> map = new HashMap<>();
        map.put("Alice", 25); map.put("Bob", 30);
        System.out.println("Age of Alice: " + map.get("Alice"));

        // Sorting
        Collections.sort(list);
        System.out.println("Sorted: " + list);
    }
}`
  },
  'java-exceptions': {
    title: 'Exception Handling',
    techId: 'java', level: 'Intermediate', duration: '35 min',
    introduction: 'Exceptions are events that disrupt normal program flow. Java provides a robust exception handling mechanism to manage errors gracefully.',
    whyUsed: 'Exception handling prevents program crashes, provides meaningful error messages, and separates error-handling code from regular code.',
    diagram: `+----------------------------------------------------------+
|          EXCEPTION HIERARCHY                            |
+----------------------------------------------------------+
| Throwable                                              |
+-- Error (OutOfMemoryError, StackOverflowError)         |
+-- Exception                                           |
    +-- RuntimeException (unchecked)                     |
    |   NullPointerException, ArithmeticException,       |
    |   ArrayIndexOutOfBoundsException                   |
    +-- Checked Exceptions                               |
        IOException, SQLException, FileNotFoundException |
+----------------------------------------------------------+
| try { risky code } catch (Exception e) { handle }      |
| finally { cleanup }                                     |
+----------------------------------------------------------+`,
    keyPoints: ['Checked exceptions: must handle/declare (IOException)', 'Unchecked exceptions: RuntimeException subclasses (no mandatory handling)', 'try-catch-finally: catch handles exception, finally always executes', 'throw: manually throw exception. throws: declare exceptions in method signature', 'try-with-resources auto-closes resources (Java 7+)'],
    interviewQuestions: ['Q: Difference between checked and unchecked exceptions?', 'Q: Can we have try without catch?', 'Q: What happens if finally block throws exception?', 'Q: Difference between throw and throws?', 'Q: What is exception propagation?'],
    code: `public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0);
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("This always executes");
        }

        // try-with-resources (auto-close)
        try (BufferedReader br = new BufferedReader(
                new FileReader("file.txt"))) {
            System.out.println(br.readLine());
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
    }

    public static int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Cannot divide by zero");
        return a / b;
    }
}`
  },
  'java-file-io': {
    title: 'File Handling',
    techId: 'java', level: 'Intermediate', duration: '35 min',
    introduction: 'File I/O in Java allows reading from and writing to files. Java provides both byte-stream and character-stream APIs.',
    whyUsed: 'File handling is essential for data persistence, configuration files, logging, and processing user-uploaded files.',
    diagram: `+------------------------------------------------------+
|           JAVA I/O STREAMS                           |
+------------------------------------------------------+
| Byte Streams (binary)                                |
| FileInputStream  -> read bytes                        |
| FileOutputStream -> write bytes                       |
|                                                       |
| Character Streams (text)                              |
| FileReader -> read characters                         |
| FileWriter -> write characters                        |
|                                                       |
| Buffered Streams (efficient)                          |
| BufferedReader, BufferedWriter                        |
|                                                       |
| NIO (New I/O) - modern API                           |
| Files.readAllLines(), Files.write()                  |
+------------------------------------------------------+`,
    keyPoints: ['Use FileReader/FileWriter for text files', 'Use BufferedReader for efficient reading', 'Always close streams (try-with-resources)', 'NIO Files class provides simpler methods', 'Serialization converts objects to byte streams'],
    interviewQuestions: ['Q: Difference between FileInputStream and FileReader?', 'Q: What is serialization and when to use it?', 'Q: What is the transient keyword?', 'Q: Difference between NIO and IO?'],
    code: `import java.nio.file.*;
import java.io.*;

public class FileIODemo {
    public static void main(String[] args) throws IOException {
        // Modern NIO approach
        Path path = Paths.get("example.txt");
        Files.write(path, "Hello World!".getBytes());
        String content = Files.readString(path);
        System.out.println("Content: " + content);

        // Traditional IO with BufferedReader
        try (BufferedReader br = Files.newBufferedReader(path)) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println("Line: " + line);
            }
        }
    }
}`
  },
  'java-multithreading': {
    title: 'Multithreading',
    techId: 'java', level: 'Advanced', duration: '50 min',
    introduction: 'Multithreading enables concurrent execution of multiple parts of a program, maximizing CPU utilization and improving application responsiveness.',
    whyUsed: 'Multithreading is essential for responsive UIs, server applications handling multiple clients, parallel processing, and background tasks.',
    diagram: `+----------------------------------------------------------+
|              THREAD LIFECYCLE                            |
+----------------------------------------------------------+
| NEW -> RUNNABLE -> RUNNING -> BLOCKED/WAITING -> TERMINATED |
|                                                           |
| Thread t = new Thread();   // NEW                         |
| t.start();                 // RUNNABLE                   |
| (scheduler picks it)       // RUNNING                    |
| sleep()/wait()/I/O         // BLOCKED/WAITING            |
| run() completes            // TERMINATED                 |
+----------------------------------------------------------+
| Thread creation:                                          |
| 1. extends Thread                                          |
| 2. implements Runnable                                     |
| 3. implements Callable<V> (returns value, with Future)     |
+----------------------------------------------------------+`,
    keyPoints: ['Thread: lightweight process', 'Runnable: task to execute (prefer over extending Thread)', 'synchronized: mutual exclusion (intrinsic lock)', 'wait()/notify(): inter-thread communication within synchronized blocks', 'ExecutorService: manage thread pools efficiently', 'CompletableFuture: modern async programming'],
    interviewQuestions: ['Q: Difference between wait() and sleep()?', 'Q: What is a race condition and how to prevent it?', 'Q: What is the volatile keyword?', 'Q: Difference between synchronized and ReentrantLock?', 'Q: What is a deadlock and how to avoid it?'],
    code: `import java.util.concurrent.*;

public class ThreadDemo {
    public static void main(String[] args) throws Exception {
        // Using Runnable
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                System.out.println("Thread: " + i);
            }
        });
        t1.start();
        t1.join(); // wait for completion

        // Using ExecutorService
        ExecutorService pool = Executors.newFixedThreadPool(4);
        Future<Integer> future = pool.submit(() -> {
            Thread.sleep(1000);
            return 42;
        });
        System.out.println("Result: " + future.get()); // 42
        pool.shutdown();
    }
}`
  },
  'java-streams': {
    title: 'Streams API',
    techId: 'java', level: 'Advanced', duration: '40 min',
    introduction: 'The Streams API (Java 8+) enables functional-style operations on sequences of elements. Streams support declarative data processing with pipeline operations.',
    whyUsed: 'Streams provide concise, readable, and parallelizable data processing. Replace complex loops with chained functional operations.',
    diagram: `+----------------------------------------------------------+
|              STREAM PIPELINE                              |
+----------------------------------------------------------+
| Source -> Intermediate Operations -> Terminal Operation   |
|                                                           |
| Source: Collection.stream(), Arrays.stream(), lines()    |
|                                                           |
| Intermediates: filter(), map(), flatMap(), distinct(),   |
|                sorted(), peek(), limit(), skip()          |
|                                                           |
| Terminals: collect(), forEach(), reduce(), count(),      |
|            anyMatch(), findFirst(), toList()              |
+----------------------------------------------------------+`,
    keyPoints: ['Streams don\'t modify source data', 'Intermediate ops are lazy (execute only when terminal op starts)', 'Streams can be sequential or parallel (parallelStream())', 'Common operations: filter, map, reduce, collect', 'Collectors: toList, groupingBy, joining, partitioningBy'],
    interviewQuestions: ['Q: Difference between intermediate and terminal operations?', 'Q: What is short-circuiting in streams?', 'Q: How does parallelStream() work?', 'Q: Can a stream be reused?'],
    code: `import java.util.*;
import java.util.stream.*;

public class StreamDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

        // Filter + Map + Collect
        List<String> result = names.stream()
            .filter(n -> n.startsWith("A") || n.startsWith("C"))
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        System.out.println("Filtered: " + result); // [ALICE, CHARLIE]

        // Grouping
        Map<Integer, List<String>> byLength = names.stream()
            .collect(Collectors.groupingBy(String::length));
        System.out.println("Grouped: " + byLength);

        // Parallel processing
        int sum = names.parallelStream()
            .mapToInt(String::length)
            .sum();
        System.out.println("Total chars: " + sum);
    }
}`
  },
  'java-lambda': {
    title: 'Lambda Expressions',
    techId: 'java', level: 'Advanced', duration: '35 min',
    introduction: 'Lambda expressions are anonymous functions that provide a clear, concise way to implement functional interfaces (interfaces with a single abstract method).',
    whyUsed: 'Lambdas enable functional programming in Java, dramatically reducing boilerplate code for event handlers, comparators, and stream operations.',
    diagram: `+----------------------------------------------------------+
|           LAMBDA EXPRESSION SYNTAX                        |
+----------------------------------------------------------+
| (parameter1, parameter2) -> { expression; return; }      |
|                                                           |
| Examples:                                                 |
| () -> System.out.println("Hi")                            |
| (x) -> x * 2                                              |
| (x, y) -> { return x + y; }                               |
|                                                           |
| Functional Interfaces:                                     |
| Consumer<T>: void accept(T)                               |
| Supplier<T>: T get()                                      |
| Function<T,R>: R apply(T)                                 |
| Predicate<T>: boolean test(T)                             |
+----------------------------------------------------------+`,
    keyPoints: ['Lambda = (params) -> { body }', 'Can only be used with functional interfaces', 'Type inference: parameter types optional', 'Method reference: Class::method shorthand', 'Common built-in functional interfaces: Consumer, Supplier, Function, Predicate'],
    interviewQuestions: ['Q: What is a functional interface?', 'Q: What is the difference between lambda and anonymous class?', 'Q: What are method references?', 'Q: Can lambda access local variables?'],
    code: `import java.util.*;
import java.util.function.*;

public class LambdaDemo {
    public static void main(String[] args) {
        // Comparator with lambda
        List<String> list = Arrays.asList("Charlie", "Alice", "Bob");
        list.sort((a, b) -> a.compareTo(b));
        System.out.println("Sorted: " + list);

        // Functional interfaces
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println("Is 4 even? " + isEven.test(4));

        Function<String, Integer> length = s -> s.length();
        System.out.println("Length of Java: " + length.apply("Java"));

        // Method reference
        list.forEach(System.out::println);
    }
}`
  },
  'java-generics': {
    title: 'Generics',
    techId: 'java', level: 'Advanced', duration: '35 min',
    introduction: 'Generics enable types (classes and methods) to operate on objects of various types while providing compile-time type safety.',
    whyUsed: 'Generics eliminate casting, provide type safety (catch errors at compile time), and enable reusable code that works with any type.',
    diagram: `+----------------------------------------------------------+
|              GENERICS CONCEPTS                              |
+----------------------------------------------------------+
| Generic Class: class Box<T> { T item; }                   |
| Generic Method: <T> void print(T item)                    |
|                                                           |
| Wildcards:                                                |
| ? extends Number -> any Number subclass (upper bound)     |
| ? super Integer  -> any Integer superclass (lower bound)  |
| ?                -> any type (unbounded)                  |
|                                                           |
| Benefits:                                                 |
| List<String> list = new ArrayList<>();  // type-safe      |
| String s = list.get(0);                // no casting      |
| list.add(123);                         // compile error!  |
+----------------------------------------------------------+`,
    keyPoints: ['Type parameters <T, K, V> define placeholder types', 'Type safety: compiler checks types at compile time', 'Type erasure: type info removed at runtime (backward compatibility)', 'Wildcards: ? extends (covariant), ? super (contravariant)', 'Bounded type parameters: <T extends Number>'],
    interviewQuestions: ['Q: What is type erasure?', 'Q: Difference between <? extends T> and <? super T>?', 'Q: Can we use primitives as type parameters?', 'Q: What is a wildcard in generics?'],
    code: `import java.util.*;

public class GenericsDemo {
    // Generic class
    static class Box<T> {
        private T item;
        public void set(T item) { this.item = item; }
        public T get() { return item; }
    }

    // Generic method with bounded type
    public static <T extends Number> double sum(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }

    // Wildcard method
    public static void printList(List<?> list) {
        for (Object o : list) System.out.print(o + " ");
    }

    public static void main(String[] args) {
        Box<String> stringBox = new Box<>();
        stringBox.set("Hello");
        System.out.println(stringBox.get());

        System.out.println("Sum: " + sum(10, 20));      // 30.0
        System.out.println("Sum: " + sum(5.5, 4.5));    // 10.0

        printList(Arrays.asList(1, 2, 3));              // 1 2 3
        printList(Arrays.asList("A", "B", "C"));        // A B C
    }
}`
  },
  'java-design-patterns': {
    title: 'Design Patterns',
    techId: 'java', level: 'Advanced', duration: '50 min',
    introduction: 'Design patterns are proven, reusable solutions to common software design problems. They represent best practices evolved through experience.',
    whyUsed: 'Design patterns provide standardized solutions, improve code readability, maintainability, and communication among developers through a shared vocabulary.',
    diagram: `+----------------------------------------------------------+
|           THREE CATEGORIES OF DESIGN PATTERNS               |
+----------------------------------------------------------+
| Creational (object creation)                               |
| Singleton, Factory, Builder, Prototype, Abstract Factory   |
|                                                           |
| Structural (object composition)                           |
| Adapter, Decorator, Proxy, Facade, Composite              |
|                                                           |
| Behavioral (object communication)                         |
| Observer, Strategy, Template Method, Command, Iterator    |
+----------------------------------------------------------+`,
    keyPoints: ['Singleton: one instance globally (private constructor, static getInstance)', 'Factory: creates objects without specifying exact class', 'Builder: constructs complex objects step by step', 'Observer: one-to-many notification on state change', 'Strategy: interchangeable algorithms encapsulated separately'],
    interviewQuestions: ['Q: What is the Singleton pattern and when to use it?', 'Q: Difference between Factory and Abstract Factory?', 'Q: When would you use the Builder pattern?', 'Q: Explain the Observer pattern with a real example.'],
    code: `// Singleton Pattern
public class Database {
    private static Database instance;
    private Database() {}  // private constructor

    public static synchronized Database getInstance() {
        if (instance == null) instance = new Database();
        return instance;
    }
}

// Strategy Pattern
interface PaymentStrategy {
    void pay(double amount);
}
class CreditCard implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via Credit Card");
    }
}
class PayPal implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via PayPal");
    }
}

// Observer Pattern (Java built-in)
import java.util.Observable;
class NewsAgency extends Observable {
    public void publishNews(String news) {
        setChanged();
        notifyObservers(news);
    }
}`
  },
  'spring-ioc': {
    title: 'IoC Container',
    techId: 'spring-boot', level: 'Beginner', duration: '30 min',
    introduction: 'The Inversion of Control (IoC) Container is the core of the Spring Framework. It manages the lifecycle and dependencies of Java objects (beans).',
    whyUsed: 'IoC eliminates manual object creation and dependency management. The container handles instantiation, wiring, and lifecycle, letting you focus on business logic.',
    diagram: `+----------------------------------------------------------+
|              SPRING IOC CONTAINER                          |
+----------------------------------------------------------+
| Configuration (XML/Annotations/Java Config)              |
|       |                                                   |
|       v                                                   |
| +-------------------+                                     |
| | IoC Container     |  (ApplicationContext)               |
| | - Instantiation   |                                     |
| | - Configuration   |                                     |
| | - Assembly (DI)   |                                     |
| | - Lifecycle Mgmt  |                                     |
| +-------------------+                                     |
|       |                                                   |
|       v                                                   |
| Ready-to-use Beans with dependencies injected              |
+----------------------------------------------------------+`,
    keyPoints: ['ApplicationContext is the IoC container interface', 'Beans are objects managed by Spring', 'DI: container injects dependencies into beans', 'Bean lifecycle: instantiate → populate → init → ready → destroy', 'Scopes: singleton (default), prototype, request, session'],
    interviewQuestions: ['Q: What is the Spring IoC container?', 'Q: What are the different types of ApplicationContext?', 'Q: Explain the bean lifecycle.', 'Q: What is the difference between BeanFactory and ApplicationContext?']
  },
  'maven': {
    title: 'Maven Build Tool',
    techId: 'spring-boot', level: 'Beginner', duration: '25 min',
    introduction: 'Maven is a build automation and project management tool primarily for Java projects. It uses a Project Object Model (POM) to manage builds.',
    whyUsed: 'Maven standardizes project structure, manages dependencies automatically, and provides consistent builds across environments.',
    diagram: `+------------------------------------------------------+
|              MAVEN BUILD LIFECYCLE                    |
+------------------------------------------------------+
| validate - validate project structure                |
| compile  - compile source code                       |
| test     - run unit tests                            |
| package  - create JAR/WAR file                       |
| verify   - verify integration tests                  |
| install  - install to local repository               |
| deploy   - deploy to remote repository               |
+------------------------------------------------------+
| Key files: pom.xml (project configuration)            |
| Key concepts: dependencies, plugins, repositories    |
+------------------------------------------------------+`,
    keyPoints: ['pom.xml defines project configuration and dependencies', 'Maven Central: default dependency repository', 'Coordinates: groupId:artifactId:version uniquely identify projects', 'Plugins extend Maven functionality (Spring Boot Maven plugin)', 'Transitive dependencies: Maven auto-resolves dependency chains'],
    interviewQuestions: ['Q: What is Maven and why use it?', 'Q: Explain the Maven build lifecycle phases.', 'Q: What is a POM file?', 'Q: What is Maven dependency scope? (compile, provided, runtime, test)']
  },
  'spring-architecture': {
    title: 'Spring Boot Architecture',
    techId: 'spring-boot', level: 'Intermediate', duration: '35 min',
    introduction: 'Spring Boot follows a layered architecture with clear separation of concerns. Each layer handles specific responsibilities in the application.',
    whyUsed: 'Layered architecture promotes modularity, testability, and maintainability. Each layer can be developed and tested independently.',
    diagram: `+----------------------------------------------------------+
|        SPRING BOOT LAYERED ARCHITECTURE                  |
+----------------------------------------------------------+
| Presentation Layer (Controllers)                         |
| @RestController, @Controller                             |
| Handles HTTP requests/responses                          |
+----------------------------------------------------------+
| Service Layer (Business Logic)                           |
| @Service                                                  |
| Contains business rules, validation, orchestration        |
+----------------------------------------------------------+
| Persistence Layer (Data Access)                          |
| @Repository                                               |
| Database operations via JPA/JDBC                          |
+----------------------------------------------------------+
| Database Layer                                           |
| MySQL, PostgreSQL, MongoDB                                |
+----------------------------------------------------------+
| Cross-cutting: Security, Logging, Caching, Validation    |
+----------------------------------------------------------+`,
    keyPoints: ['Presentation Layer: handles HTTP and JSON/XML conversion', 'Service Layer: contains business logic and transactions', 'Persistence Layer: database CRUD operations', 'Spring Boot auto-configuration simplifies setup', 'Embedded Tomcat: no external server needed'],
    interviewQuestions: ['Q: Explain the layers in a Spring Boot application.', 'Q: What is the role of the Service layer?', 'Q: How does Spring Boot auto-configuration work?', 'Q: What is the difference between @Component, @Service, @Repository?']
  },
  'spring-crud': {
    title: 'CRUD Operations',
    techId: 'spring-boot', level: 'Intermediate', duration: '40 min',
    introduction: 'CRUD (Create, Read, Update, Delete) operations form the foundation of most web applications. Spring Boot provides robust support through REST APIs.',
    whyUsed: 'CRUD APIs allow frontend applications to manage data through standardized HTTP methods and endpoints.',
    diagram: `+----------------------------------------------------------+
|           CRUD REST API DESIGN                             |
+----------------------------------------------------------+
| Operation | HTTP Method | Endpoint           | Status    |
+-----------+-------------+--------------------+-----------+
| Create    | POST        | /api/resource      | 201       |
| Read All  | GET         | /api/resource      | 200       |
| Read One  | GET         | /api/resource/{id} | 200       |
| Update    | PUT/PATCH   | /api/resource/{id} | 200       |
| Delete    | DELETE      | /api/resource/{id} | 204       |
+----------------------------------------------------------+`,
    keyPoints: ['RESTful endpoints map HTTP methods to CRUD operations', '@RequestBody for POST/PUT data binding', '@PathVariable for resource identification', '@ResponseStatus for custom HTTP status codes', 'Service layer handles business logic between controller and repository'],
    interviewQuestions: ['Q: Design a RESTful API for a blog application.', 'Q: What is the difference between PUT and PATCH?', 'Q: How do you handle partial updates?', 'Q: What status code should a POST endpoint return?']
  },
  'spring-validation': {
    title: 'Validation',
    techId: 'spring-boot', level: 'Intermediate', duration: '30 min',
    introduction: 'Validation ensures that data entering the application meets business rules and constraints before processing.',
    whyUsed: 'Validation prevents invalid data from corrupting the system, improves security, and provides clear error messages to users.',
    diagram: `+----------------------------------------------------------+
|           VALIDATION FLOW                                 |
+----------------------------------------------------------+
| Client sends JSON data                                    |
|       |                                                   |
|       v                                                   |
| @Valid annotation triggers Bean Validation                |
|       |                                                   |
|       v                                                   |
| Validation annotations checked:                           |
| @NotNull, @NotEmpty, @Size, @Email, @Pattern, @Min/@Max  |
|       |                                                   |
|       v                                                   |
| Pass: Process request -> Return 200/201                   |
| Fail: Throw MethodArgumentNotValidException -> Return 400 |
+----------------------------------------------------------+`,
    keyPoints: ['Jakarta Bean Validation API (formerly JSR-380)', 'Common annotations: @NotNull, @NotBlank, @Size, @Email, @Pattern, @Min, @Max', 'Custom validators for complex rules', '@Valid triggers validation on @RequestBody/@ModelAttribute', '@ControllerAdvice handles validation errors globally'],
    interviewQuestions: ['Q: What is the difference between @NotNull, @NotEmpty, @NotBlank?', 'Q: How do you create a custom validation annotation?', 'Q: How do you handle validation errors globally?']
  },
  'spring-jpa': {
    title: 'JPA & Hibernate',
    techId: 'spring-boot', level: 'Advanced', duration: '45 min',
    introduction: 'JPA (Java Persistence API) is the standard specification for ORM in Java. Hibernate is the most popular JPA implementation.',
    whyUsed: 'JPA/Hibernate maps Java objects to database tables automatically, eliminating manual SQL for standard CRUD operations and managing relationships.',
    diagram: `+----------------------------------------------------------+
|           JPA/HIBERNATE ARCHITECTURE                      |
+----------------------------------------------------------+
| Java Entity Classes                                       |
| @Entity, @Table, @Column                                  |
|       |                                                   |
|       v                                                   |
| EntityManager (JPA) / Session (Hibernate)                 |
|       |                                                   |
|       v                                                   |
| JPQL/HQL Queries or Criteria API                          |
|       |                                                   |
|       v                                                   |
| JDBC (Database Connectivity)                              |
|       |                                                   |
|       v                                                   |
| Database Tables                                           |
+----------------------------------------------------------+`,
    keyPoints: ['@Entity marks a POJO as a database entity', '@Id + @GeneratedValue for primary keys', 'Relationships: @OneToMany, @ManyToOne, @ManyToMany', 'Spring Data JPA: JpaRepository provides CRUD methods automatically', 'Derived queries: findByLastName(), findByEmailAndActive()'],
    interviewQuestions: ['Q: What is the difference between JPA and Hibernate?', 'Q: What are the JPA entity states? (transient, managed, detached, removed)', 'Q: What is the N+1 problem and how to solve it?', 'Q: What is lazy loading vs eager loading?']
  },
  'spring-security': {
    title: 'Security & JWT',
    techId: 'spring-boot', level: 'Advanced', duration: '50 min',
    introduction: 'Spring Security provides comprehensive authentication, authorization, and protection against common security threats for Java applications.',
    whyUsed: 'Security is critical for web applications: protecting user data, controlling access, preventing attacks, and implementing standards like JWT authentication.',
    diagram: `+----------------------------------------------------------+
|           SPRING SECURITY FILTER CHAIN                   |
+----------------------------------------------------------+
| Request -> SecurityContextPersistenceFilter               |
|                     -> UsernamePasswordAuthFilter         |
|                     -> BasicAuthenticationFilter          |
|                     -> ExceptionTranslationFilter          |
|                     -> FilterSecurityInterceptor           |
|                                                           |
| JWT Authentication Flow:                                  |
| 1. POST /api/auth/login -> validate credentials           |
| 2. Generate JWT (header.payload.signature)                |
| 3. Client stores JWT in Authorization header              |
| 4. JwtAuthFilter validates token on each request          |
| 5. SecurityContext set with authenticated user            |
+----------------------------------------------------------+`,
    keyPoints: ['SecurityFilterChain: chain of security filters', 'JWT: JSON Web Token (stateless authentication)', 'BCrypt: password hashing algorithm', 'CORS: cross-origin resource sharing configuration', 'CSRF: protection against cross-site request forgery', 'Role-based access control with @PreAuthorize'],
    interviewQuestions: ['Q: How does JWT authentication work?', 'Q: What is the difference between authentication and authorization?', 'Q: How does Spring Security filter chain work?', 'Q: What is CSRF and how does Spring Security prevent it?']
  },
  'spring-microservices': {
    title: 'Microservices Introduction',
    techId: 'spring-boot', level: 'Advanced', duration: '45 min',
    introduction: 'Microservices architecture structures an application as a collection of loosely coupled, independently deployable services that each implement a business capability.',
    whyUsed: 'Microservices enable independent scaling, technology diversity, faster deployment, and better fault isolation compared to monolithic applications.',
    diagram: `+----------------------------------------------------------+
|              MICROSERVICES ARCHITECTURE                    |
+----------------------------------------------------------+
| API Gateway (Spring Cloud Gateway)                        |
|       |                                                    |
|       +--> User Service ----------> User DB               |
|       +--> Order Service ---------> Order DB              |
|       +--> Payment Service ------> Payment DB             |
|       +--> Notification Service --> Queue                  |
|                                                           |
| Supporting Components:                                     |
| Service Discovery (Eureka)                                 |
| Config Server (Spring Cloud Config)                        |
| Circuit Breaker (Resilience4j)                             |
| Distributed Tracing (Sleuth + Zipkin)                      |
| Message Broker (RabbitMQ/Kafka)                            |
+----------------------------------------------------------+`,
    keyPoints: ['Each microservice has its own database (database-per-service)', 'API Gateway: single entry point for all clients', 'Service Discovery: services find each other by name', 'Circuit Breaker: prevents cascading failures', 'Config Server: centralized configuration', 'Inter-service communication: REST (sync) or messaging (async)'],
    interviewQuestions: ['Q: What are the advantages and challenges of microservices?', 'Q: What is the difference between monolithic and microservices architecture?', 'Q: How do microservices communicate?', 'Q: What is service discovery and why is it needed?']
  },
  'sql-basics': {
    title: 'Database Fundamentals',
    techId: 'mysql', level: 'Beginner', duration: '25 min',
    introduction: 'A database is an organized collection of structured data. MySQL is a popular open-source relational database management system (RDBMS).',
    whyUsed: 'Databases store, organize, and retrieve data efficiently. They provide data integrity, security, concurrent access, and powerful querying capabilities.',
    diagram: `+------------------------------------------------------+
|           RELATIONAL DATABASE CONCEPTS                |
+------------------------------------------------------+
| Table: Collection of related data (rows + columns)   |
| Row/Record: Single entry in a table                  |
| Column/Field: Single attribute of a record           |
| Primary Key: Unique identifier for each row          |
| Foreign Key: References PK of another table          |
|                                                     |
| Example: employees table                            |
| +----+-------+--------+--------+                    |
| | id | name  | dept   | salary |                    |
| +----+-------+--------+--------+                    |
| | 1  | Alice | Eng    | 90000  |                    |
| | 2  | Bob   | Mktg   | 75000  |                    |
| +----+-------+--------+--------+                    |
+------------------------------------------------------+`,
    keyPoints: ['RDBMS stores data in tables with rows and columns', 'SQL is the standard language for relational databases', 'ACID properties ensure reliable transactions', 'Normalization reduces data redundancy', 'MySQL is free, open-source, and widely used'],
    interviewQuestions: ['Q: What is the difference between DBMS and RDBMS?', 'Q: What are the ACID properties?', 'Q: What is a primary key?', 'Q: What are the different types of SQL commands?']
  },
  'sql-tables': {
    title: 'Tables & Relationships',
    techId: 'mysql', level: 'Beginner', duration: '30 min',
    introduction: 'Tables are the fundamental storage unit in relational databases. Relationships between tables model real-world associations between entities.',
    whyUsed: 'Relationships (one-to-one, one-to-many, many-to-many) eliminate data redundancy and maintain data integrity through foreign keys.',
    diagram: `+------------------------------------------------------+
|           TABLE RELATIONSHIPS                         |
+------------------------------------------------------+
| One-to-Many:                                         |
| departments 1 ----> * employees                      |
| (dept has many employees, employee belongs to one dept)|
|                                                       |
| Many-to-Many:                                         |
| students * <---- > * courses                         |
| (student registers for many courses, course has many  |
|  students) - requires junction table "enrollments"    |
|                                                       |
| One-to-One:                                           |
| user 1 ----> 1 profile                               |
| (each user has exactly one profile)                   |
+------------------------------------------------------+`,
    keyPoints: ['One-to-Many: FK in child table references parent PK', 'Many-to-Many: junction table with FKs to both tables', 'One-to-One: unique FK or shared PK (rare)', 'Foreign Key constraint ensures referential integrity', 'CASCADE options: ON DELETE CASCADE, ON UPDATE CASCADE'],
    interviewQuestions: ['Q: Explain different types of table relationships.', 'Q: What is a junction table and when to use it?', 'Q: What is referential integrity?', 'Q: What are the CASCADE options for foreign keys?']
  },
  'sql-crud': {
    title: 'CRUD Queries',
    techId: 'mysql', level: 'Beginner', duration: '30 min',
    introduction: 'CRUD (Create, Read, Update, Delete) queries are the four fundamental SQL operations for managing data in database tables.',
    whyUsed: 'CRUD operations form the basis of all data management in applications, from user registration to data analysis.',
    diagram: `+------------------------------------------------------+
|           SQL CRUD OPERATIONS                        |
+------------------------------------------------------+
| CREATE: INSERT INTO users VALUES (1, 'Alice', ...)  |
| READ:   SELECT * FROM users WHERE id = 1            |
| UPDATE: UPDATE users SET name = 'Bob' WHERE id = 1  |
| DELETE: DELETE FROM users WHERE id = 1              |
|                                                       |
| SELECT features:                                      |
| WHERE, ORDER BY, GROUP BY, HAVING, LIMIT, DISTINCT   |
| Aggregate functions: COUNT, SUM, AVG, MIN, MAX      |
+------------------------------------------------------+`,
    keyPoints: ['INSERT: add new rows. INSERT INTO table (cols) VALUES (vals)', 'SELECT: query data. SELECT col1, col2 FROM table WHERE condition', 'UPDATE: modify existing rows. Always use WHERE!', 'DELETE: remove rows. Always use WHERE!', 'Use transactions for multiple related DML operations'],
    interviewQuestions: ['Q: Difference between DELETE and TRUNCATE?', 'Q: What is the difference between WHERE and HAVING?', 'Q: What is the ORDER of SQL clauses in a SELECT?', 'Q: What are aggregate functions?']
  },
  'sql-indexes': {
    title: 'Indexes',
    techId: 'mysql', level: 'Intermediate', duration: '35 min',
    introduction: 'Indexes are database structures that improve the speed of data retrieval operations on tables at the cost of additional storage and slower writes.',
    whyUsed: 'Indexes dramatically speed up SELECT queries, especially on large tables, by reducing the number of rows that must be scanned.',
    diagram: `+------------------------------------------------------+
|           INDEX VISUALIZATION (BTREE)                |
+------------------------------------------------------+
| Without Index: Full table scan                       |
| SELECT * FROM users WHERE email = 'a@b.com'          |
| -> Scans ALL rows (slow!)                            |
|                                                       |
| With Index on email:                                  |
| Index structure:                                      |
|         [a@...]                                       |
|        /       \\                                      |
|   [a@a...]   [b@...]                                 |
|       |          |                                    |
|   Row 5      Row 12                                  |
| -> Direct lookup (fast!)                              |
|                                                       |
| Types: BTREE (default), HASH, FULLTEXT, SPATIAL       |
+------------------------------------------------------+`,
    keyPoints: ['Indexes speed up SELECT but slow down INSERT/UPDATE/DELETE', 'Primary key automatically creates clustered index (InnoDB)', 'Composite indexes: order matters (leftmost prefix rule)', 'Use EXPLAIN to check if indexes are being used', 'Avoid over-indexing: each index adds overhead'],
    interviewQuestions: ['Q: How do indexes work in MySQL?', 'Q: What is the difference between clustered and non-clustered index?', 'Q: What is a composite index and what is the leftmost prefix rule?', 'Q: When should you avoid using an index?']
  },
  'sql-views': {
    title: 'Views',
    techId: 'mysql', level: 'Intermediate', duration: '30 min',
    introduction: 'A view is a virtual table based on the result of a SELECT query. It stores the query definition, not the data itself.',
    whyUsed: 'Views simplify complex queries, enhance security by hiding sensitive columns, and provide a consistent interface to data.',
    diagram: `+------------------------------------------------------+
|              VIEWS IN SQL                            |
+------------------------------------------------------+
| CREATE VIEW active_employees AS                      |
| SELECT id, name, department, salary                 |
| FROM employees WHERE active = 1;                     |
|                                                       |
| SELECT * FROM active_employees;  // Use like a table |
|                                                       |
| Benefits:                                             |
| + Security: hide salary column from some users        |
| + Simplicity: encapsulate complex JOINs               |
| + Consistency: always returns current data            |
| + Reusability: one definition, many uses              |
+------------------------------------------------------+`,
    keyPoints: ['Views don\'t store data (except materialized views)', 'Updatable views: simple views on single table without aggregates', 'WITH CHECK OPTION prevents inserts/updates that don\'t match view condition', 'Views can be based on other views', 'DROP VIEW removes the view definition'],
    interviewQuestions: ['Q: What is the difference between a view and a table?', 'Q: Can you update data through a view?', 'Q: What is a materialized view?', 'Q: Why use views instead of direct table queries?']
  },
  'sql-procedures': {
    title: 'Stored Procedures',
    techId: 'mysql', level: 'Advanced', duration: '35 min',
    introduction: 'Stored procedures are precompiled collections of SQL statements stored on the database server. They can accept parameters and return results.',
    whyUsed: 'Stored procedures improve performance (precompiled), reduce network traffic (execute logic on server), enhance security, and promote code reuse.',
    diagram: `+------------------------------------------------------+
|           STORED PROCEDURE FLOW                      |
+------------------------------------------------------+
| CREATE PROCEDURE GetEmployeeByDept(IN dept VARCHAR) |
| BEGIN                                                 |
|   SELECT * FROM employees WHERE department = dept;  |
| END                                                   |
|                                                       |
| CALL GetEmployeeByDept('Engineering');                |
|                                                       |
| Parameter types:                                      |
| IN (input only), OUT (output only), INOUT (both)     |
|                                                       |
| Also: Functions (must return a value), Triggers      |
| (auto-run on INSERT/UPDATE/DELETE), Events (scheduled)|
+------------------------------------------------------+`,
    keyPoints: ['DELIMITER // changes statement delimiter for procedure creation', 'Parameters: IN (default), OUT (return value), INOUT', 'Procedures can contain conditional logic (IF, CASE) and loops', 'Functions return a single value, can be used in SQL expressions', 'Triggers: BEFORE/AFTER INSERT/UPDATE/DELETE'],
    interviewQuestions: ['Q: What is the difference between stored procedure and function?', 'Q: What are triggers in MySQL?', 'Q: What are the advantages of stored procedures?', 'Q: How do you handle errors in stored procedures?']
  },
  'sql-transactions': {
    title: 'Transactions',
    techId: 'mysql', level: 'Advanced', duration: '35 min',
    introduction: 'A transaction is a sequence of SQL operations treated as a single logical unit of work that must succeed or fail completely (all-or-nothing).',
    whyUsed: 'Transactions ensure data integrity in banking, e-commerce, and any application where multiple related operations must succeed together or be rolled back.',
    diagram: `+----------------------------------------------------------+
|              TRANSACTION FLOW                              |
+----------------------------------------------------------+
| START TRANSACTION;                                         |
| UPDATE accounts SET balance = balance - 500 WHERE id=1;   |
| UPDATE accounts SET balance = balance + 500 WHERE id=2;   |
| COMMIT;  (or ROLLBACK if any step fails)                   |
|                                                             |
| Isolation Levels (concurrent transaction behavior):         |
| READ UNCOMMITTED - dirty reads                              |
| READ COMMITTED   - no dirty reads (PostgreSQL default)      |
| REPEATABLE READ  - consistent snapshot (MySQL default)      |
| SERIALIZABLE     - fully isolated (slowest)                 |
+----------------------------------------------------------+`,
    keyPoints: ['ACID: Atomicity, Consistency, Isolation, Durability', 'COMMIT makes changes permanent', 'ROLLBACK undoes all changes since last COMMIT', 'SAVEPOINT allows partial rollback within a transaction', 'Higher isolation levels = more protection but slower performance'],
    interviewQuestions: ['Q: Explain ACID properties with examples.', 'Q: What are the transaction isolation levels?', 'Q: What is a dirty read?', 'Q: What is a deadlock and how does MySQL handle it?']
  },
  'sql-normalization': {
    title: 'Normalization',
    techId: 'mysql', level: 'Advanced', duration: '35 min',
    introduction: 'Normalization is the process of organizing database tables to reduce data redundancy and improve data integrity through a series of normal forms.',
    whyUsed: 'Normalization eliminates duplicate data, prevents update anomalies, and ensures data consistency across the database.',
    diagram: `+------------------------------------------------------+
|           NORMALIZATION FORMS                        |
+------------------------------------------------------+
| 1NF: Atomic columns (no repeating groups)            |
| Before: [id, name, phone1, phone2, phone3]           |
| After:  [id, name, phone] (multiple rows per id)     |
|                                                       |
| 2NF: 1NF + no partial dependencies                   |
| (composite PK: all non-key cols depend on full PK)    |
|                                                       |
| 3NF: 2NF + no transitive dependencies                 |
| (non-key cols don't depend on other non-key cols)     |
|                                                       |
| BCNF: stronger version of 3NF                        |
| Denormalization: intentional redundancy for speed     |
+------------------------------------------------------+`,
    keyPoints: ['1NF: atomic values, no repeating groups', '2NF: 1NF + full functional dependency on composite PK', '3NF: 2NF + no transitive dependencies', 'Higher normal forms (BCNF, 4NF, 5NF) exist but rarely needed', 'Denormalization trades redundancy for query performance'],
    interviewQuestions: ['Q: What is normalization and why is it important?', 'Q: Explain 1NF, 2NF, and 3NF with examples.', 'Q: What is denormalization and when would you use it?', 'Q: What is the difference between normalization and denormalization?']
  },
  'sql-optimization': {
    title: 'Query Optimization',
    techId: 'mysql', level: 'Advanced', duration: '40 min',
    introduction: 'Query optimization improves database performance by reducing query execution time and resource consumption through better SQL writing and database design.',
    whyUsed: 'Poorly written queries can slow down entire applications. Optimization ensures fast response times even with millions of records.',
    diagram: `+----------------------------------------------------------+
|           QUERY OPTIMIZATION TECHNIQUES                  |
+----------------------------------------------------------+
| 1. Use EXPLAIN to analyze query execution plan           |
| 2. Create appropriate indexes on WHERE/JOIN columns      |
| 3. Avoid SELECT * (select only needed columns)            |
| 4. Use LIMIT for pagination                               |
| 5. Avoid functions in WHERE (prevents index usage)        |
| 6. Use JOINs instead of subqueries when possible          |
| 7. Use covering indexes (index includes all needed cols)  |
| 8. Partition large tables                                 |
| 9. Optimize JOIN order (smaller tables first)             |
| 10. Use connection pooling                                |
+----------------------------------------------------------+`,
    keyPoints: ['EXPLAIN shows query execution plan', 'Proper indexing is the #1 optimization technique', 'Avoid functions on indexed columns in WHERE clauses', 'Use covering indexes to include all selected columns', 'Regular ANALYZE TABLE and OPTIMIZE TABLE maintenance'],
    interviewQuestions: ['Q: How would you optimize a slow-running query?', 'Q: What information does EXPLAIN provide?', 'Q: What is a covering index?', 'Q: What is the difference between query optimization at SQL level vs database level?']
  },
  'thymeleaf-templates': {
    title: 'Templates',
    techId: 'thymeleaf', level: 'Beginner', duration: '25 min',
    introduction: 'Thymeleaf templates are HTML files with special attributes that are processed on the server to generate dynamic content. They are valid HTML that can be viewed as static prototypes.',
    whyUsed: 'Templates separate presentation from business logic, enabling designers and developers to work independently. Thymeleaf\'s natural templating allows pure HTML prototyping.',
    diagram: `+------------------------------------------------------+
|           THYMELEAF TEMPLATE PROCESSING               |
+------------------------------------------------------+
| Static HTML (prototype):                              |
| <p th:text="${message}">Static Text</p>              |
|                                                       |
| Browser (static): Shows "Static Text"                |
| Server (dynamic): Shows value of ${message} variable |
|                                                       |
| Standard Dialect attributes:                          |
| th:text - replace text content                        |
| th:utext - unescaped text (HTML output)              |
| th:attr - set any HTML attribute                      |
| th:style - inline styles                             |
| th:class - CSS classes                               |
+------------------------------------------------------+`,
    keyPoints: ['Natural templating: templates work as static HTML', 'th:text sets text content (HTML-escaped)', '${...} accesses model attributes', '@{...} creates context-relative URLs', '#{...} for internationalization (i18n) messages'],
    interviewQuestions: ['Q: What is Thymeleaf natural templating?', 'Q: How do you set dynamic text content?', 'Q: What is the difference between th:text and th:utext?', 'Q: How do you create URLs in Thymeleaf?']
  },
  'thymeleaf-forms': {
    title: 'Forms & Data Binding',
    techId: 'thymeleaf', level: 'Beginner', duration: '30 min',
    introduction: 'Thymeleaf provides powerful form handling with automatic data binding between HTML forms and Java objects through Spring MVC integration.',
    whyUsed: 'Forms are the primary way users input data. Thymeleaf simplifies form creation, validation display, and data binding with minimal boilerplate.',
    diagram: `+----------------------------------------------------------+
|           FORM DATA BINDING FLOW                           |
+----------------------------------------------------------+
| Browser: HTML Form                                         |
|   th:object="\${user}"                                     |
|   th:field="*{name}"                                       |
|   th:field="*{email}"                                      |
|         |                                                   |
|         v (POST /users with form data)                     |
| Spring Controller                                          |
|   @PostMapping("/users")                                   |
|   public String create(@Valid @ModelAttribute User user)   |
|         |                                                   |
|         v                                                   |
|   Validation: @Valid triggers Bean Validation              |
|   If errors -> return to form with th:errors display       |
|   If valid -> save and redirect                             |
+----------------------------------------------------------+`,
    keyPoints: ['th:object binds form to a model attribute', 'th:field binds input to object property', 'th:errors displays validation messages', '#fields.hasErrors() checks for errors', '@Valid triggers validation in controller'],
    interviewQuestions: ['Q: How does th:object work with form binding?', 'Q: What is the difference between th:field and th:value?', 'Q: How do you display validation errors in Thymeleaf?']
  },
  'thymeleaf-fragments': {
    title: 'Fragments & Layout',
    techId: 'thymeleaf', level: 'Intermediate', duration: '30 min',
    introduction: 'Fragments are reusable pieces of templates that can be included across multiple pages, promoting DRY (Don\'t Repeat Yourself) principles.',
    whyUsed: 'Fragments eliminate duplication of common UI elements (headers, footers, navigation) and make maintenance easier with a single source of truth.',
    diagram: `+----------------------------------------------------------+
|           FRAGMENT INCLUSION STRATEGIES                    |
+----------------------------------------------------------+
| Definition (header.html):                                  |
| <div th:fragment="header">                                |
|   <nav>Home | About | Contact</nav>                      |
| </div>                                                     |
|                                                             |
| Inclusion:                                                  |
| th:insert="~{header :: header}"                            |
| -> <div><nav>Home | About | Contact</nav></div>           |
|                                                             |
| th:replace="~{header :: header}"                           |
| -> <nav>Home | About | Contact</nav>                      |
|                                                             |
| th:include="~{header :: header}" (deprecated)             |
| -> <nav>Home | About | Contact</nav> (no wrapping)        |
|                                                             |
| Parameterized: th:fragment="card(title, content)"          |
+----------------------------------------------------------+`,
    keyPoints: ['th:fragment defines reusable template pieces', 'th:insert includes fragment INSIDE host tag', 'th:replace REPLACES host tag with fragment', 'Fragments can accept parameters', 'Layout dialect provides template inheritance patterns'],
    interviewQuestions: ['Q: What is the difference between th:insert and th:replace?', 'Q: How do you pass parameters to fragments?', 'Q: How do you create a reusable layout using fragments?']
  },
  'thymeleaf-spring': {
    title: 'Spring Boot Integration',
    techId: 'thymeleaf', level: 'Intermediate', duration: '35 min',
    introduction: 'Thymeleaf integrates seamlessly with Spring Boot through the spring-boot-starter-thymeleaf dependency, requiring minimal configuration.',
    whyUsed: 'Spring Boot\'s auto-configuration sets up Thymeleaf with sensible defaults, allowing developers to focus on templates rather than configuration.',
    diagram: `+----------------------------------------------------------+
|           SPRING BOOT + THYMELEAF ARCHITECTURE              |
+----------------------------------------------------------+
| 1. Controller adds data to Model                           |
|    model.addAttribute("users", userService.findAll())     |
|                                                             |
| 2. Returns template name                                    |
|    return "users/list"; (resolves to templates/users/list.html)|
|                                                             |
| 3. Thymeleaf processes template                             |
|    <tr th:each="user : \${users}">                          |
|      <td th:text="\${user.name}">Name</td>                  |
|    </tr>                                                    |
|                                                             |
| 4. Rendered HTML sent to browser                            |
+----------------------------------------------------------+
| Configuration (application.properties):                     |
| spring.thymeleaf.prefix=classpath:/templates/              |
| spring.thymeleaf.suffix=.html                              |
| spring.thymeleaf.cache=false (dev)                          |
+----------------------------------------------------------+`,
    keyPoints: ['Add spring-boot-starter-thymeleaf to pom.xml', 'Templates go in src/main/resources/templates/', 'Static resources in src/main/resources/static/', 'Controllers return template name (not full path)', 'spring.thymeleaf.cache=false during development'],
    interviewQuestions: ['Q: How does Spring Boot auto-configure Thymeleaf?', 'Q: What is the default template location?', 'Q: How do you pass data from controller to template?']
  },
  'thymeleaf-crud': {
    title: 'CRUD UI Development',
    techId: 'thymeleaf', level: 'Advanced', duration: '40 min',
    introduction: 'Building complete CRUD UIs with Thymeleaf involves creating list, create, edit, and delete views that interact with Spring Boot controllers.',
    whyUsed: 'CRUD UIs are the most common web application pattern, enabling users to manage data through intuitive interfaces.',
    diagram: `+----------------------------------------------------------+
|           CRUD UI PATTERN WITH THYMELEAF                  |
+----------------------------------------------------------+
| List View: /users (GET)                                   |
|   - th:each to iterate user list                          |
|   - Edit/Delete buttons per row                           |
|   - "Add New" button                                      |
|                                                             |
| Create Form: /users/new (GET) -> /users (POST)           |
|   - th:object with new entity                             |
|   - th:field for each input                                |
|   - Validation error display                               |
|                                                             |
| Edit Form: /users/{id}/edit (GET) -> /users/{id} (PUT)   |
|   - th:object with existing entity (pre-populated)         |
|   - Hidden _method input for PUT                          |
|                                                             |
| Delete: POST /users/{id} with _method=DELETE              |
|   - Confirmation dialog recommended                        |
+----------------------------------------------------------+`,
    keyPoints: ['List: th:each iteration with edit/delete actions', 'Create: th:object with new entity, POST submission', 'Edit: th:object with existing entity, PUT via _method hidden input', 'Delete: POST with hidden _method=DELETE', 'Validation: @Valid in controller, th:errors in template'],
    interviewQuestions: ['Q: How do you implement edit functionality with Thymeleaf?', 'Q: How do you handle PUT and DELETE methods in Thymeleaf forms?', 'Q: How do you display validation errors for specific fields?']
  },
  'iot-fundamentals': {
    title: 'IoT Fundamentals',
    techId: 'iot', level: 'Beginner', duration: '30 min',
    introduction: 'The Internet of Things (IoT) refers to the network of physical objects embedded with sensors, software, and connectivity to exchange data over the internet.',
    whyUsed: 'IoT enables remote monitoring, automation, predictive maintenance, and data-driven decision-making across industries like manufacturing, healthcare, and smart cities.',
    diagram: `+----------------------------------------------------------+
|           IOT ARCHITECTURE (4-LAYER)                        |
+----------------------------------------------------------+
| Perception Layer: Sensors, Actuators, Devices               |
|   Temperature, Humidity, Motion, GPS, Cameras              |
+----------------------------------------------------------+
| Network Layer: Connectivity & Communication                 |
|   WiFi, Bluetooth, LoRaWAN, 5G, MQTT, HTTP, CoAP           |
+----------------------------------------------------------+
| Processing Layer: Edge & Cloud Computing                    |
|   Data processing, analytics, ML models                    |
+----------------------------------------------------------+
| Application Layer: User Interfaces & Dashboards             |
|   Mobile apps, Web dashboards, Alert systems               |
+----------------------------------------------------------+`,
    keyPoints: ['IoT connects physical devices to the internet', 'Sensors collect data, actuators perform actions', 'Connectivity options: WiFi, BT, LoRaWAN, Cellular', 'MQTT is the primary IoT messaging protocol', 'Cloud platforms (AWS IoT, Azure IoT) enable scaling'],
    interviewQuestions: ['Q: What are the main components of an IoT system?', 'Q: What is the difference between IoT and M2M?', 'Q: What are the key challenges in IoT?']
  },
  'iot-sensors': {
    title: 'Sensors & Microcontrollers',
    techId: 'iot', level: 'Beginner', duration: '30 min',
    introduction: 'Sensors detect physical phenomena and convert them to electrical signals. Microcontrollers process sensor data and control actuators.',
    whyUsed: 'Sensors bridge the physical and digital worlds. Microcontrollers provide the intelligence to read sensors, make decisions, and communicate data.',
    diagram: `+------------------------------------------------------+
|           COMMON IOT SENSORS                          |
+------------------------------------------------------+
| Temperature: DHT11, DHT22, DS18B20, LM35              |
| Humidity: DHT11, DHT22                                |
| Motion: PIR (HC-SR501)                                |
| Distance: Ultrasonic (HC-SR04)                        |
| Light: LDR (photoresistor), BH1750                   |
| Gas: MQ-2 (smoke), MQ-135 (air quality)              |
| Pressure: BMP180, BMP280                              |
| Sound: MAX9814 microphone module                      |
|                                                       |
| Microcontrollers:                                     |
| Arduino Uno (ATmega328P) - beginner friendly          |
| ESP32 - WiFi + BT built-in, dual core                 |
| ESP8266 - low-cost WiFi                                |
| Raspberry Pi - single-board computer (Linux)          |
+------------------------------------------------------+`,
    keyPoints: ['Analog sensors output continuous voltage (read via ADC)', 'Digital sensors communicate via protocols (I2C, SPI, OneWire)', 'DHT11: temp+humidity, cheap but less accurate', 'PIR sensor detects motion via infrared heat changes', 'ESP32 is preferred for IoT due to built-in WiFi/Bluetooth'],
    interviewQuestions: ['Q: What is the difference between analog and digital sensors?', 'Q: How does a PIR sensor work?', 'Q: What is the difference between Arduino and ESP32?']
  },
  'iot-arduino': {
    title: 'Arduino & ESP32',
    techId: 'iot', level: 'Intermediate', duration: '35 min',
    introduction: 'Arduino is an open-source electronics platform for building interactive projects. ESP32 extends this with built-in WiFi and Bluetooth for IoT applications.',
    whyUsed: 'Arduino simplifies microcontroller programming. ESP32 enables internet-connected IoT devices without additional modules.',
    diagram: `+------------------------------------------------------+
|           ARDUINO PROGRAM STRUCTURE                  |
+------------------------------------------------------+
| void setup() {                                       |
|   // Runs once at startup                            |
|   pinMode(LED_BUILTIN, OUTPUT);                     |
|   Serial.begin(9600);                                |
| }                                                     |
|                                                       |
| void loop() {                                        |
|   // Runs repeatedly                                 |
|   digitalWrite(LED_BUILTIN, HIGH);                  |
|   delay(1000);                                       |
|   digitalWrite(LED_BUILTIN, LOW);                   |
|   delay(1000);                                       |
| }                                                     |
|                                                       |
| ESP32 WiFi Example:                                   |
| #include <WiFi.h>                                    |
| WiFi.begin("SSID", "password");                      |
| WiFi.status() == WL_CONNECTED                        |
+------------------------------------------------------+`,
    keyPoints: ['setup() runs once for initialization', 'loop() runs continuously', 'digitalWrite() controls output pins (HIGH/LOW)', 'analogRead() reads analog sensors (0-1023 on Uno)', 'ESP32: WiFi.begin(), MQTT client libraries available', 'Arduino IDE or PlatformIO for development'],
    interviewQuestions: ['Q: What is the difference between setup() and loop()?', 'Q: How do you connect ESP32 to WiFi?', 'Q: What is the difference between digital and analog pins?']
  },
  'iot-mqtt': {
    title: 'MQTT Protocol',
    techId: 'iot', level: 'Intermediate', duration: '30 min',
    introduction: 'MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol designed for constrained devices and low-bandwidth networks.',
    whyUsed: 'MQTT enables efficient, reliable communication between IoT devices with minimal bandwidth and power consumption.',
    diagram: `+----------------------------------------------------+
|              MQTT ARCHITECTURE                       |
+----------------------------------------------------+
|                     +--------+                       |
|  Temperature        |        |       Mobile App     |
|  Sensor ---+------->| BROKER |<-------+---Display   |
|            |        | (MQTT) |        |             |
|            |        +--------+        |             |
|            |                         |             |
|  Humidity   +---> Subscribe:        +---> Subscribe|
|  Sensor         "sensor/temp"          "sensor/#"  |
|                                                    |
| PUBLISH: sensor/temp {"value": 25.5}               |
| SUBSCRIBE: sensor/# (receives all sensor topics)   |
+----------------------------------------------------+`,
    keyPoints: ['Lightweight protocol for IoT', 'Publish-Subscribe model', 'MQTT Broker manages messages', 'Topics organize messages hierarchically', 'QoS levels: 0, 1, 2', 'Retained messages for late subscribers'],
    interviewQuestions: ['Q: What is MQTT and why is it used in IoT?', 'Q: What are the different QoS levels in MQTT?', 'Q: What is the role of an MQTT broker?']
  },
  'iot-cloud': {
    title: 'Cloud Integration',
    techId: 'iot', level: 'Advanced', duration: '35 min',
    introduction: 'Cloud IoT platforms provide infrastructure for connecting, managing, and analyzing data from millions of IoT devices at scale.',
    whyUsed: 'Cloud platforms handle device authentication, data storage, analytics, and visualization, allowing developers to focus on application logic.',
    diagram: `+----------------------------------------------------------+
|           IOT CLOUD ARCHITECTURE                          |
+----------------------------------------------------------+
| IoT Devices -> Gateway -> Cloud IoT Platform              |
|                                                             |
| Cloud Platforms:                                            |
| AWS IoT Core: Device Gateway, Rules Engine, Device Shadow  |
| Azure IoT Hub: Device Registry, Twin, Jobs, Routes        |
| Google Cloud IoT: Device Manager, Pub/Sub, Dataflow       |
|                                                             |
| Services:                                                   |
| Data Storage: Time-series DB (InfluxDB), Object Storage    |
| Analytics: Stream processing (Spark), ML (SageMaker)       |
| Visualization: Grafana, Custom Dashboards                  |
| Alerts: SNS, Email, SMS                                    |
+----------------------------------------------------------+`,
    keyPoints: ['Device Gateway: secure MQTT/HTTP connectivity', 'Device Shadow: cloud-side device state (even offline)', 'Rules Engine: process and route incoming data', 'Time-series DB: optimized for IoT sensor data', 'Edge computing: process data near devices for low latency'],
    interviewQuestions: ['Q: What is a device shadow/digital twin?', 'Q: What is edge computing in IoT?', 'Q: Compare AWS IoT, Azure IoT, and Google Cloud IoT.']
  },
  'iot-projects': {
    title: 'Real-World Use Cases',
    techId: 'iot', level: 'Advanced', duration: '35 min',
    introduction: 'IoT transforms industries through real-world applications in smart cities, agriculture, healthcare, manufacturing, and homes.',
    whyUsed: 'IoT solutions solve real problems: reducing energy waste, optimizing agriculture, improving healthcare, enhancing safety, and enabling predictive maintenance.',
    diagram: `+----------------------------------------------------------+
|           IOT USE CASES BY INDUSTRY                        |
+----------------------------------------------------------+
| Smart City:                                                |
| - Smart Traffic Lights (adaptive to congestion)           |
| - Smart Parking (sensor-based availability)                |
| - Waste Management (fill-level monitored bins)             |
| - Air Quality Monitoring                                   |
|                                                             |
| Smart Agriculture:                                          |
| - Soil Moisture Monitoring + Auto Irrigation               |
| - Weather Station Integration                               |
| - Crop Health Monitoring (drones + multispectral)          |
| - Livestock Tracking (GPS collars)                         |
|                                                             |
| Industrial IoT (IIoT):                                      |
| - Predictive Maintenance (vibration + temp sensors)        |
| - Asset Tracking (RTLS)                                     |
| - Energy Management                                         |
|                                                             |
| Smart Home:                                                 |
| - Smart Thermostat, Lighting, Security Cameras             |
+----------------------------------------------------------+`,
    keyPoints: ['Smart cities: traffic, parking, waste, lighting, air quality', 'Smart agriculture: soil monitoring, irrigation automation', 'IIoT: predictive maintenance reduces downtime by 30-50%', 'Smart home: energy savings, security, convenience', 'Healthcare: remote patient monitoring, smart pills'],
    interviewQuestions: ['Q: How would you design a smart parking system?', 'Q: What is predictive maintenance and how does IoT enable it?', 'Q: Design an IoT-based smart agriculture system.']
  },
  'linux-filesystem': {
    title: 'File System',
    techId: 'linux', level: 'Beginner', duration: '25 min',
    introduction: 'The Linux filesystem is a hierarchical tree structure starting from root (/). Everything in Linux is a file, including devices and processes.',
    whyUsed: 'Understanding the filesystem is essential for navigating the system, finding files, managing storage, and configuring applications.',
    diagram: `+------------------------------------------------------+
|           LINUX FILESYSTEM HIERARCHY                 |
+------------------------------------------------------+
| /          - Root directory                          |
| /bin       - Essential user commands (ls, cp, mv)   |
| /sbin      - System administration commands          |
| /etc       - Configuration files                    |
| /home      - User home directories                  |
| /var       - Variable data (logs, databases)        |
| /tmp       - Temporary files                        |
| /usr       - User programs and data                 |
| /opt       - Optional/third-party software          |
| /dev       - Device files                           |
| /proc      - Process information (virtual)          |
| /root      - Root user's home                       |
+------------------------------------------------------+`,
    keyPoints: ['/ is the root of the entire filesystem', '/etc stores system configuration files', '/var contains logs (/var/log) and databases', '/home has user personal directories', '/proc is a virtual filesystem with kernel/process info', 'Use df -h to check disk space, du -sh for directory size'],
    interviewQuestions: ['Q: What is the Linux filesystem hierarchy?', 'Q: What is the purpose of /etc, /var, /proc?', 'Q: What is the difference between /bin and /sbin?']
  },
  'linux-permissions': {
    title: 'Permissions',
    techId: 'linux', level: 'Beginner', duration: '25 min',
    introduction: 'Linux file permissions control who can read, write, and execute files and directories. Every file has an owner, group, and permission settings.',
    whyUsed: 'Permissions are critical for system security, preventing unauthorized access, and ensuring users only modify files they should.',
    diagram: `+------------------------------------------------------+
|           LINUX PERMISSIONS                           |
+------------------------------------------------------+
| ls -l output:                                         |
| -rwxr-xr-x 1 user group 1024 Jan 1 12:00 script.sh   |
| ^^^^^^^^^^^                                           |
| ||||||||||                                            |
| ||||||||+--- Others permissions (r-x = 5)            |
| ||||||+------ Group permissions (r-x = 5)             |
| |||+--------- Owner permissions (rwx = 7)             |
| ||+---------- File type (-=file, d=dir)               |
|                                                       |
| Numeric: r=4, w=2, x=1                               |
| 755 = rwxr-xr-x (owner all, group/others read+exec)  |
| 644 = rw-r--r-- (owner read+write, others read)      |
|                                                       |
| Commands:                                             |
| chmod 755 file  - change permissions                 |
| chown user:group file - change owner/group           |
+------------------------------------------------------+`,
    keyPoints: ['Three permission sets: owner, group, others', 'Three permissions: read (r=4), write (w=2), execute (x=1)', 'chmod changes permissions (e.g., chmod 755 script.sh)', 'chown changes file owner and group', 'chgrp changes only group', 'SUID bit: run file as owner (chmod u+s)'],
    interviewQuestions: ['Q: What does chmod 755 mean?', 'Q: What is the difference between chmod and chown?', 'Q: What is the SUID bit?']
  },
  'linux-processes': {
    title: 'Processes & Services',
    techId: 'linux', level: 'Intermediate', duration: '30 min',
    introduction: 'A process is an instance of a running program. Linux manages processes, services (daemons), and system resources efficiently.',
    whyUsed: 'Process management is essential for monitoring system health, troubleshooting issues, and controlling background services.',
    diagram: `+------------------------------------------------------+
|           PROCESS MANAGEMENT COMMANDS               |
+------------------------------------------------------+
| ps aux        - List all running processes          |
| top/htop      - Real-time process monitor           |
| kill PID      - Terminate process (SIGTERM)        |
| kill -9 PID   - Force kill (SIGKILL)               |
| pkill name    - Kill by process name               |
| nice/nice     - Change process priority            |
|                                                       |
| Service Management (systemd):                        |
| systemctl start|stop|restart|status service         |
| systemctl enable|disable service (auto-start)       |
| journalctl -u service -f (view logs)                |
|                                                       |
| Background: command & or Ctrl+Z then bg             |
| Foreground: fg                                      |
+------------------------------------------------------+`,
    keyPoints: ['PID: unique process identifier', 'systemd: modern init system and service manager', 'systemctl: control services (start/stop/restart/status)', 'journalctl: view systemd logs', 'top/htop: real-time process and resource monitoring', 'kill -9: forceful termination (last resort)'],
    interviewQuestions: ['Q: How do you start/stop a service in Linux?', 'Q: What is the difference between SIGTERM and SIGKILL?', 'Q: How do you view system logs in Linux?']
  },
  'linux-networking': {
    title: 'Networking & SSH',
    techId: 'linux', level: 'Intermediate', duration: '30 min',
    introduction: 'Linux provides powerful networking tools for configuration, monitoring, and secure remote access via SSH (Secure Shell).',
    whyUsed: 'Networking skills are essential for server administration, deployment, troubleshooting connectivity, and secure remote management.',
    diagram: `+------------------------------------------------------+
|           NETWORKING COMMANDS & CONCEPTS              |
+------------------------------------------------------+
| ip addr     - Show IP addresses and interfaces       |
| ip link     - Show/manage network interfaces         |
| ping host   - Test connectivity to host              |
| netstat -tuln - Show listening ports                 |
| ss -tuln    - Modern alternative to netstat          |
| curl url    - Make HTTP requests                     |
| wget url    - Download files                         |
| traceroute  - Show route to host                     |
|                                                       |
| SSH: secure remote shell                             |
| ssh user@hostname - Connect to remote                |
| ssh-keygen - Generate SSH key pair                   |
| ssh-copy-id user@host - Copy public key              |
| scp file user@host:/path/ - Secure file copy        |
|                                                       |
| Firewall: ufw enable, ufw allow 22/tcp               |
+------------------------------------------------------+`,
    keyPoints: ['SSH provides encrypted remote access (port 22)', 'Key-based auth is more secure than passwords', 'ufw (Uncomplicated Firewall) simplifies iptables', 'netstat/ss show network connections and listening ports', 'ping tests reachability, curl tests HTTP endpoints', 'scp/sftp for secure file transfer'],
    interviewQuestions: ['Q: How does SSH authentication work?', 'Q: How do you check which ports are listening?', 'Q: What is the difference between TCP and UDP?']
  },
  'linux-deployment': {
    title: 'Deployment Basics',
    techId: 'linux', level: 'Advanced', duration: '35 min',
    introduction: 'Deployment involves installing, configuring, and running applications on Linux servers. Modern deployment uses automation and containerization.',
    whyUsed: 'Deployment skills are essential for making applications available to users. Linux is the primary platform for server-side deployment.',
    diagram: `+----------------------------------------------------------+
|           DEPLOYMENT ARCHITECTURE                          |
+----------------------------------------------------------+
| Application -> Build -> Package -> Deploy -> Run          |
|                                                             |
| Traditional:                                                |
| Java App -> Maven/Gradle -> JAR/WAR -> java -jar app.jar   |
|                                                             |
| Docker:                                                     |
| Dockerfile -> docker build -> docker run                    |
| FROM openjdk:17                                             |
| COPY target/app.jar app.jar                                 |
| ENTRYPOINT ["java", "-jar", "app.jar"]                     |
|                                                             |
| CI/CD Pipeline:                                             |
| Push code -> Build -> Test -> Package -> Deploy             |
| (GitHub Actions, Jenkins, GitLab CI)                        |
|                                                             |
| Process Management:                                         |
| systemd service -> systemctl start app                      |
| Nginx reverse proxy -> proxy_pass to localhost:8080         |
+----------------------------------------------------------+`,
    keyPoints: ['Build: Maven/Gradle compile and package', 'java -jar runs Spring Boot apps', 'Docker containers ensure consistent environments', 'Nginx reverse proxy + SSL termination', 'PM2/systemd for process management', 'CI/CD automates build-test-deploy pipeline'],
    interviewQuestions: ['Q: How do you deploy a Spring Boot application on Linux?', 'Q: What is Docker and why use it?', 'Q: What is a reverse proxy and how does Nginx work?', 'Q: What is CI/CD?']
  },
  'git-basics': {
    title: 'Git Basics',
    techId: 'git', level: 'Beginner', duration: '25 min',
    introduction: 'Git is a distributed version control system that tracks changes in source code, enabling collaboration, history tracking, and branching.',
    whyUsed: 'Git is the industry standard for version control. Every developer must know Git for collaboration, code backup, and release management.',
    diagram: `+------------------------------------------------------+
|           GIT WORKFLOW                                |
+------------------------------------------------------+
| Working Directory -> Staging Area -> Local Repo -> Remote |
|                                                       |
| Working Directory: Your actual files                   |
|   |                                                    |
|   git add file.txt                                     |
|   v                                                    |
| Staging Area (Index): Files prepared for commit       |
|   |                                                    |
|   git commit -m "message"                              |
|   v                                                    |
| Local Repository (.git): Committed history            |
|   |                                                    |
|   git push                                              |
|   v                                                    |
| Remote Repository (GitHub, GitLab)                    |
+------------------------------------------------------+`,
    keyPoints: ['Three states: modified, staged, committed', 'git init: create new repository', 'git clone: copy remote repository', 'git add: stage changes', 'git commit: save snapshot with message', 'git status: check current state', 'git log: view commit history'],
    interviewQuestions: ['Q: What is the difference between git add and git commit?', 'Q: What is a Git repository?', 'Q: What is the difference between git clone and git init?']
  },
  'git-collaboration': {
    title: 'Collaboration & Pull Requests',
    techId: 'git', level: 'Intermediate', duration: '30 min',
    introduction: 'Git enables team collaboration through remotes, branching, pull requests, and code review workflows on platforms like GitHub.',
    whyUsed: 'Collaboration workflows allow multiple developers to work on the same project simultaneously without conflicts, with code review ensuring quality.',
    diagram: `+----------------------------------------------------------+
|           GITHUB COLLABORATION WORKFLOW                   |
+----------------------------------------------------------+
| 1. Fork repository (or clone if you have write access)    |
| 2. git checkout -b feature-branch (create feature branch)|
| 3. Make changes, git add, git commit                      |
| 4. git push -u origin feature-branch                      |
| 5. Open Pull Request on GitHub                             |
| 6. Team reviews code, discusses changes                    |
| 7. Merge pull request                                      |
| 8. Delete feature branch                                   |
|                                                             |
| Keeping fork updated:                                      |
| git remote add upstream original-repo-url                  |
| git pull upstream main                                     |
| git push origin main                                       |
+----------------------------------------------------------+`,
    keyPoints: ['Fork: personal copy of another user\'s repo', 'Pull Request: propose changes with code review', 'git remote -v: view remote repositories', 'git fetch: download changes without merging', 'git pull: fetch + merge', 'git merge vs git rebase: merge preserves history, rebase creates linear history'],
    interviewQuestions: ['Q: What is the GitHub Flow workflow?', 'Q: What is the difference between git fetch and git pull?', 'Q: What is the difference between merge and rebase?']
  },
  'git-advanced': {
    title: 'Advanced Git',
    techId: 'git', level: 'Advanced', duration: '35 min',
    introduction: 'Advanced Git features help manage complex version control scenarios, fix mistakes, and optimize workflows.',
    whyUsed: 'Advanced commands are essential for recovering from errors, managing complex merges, optimizing large repositories, and debugging issues.',
    diagram: `+----------------------------------------------------------+
|           ADVANCED GIT COMMANDS                           |
+----------------------------------------------------------+
| git rebase -i HEAD~3 - Interactive rebase (squash, edit)  |
| git stash - Temporarily save changes                     |
| git stash pop - Apply last stash and remove it            |
| git cherry-pick commit-hash - Apply specific commit       |
| git bisect - Binary search for bug-introducing commit    |
| git reflog - View all HEAD movements (recovery tool)     |
| git reset --soft HEAD~1 - Undo commit, keep changes      |
| git revert commit-hash - Create undo commit (safe)       |
|                                                           |
| .gitignore: patterns for intentionally untracked files   |
| git tag v1.0.0 - Create release tag                      |
| Git LFS: Large File Storage for binaries                 |
| Git hooks: pre-commit (lint), pre-push (test)            |
+----------------------------------------------------------+`,
    keyPoints: ['git revert is safe for public branches, git reset rewrites history', 'git stash temporarily shelves uncommitted changes', 'git bisect binary-searches commit history to find bugs', 'git rebase -i allows squashing, reordering, and editing commits', 'git reflog recovers lost commits (even after reset)', 'Always use .gitignore for build artifacts and secrets'],
    interviewQuestions: ['Q: What is the difference between git reset and git revert?', 'Q: What is git bisect and when would you use it?', 'Q: What is interactive rebase and when to use it?', 'Q: What are Git hooks and how are they useful?']
  }
};

export const projects = [
  {
    id: 'student-management',
    name: 'Student Management System',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    difficulty: 'Intermediate',
    description: 'A full-stack web application to manage student records with CRUD operations, search, and pagination.',
    architecture: `+----------------------------------------------------+
|     STUDENT MANAGEMENT SYSTEM ARCHITECTURE          |
+----------------------------------------------------+
| Browser (Thymeleaf UI)                              |
|       |                                             |
+-------+--------+                                    |
|  Controller   |  @Controller                        |
+-------+--------+                                    |
|       |                                             |
+-------+--------+                                    |
|  Service      |  @Service                           |
+-------+--------+                                    |
|       |                                             |
+-------+--------+                                    |
|  Repository   |  JpaRepository                      |
+-------+--------+                                    |
|       |                                             |
+-------+--------+                                    |
|  MySQL DB     |  student_db                         |
+----------------------------------------------------+`,
    databaseDesign: `Table: students
+-------------+-------------+------+
| Column      | Type        | Key  |
+-------------+-------------+------+
| id          | BIGINT      | PK   |
| first_name  | VARCHAR(50) |      |
| last_name   | VARCHAR(50) |      |
| email       | VARCHAR(100)| UNIQUE|
| phone       | VARCHAR(20) |      |
| course      | VARCHAR(50) |      |
| created_at  | TIMESTAMP   |      |
| updated_at  | TIMESTAMP   |      |
+-------------+-------------+------+`,
    apis: [
      'GET /students - List all students (paginated)',
      'GET /students/new - Show create form',
      'POST /students - Create student',
      'GET /students/{id} - View student details',
      'GET /students/edit/{id} - Show edit form',
      'PUT /students/{id} - Update student',
      'DELETE /students/{id} - Delete student',
      'GET /students/search?q=text - Search students'
    ],
    interviewQuestions: [
      'Q: How would you implement pagination in Spring Boot?',
      'Q: How do you handle validation errors in Thymeleaf?',
      'Q: Explain the @Transactional annotation usage',
      'Q: How would you add sorting to the student list?'
    ]
  },
  {
    id: 'employee-portal',
    name: 'Employee Portal',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Security'],
    difficulty: 'Advanced',
    description: 'A secure employee management portal with role-based access control, JWT authentication, and reporting.',
    architecture: `+----------------------------------------------------------+
|           EMPLOYEE PORTAL ARCHITECTURE                  |
+----------------------------------------------------------+
| React/Angular Frontend (or Thymeleaf)                    |
|       |                                                  |
+-------+--------+  JWT Token Authentication               |
|  API Gateway   |  Spring Security Filter Chain           |
+-------+--------+                                         |
|       |                                                  |
+-------+--------+                                         |
|  Microservices |  Employee, Payroll, Leave Services      |
+-------+--------+                                         |
|       |                                                  |
+-------+--------+                                         |
|  Database     |  Separate DBs per service                |
+----------------------------------------------------------+`
  }
];
