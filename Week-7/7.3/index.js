class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNewNode = value => {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  };

  printValues = () => {
    if (this.head === null) console.log("linked list is empty");
    else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  };

  detectLoop = () => {
    let start = this.head;
    while (start) {
      if (start.isVisited) return true;

      start.isVisited = true;
      start = start.next;
    }

    return false;
  };
}

let valueArr = [1, 2, 3, 4, 5, 6];
const linkedList = new LinkedList();
valueArr.forEach(val => {
  linkedList.addNewNode(val);
});

console.log(linkedList.detectLoop());
// create a loop
linkedList.head.next.next.next = linkedList.head;

console.log(linkedList.detectLoop());
