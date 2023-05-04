//2215. Find the Difference of Two Arrays
function findDifference2215() {
  var findDifference = function (nums1, nums2) {
		let counter = {}
		let ans = [[], []]
		let arr1 = new Set(nums1)
		let arr2 = new Set(nums2)
		arr1.forEach(e => {
			if (!counter[e]) {
				counter[e] = 1
			}
		})
		arr2.forEach(e => {
			if (!counter[e]) {
				counter[e] = -1
			} else {
				counter[e] += 1
			}
		})

		for (let key in counter) {
			if (counter[key] == 1) {
				ans[0].push(key)
			} else if (counter[key] == -1) {
				ans[1].push(key)
			}
		}

		return ans
	}
	findDifference([1, 2, 3], [2, 4, 6])
  
}

// 219. Contains Duplicate II
function containsNearbyDuplicate0219() {
  var containsNearbyDuplicate = function (nums, k) {
		let map = {}
		for (let i = 0; i < nums.length; i++) {
			if (map[nums[i]] !== undefined) {
				map[nums[i]].push(i)
			} else {
				map[nums[i]] = [i]
			}
		}
		console.log(map)
		for (let key in map) {
			for (let i = 0; i < map[key].length - 1; i++) {
				if (map[key][i + 1] - map[key][i] <= k) {
					return true
				}
			}
		}
		return false
	}
	console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
}

// 643. Maximum Average Subarray I
function findMaxAverage0643() {
  //O(n^2)
  var findMaxAverage = function (nums, k) {
		let max = -Infinity
		for (let i = 0; i <= nums.length - k; i++) {
			let temp = 0
			for (let j = i; j < i + k; j++) {
				temp += nums[j]
			}
			if (temp > max) {
				max = temp
			}
		}
		return max / k
  }
  console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
  console.log(findMaxAverage([5], 1))
  // O(n)
  var findMaxAverage2 = function (nums, k) {
		let index = 0
		let sum = 0

		while (index < k) {
			sum += nums[index]
			index++
		}

		let maxAvg = sum / k

		while (index < nums.length) {
			sum = sum + nums[index] - nums[index - k]
			maxAvg = Math.max(maxAvg, sum / k)
			index++
		}

		return maxAvg
	}
}