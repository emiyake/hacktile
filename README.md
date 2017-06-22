# Lab In Hands - Hybrid

## Bookmarks

- [Site](http://www.labinhands.com.br/)
- [Scope](https://docs.google.com/document/d/1DLS9Zy5zADRIKkjYMDNGU8IPbAGvmsruI8AsLWV5rPc/)
- [MPT](https://docs.google.com/spreadsheets/d/1sXM1qRWCLSJLVY82rVn-xIw_-rXtN1kUUl3wPYs_tW0/)
- [Basecamp](https://basecamp.com/1835869/projects/10708987)
- [Drive](https://drive.google.com/drive/u/1/folders/0Bz2dSZYCSepDeUZxY1Z6OC1VQkk)
- [Server 2.0](https://github.com/indigotech/br-lab_in_hands-server-api)
- [Admin 2.0](https://github.com/indigotech/br-lab_in_hands-server-admin) 
- [Homolog env]()
- [Hockey app]()
- [Hockey app staging]()

### 1.0 resources
- [iOS 1.0](https://github.com/indigotech/br-lab_in_hands-app_piloto-ios)
- [Server 1.0](https://github.com/indigotech/br-lab_in_hands-app_piloto-server)
- [Admin 1.0](https://github.com/indigotech/br-lab_in_hands-app_piloto-cms)

## Development Environment Setup

- XCode - 8.2
- Android Studio - 2.3.3
- Node.JS - 6.5.0
- Yarn - 0.24.6
- Watchman - 4.7.0

## Project Main Dependencies

- [React Native](https://facebook.github.io/react-native/) - for hybrid development
- [Typescript](https://www.typescriptlang.org/) - for typing
- [MobX](https://github.com/mobxjs/mobx) - for state management
- [React Navigation](https://reactnavigation.org/) - to manage app navigation / routing
- [Apollo Client](https://github.com/apollographql/apollo-client) - to connect with the GraphQL API

## Setup

(This instructions assume you have [brew](https://brew.sh/), [node](https://nodejs.org/en/) and are using [yarn](https://yarnpkg.com/en/docs/cli/install) as the node package manager)

- Install Watchman `brew install watchman`
- Install the react-native CLI `npm install -g react-native-cli`
- Run `yarn install` to install the project's dependencies (please, use Yarn when running this project, so we can keep `yarn.lock` updated)

## Running the Project

- Run `yarn start:ios` for iOS version
- Run `yarn start:android` for Android version

*Important*: for the Android Version you may need to follow the steps listed on: 
- [React Native - Getting Started - Android Development Environment](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment)
- [React Native - Getting Started - Preparing the Android Device](https://facebook.github.io/react-native/docs/getting-started.html#preparing-the-android-device)

The corresponding emulator should be automatically opened.

## Troubleshooting

### Built app failing to run
Examples:
`Could not find index.<platform>.js`

- Please, check your `watchman` version. (The tested version is listed [here](Development-Environment-Setup))

- Try closing the React packager (terminal window that should open up automatically) and clean its cache by running `./node_modules/react-native/packager/packager.sh start --reset-cache`.

## Architecture Overview

_Provide an overview about the project's architecture, and the comunication with external servers and services. List all external communications and provide images and diagrams if necessary_

## Production/Staging Deploy

_Give instructions on how to deploy the app/server for production and Homologation environments. For more complicated deploys, you can use an auxiliary document on Docs/DEPLOY.md, pasting the link here._

## External components

_List all external components of the project and their versions. Highlight any technical issues with them and explain the use of the less obvious ones. For more complicated environments (i.e. complex servers), you can use an auxiliary documentation on Docs/COMPONENTS.md, pasting the link here._

## Main technical issues and debts

_List all main technical issues of the project. The ones that are relevant for future maintenance service._

_Also, list and link all technical debts issues left open on GitHub_
