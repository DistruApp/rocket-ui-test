This repo contains a small UI project written in React. Unfortunately it has many errors and outmoded coding practices, particularly in Launches.jsx, the components and the actions. The Layout, routing, stores and services are more up to date (although feel free to give feedback in the form of comments or make fixes if you think significant improvements are possible and you want to take the time — but they're not necessarily intended to be in scope of the challenge.)

The repo is designed to be simple to start and run with just npm and any recent version of node. It is built on webpack and uses the webpack development server, so all you should need to do is clone the repo and start the app in development mode with npm start and view it on port 7357. All the tools for writing code should be included, but feel free to add additional dependencies if you find that helps you.

While the code is intentionally a little dirty around the edges in the hopes you will show us how you would clean it up, you should be able to follow the general react/redux and REST pattern for loading data and outputting UI elements.

The app pulls data about launches from the public SpaceX API.

**Your task**

- Add a feature where clicking on any given launch will expand that launch and reveal more info about the rocket used in the launch (specifically we'll want to see the Rocket ID, Cost Per Launch, and Description)
- Clicking on another launch will cause the currently expanded launch to close, and expand the one that was clicked instead
- If a launch is already expanded, clicking on it again will close it

Feel free to add files, breakup components or modularize and generally clean up code (Please be weary of time! First get it working). Place more emphasis on usability than user experience over amazing pixel perfect visuals (as designs may change over time).

The development challenge is build against the SpaceX public REST API `https://documenter.getpostman.com/view/2025350/RWaEzAiG`

You should be able to easily find the information there make the call and extract the data needed. Good Luck!

### What we're using

* React 16 (includes Hooks should you want to use them)
* Webpack 4
* React Router 4
* SASS
* Babel CLI
* Hot Module Reloading
* Jest 21
* Enzyme 3 for testing (should you have time to implement tests)

### Features

* Simple src/index.jsx and src/index.css (local module CSS).
* Webpack configuration for development (with hot reloading) and production (with minification).
* Both JS(X) and CSS hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/DistruApp/rocket-ui-test.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run the development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:7357/`


### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### TODO
The basic items to do are related to displaying SpaceX launches.  However, there are several items which are important or nice-to-have.  Not all of these have been approved for development.

In no particular order:

* Update required version of node-sass in package.json to build under node 12
* Add .gitignore
* Replace existing Launch component with [collapsibles](https://www.npmjs.com/package/@faceless-ui/collapsibles)
* Add action to retrieve cost information from Rocket endpoint
* Upgrade SpaceX API client from V3 to V4
* Replace normalize.css with [Bootstrap](https://getbootstrap.com/)
* Convert React components from classes to functions
* Utilize React [Strict mode](https://reactjs.org/docs/strict-mode.html)
* Ensure default values are displayed when no corresponding value is present in a data structure
* Upgrade to React Router 5 in preparation for router API changes
* Ensure lazy loading of launches
* Replace Redux with React [Context](https://reactjs.org/docs/context.html)
* Upgrade dependencies to latest versions
* Comment each file and component (JSDocs?)
* Develop or utilize UI component library for consistency
* Write tests
