export function map(node, f) {
  node = f(node);
  if (!node.children) return node;

  const children = node.children.map(c => map(c, f));
  return { ...node, children };
}

export function reduce(node, reducer, accumulator) {
  const value = reducer(node, accumulator);
  if (!node.children) return value;

  return node.children.reduce(
    (acc, child) => reduce(child, reducer, acc),
    value
  );
}

