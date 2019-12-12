class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }
}

function createNewNode (data) {
  return new Node(data)
}

LinkedList.prototype.getAt = function (index) {
  let counter = 0
  let node = this.head

  while (node) {
    if (counter === index) return node
    counter++
    node = node.next
  }
  return null
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = createNewNode(data)
  newNode.next = this.head

  this.head = newNode
  return this.head
}

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = createNewNode(data)

  if (!this.head) {
    this.head = newNode
    return this.head
  }

  // Traverse the list to find the tail node
  let tail = this.head
  while (tail.next !== null) tail = tail.next
  tail.next = newNode

  return this.head
}
