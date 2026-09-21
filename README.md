# Study

*A lightweight, browser‑only React app for taking notes and creating flashcard decks that works offline.*

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js 18+](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React 18+](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite 6+](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![Lint: ESLint](https://img.shields.io/badge/ESLint-7.x-4B32C3?style=flat-square&logo=eslint)

All data lives in the browser’s `localStorage`, so no backend is required. Start studying immediately on any modern device.

---

## Table of contents

- [Getting started](#getting-started)
- [Features](#features)
- [Project structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Getting started

**Prerequisites**

- Node.js 18 or newer

```bash
# 1️⃣ Clone the repository
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the development server
npm run dev
```

Open <http://localhost:5173> to see the app in action. You can immediately start adding notes, tagging subjects, and creating flashcard decks.

---

## Features

| Feature | Description |
|---------|--------------|
| **Notes** | Create, edit, delete, and tag notes by subject. |
| **Flashcards** | Turn any note into an active‑recall flashcard deck. |
| **Revision tracker** | Assign mastery levels and receive suggested review dates. |
| **Offline‑first** | Everything is stored locally in `localStorage`; no internet is required. |
| **Fast dev workflow** | Hot‑reload powered by Vite. |
| **Clean UI** | Reusable components, custom hooks and responsive design. |

---

## Project structure

```
study/
├─ public/          # Static assets (favicon, etc.)
├─ src/
│  ├─ assets/          # Images / icons
│  ├─ components/      # Reusable UI components
│  ├─ hooks/           # Custom React hooks
│  ├─ pages/           # Top‑level pages (Notes, Flashcards, Settings)
│  ├─ utils/           # Utility functions
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
└─ vite.config.js
```

---

## Development

| Command | Purpose |
|---------|---------|
| `npm run dev`  | Start Vite dev server with hot‑reload |
| `npm run build` | Build a production bundle into `dist/` |
| `npm run lint`  | Run ESLint with the project’s rules |
| `npm run format` | Format code with Prettier |

---

## Testing

The project uses [Vitest](https://vitest.dev/) for unit and snapshot testing.

```bash
npm run test
```

All tests are located under `src/__tests__`. Run in watch mode with `npm run test:watch`.

---

## Contributing

1. Fork the repo and create a feature branch (`git checkout -b feat/your-feature`).  
2. Follow the [Conventional Commits](https://www.conventionalcommits.org/) style.  
3. Run the app locally (`npm run dev`) and lint (`npm run lint`).  
4. Submit a pull request with a clear title, description, and reference to any related issue.

Feel free to pick an issue marked “good first issue” or reach out if you need help.

---

## Changelog

- **2026‑08‑19** – Updated README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
