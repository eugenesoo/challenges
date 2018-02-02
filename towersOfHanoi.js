class Tower {
  constructor(n) {
    this[1] = [];
    this[2] = [];
    this[3] = [];

    for (let i = n; i > 0; i -= 1) {
      this['1'].push(i);
    }
  }

  moveAllDisks(n, start, end, buffer = 6 - start - end) {
    if (n === 1) {
      const plate = this[start].pop();
      this[end].push(plate);
      return;
    }

    this.moveAllDisks(n - 1, start, buffer);
    const plate = this[start].pop();
    this[end].push(plate);
    this.moveAllDisks(n - 1, buffer, end);
  }
}
