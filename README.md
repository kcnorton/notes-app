# Notes App

A simple and efficient note-taking application built with React, TypeScript, and Vite. The total time spenting building was 3 hours.

## Installation

Clone the Repository:

bash
Copy
Edit
git clone https://github.com/kcnorton/notes-app.git
cd notes-app
Install Dependencies:

bash
Copy
Edit
npm install
Start the Development Server:

bash
Copy
Edit
npm run dev
Open your browser and navigate to http://localhost:5173 to view the app.

## Features

Create Notes: Add new notes with a title and description.
Edit Notes: Modify existing notes as needed.
Delete Notes: Remove notes that are no longer needed.
Responsive Design: Accessible on various devices, including desktops and mobile devices.

## Technologies Used

React: JavaScript library for building user interfaces.
TypeScript: Superset of JavaScript that adds static typing.
Vite: Next-generation frontend tooling for faster builds.
TanStack Query: Powerful asynchronous state management for fetching and caching data.
TailwindCSS: Utility-first CSS framework for rapid UI development.
ESLint: Linting utility for JavaScript and TypeScript.
Prettier: Code formatter to maintain consistent code style.

## Considerations and Tradeoffs

### Current Choices

While building this app, several architectural and design decisions were made:

State Management with TanStack Query

Pros: Simplifies data fetching, caching, and synchronization with the server.
Cons: May be unnecessary for very simple apps with minimal data-fetching needs.

Styling with TailwindCSS

Pros: Speeds up development with utility classes and reduces the need for custom CSS files.
Cons: Can lead to class-heavy JSX and a learning curve for those unfamiliar with utility-first CSS.

Using Vite instead of Create React App (CRA)

Pros: Faster builds, better performance, and modern tooling support. CRA is considered deprecated.
Cons: Less mature ecosystem compared to CRA, requiring additional configuration in some cases.

### Future Considerations

Migrating to Next.js

Pros:
Built-in SSR (Server-Side Rendering) and SSG (Static Site Generation) for improved performance.
Better SEO and faster page loads.
File-based routing simplifies navigation.
Cons:
May be unnecessary for a simple note-taking app with minimal dynamic content.
Introduces additional complexity compared to a standard React app.

Using Redux for State Management

Pros:
Centralized state management is useful for large-scale applications.
Works well with complex state interactions and shared global state.
Cons:
Overhead for simple app where TanStack Query may suffice.
Requires more boilerplate compared to alternative state management solutions.

Adopting Material UI for Styling

Pros:
Prebuilt, accessible, and customizable components speed up UI development.
Provides a polished and consistent design system.
Cons:
Larger bundle size compared to TailwindCSS.
Customization can be more complex than utility-first CSS frameworks.

Scalability

The current architecture is ideal for small-scale applications but may need refactoring (e.g., modularizing components, optimizing API calls) as the project grows.

Note: This project is a practice application developed by Kara Norton.
