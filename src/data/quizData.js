export const quizQuestions = {
  java: {
    easy: [
      {
        question: 'Which of the following is NOT a primitive data type in Java?',
        options: ['int', 'boolean', 'String', 'char'],
        correct: 2,
        explanation: 'String is a reference type (class), not a primitive type. The 8 primitives are: byte, short, int, long, float, double, boolean, char.'
      },
      {
        question: 'What is the entry point of a Java program?',
        options: ['start()', 'main()', 'run()', 'init()'],
        correct: 1,
        explanation: 'The main() method is the entry point: public static void main(String[] args)'
      },
      {
        question: 'Which keyword is used to inherit a class in Java?',
        options: ['implements', 'inherits', 'extends', 'using'],
        correct: 2,
        explanation: 'The "extends" keyword is used for class inheritance. "implements" is for interfaces.'
      },
      {
        question: 'What is the size of an int in Java?',
        options: ['2 bytes', '4 bytes', '8 bytes', '1 byte'],
        correct: 1,
        explanation: 'int is 4 bytes (32 bits) in Java, ranging from -2,147,483,648 to 2,147,483,647.'
      },
      {
        question: 'Which loop guarantees at least one execution?',
        options: ['for', 'while', 'do-while', 'foreach'],
        correct: 2,
        explanation: 'do-while executes the body first, then checks the condition, so it always runs at least once.'
      }
    ],
    medium: [
      {
        question: 'What is the output of: System.out.println(10 + 20 + "30");',
        options: ['3030', '102030', '30', 'Error'],
        correct: 0,
        explanation: 'Left to right: 10+20=30, then 30+"30" = "3030" (string concatenation).'
      },
      {
        question: 'Which collection class guarantees insertion order?',
        options: ['HashSet', 'TreeSet', 'LinkedHashSet', 'HashMap'],
        correct: 2,
        explanation: 'LinkedHashSet maintains a doubly-linked list to preserve insertion order while providing Set functionality.'
      },
      {
        question: 'What does the "static" keyword mean?',
        options: ['Belongs to instance', 'Belongs to class', 'Cannot be changed', 'Only accessible in same package'],
        correct: 1,
        explanation: 'Static members belong to the class itself, not to any instance, and are shared across all instances.'
      },
      {
        question: 'What is method overloading?',
        options: ['Same name, same params', 'Same name, different params', 'Different name, same params', 'Same method in parent and child'],
        correct: 1,
        explanation: 'Overloading = same method name but different parameters (type, number, or order) in the same class.'
      },
      {
        question: 'Which exception is checked at compile-time?',
        options: ['ArithmeticException', 'NullPointerException', 'IOException', 'ArrayIndexOutOfBoundsException'],
        correct: 2,
        explanation: 'IOException is a checked exception (must be handled). The others are unchecked (RuntimeException subclasses).'
      }
    ],
    hard: [
      {
        question: 'What is the diamond problem in Java?',
        options: ['Multiple inheritance issue', 'Deadlock in threads', 'Circular dependency', 'Memory leak'],
        correct: 0,
        explanation: 'The diamond problem occurs when a class inherits from two classes with the same method. Java avoids this by not allowing multiple class inheritance.'
      },
      {
        question: 'What does the "transient" keyword do?',
        options: ['Makes variable thread-safe', 'Prevents serialization of field', 'Makes variable constant', 'Hides variable from subclass'],
        correct: 1,
        explanation: 'transient keyword prevents a field from being serialized. When the object is deserialized, transient fields get their default values.'
      },
      {
        question: 'Which garbage collection algorithm uses generations?',
        options: ['Mark-Sweep', 'Copying', 'Generational GC', 'Reference Counting'],
        correct: 2,
        explanation: 'Generational GC divides heap into Young, Old, and Permanent generations based on object age for efficient collection.'
      },
      {
        question: 'What is the difference between Comparator and Comparable?',
        options: ['Same thing', 'Comparable is for sorting, Comparator is for grouping', 'Comparable uses compareTo(), Comparator uses compare()', 'Comparator is for primitives'],
        correct: 2,
        explanation: 'Comparable provides compareTo() in the class itself (natural ordering). Comparator provides compare() externally (custom ordering).'
      },
      {
        question: 'What happens if finalize() throws an exception?',
        options: ['JVM crashes', 'Exception propagates', 'It is ignored and GC continues', 'Object is not collected'],
        correct: 2,
        explanation: 'If finalize() throws an exception, it is ignored by the GC. The object is still eligible for collection in the next GC cycle.'
      }
    ]
  },
  'spring-boot': {
    easy: [
      {
        question: 'What annotation marks a Spring Boot application?',
        options: ['@SpringApplication', '@SpringBootApplication', '@EnableAutoConfig', '@SpringConfig'],
        correct: 1,
        explanation: '@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.'
      },
      {
        question: 'What is the default embedded server in Spring Boot?',
        options: ['Tomcat', 'Jetty', 'Undertow', 'Netty'],
        correct: 0,
        explanation: 'Spring Boot uses Apache Tomcat as the default embedded servlet container.'
      },
      {
        question: 'Which annotation is used for REST controllers?',
        options: ['@Controller', '@RestController', '@WebService', '@Endpoint'],
        correct: 1,
        explanation: '@RestController combines @Controller and @ResponseBody for RESTful web services.'
      }
    ],
    medium: [
      {
        question: 'What does @Autowired do?',
        options: ['Creates a bean', 'Injects a dependency', 'Removes a bean', 'Destroys a bean'],
        correct: 1,
        explanation: '@Autowired enables automatic dependency injection by type matching in Spring container.'
      },
      {
        question: 'What is the benefit of constructor injection?',
        options: ['Faster execution', 'Immutability and testability', 'Less code', 'No dependencies needed'],
        correct: 1,
        explanation: 'Constructor injection ensures required dependencies are provided at creation time, enabling immutable objects and easy testing with mocks.'
      },
      {
        question: 'Which file configures Spring Boot properties?',
        options: ['application.properties', 'spring.xml', 'config.json', 'bootstrap.yml'],
        correct: 0,
        explanation: 'application.properties (or application.yml) is the default configuration file in Spring Boot.'
      }
    ],
    hard: [
      {
        question: 'What is the scope of a prototype bean?',
        options: ['Single instance per container', 'New instance for each request/injection', 'One per HTTP session', 'One per HTTP request'],
        correct: 1,
        explanation: 'Prototype scope creates a new bean instance every time it is requested or injected, unlike singleton.'
      },
      {
        question: 'How does @Transactional work?',
        options: ['Creates a transaction log', 'Automatically manages database transactions', 'Locks tables', 'Caches queries'],
        correct: 1,
        explanation: '@Transactional uses AOP proxies to begin, commit, or rollback database transactions automatically based on method execution.'
      },
      {
        question: 'What is the purpose of @ConditionalOnProperty?',
        options: ['Creates property file', 'Conditionally loads beans based on property value', 'Validates property types', 'Converts property formats'],
        correct: 1,
        explanation: '@ConditionalOnProperty enables a bean only when a specific property has a specific value, useful for feature toggles.'
      }
    ]
  },
  mysql: {
    easy: [
      {
        question: 'Which SQL statement retrieves data from a table?',
        options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
        correct: 2,
        explanation: 'SELECT is used to query/retrieve data from database tables.'
      },
      {
        question: 'What is a PRIMARY KEY?',
        options: ['Unique identifier for a row', 'Foreign reference', 'An index', 'A constraint on columns'],
        correct: 0,
        explanation: 'A PRIMARY KEY uniquely identifies each row in a table. It must be unique and NOT NULL.'
      },
      {
        question: 'Which clause is used to filter records?',
        options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'],
        correct: 2,
        explanation: 'WHERE clause filters records before aggregation. HAVING filters after aggregation.'
      }
    ],
    medium: [
      {
        question: 'What does INNER JOIN return?',
        options: ['All rows from left table', 'Only matching rows from both tables', 'All rows from both tables', 'All rows from right table'],
        correct: 1,
        explanation: 'INNER JOIN returns only rows where the join condition matches in both tables.'
      },
      {
        question: 'What is the difference between WHERE and HAVING?',
        options: ['Same thing', 'WHERE is for rows, HAVING is for groups', 'HAVING is faster', 'WHERE works with aggregate functions'],
        correct: 1,
        explanation: 'WHERE filters rows before GROUP BY. HAVING filters groups after GROUP BY and can use aggregate functions.'
      },
      {
        question: 'What does an index do?',
        options: ['Slows down reads', 'Speeds up data retrieval', 'Deletes duplicates', 'Creates backups'],
        correct: 1,
        explanation: 'Indexes speed up SELECT queries by allowing the database to find rows without scanning the entire table.'
      }
    ],
    hard: [
      {
        question: 'What is a deadlock in databases?',
        options: ['Locked user account', 'Two transactions waiting on each other\'s locks', 'Table is full', 'Network timeout'],
        correct: 1,
        explanation: 'A deadlock occurs when two or more transactions hold locks that the other needs, causing them to wait indefinitely.'
      },
      {
        question: 'What is the N+1 query problem?',
        options: ['Making N+1 database calls instead of 1', 'Slow query optimization', 'Too many indexes', 'Connection pool exhaustion'],
        correct: 0,
        explanation: 'The N+1 problem occurs when you execute one query to get N parent records, then N additional queries for each child, instead of using JOIN.'
      },
      {
        question: 'What does ACID stand for?',
        options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Input, Data', 'Async, Commit, Index, Delete', 'All, Columns, In, Database'],
        correct: 0,
        explanation: 'ACID ensures reliable transaction processing: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent independence), Durability (persists after commit).'
      }
    ]
  },
  git: {
    easy: [
      {
        question: 'Which command creates a copy of a repository?',
        options: ['git fork', 'git clone', 'git copy', 'git branch'],
        correct: 1,
        explanation: 'git clone creates a local copy of a remote repository.'
      },
      {
        question: 'What does "git status" show?',
        options: ['Remote URL', 'Current branch and file changes', 'Commit history', 'All branches'],
        correct: 1,
        explanation: 'git status displays the working tree status: staged, unstaged, and untracked files.'
      },
      {
        question: 'How do you stage a file for commit?',
        options: ['git commit file', 'git add file', 'git stage file', 'git push file'],
        correct: 1,
        explanation: 'git add <file> stages the file, preparing it for commit.'
      }
    ],
    medium: [
      {
        question: 'What is a merge conflict?',
        options: ['Two branches with same commits', 'Changes to same part of same file from different branches', 'Repository is full', 'Network error during push'],
        correct: 1,
        explanation: 'A merge conflict occurs when Git cannot automatically resolve differences in code between two branches.'
      },
      {
        question: 'What does "git pull" do?',
        options: ['Only fetches remote changes', 'Fetches and merges remote changes', 'Pushes local changes', 'Creates a new branch'],
        correct: 1,
        explanation: 'git pull = git fetch + git merge. It downloads remote changes and integrates them into the current branch.'
      },
      {
        question: 'What is a Pull Request?',
        options: ['Request to delete branch', 'Request to merge changes from one branch to another', 'Request to clone repository', 'Request to revert commit'],
        correct: 1,
        explanation: 'A Pull Request (PR) is a GitHub feature that requests code review and merging of changes from one branch to another.'
      }
    ],
    hard: [
      {
        question: 'What does "git rebase" do?',
        options: ['Deletes commits', 'Reapplies commits on top of another base commit', 'Creates a backup', 'Merges all branches'],
        correct: 1,
        explanation: 'git rebase moves commits to a new base commit, creating a linear history. It rewrites commit history.'
      },
      {
        question: 'How do you undo the last commit without losing changes?',
        options: ['git delete HEAD', 'git reset --soft HEAD~1', 'git revert HEAD', 'git checkout HEAD'],
        correct: 1,
        explanation: 'git reset --soft HEAD~1 removes the commit but keeps changes staged. --hard would discard changes.'
      },
      {
        question: 'What is "git cherry-pick"?',
        options: ['Picks best commits', 'Applies a specific commit from one branch to another', 'Automatically merges branches', 'Deletes selected commits'],
        correct: 1,
        explanation: 'git cherry-pick applies the changes from a specific commit (from any branch) to the current branch.'
      }
    ]
  },
  linux: {
    easy: [
      {
        question: 'Which command lists files in a directory?',
        options: ['dir', 'list', 'ls', 'show'],
        correct: 2,
        explanation: 'ls (list) displays the contents of a directory in Linux.'
      },
      {
        question: 'What does "pwd" do?',
        options: ['Set password', 'Print working directory', 'Power down', 'Process watch daemon'],
        correct: 1,
        explanation: 'pwd prints the full path of the current working directory.'
      },
      {
        question: 'How do you create a new directory?',
        options: ['create dir', 'newdir dirname', 'mkdir dirname', 'md dirname'],
        correct: 2,
        explanation: 'mkdir (make directory) creates a new directory in the filesystem.'
      }
    ],
    medium: [
      {
        question: 'What does "chmod 755 file" do?',
        options: ['Changes file owner', 'Sets rwxr-xr-x permissions', 'Deletes file', 'Moves file'],
        correct: 1,
        explanation: '755 = rwx (owner), r-x (group), r-x (others). Owner can read/write/execute; others read/execute.'
      },
      {
        question: 'What is the purpose of SSH?',
        options: ['File transfer protocol', 'Secure remote shell access', 'Network monitoring', 'Package management'],
        correct: 1,
        explanation: 'SSH (Secure Shell) provides encrypted remote access to systems over a network.'
      },
      {
        question: 'What does "grep" do?',
        options: ['Compresses files', 'Searches text using patterns', 'Creates archives', 'Monitors processes'],
        correct: 1,
        explanation: 'grep searches input files for lines matching a pattern and prints matching lines.'
      }
    ],
    hard: [
      {
        question: 'What is a Linux daemon?',
        options: ['File type', 'Background service/process', 'User account type', 'Network protocol'],
        correct: 1,
        explanation: 'A daemon is a background process that runs continuously, handling service requests (e.g., sshd, httpd).'
      },
      {
        question: 'What does "iptables" do?',
        options: ['Install packages', 'Configure network tables', 'Firewall rules management', 'Set routing tables'],
        correct: 2,
        explanation: 'iptables is a command-line firewall utility that configures rules for packet filtering in the Linux kernel.'
      },
      {
        question: 'What is a symbolic link?',
        options: ['Hard copy of file', 'Pointer/reference to another file', 'Compressed file', 'Encrypted file'],
        correct: 1,
        explanation: 'A symbolic link (symlink) is a special file that points to another file or directory, like a shortcut.'
      }
    ]
  },
  iot: {
    easy: [
      {
        question: 'What does IoT stand for?',
        options: ['Internet of Technology', 'Internet of Things', 'Integration of Tools', 'Interface of Things'],
        correct: 1,
        explanation: 'IoT = Internet of Things, the network of physical devices connected to the internet.'
      },
      {
        question: 'Which protocol is commonly used in IoT for messaging?',
        options: ['HTTP', 'FTP', 'MQTT', 'SMTP'],
        correct: 2,
        explanation: 'MQTT (Message Queuing Telemetry Transport) is the lightweight IoT messaging protocol.'
      },
      {
        question: 'What is a sensor in IoT?',
        options: ['A device that stores data', 'A device that detects environmental changes', 'A network router', 'A power source'],
        correct: 1,
        explanation: 'Sensors detect and measure physical properties (temperature, humidity, motion, light, etc.) and convert them to signals.'
      }
    ],
    medium: [
      {
        question: 'What does MQTT use for message routing?',
        options: ['Direct connections', 'Broker/pub-sub model', 'Peer-to-peer', 'Client-server'],
        correct: 1,
        explanation: 'MQTT uses a publish-subscribe model with a central broker that routes messages between publishers and subscribers by topic.'
      },
      {
        question: 'What is ESP32?',
        options: ['A server software', 'A microcontroller with WiFi/Bluetooth', 'A cloud platform', 'A sensor type'],
        correct: 1,
        explanation: 'ESP32 is a low-cost microcontroller with integrated WiFi and Bluetooth, popular for IoT projects.'
      },
      {
        question: 'What is MQTT QoS level 0?',
        options: ['Exactly once delivery', 'At most once delivery (fire and forget)', 'At least once delivery', 'No delivery guarantee'],
        correct: 1,
        explanation: 'QoS 0 = "At most once": message is sent once with no acknowledgement. Fastest but no delivery guarantee.'
      }
    ],
    hard: [
      {
        question: 'What does CoAP stand for?',
        options: ['Continuous Application Protocol', 'Constrained Application Protocol', 'Cloud Application Protocol', 'Communication Application Protocol'],
        correct: 1,
        explanation: 'CoAP is a web transfer protocol designed for constrained IoT devices, similar to HTTP but lightweight.'
      },
      {
        question: 'What is an edge device in IoT?',
        options: ['Central server', 'Device that processes data near the source', 'A type of sensor', 'Cloud gateway'],
        correct: 1,
        explanation: 'Edge devices process data locally near IoT sensors rather than sending all data to the cloud, reducing latency and bandwidth.'
      },
      {
        question: 'What is the role of an IoT Gateway?',
        options: ['Provides internet access only', 'Bridges IoT devices to the cloud, translating protocols', 'Stores sensor data', 'Generates sensor data'],
        correct: 1,
        explanation: 'An IoT gateway connects IoT devices to the cloud, often handling protocol translation (e.g., MQTT to HTTP), data preprocessing, and security.'
      }
    ]
  },
  thymeleaf: {
    easy: [
      {
        question: 'What is Thymeleaf?',
        options: ['A database', 'A Java template engine for web apps', 'A CSS framework', 'A JavaScript library'],
        correct: 1,
        explanation: 'Thymeleaf is a modern server-side Java template engine for web applications, especially integrated with Spring Boot.'
      },
      {
        question: 'Which attribute is used for variable expressions in Thymeleaf?',
        options: ['th:each', 'th:text', 'th:if', 'th:value'],
        correct: 1,
        explanation: 'th:text is used to dynamically set the text content of HTML elements using variable expressions like ${...}.'
      },
      {
        question: 'How do you iterate over a list in Thymeleaf?',
        options: ['th:for', 'th:loop', 'th:each', 'th:iterate'],
        correct: 2,
        explanation: 'th:each is used for iteration in Thymeleaf, e.g., <tr th:each="item : ${items}">'
      }
    ],
    medium: [
      {
        question: 'What does th:if do?',
        options: ['Creates a loop', 'Conditionally renders an element', 'Assigns a variable', 'Includes a fragment'],
        correct: 1,
        explanation: 'th:if conditionally renders the HTML element only if the expression evaluates to true.'
      },
      {
        question: 'What is a Thymeleaf fragment?',
        options: ['A broken template', 'A reusable template piece', 'A CSS class', 'A JavaScript function'],
        correct: 1,
        explanation: 'Fragments are reusable parts of templates defined with th:fragment and included with th:insert or th:replace.'
      },
      {
        question: 'How do you bind form data to an object in Thymeleaf?',
        options: ['th:object and th:field', 'th:bind', 'th:model', 'th:data'],
        correct: 0,
        explanation: 'th:object binds the form to a model object, and th:field binds individual input fields to object properties.'
      }
    ],
    hard: [
      {
        question: 'What is the difference between th:insert and th:replace?',
        options: ['Same thing', 'insert adds fragment inside host tag, replace replaces host tag with fragment', 'insert replaces host, replace adds inside', 'Both replace the host tag'],
        correct: 1,
        explanation: 'th:insert inserts the fragment content inside the host tag. th:replace replaces the host tag entirely with the fragment.'
      },
      {
        question: 'How does Thymeleaf handle validation errors?',
        options: ['Throws exceptions', 'Shows error messages via th:errors and field.hasErrors()', 'Ignores errors', 'Redirects to error page'],
        correct: 1,
        explanation: 'Thymeleaf uses th:errors for field-specific error messages and #fields.hasErrors() for checking validation status.'
      },
      {
        question: 'What is Spring Expression Language (SpEL) in Thymeleaf?',
        options: ['A JavaScript library', 'An expression language for dynamic evaluation in templates', 'A CSS preprocessor', 'A build tool'],
        correct: 1,
        explanation: 'SpEL provides powerful expression evaluation inside Thymeleaf templates, enabling method calls, conditionals, and collection operations with ${...} syntax.'
      }
    ]
  }
};

export const assessmentQuestions = [
  {
    techId: 'java',
    questions: [
      {
        question: 'What will be the output: int x = 5; System.out.println(x++ + ++x);',
        options: ['10', '11', '12', '13'],
        correct: 2,
        explanation: 'x++ = 5 (post-increment), x becomes 6. ++x = 7 (pre-increment x from 6 to 7). 5 + 7 = 12'
      },
      {
        question: 'Which is NOT a valid access modifier in Java?',
        options: ['public', 'private', 'protected', 'internal'],
        correct: 3,
        explanation: 'Java has public, private, protected, and default (package-private). "internal" is not a Java access modifier.'
      },
      {
        question: 'What does the "final" keyword do when applied to a class?',
        options: ['Makes class immutable', 'Prevents inheritance', 'Makes class thread-safe', 'Optimizes compilation'],
        correct: 1,
        explanation: 'A final class cannot be subclassed/extended. Example: String, Integer, and other wrapper classes are final.'
      },
      {
        question: 'Which interface does java.util.ArrayList implement?',
        options: ['Set', 'Map', 'List', 'Queue'],
        correct: 2,
        explanation: 'ArrayList implements List interface (which extends Collection), providing ordered, index-based access with duplicates allowed.'
      },
      {
        question: 'What is the result of: "Java" instanceof String?',
        options: ['true', 'false', 'Compilation error', 'Runtime error'],
        correct: 0,
        explanation: 'instanceof checks if an object is an instance of a particular class/interface. "Java" is a String, so the result is true.'
      }
    ]
  },
  {
    techId: 'spring-boot',
    questions: [
      {
        question: 'Which annotation enables Spring Boot auto-configuration?',
        options: ['@Configuration', '@EnableAutoConfiguration', '@ComponentScan', '@SpringBootConfig'],
        correct: 1,
        explanation: '@EnableAutoConfiguration tells Spring Boot to automatically configure beans based on classpath dependencies.'
      },
      {
        question: 'What is the default scope of a Spring Bean?',
        options: ['Prototype', 'Singleton', 'Request', 'Session'],
        correct: 1,
        explanation: 'Singleton is the default scope. Only one instance per Spring IoC container.'
      },
      {
        question: 'How do you define a REST endpoint in Spring Boot?',
        options: ['@WebService', '@Endpoint', '@RestController + @RequestMapping', '@SoapService'],
        correct: 2,
        explanation: '@RestController (or @Controller + @ResponseBody) combined with @RequestMapping or shortcut annotations (@GetMapping, etc.)'
      },
      {
        question: 'What is the purpose of application.properties?',
        options: ['Manage dependencies', 'Configure application settings', 'Define database schema', 'Write business logic'],
        correct: 1,
        explanation: 'application.properties centralizes configuration like database URLs, server ports, logging levels, etc.'
      },
      {
        question: 'Which starter dependency is used for web applications?',
        options: ['spring-boot-starter-data-jpa', 'spring-boot-starter-web', 'spring-boot-starter-security', 'spring-boot-starter-test'],
        correct: 1,
        explanation: 'spring-boot-starter-web includes Tomcat, Spring MVC, and REST support for building web applications.'
      }
    ]
  },
  {
    techId: 'mysql',
    questions: [
      {
        question: 'What is the correct SQL to create a table?',
        options: ['CREATE TABLE users (id INT, name VARCHAR(50))', 'BUILD TABLE users', 'NEW TABLE users', 'MAKE TABLE users'],
        correct: 0,
        explanation: 'CREATE TABLE defines a new table with column names, data types, and constraints.'
      },
      {
        question: 'Which SQL aggregate function calculates the average?',
        options: ['SUM()', 'COUNT()', 'AVG()', 'TOTAL()'],
        correct: 2,
        explanation: 'AVG() returns the average value of a numeric column.'
      },
      {
        question: 'What does DELETE do compared to TRUNCATE?',
        options: ['Same thing', 'DELETE removes specific rows, TRUNCATE removes all rows and resets table', 'DELETE is faster', 'TRUNCATE can use WHERE'],
        correct: 1,
        explanation: 'DELETE removes rows (can use WHERE), logging each row. TRUNCATE removes all rows, resets auto-increment, and is faster.'
      },
      {
        question: 'Which JOIN returns all rows from the left table?',
        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
        correct: 1,
        explanation: 'LEFT JOIN (LEFT OUTER JOIN) returns all rows from the left table and matched rows from the right table.'
      },
      {
        question: 'What is a foreign key?',
        options: ['Primary key of same table', 'A field that references primary key of another table', 'An indexed column', 'A unique constraint'],
        correct: 1,
        explanation: 'A foreign key is a column that references the PRIMARY KEY of another table, establishing a relationship between tables.'
      }
    ]
  },
  {
    techId: 'thymeleaf',
    questions: [
      {
        question: 'Which Thymeleaf attribute is used for conditional rendering?',
        options: ['th:each', 'th:if', 'th:switch', 'th:case'],
        correct: 1,
        explanation: 'th:if conditionally renders the element when the expression evaluates to true. th:unless is the inverse.'
      },
      {
        question: 'What is the base template layout approach in Thymeleaf?',
        options: ['Template inheritance', 'Layout dialect', 'Fragment inclusion', 'Block replacement'],
        correct: 2,
        explanation: 'Thymeleaf uses fragment inclusion (th:insert, th:replace) rather than template inheritance like some other engines.'
      },
      {
        question: 'How do you access model attributes in Thymeleaf?',
        options: ['@{...}', '${...}', '#{...}', '*{...}'],
        correct: 1,
        explanation: '${...} expressions access model attributes (controller data). @{...} is for URLs, #{...} for messages.'
      }
    ]
  },
  {
    techId: 'iot',
    questions: [
      {
        question: 'What does MQTT stand for?',
        options: ['Message Query Telemetry Transport', 'Message Queuing Telemetry Transport', 'Main Query Transfer Technology', 'Message Queue Transfer Tool'],
        correct: 1,
        explanation: 'MQTT = Message Queuing Telemetry Transport, a lightweight publish-subscribe messaging protocol for IoT.'
      },
      {
        question: 'Which pin is ground on Arduino Uno?',
        options: ['5V', 'GND', 'VIN', '3.3V'],
        correct: 1,
        explanation: 'GND (Ground) pins serve as the reference point for the circuit\'s voltage. Arduino has multiple GND pins.'
      },
      {
        question: 'What is the main purpose of MQTT in IoT architecture?',
        options: ['Data storage', 'Command-line interface', 'Lightweight communication between devices', 'Power management'],
        correct: 2,
        explanation: 'MQTT enables lightweight, efficient communication between IoT devices with minimal bandwidth and power usage.'
      },
      {
        question: 'What protocol does ESP32 NOT support?',
        options: ['WiFi', 'Bluetooth', 'Zigbee (natively)', 'Ethernet'],
        correct: 2,
        explanation: 'ESP32 supports WiFi and Bluetooth natively. Zigbee and Ethernet require external modules/shields.'
      },
      {
        question: 'What is the publish-subscribe pattern?',
        options: ['Direct device-to-device connection', 'Devices publish messages; subscribers receive by topic', 'One device controls all others', 'Devices take turns sending data'],
        correct: 1,
        explanation: 'In pub-sub, publishers send messages to topics. Subscribers receive only messages from topics they\'ve subscribed to. The broker manages routing.'
      }
    ]
  },
  {
    techId: 'linux',
    questions: [
      {
        question: 'Which command shows running processes?',
        options: ['ps', 'ls', 'dir', 'showproc'],
        correct: 0,
        explanation: 'ps (process status) displays information about running processes. ps aux shows all processes with details.'
      },
      {
        question: 'What does the pipe symbol "|" do in Linux?',
        options: ['Redirects to file', 'Chains commands (output of first is input to second)', 'Runs commands in parallel', 'Creates a new process'],
        correct: 1,
        explanation: 'The pipe (|) redirects the stdout of the first command to the stdin of the second command.'
      },
      {
        question: 'How do you check disk usage in Linux?',
        options: ['check-disk', 'df -h', 'disk-free', 'memory'],
        correct: 1,
        explanation: 'df -h (disk free, human-readable) shows filesystem disk space usage in a readable format.'
      },
      {
        question: 'What is the root user in Linux?',
        options: ['Regular user account', 'Superuser with full system access', 'Network service account', 'Guest account'],
        correct: 1,
        explanation: 'root is the superuser with unrestricted access to all commands, files, and system resources in Linux.'
      },
      {
        question: 'What command is used to install packages on Ubuntu/Debian?',
        options: ['yum install', 'apt-get install', 'pacman -S', 'rpm -i'],
        correct: 1,
        explanation: 'apt-get (or apt) is the package manager for Debian-based distributions like Ubuntu. yum is for RHEL/CentOS, pacman for Arch.'
      }
    ]
  },
  {
    techId: 'git',
    questions: [
      {
        question: 'What does "git commit -m message" do?',
        options: ['Saves changes to the repository with a message', 'Deletes files', 'Creates a branch', 'Pushes to remote'],
        correct: 0,
        explanation: 'git commit records staged changes to the repository with a descriptive message.'
      },
      {
        question: 'What is the difference between git fetch and git pull?',
        options: ['Same thing', 'fetch downloads changes without merging; pull downloads and merges', 'pull downloads without merging; fetch downloads and merges', 'fetch is for local, pull for remote'],
        correct: 1,
        explanation: 'git fetch only downloads remote changes. git pull = git fetch + git merge, integrating changes into the current branch.'
      },
      {
        question: 'Which command switches to an existing branch?',
        options: ['git move branch-name', 'git checkout branch-name', 'git switch branch-name', 'Both B and C'],
        correct: 3,
        explanation: 'Both "git checkout branch-name" and "git switch branch-name" switch to an existing branch. switch was introduced in Git 2.23.'
      },
      {
        question: 'How do you view commit history?',
        options: ['git show', 'git history', 'git log', 'git status'],
        correct: 2,
        explanation: 'git log displays the commit history with author, date, and message. Use --oneline for compact view.'
      },
      {
        question: 'What is a remote repository?',
        options: ['Local backup', 'A repository hosted on a server', 'A deleted repository', 'A hidden directory'],
        correct: 1,
        explanation: 'A remote repository is a version of the project hosted on a server (e.g., GitHub, GitLab) for collaboration and backup.'
      }
    ]
  }
];

export const topicQuizData = {
  // ===== JAVA =====
  'java-strings': [
    { question: 'What is the output of: "Hello".concat(" World")?', options: ['Hello World', 'Hello Worldconcat', 'Hello.concat World', 'Error'], correct: 0, explanation: 'concat() joins two strings: "Hello" + " World" = "Hello World".' },
    { question: 'Which method finds the length of a String?', options: ['length()', 'size()', 'getLength()', 'len()'], correct: 0, explanation: 'length() returns the number of characters in the string. size() is for collections.' },
    { question: 'What does "Java".charAt(2) return?', options: ['J', 'a', 'v', 'StringIndexOutOfBounds'], correct: 2, explanation: 'Index 0=J, 1=a, 2=v. Strings are 0-indexed in Java.' },
    { question: 'Which class is String immutable in Java?', options: ['StringBuilder', 'String', 'StringBuffer', 'Both B and C'], correct: 1, explanation: 'String is immutable. StringBuilder and StringBuffer are mutable alternatives.' },
    { question: 'What is the difference between equals() and == for Strings?', options: ['Same thing', 'equals() compares content, == compares references', '== compares content, equals() compares references', 'equals() is faster'], correct: 1, explanation: 'equals() compares the actual string content. == compares whether two references point to the same object in memory.' }
  ],
  'java-methods': [
    { question: 'What is a method signature in Java?', options: ['Method name + return type', 'Method name + parameter list', 'Return type + parameter list', 'Method body'], correct: 1, explanation: 'Method signature = method name + parameter types and order. Return type is NOT part of the signature.' },
    { question: 'What does the "void" keyword mean in a method?', options: ['Method returns null', 'Method returns nothing', 'Method is empty', 'Method is private'], correct: 1, explanation: 'void means the method does not return any value.' },
    { question: 'Can a method have multiple return statements?', options: ['Yes', 'No', 'Only in void methods', 'Only in static methods'], correct: 0, explanation: 'Yes, a method can have multiple return statements (e.g., in if-else branches), but only one executes per call.' },
    { question: 'What is method overloading?', options: ['Methods with same name and same parameters', 'Methods with same name but different parameters', 'Methods with different names and same body', 'Methods that call each other'], correct: 1, explanation: 'Overloading: same method name, different parameter lists (type, number, or order) within the same class.' },
    { question: 'What happens if you don\'t include a return statement in a non-void method?', options: ['Returns null', 'Compilation error', 'Returns 0', 'Runtime error'], correct: 1, explanation: 'A non-void method MUST return a value of the declared type. Missing it causes a compilation error.' }
  ],
  'java-collections': [
    { question: 'Which collection does NOT allow duplicate elements?', options: ['List', 'Set', 'Queue', 'ArrayList'], correct: 1, explanation: 'Set (HashSet, TreeSet, LinkedHashSet) does not allow duplicate elements. List allows duplicates.' },
    { question: 'What is the default initial capacity of an ArrayList?', options: ['5', '10', '16', '20'], correct: 1, explanation: 'ArrayList has a default initial capacity of 10. It grows dynamically when full.' },
    { question: 'How does HashMap handle collisions?', options: ['Overwrites existing key', 'Uses linked list/tree in the bucket', 'Throws exception', 'Creates a new HashMap'], correct: 1, explanation: 'HashMap uses separate chaining: when two keys have the same hash, entries are stored in a linked list (or tree after threshold) in the same bucket.' },
    { question: 'Which collection maintains insertion order?', options: ['HashSet', 'TreeSet', 'LinkedHashSet', 'HashMap'], correct: 2, explanation: 'LinkedHashSet maintains a doubly-linked list to preserve insertion order. HashSet has no ordering, TreeSet sorts.' },
    { question: 'What is the time complexity of get() in a HashMap?', options: ['O(1) average', 'O(n)', 'O(log n)', 'O(n^2)'], correct: 0, explanation: 'HashMap get() is O(1) on average (constant time) when hash function distributes keys uniformly.' }
  ],
  'java-exceptions': [
    { question: 'Which keyword is used to manually throw an exception?', options: ['catch', 'throws', 'throw', 'exception'], correct: 2, explanation: 'throw is used to explicitly throw an exception. throws declares exceptions a method might throw.' },
    { question: 'Which of these is an unchecked exception?', options: ['IOException', 'SQLException', 'NullPointerException', 'FileNotFoundException'], correct: 2, explanation: 'NullPointerException extends RuntimeException (unchecked). IOException, SQLException, FileNotFoundException are checked exceptions.' },
    { question: 'What is the purpose of the "finally" block?', options: ['Catches exceptions', 'Always executes (cleanup code)', 'Throws exceptions', 'Declares exceptions'], correct: 1, explanation: 'finally block always executes regardless of whether an exception occurs, used for cleanup (closing files, connections).' },
    { question: 'What happens if an exception is not caught?', options: ['Program continues', 'Program terminates abnormally', 'Exception is ignored', 'JVM restarts'], correct: 1, explanation: 'If no catch block handles the exception, it propagates up the call stack. If uncaught at top level, the program terminates.' },
    { question: 'Can you have multiple catch blocks for one try?', options: ['Yes', 'No', 'Only if they are the same exception type', 'Only in Java 8+'], correct: 0, explanation: 'Yes, you can have multiple catch blocks for different exception types. Order matters: more specific exceptions first.' }
  ],
  'java-file-io': [
    { question: 'Which class reads text from a file?', options: ['FileReader', 'FileWriter', 'FileInputStream', 'ObjectOutputStream'], correct: 0, explanation: 'FileReader reads character streams from files. FileWriter writes. FileInputStream reads raw bytes.' },
    { question: 'What does try-with-resources do?', options: ['Creates resources', 'Automatically closes auto-closeable resources', 'Throws resources', 'Logs resource usage'], correct: 1, explanation: 'try-with-resources (Java 7+) automatically closes resources that implement AutoCloseable when the try block exits.' },
    { question: 'Which exception is thrown when a file is not found?', options: ['IOException', 'FileNotFoundException', 'FileNotFoundError', 'FileMissingException'], correct: 1, explanation: 'FileNotFoundException (extends IOException) is thrown when a file with the specified pathname does not exist.' },
    { question: 'What is serialization in Java?', options: ['Converting object to byte stream', 'Converting byte stream to object', 'Converting String to int', 'Sorting collections'], correct: 0, explanation: 'Serialization converts Java objects into byte streams for storage or transmission. Deserialization reverses it.' },
    { question: 'Which interface must a class implement to be serializable?', options: ['Cloneable', 'Serializable', 'Externalizable', 'Both B and C'], correct: 3, explanation: 'A class must implement the marker interface Serializable (or Externalizable for custom serialization) to be serializable.' }
  ],
  'java-multithreading': [
    { question: 'What does the start() method do on a Thread?', options: ['Pauses the thread', 'Creates a new thread and executes run()', 'Kills the thread', 'Restarts the thread'], correct: 1, explanation: 'start() creates a new thread and invokes the run() method on that thread. Calling run() directly executes in the current thread.' },
    { question: 'Which keyword ensures thread safety for a method?', options: ['volatile', 'synchronized', 'transient', 'static'], correct: 1, explanation: 'synchronized ensures that only one thread can execute the method/block at a time, preventing race conditions.' },
    { question: 'What is a race condition?', options: ['Multiple threads running', 'Two threads accessing shared data simultaneously causing unpredictable results', 'Threads waiting for each other', 'Fast thread execution'], correct: 1, explanation: 'Race condition occurs when multiple threads access shared mutable data without synchronization, leading to inconsistent results.' },
    { question: 'What does the volatile keyword guarantee?', options: ['Atomicity', 'Visibility (reads from main memory)', 'Thread safety', 'Caching'], correct: 1, explanation: 'volatile ensures that reads/writes happen directly from main memory (not thread cache), providing visibility guarantees.' },
    { question: 'What is the difference between wait() and sleep()?', options: ['Same thing', 'wait() releases lock, sleep() does not', 'sleep() releases lock, wait() does not', 'Both release locks'], correct: 1, explanation: 'wait() releases the monitor lock and waits for notify(). sleep() pauses the thread without releasing any locks.' }
  ],
  'java-streams': [
    { question: 'What does the filter() operation do in Streams?', options: ['Removes duplicates', 'Selects elements matching a predicate', 'Transforms elements', 'Sorts elements'], correct: 1, explanation: 'filter() is an intermediate operation that selects elements matching the given Predicate condition.' },
    { question: 'What is the difference between map() and flatMap()?', options: ['Same thing', 'map() transforms each element, flatMap() flattens nested streams', 'flatMap() transforms, map() flattens', 'map() is for primitives only'], correct: 1, explanation: 'map() transforms each element to another object. flatMap() transforms each element to a Stream and flattens the result into a single stream.' },
    { question: 'Which terminal operation collects stream elements?', options: ['map()', 'filter()', 'collect()', 'peek()'], correct: 2, explanation: 'collect() is a terminal operation that accumulates elements into a collection (List, Set, Map) or other result.' },
    { question: 'What is a terminal operation in Streams?', options: ['Opens the stream', 'Produces a result and closes the stream', 'Transforms elements', 'Creates new streams'], correct: 1, explanation: 'Terminal operations (collect, forEach, reduce, count) produce a result or side effect and close the stream. The stream cannot be used after.' },
    { question: 'What does the reduce() method do?', options: ['Reduces collection size', 'Combines elements into a single result', 'Removes elements', 'Filters elements'], correct: 1, explanation: 'reduce() combines all stream elements into a single value using an associative accumulation function (e.g., sum, product, concatenation).' }
  ],
  'java-lambda': [
    { question: 'What is a lambda expression?', options: ['A class', 'A concise way to implement a functional interface', 'A loop construct', 'A type of collection'], correct: 1, explanation: 'Lambda expressions provide a concise syntax to implement the single abstract method of a functional interface.' },
    { question: 'What is a functional interface?', options: ['Interface with multiple methods', 'Interface with exactly one abstract method', 'Interface with no methods', 'Any Java interface'], correct: 1, explanation: 'A functional interface has exactly one abstract method. Examples: Runnable, Comparator, Callable. Can have @FunctionalInterface annotation.' },
    { question: 'What does (x, y) -> x + y represent?', options: ['Lambda with type declaration', 'Lambda that adds two parameters and returns sum', 'Method reference', 'Anonymous class'], correct: 1, explanation: 'This lambda takes two parameters and returns their sum. The type is inferred from context.' },
    { question: 'Which annotation marks a functional interface?', options: ['@Override', '@FunctionalInterface', '@Interface', '@Lambda'], correct: 1, explanation: '@FunctionalInterface is optional but ensures the interface has exactly one abstract method (compile-time check).' },
    { question: 'Can lambdas access local variables from enclosing scope?', options: ['Yes, if they are final or effectively final', 'No', 'Yes, always', 'Only static variables'], correct: 0, explanation: 'Lambdas can access local variables only if they are final or effectively final (not modified after initialization).' }
  ],
  'java-generics': [
    { question: 'What does List<String> mean?', options: ['List of any type', 'List that only contains String objects (type-safe)', 'List of Strings and Integers', 'A string representation of a list'], correct: 1, explanation: 'Generics provide type safety: List<String> can only contain String elements. Compiler enforces this at compile time.' },
    { question: 'What does <? extends Number> mean?', options: ['Any type that IS-A Number or its subclass', 'Only Number type', 'Any type at all', 'Only Integer type'], correct: 0, explanation: '? extends Number means the parameterized type can be Number or any of its subclasses (Integer, Double, etc.). This is an upper-bounded wildcard.' },
    { question: 'What is type erasure in Java generics?', options: ['Removes type parameters at runtime', 'Deletes generic code', 'Clears collections', 'Removes null values'], correct: 0, explanation: 'Type erasure removes generic type information at compile time, replacing type parameters with Object or their bounds. This ensures backward compatibility.' },
    { question: 'What is the difference between List<?> and List<Object>?', options: ['Same thing', 'List<?> accepts any type, List<Object> accepts only Object type', 'List<Object> accepts any type, List<?> accepts only Object', 'Both accept only String'], correct: 1, explanation: 'List<?> (wildcard) accepts any parameterized type. List<Object> only accepts List<Object> specifically, not List<String>.' },
    { question: 'What is a bounded type parameter?', options: ['Parameter with limits on what types can be used', 'Parameter with fixed size', 'Parameter with default value', 'A primitive type'], correct: 0, explanation: 'Bounded type parameters (e.g., <T extends Number>) restrict the types that can be used as type arguments to a specific type hierarchy.' }
  ],
  'java-design-patterns': [
    { question: 'Which pattern ensures a class has only one instance?', options: ['Factory', 'Singleton', 'Observer', 'Builder'], correct: 1, explanation: 'Singleton pattern ensures a class has only one instance and provides a global point of access to it. Used for logging, config, connection pools.' },
    { question: 'What does the Factory pattern do?', options: ['Creates objects without specifying exact class', 'Manages object destruction', 'Observes object changes', 'Builds complex objects step by step'], correct: 0, explanation: 'Factory pattern provides an interface for creating objects but lets subclasses decide which class to instantiate.' },
    { question: 'Which pattern is used to notify multiple objects of state changes?', options: ['Singleton', 'Factory', 'Observer', 'Strategy'], correct: 2, explanation: 'Observer pattern defines a one-to-many dependency where multiple observers are notified when the subject changes state (e.g., event listeners).' },
    { question: 'What is the Builder pattern used for?', options: ['Building complex objects step by step', 'Creating singletons', 'Wrapping existing classes', 'Managing object lifecycle'], correct: 0, explanation: 'Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.' },
    { question: 'What is the Strategy pattern?', options: ['A pattern for database access', 'Defines a family of interchangeable algorithms', 'A pattern for UI design', 'A testing strategy'], correct: 1, explanation: 'Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. The algorithm can vary independently from clients that use it.' }
  ],

  // ===== SPRING BOOT =====
  'spring-ioc': [
    { question: 'What does IoC stand for?', options: ['Integration of Components', 'Inversion of Control', 'Interface of Classes', 'Inversion of Components'], correct: 1, explanation: 'IoC (Inversion of Control) is a principle where the framework controls the flow and object lifecycle, rather than the application code.' },
    { question: 'What is the IoC Container in Spring?', options: ['A database', 'The core Spring container that manages bean lifecycle and DI', 'A web server', 'A build tool'], correct: 1, explanation: 'The IoC Container (ApplicationContext) is responsible for instantiating, configuring, and assembling beans. It manages the complete lifecycle of objects.' },
    { question: 'Which interface represents the IoC Container?', options: ['BeanFactory', 'ApplicationContext', 'Both A and B', 'SpringContext'], correct: 2, explanation: 'Both BeanFactory (basic) and ApplicationContext (advanced with AOP, events, i18n) represent the IoC container. ApplicationContext extends BeanFactory.' },
    { question: 'What bean scope creates one instance per HTTP request?', options: ['singleton', 'prototype', 'request', 'session'], correct: 2, explanation: 'Request scope creates a new bean instance for each HTTP request. Session scope creates one per HTTP session.' },
    { question: 'How does the IoC container resolve bean dependencies?', options: ['By reading annotations/XML configuration', 'By guessing', 'By throwing exceptions', 'By using reflection only'], correct: 0, explanation: 'The IoC container reads bean definitions (annotations like @Component, @Bean, or XML config) and injects dependencies automatically.' }
  ],
  'maven': [
    { question: 'What is Maven?', options: ['A testing framework', 'A build automation tool for Java projects', 'A database', 'A web server'], correct: 1, explanation: 'Maven is a build automation and project management tool primarily for Java. It manages builds, dependencies, documentation, and reporting.' },
    { question: 'What is the Maven build file called?', options: ['build.xml', 'pom.xml', 'maven.xml', 'config.xml'], correct: 1, explanation: 'POM (Project Object Model) is defined in pom.xml. It contains project info, dependencies, plugins, and build configuration.' },
    { question: 'Which command compiles a Maven project?', options: ['mvn compile', 'mvn build', 'mvn package', 'mvn install'], correct: 0, explanation: 'mvn compile compiles source code. mvn package creates JAR/WAR. mvn install adds to local repository. mvn test runs tests.' },
    { question: 'What is the Maven lifecycle phase order?', options: ['validate, compile, test, package, install, deploy', 'compile, test, package, install', 'build, test, deploy', 'clean, compile, test'], correct: 0, explanation: 'Default lifecycle: validate → compile → test → package → verify → install → deploy. Each phase executes previous phases.' },
    { question: 'What does Maven\'s dependency management do?', options: ['Manages external libraries and their versions', 'Manages source code', 'Manages database connections', 'Manages server configurations'], correct: 0, explanation: 'Maven downloads and manages external dependencies (JARs) from repositories (Maven Central) based on dependency declarations in pom.xml.' }
  ],
  'spring-architecture': [
    { question: 'What are the key layers in Spring Boot architecture?', options: ['Model-View-Controller', 'Presentation, Service, Persistence, Database', 'Frontend-Backend-Database', 'Client-Server'], correct: 1, explanation: 'Spring Boot follows layered architecture: Presentation (@Controller), Service (@Service), Persistence (@Repository), and Database layers.' },
    { question: 'What is the entry point of a Spring Boot application?', options: ['web.xml', 'application.properties', 'The main class with @SpringBootApplication', 'pom.xml'], correct: 2, explanation: 'The @SpringBootApplication main class with public static void main() is the entry point. It triggers auto-configuration and component scanning.' },
    { question: 'Which annotation combines @Configuration, @EnableAutoConfiguration, and @ComponentScan?', options: ['@SpringBootApplication', '@SpringBootConfig', '@EnableSpring', '@SpringBean'], correct: 0, explanation: '@SpringBootApplication is a convenience annotation that combines these three annotations, enabling Spring Boot\'s convention-over-configuration approach.' }
  ],
  'spring-crud': [
    { question: 'Which HTTP method is used to create a resource in REST?', options: ['GET', 'POST', 'PUT', 'DELETE'], correct: 1, explanation: 'POST creates a new resource. GET reads, PUT updates/replaces, PATCH partially updates, DELETE removes.' },
    { question: 'What annotation maps HTTP POST requests to a method?', options: ['@GetMapping', '@PostMapping', '@RequestMapping(method=POST)', 'Both B and C'], correct: 3, explanation: '@PostMapping is shorthand for @RequestMapping(method=RequestMethod.POST). Both work for POST requests.' },
    { question: 'What does @PathVariable do?', options: ['Binds URL template variable to method parameter', 'Binds request body to object', 'Binds query parameter', 'Binds header value'], correct: 0, explanation: '@PathVariable extracts values from URI template, e.g., @GetMapping("/{id}") with @PathVariable Long id.' },
    { question: 'What annotation binds JSON request body to a Java object?', options: ['@RequestParam', '@PathVariable', '@RequestBody', '@ModelAttribute'], correct: 2, explanation: '@RequestBody deserializes the HTTP request body (usually JSON) into a Java object using HttpMessageConverter (e.g., Jackson).' },
    { question: 'Which annotation marks a class as a JPA repository?', options: ['@Repository', '@Service', '@RestController', '@Component'], correct: 0, explanation: '@Repository is a Spring stereotype for persistence layer, enabling component scanning and translation of persistence exceptions.' }
  ],
  'spring-validation': [
    { question: 'Which annotation validates that a field is not null?', options: ['@NotNull', '@NotEmpty', '@NotBlank', '@NonNull'], correct: 0, explanation: '@NotNull validates that the value is not null (but empty string is allowed). @NotEmpty checks not null and not empty. @NotBlank checks not null and has text.' },
    { question: 'What does @Valid do in Spring?', options: ['Marks a bean as valid', 'Triggers validation on a method parameter', 'Creates validation rules', 'Logs validation errors'], correct: 1, explanation: '@Valid triggers JSR-380 Bean Validation on the annotated method parameter (usually @RequestBody or @ModelAttribute).' },
    { question: 'Which annotation checks minimum and maximum values?', options: ['@Size', '@Min/@Max', '@Range', '@Length'], correct: 1, explanation: '@Min and @Max validate that a numeric field is within specified bounds. @Size checks string/collection length.' },
    { question: 'How do you handle validation errors in Spring Boot?', options: ['Throwing exceptions', 'Using BindingResult or @ExceptionHandler', 'Catching exceptions manually', 'Logging errors'], correct: 1, explanation: 'Use BindingResult parameter after @Valid to check errors, or use @ExceptionHandler(MethodArgumentNotValidException.class) in @ControllerAdvice.' },
    { question: 'What is @ControllerAdvice used for?', options: ['Global exception handling and data binding across controllers', 'Controller-specific logic', 'Database configuration', 'Security configuration'], correct: 0, explanation: '@ControllerAdvice (@RestControllerAdvice for REST) provides global @ExceptionHandler, @InitBinder, and @ModelAttribute methods across all controllers.' }
  ],
  'spring-jpa': [
    { question: 'What does JPA stand for?', options: ['Java Persistence API', 'Java Platform Architecture', 'Java Programming API', 'Java Persistence Architecture'], correct: 0, explanation: 'JPA (Java Persistence API) is a specification for object-relational mapping (ORM) in Java.' },
    { question: 'Which annotation marks a class as a JPA entity?', options: ['@Table', '@Entity', '@Column', '@Bean'], correct: 1, explanation: '@Entity marks a class as a JPA entity (mapped to a database table). @Table specifies the table name.' },
    { question: 'What does @Id annotation do?', options: ['Marks unique field', 'Marks the primary key field', 'Marks indexed field', 'Marks auto-generated field'], correct: 1, explanation: '@Id marks a field as the primary key. Often combined with @GeneratedValue for auto-increment.' },
    { question: 'What is the difference between @OneToMany and @ManyToOne?', options: ['Same thing', '@OneToMany: one entity has many children. @ManyToOne: many entities belong to one parent.', '@OneToMany is for collections, @ManyToOne is for single entities', 'Both are for relationships'], correct: 1, explanation: '@OneToMany: Student has many Courses. @ManyToOne: Many Courses belong to one Student. They are the inverse of each other.' },
    { question: 'What is the N+1 problem in JPA?', options: ['Slow query execution', 'One query fetches parents, then N queries fetch children', 'Too many database connections', 'Index performance issue'], correct: 1, explanation: 'N+1: After fetching N parent entities, JPA executes N additional queries for each child collection. Solved with JOIN FETCH, @EntityGraph, or batch fetching.' }
  ],
  'spring-security': [
    { question: 'What does Spring Security provide?', options: ['Authentication and authorization', 'Database connectivity', 'Web server configuration', 'Logging'], correct: 0, explanation: 'Spring Security provides comprehensive authentication, authorization, and protection against common attacks (CSRF, XSS) for Java applications.' },
    { question: 'Which class is commonly used for password encoding?', options: ['PasswordEncoder', 'BCryptPasswordEncoder', 'MessageDigest', 'Both A and B'], correct: 3, explanation: 'BCryptPasswordEncoder implements PasswordEncoder, using the bcrypt strong hashing algorithm for passwords. Never store passwords in plain text.' },
    { question: 'What does a JWT token contain?', options: ['Username and password', 'Header, Payload (claims), Signature', 'Session ID', 'Encrypted password'], correct: 1, explanation: 'JWT = Header (algorithm + type) + Payload (claims like subject, roles, expiry) + Signature (verified with secret key).' },
    { question: 'What is the SecurityContext?', options: ['Database of users', 'Stores authentication details for the current request', 'Security configuration file', 'Encryption key store'], correct: 1, explanation: 'SecurityContext holds the Authentication object for the current thread/request, accessible via SecurityContextHolder.' },
    { question: 'How do you configure which URLs require authentication?', options: ['In application.properties', 'In a SecurityFilterChain bean', 'In web.xml', 'In pom.xml'], correct: 1, explanation: 'Configure URL authorization rules using a SecurityFilterChain @Bean with .requestMatchers().authenticated() etc.' }
  ],
  'spring-microservices': [
    { question: 'What is a microservice?', options: ['A large monolithic application', 'Small, independent, loosely coupled services', 'A database service', 'A UI component'], correct: 1, explanation: 'Microservices are small, independently deployable services that each handle a specific business capability and communicate via APIs.' },
    { question: 'What is an API Gateway?', options: ['A database gateway', 'A single entry point for all microservice requests', 'A security protocol', 'A service registry'], correct: 1, explanation: 'API Gateway (Spring Cloud Gateway / Zuul) is a single entry point that routes requests to appropriate microservices, handling cross-cutting concerns.' },
    { question: 'What is service discovery?', options: ['Finding bugs in services', 'Mechanism for services to find each other dynamically', 'Monitoring service health', 'API documentation'], correct: 1, explanation: 'Service Discovery (Eureka, Consul) allows services to register and discover each other by name without hard-coded URLs.' },
    { question: 'What does a Circuit Breaker do?', options: ['Prevents cascading failures by stopping calls to failing services', 'Monitors database connections', 'Breaks network cables', 'Restarts servers'], correct: 0, explanation: 'Circuit Breaker (Resilience4j) detects when a service is failing and temporarily stops sending requests, giving it time to recover.' },
    { question: 'What is distributed tracing?', options: ['Tracking individual microservices', 'Tracking a request across multiple microservices (Sleuth + Zipkin)', 'Monitoring server logs', 'Testing distributed systems'], correct: 1, explanation: 'Distributed tracing (Spring Cloud Sleuth + Zipkin) tracks requests as they flow through multiple microservices using trace IDs.' }
  ],

  // ===== MYSQL =====
  'sql-basics': [
    { question: 'What is a database?', options: ['A spreadsheet', 'An organized collection of structured data', 'A file system', 'A programming language'], correct: 1, explanation: 'A database is an organized collection of structured data, typically stored electronically and managed by a DBMS.' },
    { question: 'What does SQL stand for?', options: ['Simple Query Language', 'Structured Query Language', 'Standard Query Language', 'System Query Language'], correct: 1, explanation: 'SQL (Structured Query Language) is the standard language for managing and querying relational databases.' },
    { question: 'What is a DBMS?', options: ['Database Management System', 'Data Backup Management System', 'Database Model System', 'Digital Base Management System'], correct: 0, explanation: 'DBMS is software that manages databases, providing CRUD operations, security, concurrency, and backup capabilities.' },
    { question: 'What is the difference between DDL and DML?', options: ['DDL defines structure (CREATE, ALTER, DROP), DML manipulates data (SELECT, INSERT, UPDATE, DELETE)', 'DDL is for data, DML is for structure', 'Same thing', 'DDL is faster'], correct: 0, explanation: 'DDL (Data Definition Language) defines database schema. DML (Data Manipulation Language) manages the data within schema objects.' },
    { question: 'What is a NULL value in SQL?', options: ['Zero', 'Empty string', 'Unknown/missing value', 'False'], correct: 2, explanation: 'NULL represents the absence of a value, not zero or empty string. Use IS NULL / IS NOT NULL to check for NULL.' }
  ],
  'sql-tables': [
    { question: 'Which statement creates a new table?', options: ['CREATE DATABASE', 'CREATE TABLE', 'ALTER TABLE', 'NEW TABLE'], correct: 1, explanation: 'CREATE TABLE defines the table structure with column names, data types, and constraints.' },
    { question: 'What is a PRIMARY KEY constraint?', options: ['Unique identifier for each row (must be unique and NOT NULL)', 'A foreign reference', 'An indexing strategy', 'A data type'], correct: 0, explanation: 'PRIMARY KEY uniquely identifies each row. It must contain unique values and cannot be NULL. A table can have only one primary key.' },
    { question: 'What does ALTER TABLE do?', options: ['Creates a table', 'Drops a table', 'Modifies table structure (add/drop columns, modify constraints)', 'Queries a table'], correct: 2, explanation: 'ALTER TABLE modifies existing table structure: adding/dropping columns, modifying data types, adding/dropping constraints.' },
    { question: 'What is a FOREIGN KEY?', options: ['Primary key of the same table', 'A column that references the PRIMARY KEY of another table', 'An indexed column', 'A unique column'], correct: 1, explanation: 'FOREIGN KEY establishes a relationship between two tables by referencing the PRIMARY KEY of the parent table.' },
    { question: 'What does the UNIQUE constraint do?', options: ['Allows duplicates', 'Ensures all values in a column are different', 'Makes column primary key', 'Adds an index'], correct: 1, explanation: 'UNIQUE constraint ensures that all values in a column (or combination of columns) are distinct. Unlike PRIMARY KEY, NULL values are allowed.' }
  ],
  'sql-crud': [
    { question: 'Which SQL statement inserts data?', options: ['ADD INTO', 'INSERT INTO', 'UPDATE', 'CREATE'], correct: 1, explanation: 'INSERT INTO adds new rows to a table. Format: INSERT INTO table (columns) VALUES (values).' },
    { question: 'What does UPDATE do?', options: ['Deletes data', 'Modifies existing records', 'Reads data', 'Creates new records'], correct: 1, explanation: 'UPDATE modifies existing records that match the WHERE condition. Without WHERE, ALL rows are updated.' },
    { question: 'What is the correct DELETE syntax?', options: ['DELETE table WHERE condition', 'DELETE FROM table WHERE condition', 'REMOVE FROM table WHERE condition', 'DROP FROM table WHERE condition'], correct: 1, explanation: 'DELETE FROM table WHERE condition removes rows matching the condition. Without WHERE, all rows are deleted.' },
    { question: 'What does SELECT DISTINCT do?', options: ['Selects unique values, removing duplicates', 'Selects distinct columns', 'Orders results', 'Filters results'], correct: 0, explanation: 'SELECT DISTINCT returns only unique (non-duplicate) values from the specified column(s).' },
    { question: 'Which clause filters records before grouping?', options: ['HAVING', 'WHERE', 'ORDER BY', 'GROUP BY'], correct: 1, explanation: 'WHERE filters rows before GROUP BY aggregation. HAVING filters groups after aggregation.' }
  ],
  'sql-indexes': [
    { question: 'What is the purpose of an index?', options: ['Slows down database', 'Speeds up data retrieval (SELECT queries)', 'Deletes duplicates', 'Creates backups'], correct: 1, explanation: 'Indexes speed up SELECT queries by reducing the number of rows the database needs to scan. They work like a book\'s index.' },
    { question: 'Which type of index is the default in MySQL?', options: ['FULLTEXT', 'SPATIAL', 'BTREE', 'HASH'], correct: 2, explanation: 'MySQL default index type is BTREE (B-tree), balanced tree structure optimized for range and equality queries.' },
    { question: 'What is a composite index?', options: ['Index on multiple columns', 'Index across multiple tables', 'Index with multiple data types', 'Index that combines different index types'], correct: 0, explanation: 'A composite index involves multiple columns. The order of columns matters: MySQL can use prefix columns for queries.' },
    { question: 'When should you avoid using an index?', options: ['On columns frequently updated', 'On primary keys', 'On foreign keys', 'On columns in WHERE clauses'], correct: 0, explanation: 'Avoid indexes on columns that are frequently updated (UPDATE/DELETE performance degrades as indexes must be maintained) and on tables with few rows.' },
    { question: 'What does EXPLAIN do in MySQL?', options: ['Explains query error', 'Shows query execution plan and how indexes are used', 'Explains table structure', 'Documents the database schema'], correct: 1, explanation: 'EXPLAIN shows how MySQL executes a query, including which indexes are used, join order, and estimated rows. Essential for query optimization.' }
  ],
  'sql-views': [
    { question: 'What is a view in SQL?', options: ['A physical table', 'A virtual table based on a SELECT query', 'A type of index', 'A stored procedure'], correct: 1, explanation: 'A view is a stored query that acts like a virtual table. It doesn\'t store data physically but presents data from underlying tables.' },
    { question: 'Why are views used?', options: ['For data security and simplified complex queries', 'To store data permanently', 'To improve write performance', 'To create indexes'], correct: 0, explanation: 'Views provide security (hide sensitive columns), simplify complex queries (encapsulate joins), and present data consistently.' },
    { question: 'Can you UPDATE data through a view?', options: ['Yes, for simple views based on one table', 'No, never', 'Only SELECT is allowed', 'Only if view has indexes'], correct: 0, explanation: 'Updates through views are possible for simple views (single table, no aggregates). Complex views with JOINs, GROUP BY are read-only.' },
    { question: 'What is a materialized view?', options: ['A view that stores data physically', 'A regular view', 'A temporary table', 'An indexed view'], correct: 0, explanation: 'Materialized views (not in MySQL natively) physically store the query result, unlike regular views which are virtual. They need periodic refresh.' },
    { question: 'How do you create a view?', options: ['CREATE VIEW view_name AS SELECT ...', 'CREATE TABLE view_name AS SELECT ...', 'NEW VIEW view_name AS SELECT ...', 'MAKE VIEW view_name AS SELECT ...'], correct: 0, explanation: 'CREATE VIEW view_name AS select_statement creates a virtual table based on the provided SELECT query.' }
  ],
  'sql-procedures': [
    { question: 'What is a stored procedure?', options: ['A stored query', 'A precompiled collection of SQL statements stored in the database', 'A database trigger', 'A function'], correct: 1, explanation: 'A stored procedure is a set of precompiled SQL statements stored on the database server. It can accept parameters and return results.' },
    { question: 'How do you execute a stored procedure?', options: ['SELECT procedure_name()', 'CALL procedure_name()', 'EXECUTE procedure_name()', 'RUN procedure_name()'], correct: 1, explanation: 'CALL procedure_name() executes a stored procedure in MySQL. Parameters can be passed as arguments.' },
    { question: 'What is the difference between a stored procedure and a function?', options: ['Same thing', 'Procedures can have input/output params, functions must return a value', 'Functions can modify data, procedures cannot', 'Procedures are faster'], correct: 1, explanation: 'Functions must return a single value and can be used in SQL expressions. Procedures can have IN/OUT/INOUT params and don\'t require a return value.' },
    { question: 'What are the benefits of stored procedures?', options: ['Reduced network traffic, reusability, security, performance', 'Simpler code only', 'Better indexing', 'Automatic backups'], correct: 0, explanation: 'Stored procedures reduce network traffic (execute logic on server), enable code reuse, provide security (direct table access restricted), and improve performance (precompiled).' },
    { question: 'What is a trigger in MySQL?', options: ['A stored procedure that auto-executes on table events (INSERT/UPDATE/DELETE)', 'A scheduled job', 'A notification system', 'A debugging tool'], correct: 0, explanation: 'A trigger is a stored program that automatically executes (fires) in response to INSERT, UPDATE, or DELETE events on a table.' }
  ],
  'sql-transactions': [
    { question: 'What is a transaction in SQL?', options: ['A single SQL statement', 'A group of SQL statements executed as a single unit (all or nothing)', 'A database connection', 'A query optimization'], correct: 1, explanation: 'A transaction is a unit of work that ensures either all operations succeed (COMMIT) or all are rolled back (ROLLBACK).' },
    { question: 'What does COMMIT do?', options: ['Undoes all changes', 'Permanently saves all transaction changes to the database', 'Cancels the transaction', 'Closes the connection'], correct: 1, explanation: 'COMMIT makes all changes in the current transaction permanent and visible to other transactions.' },
    { question: 'What does ROLLBACK do?', options: ['Saves changes', 'Undoes all changes made in the current transaction since last COMMIT', 'Starts a new transaction', 'Closes the database'], correct: 1, explanation: 'ROLLBACK reverses all changes made in the current transaction, restoring data to the state at the last COMMIT.' },
    { question: 'What is the default transaction isolation level in MySQL?', options: ['READ UNCOMMITTED', 'READ COMMITTED', 'REPEATABLE READ', 'SERIALIZABLE'], correct: 2, explanation: 'MySQL InnoDB uses REPEATABLE READ by default. It prevents dirty reads and non-repeatable reads. Phantom reads are possible.' },
    { question: 'What is a deadlock in databases?', options: ['Locked account', 'Two transactions each waiting for the other\'s lock', 'Database crash', 'Network timeout'], correct: 1, explanation: 'Deadlock occurs when transaction A holds lock on row 1 and waits for row 2, while transaction B holds lock on row 2 and waits for row 1.' }
  ],
  'sql-normalization': [
    { question: 'What is normalization?', options: ['Making tables larger', 'Organizing data to reduce redundancy and dependency', 'Creating indexes', 'Optimizing queries'], correct: 1, explanation: 'Normalization organizes database tables to minimize data redundancy and dependency by dividing tables and establishing relationships.' },
    { question: 'What is 1NF (First Normal Form)?', options: ['Each column has atomic (indivisible) values, no repeating groups', 'No partial dependencies', 'No transitive dependencies', 'All tables are indexed'], correct: 0, explanation: '1NF requires: each cell contains a single value, each column has unique name, and entries in a column are of the same type.' },
    { question: 'What is 2NF (Second Normal Form)?', options: ['In 1NF and no partial dependencies on composite keys', 'In 1NF only', 'No transitive dependencies', 'All columns are unique'], correct: 0, explanation: '2NF requires 1NF + no partial dependency (non-key columns must depend on the entire composite primary key, not just part of it).' },
    { question: 'What is 3NF (Third Normal Form)?', options: ['In 2NF and no transitive dependencies', 'In 2NF only', 'All tables have primary keys', 'No foreign keys'], correct: 0, explanation: '3NF requires 2NF + no transitive dependency (non-key columns should not depend on other non-key columns).' },
    { question: 'What is denormalization?', options: ['Following normalization strictly', 'Intentionally adding redundancy for performance optimization', 'Deleting tables', 'Creating more tables'], correct: 1, explanation: 'Denormalization adds controlled redundancy (e.g., duplicate columns) to reduce JOIN operations and improve read performance, at the cost of data consistency.' }
  ],
  'sql-optimization': [
    { question: 'What is query optimization?', options: ['Writing shorter queries', 'Improving query performance by reducing execution time/resource usage', 'Formatting SQL code', 'Adding comments to queries'], correct: 1, explanation: 'Query optimization involves techniques to make SQL queries run faster and use fewer resources through better execution plans.' },
    { question: 'Which is generally faster: SELECT * or SELECT specific columns?', options: ['SELECT *', 'SELECT specific columns', 'Same speed', 'Depends on database'], correct: 1, explanation: 'SELECT specific columns is faster because it reduces data transfer, may use covering indexes, and avoids unnecessary column retrieval.' },
    { question: 'What is the benefit of using EXISTS instead of IN?', options: ['EXISTS is always faster', 'EXISTS stops scanning as soon as a match is found, IN may scan all results', 'IN is faster', 'Same performance'], correct: 1, explanation: 'EXISTS short-circuits (stops on first match) and is often faster for subqueries. IN collects all subquery results first.' },
    { question: 'What is an execution plan?', options: ['Project timeline', 'The database\'s strategy for executing a query (accessed via EXPLAIN)', 'A SQL code outline', 'A backup plan'], correct: 1, explanation: 'An execution plan shows how the database engine will execute a query, including index usage, join methods, and row estimates. Use EXPLAIN to view.' },
    { question: 'What is query caching?', options: ['Storing query results to serve identical queries faster', 'Compressing queries', 'Encrypting queries', 'Logging queries'], correct: 0, explanation: 'Query caching stores the result set of a SELECT query so that identical queries can return cached results without re-executing.' }
  ],

  // ===== THYMELEAF =====
  'thymeleaf-templates': [
    { question: 'What is Thymeleaf?', options: ['A CSS framework', 'A Java template engine for server-side HTML rendering', 'A JavaScript library', 'A database'], correct: 1, explanation: 'Thymeleaf is a modern server-side Java template engine for web applications. It processes HTML, XML, JavaScript, CSS, and text.' },
    { question: 'What does th:text do?', options: ['Sets the text content of an element', 'Adds CSS classes', 'Creates links', 'Defines templates'], correct: 0, explanation: 'th:text replaces the element\'s text content with the evaluated expression value, escaping HTML by default.' },
    { question: 'How do you include a URL in Thymeleaf?', options: ['@{...}', '${...}', '#{...}', '*{...}'], correct: 0, explanation: '@{...} (link expressions) create proper URLs, automatically adding context path and URL encoding.' },
    { question: 'What is the purpose of th:block?', options: ['Creates visible block element', 'A synthetic element for grouping Thymeleaf attributes without rendering HTML', 'Defines code blocks', 'Creates tables'], correct: 1, explanation: 'th:block is an attribute processor that can be used on any element or as a standalone element to group Thymeleaf attributes without rendering an HTML tag.' },
    { question: 'How do you include external template fragments?', options: ['th:insert or th:replace with template :: fragment syntax', 'import tag', 'include directive', 'use tag'], correct: 0, explanation: 'Fragments from other templates are included using th:insert or th:replace with the syntax "templateName :: fragmentName".' }
  ],
  'thymeleaf-forms': [
    { question: 'What does th:object do on a form?', options: ['Binds the form to a model attribute (form backing object)', 'Defines form action', 'Sets form method', 'Creates form validation'], correct: 0, explanation: 'th:object binds the form to a specific model attribute, enabling data binding between form fields and object properties.' },
    { question: 'What is the purpose of th:field?', options: ['Binds an input field to a property of th:object', 'Defines field type', 'Creates field labels', 'Sets field values'], correct: 0, explanation: 'th:field binds input elements to properties of the th:object, handling value setting, validation errors, and field naming automatically.' },
    { question: 'How do you show validation errors for a specific field?', options: ['th:errors', 'th:error', 'th:validation', 'th:fieldError'], correct: 0, explanation: 'th:errors displays validation error messages for a specific field (e.g., th:errors="*{fieldName}" or th:errors="${object.fieldName}").' },
    { question: 'How do you check if a form has validation errors?', options: ['#fields.hasErrors()', '#validation.hasErrors()', '$errors.hasErrors()', 'th:hasErrors'], correct: 0, explanation: '#fields.hasErrors() or #fields.hasErrors(\'fieldName\') checks if there are validation errors globally or for a specific field.' },
    { question: 'What annotation triggers form validation in Spring MVC with Thymeleaf?', options: ['@Valid on the @ModelAttribute parameter', '@Validate', '@Check', '@FormValidation'], correct: 0, explanation: 'Add @Valid (or @Validated) to the @ModelAttribute parameter in the controller method to trigger Bean Validation.' }
  ],
  'thymeleaf-loops': [
    { question: 'How do you iterate over a list in Thymeleaf?', options: ['th:each="item : ${list}"', 'th:for="item in list"', 'th:loop="item : list"', 'th:foreach="item : list"'], correct: 0, explanation: 'th:each="item : ${list}" iterates over the collection. The iter variable can track status via th:each="item, iterStat : ${list}".' },
    { question: 'How do you access the iteration index in th:each?', options: ['itemStat.index', 'itemStat.count', 'itemIndex', 'Both A and B are available'], correct: 3, explanation: 'th:each="item, stat : ${list}" provides stat.index (0-based) and stat.count (1-based) for tracking iteration position.' },
    { question: 'How do you conditionally render an element in Thymeleaf?', options: ['th:if="${condition}"', 'th:show="${condition}"', 'th:display="${condition}"', 'th:visible="${condition}"'], correct: 0, explanation: 'th:if evaluates the expression and renders the element only if true. th:unless is the inverse.' },
    { question: 'How do you create a switch-case in Thymeleaf?', options: ['th:switch and th:case', 'th:choose and th:when', 'th:select and th:option', 'JavaScript switch'], correct: 0, explanation: 'th:switch="${value}" with th:case="caseValue" elements provides switch-case functionality. Use th:case="*" for default case.' },
    { question: 'How do you check if a collection is empty in Thymeleaf?', options: ['${#lists.isEmpty(list)}', '${list.empty}', '${list == null}', '${list.size == 0}'], correct: 0, explanation: '#lists.isEmpty(list) checks if a collection is null or empty. #lists also provides size(), sort(), contains() utilities.' }
  ],
  'thymeleaf-fragments': [
    { question: 'How do you define a reusable fragment?', options: ['th:fragment="fragmentName"', 'th:define="fragmentName"', 'th:part="fragmentName"', 'th:template="fragmentName"'], correct: 0, explanation: 'th:fragment="fragmentName" on any HTML element defines it as a reusable fragment that can be included elsewhere.' },
    { question: 'What is the difference between th:insert and th:replace?', options: ['Same thing', 'th:insert preserves host tag, th:replace replaces host tag with fragment', 'th:replace preserves host tag, th:insert replaces', 'Both replace host tag'], correct: 1, explanation: 'th:insert inserts fragment content INSIDE the host tag. th:replace REPLACES the host tag entirely with the fragment content.' },
    { question: 'What is the syntax for including a fragment with parameters?', options: ['th:insert="~{template :: fragment(param=value)}"', 'th:insert="template :: fragment?param=value"', 'th:include="template :: fragment(param)"', 'th:import="template :: fragment:param"'], correct: 0, explanation: 'Fragments can accept parameters: th:insert="~{template :: fragment(param=${value})}". Fragment uses parameter variables directly.' },
    { question: 'What does th:include do (deprecated)?', options: ['Same as th:replace', 'Included fragment content without the fragment\'s host tag (merged)', 'Creates file inclusion', 'Adds CSS'], correct: 1, explanation: 'th:include (deprecated in Thymeleaf 3.0) was similar to th:insert but included only fragment content without wrapping tag.' },
    { question: 'How do you create a layout using Thymeleaf fragments?', options: ['Define header/footer fragments, include them in pages, use parameterized fragments for dynamic content', 'Thymeleaf doesn\'t support layouts', 'Only through Spring Boot', 'Using JavaScript'], correct: 0, explanation: 'Typical layout: define header.html, footer.html, sidebar.html fragments. Main pages include them with th:insert/ th:replace. A layout template can use th:fragment for content area, and pages fill it with different fragments.' }
  ],
  'thymeleaf-spring': [
    { question: 'How do you integrate Thymeleaf with Spring Boot?', options: ['Add spring-boot-starter-thymeleaf dependency, Spring Boot auto-configures it', 'Manual configuration in web.xml', 'Install Thymeleaf separately', 'Add JavaScript library'], correct: 0, explanation: 'Adding spring-boot-starter-thymeleaf dependency auto-configures Thymeleaf with sensible defaults (template location: src/main/resources/templates/).' },
    { question: 'How do you access Spring model attributes in Thymeleaf?', options: ['${attributeName}', '@{attributeName}', '#{attributeName}', '*{attributeName}'], correct: 0, explanation: '${...} expressions access model attributes (added via Model.addAttribute() or ModelAndView) in Thymeleaf templates.' },
    { question: 'What template resolver does Spring Boot use for Thymeleaf?', options: ['ClassLoaderTemplateResolver', 'ServletContextTemplateResolver', 'SpringResourceTemplateResolver', 'FileTemplateResolver'], correct: 2, explanation: 'Spring Boot uses SpringResourceTemplateResolver which resolves templates from the classpath (typically src/main/resources/templates/).' },
    { question: 'How do you configure Thymeleaf template location in application.properties?', options: ['spring.thymeleaf.prefix=classpath:/templates/', 'thymeleaf.template-path=', 'template.location=', 'spring.template.prefix='], correct: 0, explanation: 'Use spring.thymeleaf.prefix to customize the template location. Default is classpath:/templates/. Also configurable: suffix, mode, cache.' },
    { question: 'What is Thymeleaf\'s natural templating feature?', options: ['Templates work as static HTML (prototypes) and dynamic pages', 'Automatic code generation', 'CSS framework integration', 'Database connectivity'], correct: 0, explanation: 'Natural templating means Thymeleaf templates are valid HTML that can be opened directly in browsers as static prototypes, while dynamically rendered on the server.' }
  ],
  'thymeleaf-crud': [
    { question: 'How do you create a form for a new entity in Thymeleaf?', options: ['th:object with new Entity() in model, th:field for each field', 'Using plain HTML forms only', 'Using JavaScript forms', 'Using Spring Forms tag library'], correct: 0, explanation: 'Add an empty entity instance to the model (e.g., model.addAttribute("employee", new Employee())), then use th:object and th:field in the form.' },
    { question: 'How do you handle form submission in a Spring controller?', options: ['@PostMapping with @ModelAttribute parameter', '@GetMapping with @RequestParam', '@PutMapping with @RequestBody', '@PostMapping with @PathVariable'], correct: 0, explanation: 'The form POST is handled by @PostMapping controller method. @ModelAttribute binds form fields to the entity object.' },
    { question: 'How do you create an edit form with pre-populated data?', options: ['Add existing entity to model, th:field auto-populates values', 'Use JavaScript to fill fields', 'Use hidden inputs', 'Manual field population'], correct: 0, explanation: 'When editing, add the existing entity to the model. th:field automatically reads the property value and sets it in the input field.' },
    { question: 'How do you implement delete in Thymeleaf CRUD?', options: ['POST form with hidden _method=DELETE or use JavaScript', 'Direct DELETE link', 'Thymeleaf doesn\'t support DELETE', 'Using @DeleteMapping with GET'], correct: 0, explanation: 'HTML forms only support GET and POST. Use POST with hidden _method input (Spring\'s HiddenHttpMethodFilter) and @DeleteMapping, or use AJAX/JavaScript.' },
    { question: 'How do you display a list with edit/delete actions in Thymeleaf?', options: ['th:each to iterate, links with @{} for edit/delete URLs', 'Using tables only', 'Using JavaScript grid', 'Static HTML'], correct: 0, explanation: 'Use th:each to iterate the list. Action buttons: edit link to /{id}/edit, delete form with POST and _method=DELETE at /{id}.' }
  ],

  // ===== IOT =====
  'iot-fundamentals': [
    { question: 'What is the Internet of Things (IoT)?', options: ['Internet of Technology', 'Network of physical devices connected to the internet for data collection and control', 'Internet protocol for devices', 'A cloud computing model'], correct: 1, explanation: 'IoT is the network of interconnected physical devices (sensors, actuators, appliances) that collect and exchange data over the internet.' },
    { question: 'What are the main components of an IoT system?', options: ['CPU, RAM, Storage', 'Sensors, Connectivity, Data Processing, User Interface', 'Keyboard, Mouse, Monitor', 'Router, Switch, Modem'], correct: 1, explanation: 'IoT systems have: sensors/actuators (perception), connectivity (network), data processing (edge/cloud), and user interface (dashboard/app).' },
    { question: 'What is an actuator in IoT?', options: ['A device that senses environment', 'A device that performs physical actions (motor, valve, relay)', 'A network device', 'A power supply'], correct: 1, explanation: 'Actuators convert electrical signals into physical action (movement, heat, sound). Examples: motors, valves, relays, LEDs.' },
    { question: 'What are the key challenges in IoT?', options: ['Security, interoperability, power management, scalability', 'Internet speed only', 'Device color', 'Programming languages'], correct: 0, explanation: 'IoT challenges include: security (device vulnerabilities), interoperability (different protocols), power management (battery life), and scalability (millions of devices).' },
    { question: 'What is the difference between IoT and M2M?', options: ['Same thing', 'IoT is broader internet-connected ecosystem; M2M is direct machine-to-machine communication', 'M2M is newer', 'IoT is for consumers, M2M for industry'], correct: 1, explanation: 'M2M (Machine-to-Machine) is direct communication between devices, often using proprietary protocols. IoT is broader, using IP-based internet connectivity for data integration with cloud services.' }
  ],
  'iot-sensors': [
    { question: 'What is a sensor?', options: ['A device that stores data', 'A device that measures physical quantities and converts to electrical signals', 'A network router', 'A power source'], correct: 1, explanation: 'Sensors detect and measure environmental properties (temperature, humidity, pressure, light, motion) and convert them to measurable electrical signals.' },
    { question: 'What does a temperature sensor measure?', options: ['Humidity', 'Ambient temperature (DHT11, LM35, DS18B20)', 'Pressure', 'Light intensity'], correct: 1, explanation: 'Temperature sensors measure ambient temperature. Common types: DHT11 (temp+humidity), LM35 (analog voltage output), DS18B20 (digital, waterproof).' },
    { question: 'What is a PIR sensor used for?', options: ['Temperature measurement', 'Motion detection (passive infrared)', 'Distance measurement', 'Light detection'], correct: 1, explanation: 'PIR (Passive Infrared) sensor detects infrared radiation changes from moving objects (humans/animals), commonly used in motion-activated lights and security systems.' },
    { question: 'What is the difference between analog and digital sensors?', options: ['Analog gives continuous voltage, digital gives discrete values (0/1 or digital data)', 'Analog is faster, digital is slower', 'Digital uses more power', 'Same thing'], correct: 0, explanation: 'Analog sensors output continuous voltage proportional to measured value (read via ADC). Digital sensors output discrete values or digital protocol data (I2C, SPI).' },
    { question: 'What does an ultrasonic sensor measure?', options: ['Temperature', 'Distance by emitting sound waves and measuring echo time', 'Light intensity', 'Humidity'], correct: 1, explanation: 'Ultrasonic sensors (HC-SR04) emit high-frequency sound waves and measure the time taken for echo to return, calculating distance using the speed of sound.' }
  ],
  'iot-arduino': [
    { question: 'What is Arduino?', options: ['A microcontroller platform for electronics prototyping', 'A programming language', 'A cloud service', 'A database'], correct: 0, explanation: 'Arduino is an open-source electronics platform with easy-to-use hardware and software, designed for beginners and professionals to create interactive projects.' },
    { question: 'What language is used to program Arduino?', options: ['Python', 'C/C++ (Arduino language)', 'Java', 'JavaScript'], correct: 1, explanation: 'Arduino is programmed in a simplified C/C++ with the Arduino IDE. Programs are called "sketches" with setup() and loop() functions.' },
    { question: 'What is the difference between Arduino Uno and ESP32?', options: ['ESP32 has WiFi/BT built-in, Arduino Uno does not', 'Arduino is faster', 'ESP32 has fewer pins', 'Same board'], correct: 0, explanation: 'ESP32 has built-in WiFi and Bluetooth, dual-core processor, more RAM, and is ideal for IoT projects. Arduino Uno is simpler, with no built-in connectivity (needs shields).' },
    { question: 'What does the setup() function do in Arduino?', options: ['Runs once at startup for initialization', 'Runs continuously in a loop', 'Ends the program', 'Sets up network connection'], correct: 0, explanation: 'setup() runs once when the Arduino starts, used for initializing pins, serial communication, and setting initial values.' },
    { question: 'What is a GPIO pin?', options: ['General Purpose Input/Output pin for digital read/write', 'A power pin', 'A communication protocol', 'A sensor type'], correct: 0, explanation: 'GPIO pins can be configured as input (read sensor) or output (control LED/motor). They work with digital signals (HIGH/LOW, 5V/0V on Uno).' }
  ],
  'iot-cloud': [
    { question: 'What is cloud integration in IoT?', options: ['Connecting IoT devices to cloud platforms for storage, processing, and management', 'Local device control', 'Manual data collection', 'Device manufacturing'], correct: 0, explanation: 'Cloud integration connects IoT devices to cloud platforms (AWS IoT, Azure IoT, Google Cloud IoT) for data storage, processing, analytics, and remote device management.' },
    { question: 'What is AWS IoT Core?', options: ['A database service', 'A managed cloud platform for connecting IoT devices securely', 'A compute service', 'A storage service'], correct: 1, explanation: 'AWS IoT Core is a managed cloud service that lets connected devices interact with AWS applications and other devices securely via MQTT, HTTP, or LoRaWAN.' },
    { question: 'What is the purpose of device shadow/twin?', options: ['A virtual representation of a physical device in the cloud', 'Device login credentials', 'Device firmware', 'Device configuration file'], correct: 0, explanation: 'Device Shadow (AWS) / Digital Twin (Azure) is a JSON document that stores device state in the cloud, enabling communication with applications even when devices are offline.' },
    { question: 'What is an IoT dashboard?', options: ['A UI for visualizing IoT data and controlling devices', 'A physical control panel', 'A database', 'A network router'], correct: 0, explanation: 'An IoT dashboard displays real-time sensor data, historical trends, device status, and provides controls for actuators. Built with tools like Grafana, Node-RED, or custom web apps.' },
    { question: 'What is the role of cloud analytics in IoT?', options: ['Processing and analyzing IoT data for insights and predictions', 'Storing raw data only', 'Device manufacturing', 'Network routing'], correct: 0, explanation: 'Cloud analytics processes large volumes of IoT data using machine learning and statistical models to detect anomalies, predict failures, and generate actionable insights.' }
  ],
  'iot-projects': [
    { question: 'What is a smart agriculture IoT application?', options: ['Using sensors to monitor soil moisture, temperature, and automate irrigation', 'Playing music in fields', 'Building farm websites', 'Creating agricultural databases'], correct: 0, explanation: 'Smart agriculture uses soil moisture sensors, temperature/humidity sensors, and automated irrigation systems to optimize water usage and crop yield.' },
    { question: 'What is a smart city IoT application?', options: ['Using IoT for traffic management, waste collection, and smart lighting', 'Building websites for cities', 'Creating city databases', 'City planning software'], correct: 0, explanation: 'Smart city IoT includes: smart traffic lights (adaptive to congestion), smart waste bins (fill-level monitoring), smart lighting (adaptive brightness), and air quality monitoring.' },
    { question: 'What is industrial IoT (IIoT)?', options: ['IoT for social media', 'IoT applications in manufacturing and industrial environments', 'IoT for gaming', 'IoT for entertainment'], correct: 1, explanation: 'IIoT applies IoT technology to industrial sectors: predictive maintenance, asset tracking, process automation, and quality control in manufacturing, oil & gas, and utilities.' },
    { question: 'What is a smart home IoT device example?', options: ['Smart thermostat that learns temperature preferences and adjusts automatically', 'A regular light bulb', 'A door', 'A window'], correct: 0, explanation: 'Smart home devices include: smart thermostats (Nest, Ecobee), smart lights (Philips Hue), smart locks, smart speakers, and connected appliances that can be controlled remotely.' },
    { question: 'What is predictive maintenance in IoT?', options: ['Scheduled maintenance', 'Using sensor data to predict equipment failures before they occur', 'Reactive maintenance after failure', 'Visual inspection'], correct: 1, explanation: 'Predictive maintenance uses IoT sensor data (vibration, temperature, current) with ML models to predict when equipment will fail, enabling maintenance just in time.' }
  ],

  // ===== LINUX =====
  'linux-filesystem': [
    { question: 'What is the root directory in Linux?', options: ['C:\\', '/ (forward slash)', '\\', '~'], correct: 1, explanation: 'The root directory is "/". All files and directories in Linux start from this root, forming a hierarchical tree structure.' },
    { question: 'What is the /etc directory used for?', options: ['Executable binaries', 'System configuration files', 'User home directories', 'Temporary files'], correct: 1, explanation: '/etc contains system-wide configuration files (e.g., /etc/passwd for users, /etc/ssh/sshd_config for SSH, /etc/hostname).' },
    { question: 'What is the /var directory used for?', options: ['Variable data like logs (/var/log), databases, and temporary spool files', 'System binaries', 'User files', 'Configuration files'], correct: 0, explanation: '/var holds variable data that changes in size: log files (/var/log), databases (/var/lib), print spools (/var/spool), and temporary files (/var/tmp).' },
    { question: 'What is the difference between absolute and relative paths?', options: ['Absolute starts from / (root), relative starts from current directory', 'Relative starts from /, absolute from current directory', 'Same thing', 'Absolute uses ~, relative uses .'], correct: 0, explanation: 'Absolute paths start from root (/home/user/file.txt). Relative paths start from current directory (../docs/file.txt). } ],' },
    { question: 'What is /home directory used for?', options: ['System binaries', 'User home directories (one per user: /home/username)', 'Configuration files', 'Device files'], correct: 1, explanation: '/home contains personal directories for each user, where they store files, configs, and personal data. Root\'s home is /root.' }
  ],
  'linux-permissions': [
    { question: 'What do file permissions rwx mean?', options: ['Read, Write, Execute', 'Run, Write, eXecute', 'Read, Work, eXit', 'Random, Write, Xfer'], correct: 0, explanation: 'r=read (view content), w=write (modify), x=execute (run as program). Permissions are set for owner/group/others.' },
    { question: 'What does chmod 755 do?', options: ['Read-only for all', 'Owner: rwx (7), Group: r-x (5), Others: r-x (5)', 'Full access for everyone', 'Removes all permissions'], correct: 1, explanation: '755 = owner can read/write/execute, group and others can read/execute. Common for scripts and directories. r=4, w=2, x=1, so 7=rwx, 5=r-x.' },
    { question: 'What is the root user?', options: ['Regular user', 'Superuser with UID 0 and full system access', 'A system service account', 'A guest account'], correct: 1, explanation: 'root (UID 0) is the superuser with unrestricted access to all system resources, files, and commands. Use sudo for temporary root access.' },
    { question: 'What does chown do?', options: ['Changes file permissions', 'Changes file owner and group', 'Changes file content', 'Changes file name'], correct: 1, explanation: 'chown (change owner) changes the user and/or group ownership of files/directories (e.g., chown user:group file).' },
    { question: 'What is the SUID permission bit?', options: ['Allows a file to run with the owner\'s permissions, not the executor\'s', 'Gives superuser status', 'Deletes files', 'Sets debug mode'], correct: 0, explanation: 'SUID (Set User ID) allows users to run an executable with the permissions of the file owner (e.g., /usr/bin/passwd runs as root).' }
  ],
  'linux-processes': [
    { question: 'Which command lists running processes?', options: ['ls', 'ps', 'dir', 'list'], correct: 1, explanation: 'ps (process status) displays running processes. Common options: ps aux (all users, detailed), ps -ef (full format listing).' },
    { question: 'What command forcefully terminates a process?', options: ['kill PID', 'kill -9 PID', 'stop PID', 'end PID'], correct: 1, explanation: 'kill -9 (SIGKILL) forcefully terminates a process that cannot be caught or ignored. kill (SIGTERM) requests graceful termination.' },
    { question: 'What is a daemon process?', options: ['A user application', 'A background service that runs continuously', 'A shell script', 'A terminal emulator'], correct: 1, explanation: 'Daemons are background processes that run continuously, providing services (e.g., sshd for SSH, httpd for Apache, systemd-journald for logging). Names typically end with "d".' },
    { question: 'What does the top command show?', options: ['File system usage', 'Real-time processes and system resource usage', 'Network connections', 'User login history'], correct: 1, explanation: 'top displays real-time view of running processes, CPU/memory usage, and system load. Press h for help, q to quit.' },
    { question: 'What is systemd?', options: ['A system logger', 'A web server', 'The init system and service manager for Linux', 'A file system type'], correct: 2, explanation: 'systemd is the modern init system and service manager for Linux. It manages services, processes, and system state using systemctl commands.' }
  ],
  'linux-networking': [
    { question: 'Which command tests network connectivity?', options: ['ping', 'ls', 'cd', 'cat'], correct: 0, explanation: 'ping sends ICMP echo requests to test if a host is reachable and measures round-trip time.' },
    { question: 'Which command shows network connections and listening ports?', options: ['netstat or ss', 'ping', 'traceroute', 'ifconfig'], correct: 0, explanation: 'netstat (or ss) displays network connections, routing tables, interface statistics, and listening ports. netstat -tuln shows listening TCP/UDP ports.' },
    { question: 'What is SSH used for?', options: ['Secure remote shell access to systems', 'File transfer only', 'Web browsing', 'Email protocol'], correct: 0, explanation: 'SSH (Secure Shell) provides encrypted remote terminal access and secure file transfer (SFTP/SCP) over port 22.' },
    { question: 'What does ifconfig (or ip addr) show?', options: ['Running processes', 'Network interface configuration (IP, MAC, status)', 'Disk usage', 'User accounts'], correct: 1, explanation: 'ifconfig (deprecated) or ip addr show displays network interfaces, IP addresses, MAC addresses, and interface status (up/down).' },
    { question: 'What is a firewall in Linux?', options: ['A hardware device', 'Software that controls incoming/outgoing network traffic based on rules', 'A network protocol', 'A file system'], correct: 1, explanation: 'Linux firewalls (iptables/nftables) filter network packets based on rules. ufw (Uncomplicated Firewall) provides a simpler interface for managing rules.' }
  ],
  'linux-deployment': [
    { question: 'What is a web server in Linux?', options: ['Software that serves web pages (Apache, Nginx)', 'A physical server', 'A database', 'A programming language'], correct: 0, explanation: 'Web servers (Apache HTTP Server, Nginx) handle HTTP requests and serve web content. Commonly deployed on Linux for hosting web applications.' },
    { question: 'How do you deploy a Spring Boot app on Linux?', options: ['Build JAR with Maven/Gradle, run with java -jar app.jar, configure as systemd service', 'Copy source code and compile', 'Use Windows only', 'Use a web browser'], correct: 0, explanation: 'Deployment: mvn package → copy JAR to server → java -jar app.jar (or systemctl service). Use application-prod.properties for production config.' },
    { question: 'What is Docker and why is it used for deployment?', options: ['A containerization platform for consistent deployments across environments', 'A text editor', 'A database', 'A debugger'], correct: 0, explanation: 'Docker packages applications with dependencies into containers, ensuring consistent behavior across development, testing, and production environments.' },
    { question: 'What is a reverse proxy?', options: ['A server that forwards client requests to backend servers (Nginx used as reverse proxy)', 'A database proxy', 'A mail server', 'A DNS server'], correct: 0, explanation: 'A reverse proxy (Nginx, HAProxy) sits between clients and backend servers, handling SSL termination, load balancing, and caching.' },
    { question: 'What is CI/CD?', options: ['Continuous Integration/Continuous Deployment - automated building, testing, and deployment pipeline', 'Code Integration/Code Development', 'Computer Interface/Computer Design', 'Cloud Infrastructure/Cloud Development'], correct: 0, explanation: 'CI/CD automates the software delivery pipeline: CI builds and tests code changes automatically. CD automatically deploys to production after passing tests.' }
  ],

  // ===== GIT =====
  'git-basics': [
    { question: 'What is a Git repository?', options: ['A database', 'A directory tracked by Git, containing project files and history', 'A text file', 'A server'], correct: 1, explanation: 'A Git repository is a directory that Git tracks, containing all project files and the entire version history stored in the .git folder.' },
    { question: 'What does git init do?', options: ['Downloads a repository', 'Initializes a new Git repository in the current directory', 'Deletes a repository', 'Merges branches'], correct: 1, explanation: 'git init creates a new .git subdirectory, initializing a Git repository in the current folder for version control.' },
    { question: 'What is a commit in Git?', options: ['A file backup', 'A snapshot of changes at a point in time with a message', 'A branch pointer', 'A remote repository'], correct: 1, explanation: 'A commit is a snapshot of the project\'s staged changes, saved with a unique hash, author info, and descriptive message.' },
    { question: 'What does the git add command do?', options: ['Commits changes', 'Stages changes for the next commit', 'Deletes files', 'Creates branches'], correct: 1, explanation: 'git add moves changes from the working directory to the staging area, preparing them for the next commit.' },
    { question: 'How do you check which files have been changed?', options: ['git commit', 'git log', 'git status', 'git diff'], correct: 2, explanation: 'git status shows the current state: staged changes, unstaged changes, and untracked files. git diff shows the actual line-by-line changes.' }
  ],
  'git-collaboration': [
    { question: 'What is a remote repository in Git?', options: ['A local backup', 'A repository hosted on a server for collaboration', 'A deleted repository', 'A temporary file'], correct: 1, explanation: 'A remote repository is hosted on a server (GitHub, GitLab, Bitbucket), enabling team collaboration, code review, and backup.' },
    { question: 'How do you push local commits to a remote repository?', options: ['git push', 'git pull', 'git commit', 'git fetch'], correct: 0, explanation: 'git push uploads local commits to the remote repository. git push -u origin main sets the upstream and pushes.' },
    { question: 'What is a Pull Request?', options: ['Request to view files', 'Request to merge changes from one branch to another via code review', 'Request to delete repository', 'Request to clone'], correct: 1, explanation: 'A Pull Request (PR) proposes merging changes from one branch to another, enabling code review, discussion, and automated checks before merging.' },
    { question: 'How do you update your local branch with remote changes?', options: ['git push', 'git pull (fetch + merge)', 'git commit', 'git branch'], correct: 1, explanation: 'git pull downloads remote changes and merges them into your current branch. git pull = git fetch + git merge.' },
    { question: 'What is the GitHub Flow workflow?', options: ['Main branch → feature branch → PR → merge', 'Direct commits to main', 'No branching', 'Email-based code review'], correct: 0, explanation: 'GitHub Flow: create feature branch from main, make changes, open PR, discuss/review, merge PR, delete feature branch.' }
  ],
  'git-advanced': [
    { question: 'What does git rebase do?', options: ['Deletes commits', 'Reapplies commits on top of another branch for a linear history', 'Merges all branches', 'Creates a backup'], correct: 1, explanation: 'git rebase moves commits to a new base, creating a linear commit history. Unlike merge, it doesn\'t create a merge commit.' },
    { question: 'What is git stash used for?', options: ['Permanently delete changes', 'Temporarily save uncommitted changes to work on something else', 'Create a new branch', 'Push to remote'], correct: 1, explanation: 'git stash temporarily saves modified tracked files and staged changes, letting you switch branches. Apply them back with git stash pop or git stash apply.' },
    { question: 'What is git bisect?', options: ['Splits branches', 'Binary search through commits to find the commit that introduced a bug', 'Divides repository', 'Splits files'], correct: 1, explanation: 'git bisect binary-searches through commit history to find which commit introduced a bug. Mark commits as good/bad until Git identifies the culprit.' },
    { question: 'What is a Git hook?', options: ['A fishing tool', 'A script that automatically runs at certain Git events (pre-commit, pre-push)', 'A branch type', 'A remote server'], correct: 1, explanation: 'Git hooks are scripts in .git/hooks/ that run automatically on Git events: pre-commit (lint before commit), pre-push (test before push), post-commit, etc.' },
    { question: 'What is the difference between git reset and git revert?', options: ['Same thing', 'reset moves branch pointer (rewrites history), revert creates new commit that undoes changes (safe for public branches)', 'revert rewrites history, reset is safe', 'reset commits, revert deletes'], correct: 1, explanation: 'git reset moves the branch pointer back (rewrites history - DANGEROUS for shared branches). git revert creates a new commit that undoes changes - safe for public branches.' }
  ]
};
