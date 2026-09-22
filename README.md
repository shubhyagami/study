# Study

*A lightweight, browser‑only React app for taking notes and creating flashcard decks that works offline.*

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js 18.x](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React 18.x](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite 6.x](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![ESLint](https://img.shields.io/badge/ESLint-7.x-4B32C3?style=flat-square&logo=eslint)

Study stores everything in the browser’s `localStorage`, so you can start studying instantly on any modern device—no server or external database required.

---

## Table of contents

- [Getting started](#getting-started)
- [Features](#features)
- [Architecture](#architecture)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Getting started

### Prerequisites

- Node.js 18 or newer

```bash
# 1️⃣ Clone the repository
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the dev server
npm run dev
```

Open <http://localhost:5173> to see the app. You can immediately add notes, tag them by subject, and create flashcard decks.

---

## Features

| ✔️ | Feature | What it does |
|----|---------|--------------|
| | **Notes** | Create, edit, delete, and tag notes by subject. |
| | **Flashcards** | Convert any note into an active‑recall deck. |
| | **Revision tracker** | Assign mastery levels and get suggested review dates. |
| | **Offline‑first** | All data is stored locally; no internet required. |
| | **Fast dev workflow** | Hot‑reload powered by Vite. |
| | **Clean UI** | Reusable components, custom hooks, and responsive design. |

---

## Architecture

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

The app is a single‑page React application bootstrapped with Vite, using standard conventions for component organization and state management.

---

## Development

| npm script | Purpose |
|------------|---------|
| `npm run dev` | Start Vite dev server with hot‑reload |
| `npm run build` | Build a production bundle into `dist/` |
| `npm run lint` | Run ESLint with the project’s rules |
| `npm run format` | Format code with Prettier |

---

## Testing

Vitest powers unit and snapshot tests.

```bash
npm run test
```

Tests live under `src/__tests__`. Run in watch mode with `npm run test:watch`.

---

## Contributing

1. Fork the repository and create a branch (`git checkout -b feat/your-feature`).  
2. Follow the [Conventional Commits](https://www.conventionalcommits.org/) style.  
3. Run the app locally (`npm run dev`) and lint (`npm run lint`).  
4. Submit a pull request with a clear title, description, and reference to any related issue.

Feel free to pick an issue labeled “good‑first‑issue” or reach out if you need help.

---

## Changelog

- **2026‑08‑19** – Updated README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
