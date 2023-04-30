class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
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

let myStack = new Stack()
myStack.push('Ken')
myStack.push('Ben')
myStack.push('Shen')

myStack.printAll()

