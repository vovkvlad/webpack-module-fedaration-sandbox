# Different Dependencies

This is a sandbox for experimenting with how webpack module federation handle dependencies from different packages

`package1` uses `daysjs` and `lodash` in its source code.
`pacakge2` uses `lodash` only.

You can start all 3 apps and s investigate network tab to see that lodash is downloaded only once.

Also feel free to play around and add/remove any other dependencies you like