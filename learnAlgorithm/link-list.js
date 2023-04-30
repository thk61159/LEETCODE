class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.length = 0
	}

	push(value) {
		let newNode = new Node(value)
		if (this.head === null) {
			this.head = newNode
		} else {
			let currentNode = this.head
			while (currentNode.next !== null) {
				currentNode = currentNode.next
			}
			currentNode.next = newNode
		}
		this.length++
	}

	pop() {
		if (!this.head) return null
		let temp = null
		if (this.length === 1) {
			temp = this.head
			this.head = null
		} else {
			let currentNode = this.head
			for (let i = 1; i < this.length - 1; i++) {
				currentNode = currentNode.next
			}
			temp = currentNode.next
			currentNode.next = null
		}
		this.length--
		return temp
	}

	shift() {
		if (!this.head) return null
		let temp = null
		if (this.length === 1) {
			temp = this.head
			this.head = null
		} else {
			temp = this.head
			this.head = this.head.next
		}
		this.length--
		return temp
	}

	unshift(value) {
		if (!this.head) {
			this.head = new Node(value)
		} else {
			let temp = this.head
			this.head = new Node(value)
			this.head.next = temp
		}
		this.length++
		return
	}

	insertAt(index, value) {
		if (index > this.length || index < 0) {
			return null
		} else if (index === 0) {
			this.unshift(value)
			return
		} else if (index === this.length) {
			this.push(value)
			return
		}
		let currentNode = this.head
		let newNode = new Node(value)
		for (let i = 1; i < index; i++) {
			currentNode = currentNode.next
		}
		newNode.next = currentNode.next
		currentNode.next = newNode
		this.length++
		return
	}

	removeAt(index) {
		if (index > this.length - 1 || index < 0) {
			return null
    } else if (index === 0) {
      return this.shift()
    } else if (index === this.length - 1) {
      return this.pop()
		}
		let currentNode = this.head
		for (let i = 1; i < index; i++) {
			currentNode = currentNode.next
    }
    let temp = currentNode.next
		currentNode.next = currentNode.next.next
		this.length--
		return temp
  }
  
  get(index) {
    if (index > this.length - 1 || index < 0) {
      return null
    } 
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
			currentNode = currentNode.next
    }
    return currentNode.value
  }

	printAll() {
		if (!this.length) {
			console.log('empty linked list')
			return
		} else {
			let currentNode = this.head
			while (currentNode !== null) {
				console.log(currentNode.value)
				currentNode = currentNode.next
			}
		}
		console.log('Linked List length = ' + this.length)
	}
}

let myLinkedList = new LinkedList()
// let popvalue = myLinkedList.pop()
// let shiftvalue = myLinkedList.shift()
myLinkedList.push('Ken')
// let popvalue = myLinkedList.pop()
myLinkedList.push('Ben')
myLinkedList.push('Shen')
// myLinkedList.push('Kevin')
// let shiftvalue = myLinkedList.shift()
// myLinkedList.unshift('Lin')
// myLinkedList.shift()
// let result = myLinkedList.removeAt(0)
let result = myLinkedList.get(3)

// myLinkedList.printAll()
console.log(result)
