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

    return {
      value:
        this.count === 1
          ? this.fiboFirst
          : this.count === 2
          ? this.fiboSecond
          : nextFiboNumber,
      done: !(this.max >= this.count)
    };
  }
};

fibo.max = 10;

for (val of fibo) {
  console.log(val);
}
