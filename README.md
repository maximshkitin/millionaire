## Millionaire

<img alt="Logo" align="right" src="https://raw.githubusercontent.com/twitter/twemoji/d94f4cf793e6d5ca592aa00f58a88f6a4229ad43/assets/svg/1f911.svg" width="20%" />

This project is a web application built using [Next.js](https://nextjs.org/) and [React](https://reactjs.org/) to create an interactive quiz game. The game aims to entertain users with trivia questions and assess their knowledge in a fun and engaging way.

## Deployment

- [GitHub Pages](https://maximshkitin.github.io/millionaire): View the app on GitHub Pages.
- [Vercel](https://your-vercel-app-url/): View the app on Vercel.

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x)
- [npm](https://www.npmjs.com/) (version 9.x)

You may wanna use [`nvm`](https://github.com/nvm-sh/nvm) to change Node version.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/maximshkitin/millionaire.git`
    ```

2.  Navigate to the project directory:
    ```bash
    cd millionaire
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Runs the development server using Next.js.
- `npm test`: Runs tests using React Scripts. **(AI-generated unit-tests are coming)**
- `npm run build`: Builds the application for production.
- `npm run build:gh`: Builds the application for GitHub Pages deployment.
- `npm start`: Starts the production server.
- `npm run deploy`: Builds the application for GitHub Pages and deploys it.
- `npm run lint`: Lints TypeScript files in the `app` directory.
- `npm run lint:fix`: Fixes linting issues in TypeScript files.
- `npm run lint:styles`: Fixes style issues in SCSS files.
- `npm run format`: Formats code using Prettier.
- `npm run prepush`: Runs linting before pushing changes.

## Project Structure

- `app/`: Contains the application source code.
- `styles/`: Includes SCSS files for styling.
- `out/`: The output directory for production builds.
- `.husky/`: Husky Git hooks configuration.
- `.lintstagedrc.json`: Configuration for lint-staged.
- `.eslintrc.js`: ESLint configuration.
- `.prettierrc`: Prettier configuration.
- `package.json`: Node.js package manager configuration file.
- `README.md`: Project documentation.

## Components Structure

```
.
├── Quiz
│   ├── Quiz.scss
│   ├── Quiz.test.tsx
│   └── Quiz.tsx
├── QuizStaticView
│   ├── QuizStaticView.scss
│   ├── QuizStaticView.test.tsx
│   ├── QuizStaticView.tsx
│   └── index.ts
├── QuizView
│   ├── QuizOptions
│   │   ├── QuizOptions.scss
│   │   ├── QuizOptions.test.tsx
│   │   ├── QuizOptions.tsx
│   │   ├── QuizOptionsMultiselect
│   │   │   ├── QuizOptionsMultiselect.scss
│   │   │   ├── QuizOptionsMultiselect.test.tsx
│   │   │   └── QuizOptionsMultiselect.tsx
│   │   └── index.ts
│   ├── QuizScore
│   │   ├── QuizScore.scss
│   │   ├── QuizScore.test.tsx
│   │   ├── QuizScore.tsx
│   │   └── index.ts
│   ├── QuizView.scss
│   ├── QuizView.test.tsx
│   ├── QuizView.tsx
│   └── index.ts
├── index.ts
└── shared
    ├── QuizButton
    │   ├── QuizButton.scss
    │   ├── QuizButton.test.tsx
    │   └── QuizButton.tsx
    ├── QuizIcon
    │   ├── QuizIcon.scss
    │   ├── QuizIcon.test.tsx
    │   └── QuizIcon.tsx
    ├── QuizIconLoading
    │   ├── QuizIconLoading.scss
    │   ├── QuizIconLoading.test.tsx
    │   └── QuizIconLoading.tsx
    ├── QuizIconSidebar
    │   ├── QuizIconSidebar.scss
    │   ├── QuizIconSidebar.test.tsx
    │   └── QuizIconSidebar.tsx
    ├── QuizInfoOption
    │   ├── QuizInfoOption.scss
    │   ├── QuizInfoOption.test.tsx
    │   └── QuizInfoOption.tsx
    ├── QuizOptionTriangle
    │   ├── QuizOptionTriangle.scss
    │   ├── QuizOptionTriangle.test.tsx
    │   └── QuizOptionTriangle.tsx
    ├── QuizTextBox
    │   ├── QuizTextBox.scss
    │   ├── QuizTextBox.test.tsx
    │   └── QuizTextBox.tsx
    └── index.ts
```

## Dependencies

- `@reduxjs/toolkit`: State management library.
- `next`: React framework for server-rendered applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point for DOM-specific rendering.
- `react-redux`: Official React bindings for Redux.
- `react-responsive`: Media queries in React for responsive design.
- `react-spinners`: Loading spinners for React applications.

## Development Dependencies

- `@types/node`: TypeScript definitions for Node.js.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `cross-env`: Cross-environment variable setting.
- `eslint`: Linting utility for JavaScript and TypeScript.
- `eslint-config-airbnb`: Airbnb's ESLint configuration.
- `eslint-config-airbnb-typescript`: Airbnb's ESLint configuration for TypeScript.
- `eslint-config-prettier`: Turns off ESLint rules that conflict with Prettier.
- `eslint-config-standard`: JavaScript Standard Style ESLint configuration.
- `gh-pages`: GitHub Pages deployment utility.
- `husky`: Git hooks made easy.
- `lint-staged`: Run linters on pre-committed files.
- `prettier`: Opinionated code formatter.
- `sass`: CSS extension language.
- `stylelint`: Linting utility for styles.
- `stylelint-config-recommended`: Recommended stylelint configuration.
- `stylelint-config-recommended-scss`: Recommended stylelint configuration for SCSS.
- `stylelint-scss`: SCSS specific linting rules.
- `typescript`: Typed superset of JavaScript.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
