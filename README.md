# Study Project

![Study Project](https://img.shields.io/badge/Study-Project-blue?style=flat-square)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A minimal React + Vite application for managing study notes and running revision sessions.

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)
- [React Compiler](#react-compiler)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Quick Start

To get a local copy up and running, follow these steps:

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
- **Local Storage Persistence:** Your study progress is saved locally and survives browser restarts.
- **Optimized Build:** Powered by Vite for instant hot module replacement (HMR) and optimized production builds.

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server.
- `npm run build` - Compiles the app into optimized static files for production in the `dist` directory.
- `npm run lint` - Runs ESLint to check for code quality and formatting issues.

Vite provides two official React plugins:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled in this template because of its impact on dev and build performance. To add it, see the [official documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contributing

Contributions are welcome! If you have an idea for a new feature or a bug fix, please follow these steps:

1. Check the [Issues](https://github.com/shubhyagami/study/issues) and [Pull Requests](https://github.com/shubhyagami/study/pulls) to ensure your idea hasn't been addressed yet.
2. Fork the repository and create a new branch for your feature (`git checkout -b feat/my-new-feature`).
3. Commit your changes with descriptive messages (e.g., `feat: add dark mode for late-night study sessions`).
4. Open a pull request detailing your changes.

## Changelog

### 2026-08-19
- Removed lore-heavy documentation and restructured the README for standard developer use.
- Updated environment links to point to the correct repository.

### 2026-08-05
- Added `Flashcard Revision` section to the README.
- Updated ESLint configuration to include `react-hooks/exhaustive-deps` rule.
- Removed obsolete `App.css` file that was causing styling conflicts.

### 2026-08-04
- Initial commit: React + Vite scaffold with study-friendly configuration.

## License

This project is licensed under the MIT License.
