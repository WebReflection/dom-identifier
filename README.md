# dom-identifier

An utility to retrieve a unique node path, and find it later on.

```js
import {getNode, getPath} from 'dom-identifier';

const node = document.getElementById('any');
const path = getPath(node);
// [1, 34, 12, 7]

getNode(path) === node;
// true
```
