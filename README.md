# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

**Study** is a lightweight React + Vite app that helps you organize notes, generate flashcard decks, and track revision progress—all stored locally in the browser.

---

## Quick start

```bash
# clone
git clone https://github.com/shubhyagami/study.git
cd study
npm install

# development server
npm run dev    # opens http://localhost:5173

# build for production
npm run build  # out in the dist/ folder

# lint
npm run lint
```

---

## Core features

- **Note Management** – Create, edit, and categorize notes by subject and tag.  
- **Flashcard Generation** – Turn notes into deck‑ready flashcards for active recall.  
- **Progress Tracking** – Monitor mastery and revision schedule in real time.  
- **Client‑side persistence** – All data lives in `localStorage`; no backend needed.  
- **Hot‑reload development** – Instant feedback while you code.

---

## Development commands

| Command        | Purpose |
|----------------|----------|
| `npm run dev`      | Start the Vite dev server with hot‑reloading |
| `npm run build`    | Generate a production build in `dist/` |
| `npm run lint`     | Run ESLint to enforce code style |

---

## Contributing

We welcome contributions!  
1. Fork the repo and create a feature branch (`git checkout -b feat/your-feature`).  
2. Keep commits short, descriptive, and aligned with Git‑Flow conventions.  
3. Run `npm run dev` to verify the app works locally.  
4. Run `npm run lint` to make sure the code passes linting.  
5. Open a pull request with a concise description and relevant issue links, if any.

Please review existing issues first to avoid duplicate work.

---

## Changelog (recent)

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.  

---

## License

MIT license – see the [LICENSE](LICENSE) file for details.
