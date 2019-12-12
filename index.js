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

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data)
  newNode.next = this.head

  this.head = newNode
  return this.head
}
