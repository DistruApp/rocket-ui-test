This repo contains a small React app that renders data about SpaceX launches from the [public SpaceX API](https://documenter.getpostman.com/view/2025350/RWaEzAiG).

Unfortunately it has many errors and outmoded coding practices, particularly in `Launches.jsx`, the components and the actions. The Layout, routing, stores and services are more up to date, although feel free to give feedback in the form of commments or make fixes if you think significant improvements are possible and you want to take the time — but they're not necessarily intended to be in scope of the challenge.

The repo is designed to be simple to start and run with just npm and any recent version of node. It is built on webpack and uses the webpack development server. Feel free to add additional dependencies if you find that helps you.

While the code is intentionally a little dirty around the edges in the hopes you will show us how you would clean it up, you should be able to follow the general react/redux and REST pattern for loading data and outputting UI elements.

**Your task**

- Add a feature where clicking on any given launch will expand that launch and reveal more info about the rocket used in the launch. Specifically we'll want to see the Rocket ID, Cost Per Launch, and Description.
- Clicking on another launch will cause the currently expanded launch to close, and expand the one that was clicked instead.
- If a launch is already expanded, clicking on it again will close it.

Feel free to add new files, break up components and generally clean up code, but please be wary of time. Place more emphasis on usability and user experience over amazing pixel perfect visuals.

### What we're using

* React 16 (includes Hooks should you want to use them)
* Webpack 4
* React Router 4
* SASS
* Babel Cli
* Hot Module Reloading
* Jest 21 
* Enzyme 3 for testing (should you have time to implement tests)

### Provided boilerplate

* Simple `src/index.jsx` and `src/index.css` (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### How to run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/DistruApp/rocket-ui-test
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:7357/`


### How to test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer
