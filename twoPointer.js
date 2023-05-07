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

// 28. Find the Index of the First Occurrence in a String

function findstrStr0028() {
	/**
	 * @param {string} haystack
	 * @param {string} needle
	 * @return {number}
	 */
  var strStr = function (haystack, needle) {
    let pointer1 = 0
    let pointer2 = 0
    while (pointer1 < haystack.length) {
      console.log(haystack[pointer1],pointer1, needle[pointer2], pointer2)
      if (haystack[pointer1] !== needle[pointer2]) {
        pointer1 -= pointer2 //回到相同位置 65行會再++
        pointer2 = 0 //重新計算比對字串
      } else {
				if (pointer2 === needle.length - 1) return pointer1 - pointer2 //比到比對字串最後一位 則回傳在haystack的位置
				pointer2++
			}
      pointer1++
    }
    return -1
  }
  // console.log(strStr('sadbutsad', 'sad'))
  // console.log(strStr('leetcode', 'leeto'))
  console.log(strStr('mississippi', 'issip'))
}
// 1346. Check If N and Its Double Exist
/**
 * 講這題
 * 講這題
 * 講這題
 */
function checkIfExist1346() {
	/**
	 * @param {number[]} arr
	 * @return {boolean}
	 */
	var checkIfExist = function (arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[i] / 2 === arr[j] || arr[i] * 2 === arr[j]) return true
			}
		}
		return false
  }

  var checkIfExist2 = function (arr) {
    let map = {}
		for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]]) return true
      //如果輪到的數不存在map，則把後面可能檢查到的數加入map
			if (!(arr[i] % 2)) {
				map[arr[i] / 2] = true 
			}
			map[arr[i] * 2] = true
		}
		return false
  }
  var checkIfExist25 = function (arr) {
    //參考
		const hashmapEven = new Map()
		const hashmapOdd = new Map()

		for (let i = 0; i < arr.length; i++) {
			const item = arr[i]
			if (item % 2) {//奇數
				if (hashmapEven.has(item * 2)) return true
				hashmapOdd.set(item, 1)
			} else {
				if (
					hashmapOdd.has(item / 2) ||
					hashmapEven.has(item / 2) ||
					hashmapEven.has(item * 2)
				)
					return true
				hashmapEven.set(item, 1)
			}
		}
		return false
	}

  var checkIfExist3 = function (arr) {
    //參考
    let left = 0
		let	right = 1

		while (left < arr.length - 1) {
			if (arr[left] == arr[right] * 2 || arr[right] == arr[left] * 2) {
				return true
			} else if (right === arr.length - 1) {
				left++
				right = left + 1
			} else {
				right++
			}
		}
		return false
	}
}

// 88. Merge Sorted Array
function MergeSortedArray0088() {
  var merge = function (nums1, m, nums2, n) {
		let pointer1 = 0
		let pointer2 = 0
		let temp = [...nums1]
		while (pointer1 < m && pointer2 < n) {
			if (temp[pointer1] > nums2[pointer2]) {
				nums1[pointer1 + pointer2] = nums2[pointer2]
				pointer2++
			} else {
				nums1[pointer1 + pointer2] = temp[pointer1]
				pointer1++
			}
		}
		if (pointer1 < m) {
			while (pointer1 < m) {
				nums1[pointer1 + pointer2] = temp[pointer1]
				pointer1++
			}
		}
		if (pointer2 < n) {
			while (pointer2 < n) {
				nums1[pointer1 + pointer2] = nums2[pointer2]
				pointer2++
			}
		}
		return nums1
	}
  console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6],3))
}
MergeSortedArray0088()

// 202. Happy Number
function HappyNumber0202() {
  
  var isHappy = function (n) {
    let set = new Set()
    function x(n) {
      if (n === 1) return true
			if (set.has(n)) return false
			set.add(n)

			let result = 0
			function count(n) {
				result += (n % 10) ** 2
				if (n < 10) return result
				return count(Math.floor(n / 10))
			}
			n = count(n)

			return x(n)
    }
    return x(n)
  }
  
  for (let i = 1; i < 10; i++){
   console.log(isHappy(i),i)
  }
  
}
HappyNumber0202()