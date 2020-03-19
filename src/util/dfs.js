function dfs(node, f) {
  node = f(node);
  if (!node.children) return node;

  const children = node.children.map(c => dfs(c, f));
  return { ...node, children };
}

export default dfs;
