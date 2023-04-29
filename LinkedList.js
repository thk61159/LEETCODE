function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
//83. Remove Duplicates from Sorted List
function deleteDuplicates0083() {
	/**
	 * Definition for singly-linked list.
	 * function ListNode(val, next) {
	 *     this.val = (val===undefined ? 0 : val)
	 *     this.next = (next===undefined ? null : next)
	 * }
	 */
	/**
	 * @param {ListNode} head
	 * @return {ListNode}
	 */

	let x = new ListNode(0, null)
	x.next = new ListNode(1, null)
	x.next.next = new ListNode(2, null)
	// x.next.next.next = new ListNode(3, null)
	//  x.next.next.next.next = new ListNode(3, null)
	var deleteDuplicates = function (head) {
		console.log(head.length)
		let currentNode = head
		let temp = head?.next
		while (currentNode && temp) {
			if (currentNode.val === temp.val) {
				currentNode.next = temp.next
			} else {
				currentNode = currentNode.next
			}
			temp = temp.next
		}
		return head
	}
	deleteDuplicates(x)
}
deleteDuplicates0083()

//141. Linked List Cycle
function LinkedListCycle0141() {
	let x = new ListNode(0, null)
	x.next = new ListNode(1, null)
	x.next.next = new ListNode(2, null)
	x.next.next.next = new ListNode(3, null)
	let y = x.next.next
	x.next.next.next.next = y
	console.log(x.val)
	console.log(x.next.val)
	console.log(x.next.next.val) //2
	console.log(x.next.next.next.val) //3
	console.log(x.next.next.next.next.val) //2
	console.log(x.next.next.next.next.next.val) //3
	console.log(x.next === x.next.next.next) //false
	console.log(x.next.next === x.next.next.next.next) //true
	console.log(x.next.next.next === x.next.next.next.next.next) //true
	console.log(x.next.next.next.next === x.next.next.next.next.next.next) //true
	// 找到鏈表中兩個位置的listnode(call by ref)是一樣的
	var hasCycle = function (head) {
		// 發現circle return true else return false
		const map = {}
		while (head) {
			if (map[head.value]) {
				let arrLen = map[head.value].length
				for (let i = 0; i < arrLen; i++) {
					if (map[head.value][i] === head) {
						return true
					}
				}
				map[head.value].push(head)
			} else {
				map[head.value] = [head]
			}
			head = head.next
		}
		return false
	}
}
LinkedListCycle0141()
