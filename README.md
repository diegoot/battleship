# About the project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) or CRA for short.

Some of the libraries/tools used on it are:

- [SASS](https://sass-lang.com/)
- [react-router](https://www.npmjs.com/package/react-router)
- [airbnb/enzyme](https://github.com/airbnb/enzyme)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [classnames](https://github.com/JedWatson/classnames)

# How to run the project

- Clone this repository.
- `cd` into the cloned repo.
- Execute `yarn install`

## Running locally

- Execute `yarn start`

## Running in production

- Execute `yarn build`

The above command will generate a build folder inside the repository that you can deploy to your server of choise.
If you are using npm version 5.2 or higer you can just cd into the build directory and execute `npx serve`.

# Conventions used

To name the CSS class I am sticking to [BEM](http://getbem.com/naming/) as much as possible.

# Unit testing

For unit testing I am using [Jest](https://jestjs.io/) which comes with CRA.
Additionally I added [airbnb/enzyme](https://github.com/airbnb/enzyme) to be able to render my components and interact with them and [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) to be able to dispatch actions and test their results.

I need to increase coverage a bit more but I focused on implementing at least one test for each kind of resource (reducer, action, connected component, regular component).

To execute all the test run `yarn test`.

To execute a given test, for instance the one for GameBoard, execute `yarn test GamerBoard.test`.

To get a coverage report execute `yarn test --coverage`.

# Possible improvements

- Move texts to a file and add some kind of library to help with i18n.
- Error page to catch error conditions (like for instance not being able to position all the ships on the board).
- Use a different positioning algorithm.

# Thoughts about the positioning algorithm

I did not implemented any special algorithm, I just grab a ship, get a random position and check if it can be placed there (it should not overlap other ships).

I did this because because of the given configuration:

  - board is 10x10
  - 10 ships that use in total 20 of those 100 available cells (1 ship of 4 cells, 2 ships of 3 cells, 3 ships of 2 cells, 4 ships of 1 cell)

So even with all the ships already position on the board I have 80% of the board free. That means it is really hard to get a collision. And if it takes places it is probably that the next attempt to place the ship on the board will be successful.

Also, and again because of the given configuration, it is always possible to position all the ships on the board, that is why I did not care about handling that error condition either.

With a different configuration it might be harder to place all the ships (or even imposible), and we might need to use a different algorithm. But in this simple scenario it is not needed.

# Additional features

This project is responsive, so you can test the live example directly from your mobile phone.

# Live example

[Here](http://hungry-lace.surge.sh).

# Known issues

- Reloading the page might have some issues, specially on the live example. I need to research on it a bit.