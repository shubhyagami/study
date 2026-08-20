# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A minimal React + Vite application for managing study notes and running revision sessions. Notes are saved locally in the browser, allowing you to track your study progress without needing a backend.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

```bash
git clone https://github.com/shubhyagami/study.git
cd study
npm install
npm run dev
```

The development server will start at `http://localhost:5173`.

## Features

- **Note Management:** Create, edit, and organize study notes by subject.
- **Flashcard Revision:** Build flashcard decks from your notes and practice with keyboard shortcuts.
- **Local Storage:** Study progress is saved locally and persists across browser restarts.
- **Fast HMR & Build:** Powered by Vite for instant Hot Module Replacement (HMR) and optimized production builds.

## Scripts

Run these commands from the project directory:

- `npm run dev` - Starts the development server.
- `npm run build` - Compiles the app into optimized static files for production in the `dist` directory.
- `npm run lint` - Runs ESLint to check for code quality and formatting issues.

## Contributing

Contributions are welcome! If you have a feature idea or a bug fix, please follow these steps:

1. Check the [Issues](https://github.com/shubhyagami/study/issues) and [Pull Requests](https://github.com/shubhyagami/study/pulls) to ensure your idea hasn't been addressed yet.
2. Fork the repository and create a new branch for your feature (`git checkout -b feat/my-new-feature`).
3. Commit your changes with descriptive messages (e.g., `feat: add dark mode for late-night study sessions`).
4. Open a pull request detailing your changes.

## Changelog

### 2026-08-19
- Restructured the README for standard developer use and improved readability.
- Updated environment links to point to the correct repository.

### 2026-08-05
- Added `Flashcard Revision` section to the README.
- Updated ESLint configuration to include `react-hooks/exhaustive-deps` rule.
- Removed obsolete `App.css` file that was causing styling conflicts.

### 2026-08-04
- Initial commit: React + Vite scaffold with study-friendly configuration.

## License

This project is licensed under the MIT License.
