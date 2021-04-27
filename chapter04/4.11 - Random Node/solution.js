const getRandomNode = (root) => {
  if (root === null) return null;
  if (root.left === null && root.right === null) return root;

  const rootSize = root.size;
  const randomNumber = Math.floor(Math.random() * rootSize) + 1;

  if (randomNumber === 1) return root;
  if (root.left && randomNumber > 1 && randomNumber <= root.left.size) {
    return getRandomNode(root.left);
  }

  return getRandomNode(root.right);
};
