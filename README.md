# Study

> A lightweight, browser‑only React note‑taking and flashcard app that works offline.

![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)

> **All data is stored in `localStorage`.** No server is required, so the app is instantly usable on any device that supports modern browsers.

---

## Table of contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [Features](#features)
- [Project structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Installation

```bash
# 1️⃣ Clone the repo
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the development server
npm run dev
```

Once the server starts, open <http://localhost:5173> in your browser. No further setup is required.

---

## Features

| Feature | What it does |
|---------|--------------|
| **Notes** | Create, edit, delete, and tag notes by subject. |
| **Flashcards** | Convert any note into a flashcard deck for active recall. |
| **Revision tracker** | Track mastery levels and get suggested review schedules. |
| **Offline‑first** | All data lives in the browser (`localStorage`). |
| **Fast dev workflow** | Hot‑reloading powered by Vite. |

---

## Project structure

```
study/
├─ public/          # static assets
├─ src/
│  ├─ assets/      # images / icons
│  ├─ components/ # React components
│  ├─ hooks/       # reusable hooks
│  ├─ pages/        # page components
│  ├─ utils/        # helper functions
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
└─ vite.config.js
```

---

## Development

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (hot‑reload) |
| `npm run build` | Build a production bundle in `dist/` |
| `npm run lint` | Run ESLint with the project’s rules |

---

## Contributing

1. Fork the repo and create a feature branch (`git checkout -b feat/your-feature`).
2. Commit following the [Conventional Commits](https://www.conventionalcommits.org/) style.
3. Test locally (`npm run dev`) and lint (`npm run lint`).
4. Open a pull request with a clear title and description. Reference any related issue.

Feel free to browse the open issues before starting a new feature.

---

## Changelog

- **2026‑08‑19** – Improved README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
