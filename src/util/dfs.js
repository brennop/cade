function dfs({ node, children }, f) {
  node = f(node);
  if (!children) return { node };

  children = children.map(c => dfs(c, f));
  return { node, children };
}

export default dfs;
