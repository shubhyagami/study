# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![React 18](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Vite 6](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

**Study** is a lightweight React + Vite application that lets you:

- **Create, edit, and tag notes** by subject.  
- **Convert notes into flashcard decks** for active recall.  
- **Track revision progress and mastery levels.**  

All data is stored client‑side in `localStorage`; no backend or server‑side code is required.

---

## Quickstart

```bash
# Clone the repository
git clone https://github.com/shubhyagami/study.git
cd study

# Install dependencies
npm install

# Start the development server
npm run dev

# Visit http://localhost:5173
```

---

## Features

- **Note Management** – Create, edit, delete, and tag notes.  
- **Flashcard Generation** – Convert notes into deck‑ready flashcards.  
- **Progress Tracking** – Visualize mastery and review schedules in real time.  
- **Local Persistence** – All data lives in `localStorage`; no external services.  
- **Hot‑Reload Development** – Immediate feedback while building.

---

## Development Commands

| Command      | Purpose                                |
|--------------|----------------------------------------|
| `npm run dev`   | Start the Vite dev server (hot‑reload). |
| `npm run build` | Generate a production build (`dist/`). |
| `npm run lint`  | Run ESLint to enforce code style.     |

---

## Contributing

We welcome contributions from everyone.

1. Fork the repository and create a feature branch:  
   `git checkout -b feat/your-feature`
2. Keep commits focused and use Conventional Commits (or Git‑Flow) if you prefer.  
3. Verify the app runs locally: `npm run dev`.  
4. Run the linter: `npm run lint`.  
5. Open a pull request with a clear description and, if relevant, reference an issue.  

Check open issues first to avoid duplication.

---

## Changelog

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file for details.
