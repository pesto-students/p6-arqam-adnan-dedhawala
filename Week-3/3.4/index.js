const createStack = () => {
  let items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      console.log(items.pop());
    },
    view() {
      console.log("items", items);
    }
  };
};

let stack = createStack();
stack.push(50);
stack.push(100);
stack.push(101);
stack.pop();
stack.view();
