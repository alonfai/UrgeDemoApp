# Urge API Products Demo App

This project was based on the [Next.js](https://nextjs.org/) Create App template and renders a SSR website.

It consists of building a two screens app used to explore prices of various cryptocurrencies available on the CoinJar platform. It uses React to render all UI, together with the following essentials:

- Typescript 4.x+
- ESLint + Prettier for coding standard and formatting
- [Chakra UI](https://chakra-ui.com/) for rendering accessible components
- [React-Query](https://react-query.tanstack.com/) for caching/fetching data from remote API
- [React Hook Form](https://react-hook-form.com/) for entering user input
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) Support infinite scrolling
- [Storybook UI](https://storybook.js.org/)
- [Husky](https://typicode.github.io/husky/#/) + [LintStaged](https://github.com/okonet/lint-staged) for Git Hooks
- Cypress + Jest + Testing Library

The project uses environment variables to define the different API endpoints inside `.env`:

- NEXT_PUBLIC_API_DOMAIN : API domain URL
- NEXT_PUBLIC_CACHE_TIMEOUT: cache timeout for each product inside the cache (defaults to 300000 ms)
- NEXT_PUBLIC_MAX_RETRIES: API Fetching maximum retry attempts on error (starts from 0 attempts), defaults to 2 retries


## Pre requirements

Have NPM or yarn on your machine and execute the following.

```js
npm install
```

### Project Structure

- components - Collection of all available reusable React components (e.g. Header, Search, Product)
- cypress - Cypress Testing Framework codebase
- hooks - custom helper utlility hooks
- pages - Next.js dynamic route pages
- styles - Chakra-UI themeing styles and fonts (<https://chakra-ui.com/docs/theming/component-style>)
- utils - list of custom shared utility functions (E.g. constants, typescript interfaces of the API, logs, etc...)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn dev:debug`

Runs the app in development mode with debugger support

### `yarn lint`

Executes ESLint on all files inside the app folder

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn cypress:open`

Launches the test runner in the interactive watch mode and an integrated coverage reporter.

### `yarn cypress:run`

Executes all testing suites found in project that ending in *.spec.ts /*.spec.tsx

### `yarn test` / `yarn test:watch`

Executes Jest testing setup or in watch interactive mode

### `yarn test:e2e` / `yarn test:run`

Executes the Cypress E2E testing in watch or normal mode

### `yarn check-format` / `yarn check-types` / `yarn check-lint` / `yarn format`

Executes ESLint and/or Prettier with auto fix problems on all files

### `yarn test-all`

Runs all linter, prettier and build together

### `yarn storybook` / `yarn build-storybook`

Execute and/or build Storybook for development of components in isolation
