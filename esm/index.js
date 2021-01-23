const {indexOf} = [];

/**
 * Returns an array of `childNodes` indexes, per each parent element found.
 * @param {Node} node a live DOM node.
 * @param {Element?} root the top-most element to crawl up to.
 * @returns {number[]} each parent `childNodes` index where to find the node.
 */
export const getPath = (node, root) => {
  const path = [];
  let parentElement;
  while (parentElement = node.parentElement) {
    path.push(indexOf.call(parentElement.childNodes, node));
    if ((node = parentElement) == root)
      break;
  }
  return path;
};

/**
 * Returns the `Node` found through the provided `path` array.
 * @param {number[]} path an array of indexes retrieved through `getPath(...)`.
 * @param {Element?} root the top most `parentElement` to look for `childNodes` indexes, `documentElement` by default.
 * @return {Node} the last node found after each index in the `path`.
 */
export const getNode = (path, root) => path.reduceRight(
  // crawl down from the document.documentElement
  (parentElement, i) => parentElement.childNodes[i],
  root || document.documentElement
);
