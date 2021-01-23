# dom-identifier

[![Build Status](https://travis-ci.com/WebReflection/dom-identifier.svg?branch=main)](https://travis-ci.com/WebReflection/dom-identifier) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/dom-identifier/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/dom-identifier?branch=main)

An utility to retrieve a unique node path, and find it later on.

```js
import {getNode, getPath} from 'dom-identifier';

const node = document.getElementById('any');
const path = getPath(node);
// [1, 34, 12, 7]

getNode(path) === node;
// true
```
