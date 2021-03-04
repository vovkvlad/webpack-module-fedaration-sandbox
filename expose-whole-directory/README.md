# Try to import the whole directory

This sandbox is an attempt to test how the whole directory with components/other exportable JS primitives can be exposed

`pacakge-1` - is a usual remote exposing components one-by-one, whereas `package-2` has `index.js` exposing
all of the directory contents as an object.

in the main `App.js` components from `package-1` are imported via React.lazy dynamic import, whereas components
from `package-2` are imported as usual import:

```js
import Components2 from "package2/components";
```

the only drawback of using usual import from `index.js` that gathers all components is it's usage in the render method:

```js
<p>Below will be some content from Package 2</p>
      <Components2.Header>Inner content of package 2</Components2.Header>
....
```
But it can save up enormous expose lists in the webpack configs
