const Calculator = {
  sum: (...args) => {
    if (args.some(val => isNaN(val))) return "invalid input";
    return args.reduce((sum, a) => {
      return sum + a;
    }, 0);
  },
  diff: (...args) => {
    if (args.some(val => isNaN(val))) return "invalid input";
    return args.reduce((sum, a, index) => {
      if (index === 0) return a;
      return sum - a;
    }, 0);
  },
  product: (...args) => {
    if (args.some(val => isNaN(val))) return "invalid input";
    return args.reduce((sum, a) => {
      return sum * a;
    }, 1);
  }
};

module.exports = Calculator;
