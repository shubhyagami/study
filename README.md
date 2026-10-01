[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# Study

A lightweight, browser‑only React app for taking notes and building flashcard decks.  
All data lives in the browser’s `localStorage`, so you can use it offline and keep your information private.

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js 18.x](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React 18.x](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite 6.x](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![ESLint 7.x](https://img.shields.io/badge/ESLint-7.x-4B32C3?style=flat-square&logo=eslint)  
![Prettier](https://img.shields.io/badge/Prettier-1.x-ff69b4?style=flat-square&logo=prettier)  
![Vitest](https://img.shields.io/badge/Vitest-1.x-222?style=flat-square&logo=vitest)

---

## Quick start

```bash
git clone https://github.com/shubhyagami/study.git
cd study
npm install
npm run dev
```

Open <http://localhost:5173> to see the app.

---

## Table of contents

- [Features](#features)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Features

| Feature | Description |
|---------|-------------|
| **Note management** | Create, edit, and delete notes; tag them by subject. |
| **Active recall** | Generate a flashcard deck from any note in seconds. |
| **Revision tracking** | Assign mastery levels to cards and let the app suggest the next review date. |
| **Offline‑first** | No server, no database – everything persists in `localStorage`. |
| **Responsive UI** | Clean design built with reusable components and custom hooks. |

---

## Getting started

### Prerequisites

- Node.js 18.x or newer
- npm (comes with Node)

### Installation & development

```bash
# Clone the repository
git clone https://github.com/shubhyagami/study.git
cd study

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at <http://localhost:5173>.

### Build for production

```bash
npm run build
```

The compiled files are placed in the `dist/` folder.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite with hot‑module replacement. |
| `npm run build` | Build the project for production. |
| `npm run lint` | Run ESLint checks. |
| `npm run format` | Format the codebase with Prettier. |
| `npm run test` | Run all Vitest tests. |
| `npm run test:watch` | Run tests in watch mode. |

---

## Project structure

```
study/
├─ public/          # Static assets
├─ src/
│  ├─ assets/        # Images & icons
│  ├─ components/    # Reusable UI components
│  ├─ hooks/         # Custom React hooks
│  ├─ pages/         # Page‑level components (Notes, Flashcards, Settings)
│  ├─ utils/         # Helper functions & logic
│  ├─ App.jsx         # Root component
│  └─ main.jsx        # Entry point
├─ index.html
└─ vite.config.js
```

---

## Testing

The project uses **Vitest** for unit and snapshot tests.

```bash
# Run all tests once
npm run test

# Watch tests for changes
npm run test:watch
```

Test files are located in `src/__tests__/`.

---

## Contributing

1. Fork the repo and create a feature branch

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Follow the [Conventional Commits](https://www.conventionalcommits.org/) style for commits.  
3. Run the linter to ensure quality

   ```bash
   npm run lint
   ```

4. Submit a pull request with a clear description and any related issue references.

If you’re new, check out issues tagged `good-first-issue`.

---

## Changelog

- **2026‑09‑27** – Updated README, added quick‑start guide and badges.  
- **2026‑09‑25** – Tidied README for clarity.  
- **2026‑08‑19** – Updated contribution guidelines.  
- **2026‑08‑05** – Added flashcard revision tracking and localStorage persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
