//create a function which checks if a number is present in an array using binary search recursive way.

const binarySearch = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) {
    return true;
  }
  if (arr[mid] > x) {
    return binarySearch(arr.slice(0, mid), x);
  }
  if (arr[mid] < x) {
    return binarySearch(arr.slice(mid + 1, arr.length), x);
  }
  return false;
};

//create a linked list in js using class where we need to have insertion, deletion, search, display methods.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;
  }

  setData(data) {
    this.data = data;
  }
}

const head = new Node(1);
head.setNext(new Node(2));
head.getNext().setNext(new Node(3));
head.getNext().getNext().setNext(new Node(4));

console.log(head);



