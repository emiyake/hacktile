# Project Name

## Bookmarks

- [Site]()
- [Scope]()
- [Technical specification]()
- [MPT]()
- [Apiary]()
- [Huboard]()
- [ScrumD]()
- [Basecamp]()
- [Drive]()
- [Android project]()
- [Homolog env]()
- [Hockey app]()
- [Hockey app staging]()
- ...

## Development Environment Setup

_List all versions of IDEs (XCode, Android Studio etc.) and base components (Node.js, Ruby, MongoDB etc.)._

_Give instructions to set up the development environment setup. For more complicated environment setup (i.e. complex servers), you can use an auxiliary documentation on Docs/ENVIRONMENT.md, pasting the link here._

- XCode - 7.0.1
- Cocoapods - 0.9.2
- Node.JS - 3.3.1

To compile this project you must setup a VPN connection between the client's and your machine, following the instructions below:

- Setup local VPN for address 10.200.200.155
- User and password from Passpack entry "ABC"

## Running the Project

_List instructions for running the project on Development environment_

- Run `npm install`
- Run `gulp serve`
- Etc.

## Architecture Overview

_Provide an overview about the project's architecture, and the comunication with external servers and services. List all external communications and provide images and diagrams if necessary_

## Production/Staging Deploy

_Give instructions on how to deploy the app/server for production and Homologation environments. For more complicated deploys, you can use an auxiliary document on Docs/DEPLOY.md, pasting the link here._

## External components

_List all external components of the project and their versions. Highlight any technical issues with them and explain the use of the less obvious ones. For more complicated environments (i.e. complex servers), you can use an auxiliary documentation on Docs/COMPONENTS.md, pasting the link here._

- AFNetworking - 2.5.0
- PonyDebugger - 0.4.0
- TQTStylesheets - ~> 0.1.0
- iCarousel - 1.8.1

There is a problem with iCarousel versions 1.9.0+, that don't support something we need. This way, we kept the version 1.8.1.

- XCDYouTubeKit - ~> 2.4.1

Used for playing YouTube videos.

## Main technical issues and debts

_List all main technical issues of the project. The ones that are relevant for future maintenance service._

_Also, list and link all technical debts issues left open on GitHub_
