class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Peek the front element without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}


function reverseFirstK(queue, k) {
  if (k <= 0 || queue.isEmpty()) {
    return;
  }

  const stack = [];

  // Step 1: Dequeue first k elements and push onto the stack
  for (let i = 0; i < k; i++) {
    if (!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }
  }

  // Step 2: Pop from the stack and enqueue back to the queue
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  // Step 3: Move the remaining elements (size - k) to the back of the queue
  const remaining = queue.size();
  for (let i = 0; i < remaining; i++) {
    queue.enqueue(queue.dequeue());
  }
}

function generateBinaryNumbers(n) {
  const queue = new Queue();
  const result = [];

  // Step 1: Enqueue the first binary number
  queue.enqueue("1");

  // Step 2: Generate binary numbers
  for (let i = 1; i <= n; i++) {
    const current = queue.dequeue(); // Get the front element
    result.push(current); // Add it to the result

    // Generate the next two binary numbers
    queue.enqueue(current + "0");
    queue.enqueue(current + "1");
  }

  return result;
}

function firstNonRepeatingCharacter(stream) {
  const queue = new Queue();
  const frequencyMap = {};
  const result = [];

  for (const char of stream) {
    // Step 1: Add character to queue and update frequency map
    queue.enqueue(char);
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;

    // Step 2: Remove characters from the queue with frequency > 1
    while (!queue.isEmpty() && frequencyMap[queue.front()] > 1) {
      queue.dequeue();
    }

    // Step 3: Add the first non-repeating character or '#' if none exist
    result.push(queue.isEmpty() ? '#' : queue.front());
  }

  return result;
}

// Example Usage
const stream = "geeksforgeeksandgeeksquizfor";
console.log(`Stream: ${stream}`);
console.log("First non-repeating characters:");
console.log(firstNonRepeatingCharacter(stream).join(""));

