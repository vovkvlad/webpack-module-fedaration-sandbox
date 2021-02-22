# Simple sandbox with 2 simple apps

`app1` - is the host app `app2` - is a remote exposing the whole app to `app1`

(`app1` renders the header and horizontal line, below which the `app2` should be rendered)

Not much to say more.

## Run example locally:
1. go to app2 and run `npm i && npm start`
2. go to app1 and run `npm i && npm start`
3. go to `localhost:2001`