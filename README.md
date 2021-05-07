# Auto-loan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents

- [Overview](#Overview)
- [License](#License)
- [Tech_Specs](#Tech_Specs)
- [Design_Specs](#Design_Specs)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Demo](#Demo)
- [Questions](#Questions)
- [Go To Living Application](https://murmuring-forest-47649.herokuapp.com/)

## Overview

This repository contains a sample application with logic to lead a user for the initial portion of qualifying for an auto loan with a financial institution. Please read over the documentation to understand how this app works.

## License

This app is using the **MIT** license. For more information about the **MIT** license terms of use click on the link [`Licence`](https://opensource.org/licenses/MIT).

## Tech_Specs

- For the back-end this project has a mock server side logic using [`express`](http://expressjs.com/). This application has a development environment set up with [`nodemon`](https://www.npmjs.com/package/nodemon), [`concurrently`](https://www.npmjs.com/package/concurrently) and [`prettier`](https://prettier.io/docs/en/) to make things easier for fellow developers at the time they run the app in their local developement environments and make their changes on their branches, this automatically will use nodemon and concurrently to restart the server and re-run the app back and front end instantly after a change is made in the code base.

- For the front-end this project is using [`modern React with hooks`](https://reactjs.org/docs/hooks-intro.html) and [`Redux`](https://redux.js.org/introduction/getting-started) to handle global state. To set up the eco-system I followed the devlopers suggestion to start with the npm command [`npx create-ract-app`](https://reactjs.org/docs/create-a-new-react-app.html) to have an initial boiler plate. To handle routing to different pages, this app is using [`React Router`](https://reactrouter.com/web/guides/quick-start). To validate currency input types it depends on [`react-currency-input-field`](https://www.npmjs.com/package/react-currency-input-field) npm package. This project is front-end and UI centered, perhaps, it has mock API calls, it rely on a mock up fetch that wraps the response into a Promise object to simulate an API call. For styling and layout purposes this app uses the [`Bootstrap grid system`](https://getbootstrap.com/docs/4.5/layout/grid/) and custom css written for every component.

- Play and test: I recommend using a modern browser to play with the app for better results, My advise is to use [`Google Chrome`](https://www.google.com/chrome/?brand=CHBD&geo=US&gclid=CjwKCAiAp4KCBhB6EiwAxRxbpNlRVQYlsxd6Xrdaxx1r656gunSF-wEG2UKGHXRDl7MdqteyoGzD7hoCo3AQAvD_BwE&gclsrc=aw.ds), most of the technologies and code semantics are supported with it. As I am using [`Redux`](https://redux.js.org/introduction/getting-started) is higly required for you to install [`Redux DevTools`](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) extension in your browser, feel free to install it by clicking the previous link. To understand what is the actual state of the appplication and how is changing with user's input you need to open your `devtools` in the browser and click on the `Redux` tab to see the global state of the app. The app rendering with initial state and key Actions and reducers are tested with unit testing methods, you can run the unit tests by opening your terminal and changing your directory to the root of the project then typing the command: `npm test`.

  **`Important:`** Because redux default global state is using `localstorage` of your browser to keep track of the state, whenever you want to start over with a clean state you must delete the `localstorage` of the app. To do so, you have to go to the `devtools` and click on the `application` tab and go over the `storage` -> `Local Storage` and click on the host address of the app and delete the key and value pair object and go back to the home on the address bar of the borwser and refresh the tab of the app. In production home is `https://murmuring-forest-47649.herokuapp.com/`, in development home is `http://localhost:3000/`.

## Design_Specs

To achive better results and have a clear idea of the UI of this application, for this project I use the Figma platform to design a high fidelity wireframe of the app and follow it up througout the CSS layout. Here is a link of the [`begining of this project`](https://www.figma.com/files/project/19851673/Pre-Qualification-Auto-Loan-Web-App?fuid=915755752343741330)

## Installation

Before to star make sure you fork and clone this [`repository`](https://github.com/jlcalderon/auto-loan) in your local machine. In your terminal change your directory to the root of this project and run the command `npm install` to install all the dependencies listed on the [`Tech_Specs`](#Tech_Specs) of the react front-end client and the mock up server side back-end.

## Usage

Once you have the dependencies installed. In your terminal make sure you are in the root directory `./auto-loan`. Then run the command: `npm start` to run the app, this command will run the script start wich will default to localhost if you are running from your local machine and it will go to the production start if is runnig on the production environment.

## Contributing

Please feel free to add contributions that may be beneficial to this app.
To be a contributer send an email to <jlcalderonfuentes@gmail.com> requesting access to this repository. Know that if you fork this repository it will be easy to approve your changes and merge to the main branch.

## Demo

![Demo](./client/public/img/auto-loan-demo.gif)

## Questions

Any further questions about this project can be emailed directly to: <jlcalderonfuentes@gmail.com>.

[Go To Living Application](https://murmuring-forest-47649.herokuapp.com/).
