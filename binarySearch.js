// 35. Search Insert Position
function SearchInsertPosition0035() {
  //O(log(n)) 82,86
	var searchInsert = function (nums, target) {
		let start = 0
		if (target <= nums[start]) return 0
		let end = nums.length - 1
		if (target > nums[end]) return nums.length
		let mid = Math.floor((start + end) / 2)
		while (end - start > 1) {
			if (target > nums[mid]) {
				start = mid++
			} else if (target < nums[mid]) {
				end = mid--
			} else {
				return mid
			}
		}

		return end
	}
	console.log(searchInsert([1, 3, 5, 6],5))
	console.log(searchInsert([1, 3, 5, 6],2))
	console.log(searchInsert([1, 3, 5, 6], 7))
}
SearchInsertPosition0035()
