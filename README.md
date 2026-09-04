# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)  
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> **Study** is a lightweight, client‑side React + Vite application that lets you create, edit, and tag notes, transform them into flashcard decks, and track revision progress—all using `localStorage`.  
> The entire app runs in your browser; no server‑side code is required.

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

> **Tip**: The project targets **Node 18+**. If you use NVM, run `nvm use` before installing dependencies.

---

## Features

- **Note management** – Create, edit, delete, and tag notes by subject.  
- **Flashcard generation** – Convert any note into a flashcard deck suitable for active recall.  
- **Progress tracking** – Visual dashboards of mastery levels and review schedules.  
- **Local persistence** – All data lives in `localStorage`; no external services required.  
- **Fast development** – Hot‑reload with Vite.

---

## Development Commands

| Command          | Purpose                                           |
|------------------|---------------------------------------------------|
| `npm run dev`    | Start Vite dev server (hot‑reload).                 |
| `npm run build`  | Build a production bundle in `dist/`.               |
| `npm run lint`   | Run ESLint to enforce style rules.                 |

---

## Contributing

We welcome contributions from anyone.

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`.  
2. Keep commits focused and, if you wish, follow Conventional Commits.  
3. Verify the app works locally (`npm run dev`).  
4. Run the linter (`npm run lint`).  
5. Open a pull request with a clear description and link any related issue.

Check open issues first to avoid duplicate work.

---

## Changelog

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file for details.
