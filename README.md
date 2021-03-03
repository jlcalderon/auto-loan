# Auto-loan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents

- [Overview](#Overview)
- [License](#License)
- [Tech_Specs](#Tech_Specs)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [Demo](#Demo)
- [Go To Livin Application](https://murmuring-forest-47649.herokuapp.com/)

## Overview

This repository contains a sample application with logic to lead a user for the initial portion of qualifying for an auto loan with a financial institution. Please read over the documentation to understand how this app works.

## License

This app is using the **MIT** license. For more information about the **MIT** license terms of use click on the link [`Licence`](https://opensource.org/licenses/MIT)

## Tech_Specs

- For the back-end this project is using the following packages:
  To handle routes and server logic easier this app is using [`express`](), this application has a development environment set up with [`nodemon`](), [`concurrently`]() and [`prettier`]() to make things easier for fellow developers at the time they run the app in their local developement environments and make their changes on their branches, this automatically will use nodemon and concurrently to restart the server and re-run the app back and front end instantly after a change is made in the base code.

- For the front-end this project is using the following react packages:
  This app was developed with [`modern React with hooks`](https://reactjs.org/docs/hooks-intro.html) and [`Redux`](https://redux.js.org/introduction/getting-started) to handle global state. To set up the eco-system I followed the devlopers suggestion to start with the npm command [`npx create-ract-app`](https://reactjs.org/docs/create-a-new-react-app.html) to have an initial boiler plate. To handle routing to different pages, this app is using [`React Router`](https://reactrouter.com/web/guides/quick-start). To validate currency input types it depends on [`react-currency-input-field`](https://www.npmjs.com/package/react-currency-input-field) npm package. To make an API GET requests, it rely on a mock up fetch that wraps the response into a Promise object. For styling and layout purposes this app uses the [`Bootstrap grid system`](https://getbootstrap.com/docs/4.5/layout/grid/) and custom css written for every component.

## Installation

Before to star make sure you fork and clone this [`repository`](https://github.com/jlcalderon/auto-loan) in your local machine. In your terminal run the command `npm install` to install all the dependencies listed on the [`Tech_Specs`](#Tech_Specs) of the react front-end client and the server side back-end.

## Usage

Once you have the dependencies installed. In your terminal make sure you are in the root directory `./auto-loan`. Then run the command `npm start` to run the app, this command will run the script start wich will default to localhost if you are running from your localmachine and it will go to the production start if is runnig on the deployment environment wich is `Heroku`.

## Contributing

Please feel free to add contributions that may be beneficial to this app.
To be a contributer send an email to <jlcalderonfuentes@gmail.com> requesting access to this repository. Know that if you fork this repository it will be easy to approve your changes and merge to the main branch

## Questions

Any further questions about this project can be emailed directly to: <jlcalderonfuentes@gmail.com>.

## Demo

![Demo](./auto-loan/public/img/auto-loan-demo.gif)
