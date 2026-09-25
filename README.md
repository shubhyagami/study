[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
[K[2m  [2mmodel openai/gpt-oss-20b failed, trying next...[0m[0m
[K[2m  [2mmodel openai/gpt-oss-120b failed, trying next...[0m[0m
# Study

A lightweight, browser-only React application for taking notes and creating flashcard decks. Study is designed for speed and privacy, working entirely offline by utilizing the browser's `localStorage`.

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node.js 18.x](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square&logo=node.js)
![React 18.x](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Vite 6.x](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-7.x-4B32C3?style=flat-square&logo=eslint)

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Features

- **Note Management**: Create, edit, and delete notes with subject-based tagging.
- **Active Recall**: Quickly convert any note into a flashcard deck.
- **Revision Tracking**: Assign mastery levels to cards to generate suggested review dates.
- **Offline-First**: No backend or database required; all data persists locally in your browser.
- **Responsive UI**: A clean, minimal interface built with reusable components and custom hooks.

---

## Getting Started

### Prerequisites

- **Node.js**: 18.x or newer
- **npm**: Installed with Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhyagami/study.git && cd study
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

Once the server is running, open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Development

### Available Scripts

| Command | Description |
|:--- |:--- |
| `npm run dev` | Starts the Vite development server with hot-module replacement (HMR). |
| `npm run build` | Builds the project for production into the `dist/` folder. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |
| `npm run format` | Formats the codebase using Prettier. |

---

## Project Structure

```text
study/
├─ public/          # Static assets
├─ src/
│  ├─ assets/        # Images and icons
│  ├─ components/    # Reusable UI components
│  ├─ hooks/         # Custom React hooks
│  ├─ pages/        # Page-level components (Notes, Flashcards, Settings)
│  ├─ utils/         # Helper functions and logic
│  ├─ App.jsx       # Root component
│  └─ main.jsx       # Entry point
├─ index.html       # Main HTML template
└─ vite.config.js    # Vite configuration
```

---

## Testing

Unit and snapshot tests are powered by **Vitest**.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

All test files are located in `src/__tests__`.

---

## Contributing

Contributions are welcome. To get started:

1. Fork the repository and create a feature branch: `git checkout -b feat/your-feature-name`.
2. Ensure your code adheres to [Conventional Commits](https://www.conventionalcommits.org/).
3. Run `npm run lint` to verify code quality.
4. Submit a Pull Request with a clear description of the changes and references to any related issues.

If you are new to the project, look for issues labeled `good-first-issue`.

---

## Changelog

- **2026-09-25** – Polished README for better clarity and developer experience.
- **2026-08-19** – Updated contribution guidelines and documentation.
- **2026-08-05** – Implemented flashcard revision tracking and local persistence.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
