# Study

![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)

**Study** is a lightweight, browser‑only React app that lets you take notes, build flashcard decks, and track revision progress. All data is stored in `localStorage`, so the app works offline and requires no backend.

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

- Node.js **18.x** or newer (recommended: manage with NVM – `nvm use`)

---

## Getting Started

```bash
# 1️⃣ Clone the repository
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Launch the dev server
npm run dev

# 4️⃣ Open http://localhost:5173 in your browser
```

The application starts immediately – no further configuration is required.

---

## Features

| Feature           | What you can do |
|--------------------|-----------------|
| **Notes**          | Create, edit, delete, and tag notes by subject |
| **Flashcards**    | Convert any note into a deck for active recall |
| **Revision Tracker** | View mastery levels and receive suggested review schedules |
| **Offline‑first** | All data persisted in `localStorage` |
| **Fast dev workflow** | Hot‑reloading powered by Vite |

---

## Development

| Command       | Purpose                                |
|---------------|----------------------------------------|
| `npm run dev` | Start the Vite dev server (hot‑reload) |
| `npm run build` | Build a production bundle in `dist/` |
| `npm run lint` | Run ESLint with the project’s rules   |

---

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feat/your-feature`).  
2. Commit with focused messages that follow the Conventional Commit style.  
3. Test locally with `npm run dev` and run `npm run lint` before committing.  
4. Submit a pull request with a clear title and description; reference any related issue.  

Check the open issues before starting new work.

---

## Changelog

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.  

---

## License

MIT – see the [LICENSE](LICENSE) file.
