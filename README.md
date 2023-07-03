# Nodejs app

This project was bootstrapped with [Express application generator](https://expressjs.com/en/starter/generator.html).

## Prerequisites

This project using [Yarn](https://yarnpkg.com/lang/en/) to manage npm packages. To install simply follow the instructions [here](https://yarnpkg.com/en/docs/install).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the server in the development mode at [http://localhost:5000](http://localhost:5000).

The server will recompile and restart itself if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode using [Jest](https://jestjs.io/en/).<br>
See the section about [running tests](https://jestjs.io/docs/en/cli.html) for more information.

### `yarn lint`

Runs formatting and linting checks and outputs a list of errors which should be fixed. To fix linting or formatting issues run `yarn lint:fix`. This will fix any issues that can be automatically fixed by the various tools.

Formatting is performed by [Prettier](https://prettier.io/). Linting is performed by [Tslint](https://palantir.github.io/tslint/).

Linting and formatting errors are also automatically fixed before commits.

### `yarn build`

Builds the server for production to the `build` folder. The api can then be run like so `node ./build/server.js`.
