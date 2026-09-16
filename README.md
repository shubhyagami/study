# Study

> A lightweight, browser‑only React note‑taking and flashcard app that works offline.

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node.js 18+](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)
![React 18+](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Vite 6+](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![Lint: ESLint](https://img.shields.io/badge/ESLint-7.x-4B32C3?style=flat-square&logo=eslint)

All data is stored in the browser’s `localStorage`. No backend server is required, so you can start studying immediately on any modern device.

---

## Table of contents

- [Getting started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [Project structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Getting started

```bash
# 1️⃣ Clone the repo
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the dev server
npm run dev
```

Open <http://localhost:5173> in your browser. The app is ready to use right away.

---

## Features

| Feature              | What it does |
|----------------------|-------------|
| **Notes** | Create, edit, delete, and tag notes by subject. |
| **Flashcards** | Convert any note into a flashcard deck for active recall. |
| **Revision tracker** | Assign mastery levels and get suggested review dates. |
| **Offline‑first** | All data lives client‑side (`localStorage`), so you can work anywhere. |
| **Fast dev workflow** | Hot‑reload powered by Vite. |

---

## Project structure

```
study/
├─ public/          # Static assets
├─ src/
│  ├─ assets/       # Images / icons
│  ├─ components/   # Reusable UI components
│  ├─ hooks/        # Custom React hooks
│  ├─ pages/        # Top‑level pages
│  ├─ utils/        # Utility functions
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
└─ vite.config.js
```

---

## Development

| Command | Purpose |
|---------|---------|
| `npm run dev`  | Start the Vite dev server with hot‑reload |
| `npm run build`| Build a production bundle into `dist/` |
| `npm run lint` | Run ESLint with the project’s rules |

---

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feat/your-feature`).  
2. Follow the [Conventional Commits](https://www.conventionalcommits.org/) style.  
3. Test locally (`npm run dev`) and lint (`npm run lint`).  
4. Submit a pull request with a clear title and description, and reference any related issue.

Feel free to pick an issue labeled “good first issue”.

---

## Changelog

- **2026‑08‑19** – Updated the README and clarified the contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
