import { Queue } from "./Queue.js";
import { PriorityQueue } from "./pQueue.js";

function hotPotato(nameList, num) {
  let queue = new Queue(); // {1}
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); // {2}
  }
  let eliminated;
  while (queue.size() > 1) {
    for (let i = 0; i < (Math.random() * nameList.length); i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue();// {4}
    console.log(eliminated + ' was eliminated from the Hot Potato game.');
  }
  return queue.dequeue();// {5}
}

const names = ['Jo', 'Ja', 'Ca', 'In', 'Cr'];
let winner = hotPotato(names, 7);
console.log('The Winner is: ' + winner);

