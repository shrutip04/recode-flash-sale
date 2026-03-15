const queue = [];

function addToQueue(user) {
  queue.push(user);
  return queue.length;
}

function removeFromQueue() {
  return queue.shift();
}

function getQueueLength() {
  return queue.length;
}

module.exports = {
  addToQueue,
  removeFromQueue,
  getQueueLength
};