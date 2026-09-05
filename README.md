# Study

![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)

**Study** is a lightweight, browser‑only React app for taking notes, creating flashcard decks, and tracking revision progress. All data lives in `localStorage`, so no backend is required.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Features](#features)
- [Development](#development)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Prerequisites

- Node.js **18+** (recommended: use NVM – `nvm use` before installing dependencies)

---

## Getting Started

```bash
# 1️⃣ Clone the repo
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the dev server
npm run dev

# 4️⃣ Open http://localhost:5173 in your browser
```

The app works out of the box. No additional configuration is needed.

---

## Features

| Feature | What you can do |
|---|---|
| **Note Management** | Create, edit, delete, and tag notes by subject |
| **Flashcard Decks** | Convert any note into a deck for active recall |
| **Revision Dashboard** | View mastery levels and suggested review schedules |
| **Local Persistence** | All data is stored in `localStorage` |
| **Fast Development** | Hot‑reloading via Vite |

---

## Development

| Command | Purpose |
|--------|---------|
| `npm run dev` | Start Vite dev server (hot reload) |
| `npm run build` | Build a production bundle in `dist/` |
| `npm run lint` | Run ESLint for style consistency |

---

## Contributing

1. Fork the repo and create a feature branch (`git checkout -b feat/your-feature`).  
2. Keep commits focused and follow Conventional Commit conventions.  
3. Run `npm run dev` to test locally.  
4. Run `npm run lint` to ensure style compliance.  
5. Open a pull request with a concise description and reference any related issue.

Always check existing issues before starting new work.

---

## Changelog

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file.
