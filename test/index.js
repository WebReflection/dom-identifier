const {document} = require('basichtml').init();

const {getNode, getPath} = require('../cjs');

document.documentElement.innerHTML = '<div><p>1</p><p>2</p></div>';

const div = document.querySelector('div');
const p = document.querySelectorAll('p')[1];

let path = getPath(p);

console.assert(getNode(path) === p);

path = getPath(p, div);
console.assert(getNode(path, div) === p);
