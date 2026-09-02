# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

**Study** is a lightweight React + Vite application that lets you

* create, edit, and categorize notes
* transform notes into flashcard decks for active recall
* track revision progress and mastery levels

Everything is stored client‑side in the browser, so no backend or server‑side code is required.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/study.git && cd study

# Install dependencies
npm install

# Run the development server
npm run dev    # Opens http://localhost:5173

# Build for production
npm run build  # Output is in the dist/ folder

# Run the linter
npm run lint
```

---

## Features

| Feature | Description |
|---------|-------------|
| **Note Management** | Create, edit, delete, and tag notes by subject. |
| **Flashcard Generation** | Convert notes into deck‑ready flashcards for spaced repetition. |
| **Progress Tracking** | Visualize mastery and review schedules in real time. |
| **Local Persistence** | All data lives in `localStorage`; no external services needed. |
| **Hot‑Reload Development** | Immediate feedback while building. |

---

## Development

| Command | Purpose |
|---------|---------|
| `npm run dev`   | Start the Vite dev server with hot‑reloading |
| `npm run build` | Generate a production build in `dist/` |
| `npm run lint`  | Run ESLint to enforce code style |

---

## Contributing

We welcome contributions from everyone.

1. Fork the repository and create a feature branch: `git checkout -b feat/your-feature`  
2. Keep commits focused and use the **[Git‑Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)** naming convention.  
3. Verify that the app runs locally with `npm run dev`.  
4. Ensure the code passes linting: `npm run lint`.  
5. Open a pull request with a clear description and link to an issue, if applicable.

Check open issues first to avoid duplication.

---

## Recent Changes

- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.

---

## License

MIT – see the [LICENSE](LICENSE) file for details.
