# AngularJs Complex example

This sandbox emulates more complex application that is closer to real world example that we have.
Particularly, it emulates totally deprecated UI sections writen in angular JS, combined sections with angular and react
and react-only pages.

Each section except leaderboard has sub-routing, to test how subrouting works with `@ui-router/hybrid`
and federated modules in angularJS and react.

Admin section has dummy permissions that can change behaviour of other parts of application.
NgService is shared as a federated module and is consumed by the host app and other remotes.

## Run sandbox locally

1. Go to each folder under `packages` and run `npm i`
2. In each package run either `npm run build` or `npm start`
3. In the root directory of the sandbox run `npm i`
4. In the root directory run `npm start` and go to http://localhost:2000/