const calcPath = (int) => {
  // get width/height of where int is located
  let gridSize = Math.ceil(Math.sqrt(int));
  // make odd because grid is always odd
  gridSize = gridSize & 1 ? gridSize : gridSize + 1;
  // get all edges
  const bottomRight = gridSize * gridSize;
  const bottomLeft = bottomRight - (gridSize - 1);
  const topLeft = bottomLeft - (gridSize - 1);
  const topRight = topLeft - (gridSize - 1);
  // check where int is, if it is at a corner, return ans
  if (int === bottomRight || int === bottomLeft || int === topLeft || int === topRight) {
    return gridSize - 1;
  }
  // check where int is
  const side = Math.floor(((gridSize * gridSize) - int) / gridSize);
  // find int from midPoints
  const midPoint0 = (bottomLeft + bottomRight) / 2;
  const midPoint1 = (bottomLeft + topLeft) / 2;
  const midPoint2 = (topLeft + topRight) / 2;
  const midPoint3 = (topRight - (gridSize - 1 / 2));
  if (side === 0) {
    if (int - midPoint0 < 0) {
      return ((gridSize - 1 ) / 2) - (int - midPoint0);
    } else {
      return gridSize - 1 - (int - midPoint0);
    }
  }
  if (side === 1) {
    if (int - midPoint1 < 0) {
      return gridSize - 1 + (int - midPoint1);
    } else {
      return gridSize - 1 - (int - midPoint1);
    }
  }
  if (side === 2) {
    if (int - midPoint2 < 0) {
      return gridSize - 1 + (int - midPoint2);
    } else {
      return gridSize - 1 - (int - midPoint2);
    }
  }
  if (side === 3) {
    if (int - midPoint3 < 0) {
      return gridSize - 1 + (int - midPoint3);
    } else {
      return gridSize - 1 - (int - midPoint3);
    }
  }
}
