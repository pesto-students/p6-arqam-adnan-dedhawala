class QueUsingTwoStacks {
  #primary;
  #secondary;
  constructor() {
    this.#primary = [];
    this.#secondary = [];
  }

  enqueue = value => {
    if (this.#primary.length === 0) {
      this.#primary.push(value);
    } else {
      while (this.#primary.length > 0) {
        let temp = this.#primary.pop();
        this.#secondary.push(temp);
      }
      this.#primary.push(value);
      while (this.#secondary.length > 0) {
        let temp = this.#secondary.pop();
        this.#primary.push(temp);
      }
    }
  };

  dequeue = () => {
    let temp = this.#primary.pop() || -1;
    console.log("deque value", temp);
  };

  printValues = () => {
    for (let i = this.#primary.length - 1; i >= 0; i--) {
      console.log(this.#primary[i]);
    }
  };
}

let q = new QueUsingTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();

q.printValues();
