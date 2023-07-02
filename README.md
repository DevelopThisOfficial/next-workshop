# Next.js Workshop

Welcome to the GitHub repository for the Next Workshop by DevelopThis! This project was created as part of a live Discord event where we built a web page using Next.js and incorporated various features suggested by the audience. In this README, you will find an overview of the project, its structure, and instructions on how to run and contribute to the code.

### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Next.js Resources](#nextjs-resources)

## Introduction

The Next.js workshop is a live coding demo where we built a web page using Next.js, showcasing various features and techniques. Next.js is the framework currently [recommended by react.dev](https://react.dev/learn/start-a-new-react-project) This project was developed with the aim of providing a practical demonstration of Next.js concepts, project structure, responsive design, and state management using hooks. During the live event, we incorporated different features suggested by the audience, making the session interactive and engaging.

## Features

Throughout the live coding session, the audience suggested several features and functionalities to be included in the project. Some of the features that were covered include:

- Project structure and organization
- Next.js routing using new app router
- CSS modules
- Flexbox and Grid layout techniques
- Simple state management using React hooks
  Please note that the list of features covered is not exhaustive, and the actual codebase may include additional components, libraries, or techniques depending on the specific suggestions received during the live event.

## Project Structure

The project follows a common Next.js project structure to ensure readability, maintainability, and scalability. Here is an overview of the main directories and files:

````
├── app/                     # Source code
│   ├── projects/            # /projects route
│   ├── globals.css          # Global styles including color palette
│   ├── layout.tsx           # Main application component
│   ├── page.tsx             # / route
├── components/
├── data/                    # CSS or styling related
│   ├── projectsData.tsx
│   ├── _app.tsx             # Main application component
│   └── index.tsx            # / route
│   └── projects.tsx         # Entry point
├── public/                  # Static assets
├── .gitignore               # Files and directories to be ignored by Git
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation (you are here!)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Contributing

Contributions to this project are always welcome. If you have any suggestions, improvements, or bug fixes, please submit a GitHub issue or pull request.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code for personal and commercial purposes.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
