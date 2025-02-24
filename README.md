# Notes App

A simple and efficient note-taking application built with React, TypeScript, and Vite. The total time spent building was 3 hours.

## Installation

Clone the Repository:

```
git clone https://github.com/kcnorton/notes-app.git
cd notes-app
```

Install Dependencies:

```
npm install
```

Start the Development Server:

```
npm run dev
```

Open your browser and navigate to http://localhost:5173 to view the app.

## Features

- Create Notes: Add new notes with a title and description.
- Edit Notes: Modify existing notes as needed.
- Delete Notes: Remove notes that are no longer needed.
- Responsive Design: Accessible on various devices, including desktops and mobile devices.

## Screenshots of the views
- Notes List Page
<img width="1440" alt="Screen Shot 2025-02-24 at 12 28 28 AM" src="https://github.com/user-attachments/assets/e8d9674f-1d12-47c9-aac9-d91eaf0131f4" />

- Note Detail Modal
 <img width="1440" alt="Screen Shot 2025-02-24 at 12 28 52 AM" src="https://github.com/user-attachments/assets/cb415877-a18d-4b47-a0db-82cce6c05f6a" />

- Create / Edit Note Modal
<img width="1440" alt="Screen Shot 2025-02-24 at 12 28 41 AM" src="https://github.com/user-attachments/assets/4dc81ea8-692a-4ebe-91b0-1f9bd5efb3ea" />

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static typing.
- Vite: Next-generation frontend tooling for faster builds.
- TanStack Query: Powerful asynchronous state management for fetching and caching data.
- TailwindCSS: Utility-first CSS framework for rapid UI development.
- ESLint: Linting utility for JavaScript and TypeScript.
- Prettier: Code formatter to maintain consistent code style.

## Considerations and Tradeoffs

### Current Choices

While building this app, several architectural and design decisions were made:

- State Management with TanStack Query

Pros: Simplifies data fetching, caching, and synchronization with the server.

Cons: May be unnecessary for very simple apps with minimal data-fetching needs.

- Using TypeScript instead of JavaScript

Pros: Static typing helps catch errors at compile time, reducing runtime bugs. Enhances maintainability and scalability of the codebase.

Cons: Requires additional setup and configuration compared to plain JavaScript. Type definitions may need maintenance as the codebase evolves.

- Styling with TailwindCSS

Pros: Speeds up development with utility classes and reduces the need for custom CSS files.

Cons: Can lead to class-heavy JSX and a learning curve for those unfamiliar with utility-first CSS.

- Using Vite instead of Create React App (CRA)

Pros: Faster builds, better performance, and modern tooling support. CRA is considered deprecated.

Cons: Less mature ecosystem compared to CRA, requiring additional configuration in some cases.

### Future Considerations

- Migrating to Next.js

Pros:
Built-in SSR (Server-Side Rendering) and SSG (Static Site Generation) for improved performance. Better SEO and faster page loads. File-based routing simplifies navigation.

Cons:
May be unnecessary for a simple note-taking app with minimal dynamic content. Introduces additional complexity compared to a standard React app.

- Using Redux for State Management

Pros:
Centralized state management is useful for large-scale applications. Works well with complex state interactions and shared global state.

Cons:
Overhead for simple app where TanStack Query may suffice. Requires more boilerplate compared to alternative state management solutions.

- Adopting Material UI for Styling

Pros:
Prebuilt, accessible, and customizable components speed up UI development. Provides a polished and consistent design system.

Cons:
Larger bundle size compared to TailwindCSS. Customization can be more complex than utility-first CSS frameworks.

- Adding Jest for Unit Testing

Pros: Helps catch bugs early and improves code reliability. Provides confidence in refactoring by ensuring functionality remains intact. Works well with React Testing Library for testing components.

Cons: Writing tests can be time-consuming, especially for small projects. Requires maintenance as the codebase evolves.

- Scalability

The current architecture is ideal for small-scale applications but may need refactoring (e.g., modularizing components, optimizing API calls) as the project grows.

Note: This project is a practice application developed by Kara Norton.
