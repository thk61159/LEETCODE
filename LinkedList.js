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
	function ListNode(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
	let x = new ListNode(0, null)
	// x.next = new ListNode(1, null)
	// x.next.next = new ListNode(2, null)
	// x.next.next.next = new ListNode(3, null)
	//  x.next.next.next.next = new ListNode(3, null)
	var deleteDuplicates = function (head) {
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
mergeTwoLists0021()