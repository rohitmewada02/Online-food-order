# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🚀 Day 3 – React Register Form with Validation & react-hot-toast

Aaj maine React me ek Register Form Component banaya, jisme maine kaafi important concepts use kiye:

✔ What I Built Today

Fully working Register Form

Used useState hook for form inputs

Email, password & empty field validations

react-hot-toast for better User Experience

Data ko sessionStorage me store kiya

useNavigate() se login page par redirect

Background image set using inline style

✔ Validations

All fields must be filled

Email must contain @ and .com

Password > 5 characters

Error messages using toast.error

Success message using toast.success

✔ Technologies Used

React (Vite)

useState hook

react-router-dom

react-hot-toast

sessionStorage

📂 Folder: /src/Register.jsx
