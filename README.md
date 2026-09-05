# Study

![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)

> **Study** – A lightweight, browser‑only React application for note taking, flashcard creation, and revision tracking. All data is stored in `localStorage`; no backend is required.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Development](#development)
5. [Contributing](#contributing)
6. [Changelog](#changelog)
7. [License](#license)

---

## Prerequisites

* Node.js **18 +** (recommended: use NVM – `nvm use` before installing dependencies).

---

## Getting Started

```bash
# 1️⃣ Clone the repository
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Launch the development server
npm run dev

# 4️⃣ Open http://localhost:5173 in your browser
```

The app is fully functional in the browser; no additional configuration is needed.

---

## Features

| Feature | Description |
|--------|---------------|
| **Note Management** | Create, edit, delete, and tag notes by subject. |
| **Flashcard Generation** | Convert any note into a flashcard deck for active recall. |
| **Revision Tracking** | Dashboard displaying mastery levels and recommended review schedules. |
| **Local Persistence** | All notes, tags, decks, and progress are stored in `localStorage`. |
| **Fast Development** | Hot‑reloading via Vite. |

---

## Development

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the Vite dev server (hot reload). |
| `npm run build` | Build a production bundle in `dist/`. |
| `npm run lint` | Run ESLint to enforce code style. |

---

## Contributing

1. Fork the repo and create a feature branch, e.g. `git checkout -b feat/your-feature`.  
2. Keep commits focused; consider using Conventional Commits.  
3. Run `npm run dev` to verify the app locally.  
4. Run `npm run lint` to ensure style compliance.  
5. Open a pull request with a concise description and reference any related issue.

Check existing issues before starting new work to avoid duplication.

---

## Changelog

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
