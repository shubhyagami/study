# Study

> A lightweight, browser‑only React note‑taking and flashcard app that works offline.

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js 18+](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React 18+](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite 6+](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![Lint: ESLint](https://img.shields.io/badge/ESLint-7.x-4B32C3?style=flat-square&logo=eslint)

> **All data lives in the browser (`localStorage`).** No back‑end server is required, so you can start studying immediately on any modern device.

---

## Table of contents

- [Getting started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Project structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Getting started

```bash
# 1️⃣ Clone the repository
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the dev server
npm run dev
```

Open <http://localhost:5173> in your browser. No additional configuration is required – the app is ready to use.

---

## Features

| Feature              | Description |
|----------------------|-------------|
| **Notes**            | Create, edit, delete, and tag notes by subject. |
| **Flashcards**       | Turn any note into a flashcard deck for active recall. |
| **Revision tracker** | Assign mastery levels and receive suggested review times. |
| **Offline‑first**    | All data is stored client‑side (`localStorage`), so you can work anywhere. |
| **Fast dev workflow**| Hot‑reloading powered by Vite. |

---

## Project structure

```
study/
├─ public/          # Static assets
├─ src/
│  ├─ assets/       # Images / icons
│  ├─ components/   # UI components
│  ├─ hooks/        # Reusable hooks
│  ├─ pages/        # Page components
│  ├─ utils/        # Helper functions
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

1. Fork the repo and create a feature branch (`git checkout -b feat/your-feature`).  
2. Follow the [Conventional Commits](https://www.conventionalcommits.org/) style.  
3. Test locally (`npm run dev`) and lint (`npm run lint`).  
4. Open a pull request with a clear title and description, and reference any related issue.

Feel free to pick an issue from the “good first issue” label before starting.

---

## Changelog

- **2026‑08‑19** – Updated the README and clarified the contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
