# Auto add packages

The idea of this sandbox is to automatically add remotes applications added to `/packages` as discoverable by the main
app which resides in the root of the folder.

Every package is supposed to have `remote_manifest.json` file which declares main props of the remote.
Here is an example of one:

```json
{
  "name": "package1",
  "remoteEntryName": "remoteEntry.js",
  "port": "2001",
  "host": "localhost"
}
```

Newly added packages can be consumed by the host app right away without no changes made to webpack build.

## To add new package
1. create new folder under `./packages` directory (or copy the existing one and change the name)
2. Add `remote_manifest.json` with the same props as other packages
3. Copy webpack config from the other packages, and make sure exposed components configured correctly
4. Make sure `name` property in `package.json` is set correctly
5. Install all required dependencies and start the server
6. You can go to the host app and consume newly added package (**Make sure to restart host app server to catch up newley added package**)