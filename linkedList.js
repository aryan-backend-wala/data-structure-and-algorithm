// Define a Node class
class Node {
  constructor(value) {
    this.value = value;  // The data
    this.next = null;    // Pointer to the next node
  }
}

// Define a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;  // Points to the first node in the list
  }

  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode; // If the list is empty, set head to the new node
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Print the list
  printList() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(' -> '));
  }

  reverse() {
    let prev = null;
    let current = this.head;
  
    while (current !== null) {
      let next = current.next; // Store the next node
      current.next = prev;     // Reverse the pointer
      prev = current;          // Move prev one step forward
      current = next;          // Move current one step forward
    }
  
    this.head = prev; // Update the head to the last node
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new Node(-1); // Dummy node to start the merged list
  let current = dummy;

  // Traverse both lists
  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Append the remaining nodes, if any
  current.next = list1 !== null ? list1 : list2;

  return dummy.next; // Return the merged list (skip the dummy node)
}

