# Packages are built to a single dist directory

The aim of this sandbox is to test whether it is possible to build packages to a single dist directory, and host them by 1
dev server (the one hosting the main app)

`package1` is configured to build itself into the project's root `dist/package1`

the remote of the host app is configured next way:

```js
 remotes: {
  'package1': 'package1@/package1/remoteEntry.js'
 }
```

## NOTE:
**To Run application you need to build `package1` in advance so that it is present in `dist` folder**

Also, if you want to run `package1` in dev mode - it totally works, with the only note that webpack devServers
`writeToDisk` prop needs to be set to true

## Run Sandbox:
1. Build `package-1` or start its dev server by running either `npm run build` or `npm start` in the `package-1` folder
2. start the host app by running `npm start` in the root folder of the sandbox
