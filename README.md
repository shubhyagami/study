# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)<br>
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)<br>
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)<br>
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> **Study** is a lightweight, client‑side React + Vite application that lets you create, edit, and tag notes; turn those notes into flashcard decks; and track revision progress—all powered by `localStorage`.

> *No server‑side code is required, so the entire app runs in your browser.*

---

## Quickstart

```bash
# 1️⃣ Clone the repo
git clone https://github.com/shubhyagami/study.git && cd study

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the dev server
npm run dev

# 4️⃣ Open http://localhost:5173 in your browser
```

> **Tip**: The project is built with **Node 18+**; if you use NVM, run `nvm use`.

---

## Features

- **Note management** – Create, edit, delete, and tag notes by subject.  
- **Flashcard generation** – Convert any note into a deck ready for active recall.  
- **Progress tracking** – Visual dashboards of mastery levels and review schedules.  
- **Local persistence** – All data lives in `localStorage`; no external services needed.  
- **Instant feedback** – Hot‑reload development with Vite.

---

## Development Commands

| Command        | Purpose |
|----------------|---------|
| `npm run dev`   | Start Vite dev server (hot‑reload). |
| `npm run build` | Build a production bundle in `dist/`. |
| `npm run lint`  | Run ESLint to enforce style rules. |

---

## Contributing

We welcome contributions from everyone.

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`.  
2. Keep commits focused and follow Conventional Commits if you wish.  
3. Verify the app works locally (`npm run dev`).  
4. Run the linter (`npm run lint`).  
5. Open a pull request with a clear description and, if relevant, link an issue.

Check open issues first to avoid duplicate work.

---

## Changelog

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file for details.
