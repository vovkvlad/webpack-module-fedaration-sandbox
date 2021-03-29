# Monorepo test with npm@7 workspaces

you can read about npm workspaces here: https://docs.npmjs.com/cli/v7/using-npm/workspaces

Current capabilities I have found:
1. It lets you install dependencies from the root repository for all packages and host app
2. You can run command for specific workspaces with `--workspace=*workspace_name*` flag

## Note:
Also you can run command for several workspaces at once:
```shell
npm run build --workspace=react_app --workspace=admin_app
```
it won't let you run several devs servers at once. 