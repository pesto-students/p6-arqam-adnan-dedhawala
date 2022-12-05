const fibo = {
  count: 0,
  fiboNumber: 0,
  fiboFirst: 0,
  fiboSecond: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    this.count = this.count + 1;
    let nextFiboNumber;
    if (this.count > 2) {
      nextFiboNumber = this.fiboFirst + this.fiboSecond;
      this.fiboFirst = this.fiboSecond;
      this.fiboSecond = nextFiboNumber;
    }

    switch (this.count) {
      case 1:
        return { value: this.fiboFirst, done: !(this.max >= this.count) };
      case 2:
        return { value: this.fiboSecond, done: !(this.max >= this.count) };

      default:
        return { value: nextFiboNumber, done: !(this.max >= this.count) };
    }
  }
};

fibo.max = 10;

for (val of fibo) {
  console.log(val);
}
