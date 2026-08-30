# Study

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)  
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A lightweight React + Vite application for organizing study notes and creating flashcard decks. All data is stored locally, so your progress persists across sessions.

---

## Overview
A minimal React and Vite setup that lets you:

- Create, edit, and categorize study notes by subject.  
- Convert notes into flashcard decks for active recall.  
- Persist notes and revision progress in the browser’s local storage.

---

## Features
- **Note Management** – organize notes with titles, subjects, and tags.  
- **Flashcard Revision** – generate decks from notes and track mastery.  
- **Local Persistence** – data is saved locally, no backend required.  
- **Hot‑reload Development** – instant feedback while coding.

---

## Getting Started

### Prerequisites
- Node.js (v18 or later)  
- npm (v9 or later)

### Installation
```bash
git clone https://github.com/shubhyagami/study.git
cd study
npm install
```

### Run the App
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to start taking notes.

### Build for Production
```bash
npm run build
```
The compiled static files are placed in the `dist/` directory.

### Linting
```bash
npm run lint
```
Runs ESLint to enforce code quality.

---

## Development Scripts
| Command     | Description                                        |
|------------|----------------------------------------------------|
| `npm run dev`    | Starts the development server with hot reload    |
| `npm run build`  | Produces an optimized production build            |
| `npm run lint`   | Runs ESLint to check code standards                |

---

## Contributing
Contributions are welcome! To get started:

1. Fork the repository and create a feature branch (`git checkout -b feat/your-feature`).  
2. Make changes with clear, descriptive commit messages.  
3. Ensure the app runs (`npm run dev`) and passes linting (`npm run lint`).  
4. Open a pull request describing the change.

Please review existing issues first to avoid duplicate work.

---

## Changelog
- **2026‑08‑19** – Refined README and clarified contribution workflow.  
- **2026‑08‑05** – Added flashcard revision feature with local persistence.  

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
