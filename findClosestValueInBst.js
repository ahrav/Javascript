function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(currentNode.value - target))
      closest = currentNode.value;

    if (target < currentNode.value) currentNode = currentNode.left;
    else if (target > currentNode.value) currentNode = currentNode.right;
    else break;
  }
  return closest;
}
