# Node.js Complete Learning Roadmap

A structured roadmap covering everything you need to learn Node.js from scratch to production-ready development.

---

## 1. Prerequisites

- HTML, CSS basics
- JavaScript fundamentals (ES6+)
  - Variables, Data Types, Operators
  - Functions, Arrow Functions
  - Arrays, Objects
  - Destructuring, Spread/Rest
  - Promises, Async/Await
  - Modules (import/export)

---

## 2. Getting Started with Node.js

- What is Node.js and how it works
- Node.js vs Browser JavaScript
- Installing Node.js and npm
- Running your first Node.js script
- Node.js REPL
- The `node` and `npm` CLI

---

## 3. Core Concepts

- The V8 Engine
- Event Loop — how it works
- Single-threaded, non-blocking I/O
- Call Stack, Callback Queue, Microtask Queue
- Libuv and the Thread Pool
- Blocking vs Non-blocking code

---

## 4. Node.js Built-in Modules

- `fs` — File System (read, write, delete files)
- `path` — Working with file paths
- `os` — Operating system info
- `http` / `https` — Creating HTTP servers
- `url` — URL parsing
- `events` — EventEmitter
- `stream` — Readable, Writable, Duplex, Transform streams
- `buffer` — Binary data handling
- `crypto` — Hashing and encryption basics
- `child_process` — Running shell commands
- `cluster` — Multi-core usage
- `worker_threads` — Running parallel tasks

---

## 5. npm & Package Management

- What is npm / yarn / pnpm
- `package.json` and `package-lock.json`
- Installing, updating, removing packages
- Local vs global packages
- `devDependencies` vs `dependencies`
- npm scripts
- Semantic versioning (semver)
- Creating and publishing your own npm package

---

## 6. Asynchronous Node.js

- Callbacks and callback hell
- Promises
- Async / Await
- Error handling in async code
- `util.promisify`
- Event-driven programming with EventEmitter

---

## 7. Express.js

- What is Express and why use it
- Setting up an Express server
- Routing — GET, POST, PUT, DELETE
- Route parameters and query strings
- Middleware — built-in, third-party, custom
- Request and Response objects
- Error handling middleware
- Serving static files
- Template engines (EJS / Pug basics)

---

## 8. REST API Development

- REST principles
- Designing RESTful routes
- CRUD operations
- HTTP status codes
- Request body parsing (`express.json()`)
- Postman / Thunder Client for testing APIs

---

## 9. Working with Databases

### SQL
- Using PostgreSQL or MySQL with Node.js
- `pg` / `mysql2` packages
- Raw queries and parameterized queries
- Connection pooling

### NoSQL
- MongoDB basics
- Mongoose — Schema, Model, CRUD
- Mongoose validation and middleware

### ORM / ODM
- Prisma (SQL)
- Sequelize (SQL)
- Mongoose (MongoDB)

---

## 10. Authentication & Authorization

- Sessions and Cookies
- JWT (JSON Web Tokens) — sign, verify, refresh
- `bcrypt` for password hashing
- OAuth basics (Google, GitHub login)
- Passport.js
- Role-based access control (RBAC)

---

## 11. File Handling & Uploads

- Reading and writing files with `fs`
- Uploading files with `multer`
- Storing files on disk vs cloud (Cloudinary, AWS S3)
- Streaming large files

---

## 12. Environment & Configuration

- `.env` files with `dotenv`
- `NODE_ENV` — development vs production
- Config management patterns
- Secrets management basics

---

## 13. Error Handling

- Try/catch in async code
- Global error handling middleware in Express
- Operational errors vs programmer errors
- Custom error classes
- Logging errors properly

---

## 14. Validation

- Manual validation
- `Joi` for schema validation
- `express-validator`
- Sanitizing user input

---

## 15. Testing

- Unit testing with Jest / Mocha
- Integration testing
- Supertest for HTTP endpoint testing
- Test-driven development (TDD) basics
- Mocking modules and functions

---

## 16. Real-time Communication

- WebSockets overview
- Socket.io — rooms, namespaces, events
- Server-Sent Events (SSE)

---

## 17. Caching

- Why caching matters
- In-memory caching
- Redis basics
- Caching API responses with Redis
- Cache invalidation strategies

---

## 18. Security

- Helmet.js — securing HTTP headers
- CORS — Cross-Origin Resource Sharing
- Rate limiting (`express-rate-limit`)
- SQL injection prevention
- XSS and CSRF protection
- Input sanitization

---

## 19. Performance & Scalability

- Profiling Node.js apps
- Using the Cluster module
- Load balancing basics
- Worker Threads for CPU-heavy tasks
- Streams for large data
- PM2 — process manager

---

## 20. Logging & Monitoring

- `console` vs proper logging
- Winston logger
- Morgan HTTP logger
- Log levels (error, warn, info, debug)
- Application monitoring basics

---

## 21. Deployment

- Preparing app for production
- Environment variables in production
- Deploying to a VPS (DigitalOcean, AWS EC2)
- Deploying to platforms (Render, Railway, Heroku)
- Nginx as a reverse proxy
- SSL / HTTPS setup
- PM2 for process management

---

## 22. Containerization (Intro)

- What is Docker
- Writing a `Dockerfile` for a Node.js app
- Docker Compose for multi-service apps (Node + MongoDB + Redis)

---

## 23. Advanced Topics

- Design patterns in Node.js (MVC, Repository, Factory)
- Microservices architecture basics
- Message queues (RabbitMQ / BullMQ)
- GraphQL with Node.js
- gRPC basics
- Serverless Functions (AWS Lambda, Vercel Edge)

---

## Learning Order Recommendation

```
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22 → 23
```

> Start with one project after completing sections 1–8, then keep building as you learn more.

---

## Recommended Resources

- [Node.js Official Docs](https://nodejs.org/en/docs)
- [Express.js Official Docs](https://expressjs.com/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Prisma Docs](https://www.prisma.io/docs)

---

*Happy Coding! 🚀*
