// 283. Move Zeroes
function MoveZeroes0283() {
  //73,26
  var moveZeroes = function (nums) {
    let pointer1 = 0
    let pointer2 = nums.length-1
    while (pointer1 < pointer2) {
			if (nums[pointer1] === 0) {
				nums[nums.length] = 0
        nums.splice(pointer1, 1)
        pointer2 --
			} else {
				pointer1++
			}
		}
    return nums 
    
  }
  console.log(moveZeroes([0, 1, 0, 3, 12]))
}
// MoveZeroes0283()
// 26. Remove Duplicates from Sorted Array
function RemoveDuplicates0026() {
  //O(n) 64, 66
  var removeDuplicates = function (nums) {
    let start = 0
    let end = 1
    let k
    while (end < nums.length) {
      
      if (nums[start] !== nums[end]) {
        nums[start + 1] = nums[end]
        start++
      } 
      end++
    }
    nums = nums.slice(0, start+1)
    return nums
  }
  console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
  
}
RemoveDuplicates0026()