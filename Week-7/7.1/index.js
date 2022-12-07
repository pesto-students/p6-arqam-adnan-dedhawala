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

  reverseLinkedList = () => {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  };
}

let valueArr = [1, 2, 3, 4, 5, 6];
const linkedList = new LinkedList();
valueArr.forEach(val => {
  linkedList.addNewNode(val);
});

linkedList.reverseLinkedList();

linkedList.printValues();
