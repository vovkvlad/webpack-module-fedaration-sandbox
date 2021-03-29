# Monorepo test with lerna

you can read about lerna here: https://github.com/lerna/lerna

- To install all deps in all packages run `lerna bootstrap`
- To install all packages' deps with hoisting run `lerna bootstrap --hoist` (read more about it here https://github.com/lerna/lerna/tree/main/commands/bootstrap)

You can run commands in 2 different ways: with --stream or --parallel flags.
As per my understanding `--parallel` is more suitable for long running commands such as
running webpack dev server. Read more about it here https://github.com/lerna/lerna/tree/main/commands/bootstrap

To start dev server in all packages run
```shell
lerna run start --parallel
```

To build all packages run 
```shell
lerna run build --stream
```

## Note:
Shell application still should be run separately as it is not a lerna managed package