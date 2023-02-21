// 1. Two Sum
/* O(n^2)
var twoSum = function (nums, target) {
  for i from 0 to (nums.length-1) -> i++
    for j = i+1 from i+1 to (nums.length-1) -> j++
      if nums[i]+nums[j] === target
        return [i,j]
}
*/
var twoSum1 = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result = [i, j]
				return result
			}
		}
	}
}

/* O(n)
var twoSum = function (nums, target) {
  let hashTable = {}
  for i from 0 to (nums.length-1) -> i++
    if (hashTable[target-nums[i]]!== undefined) { 
    return [hashTable[target - nums[i]], i]
    }else {
    hashTable[nums[i]] = i
    }
}
*/
var twoSum = function (nums, target) {
	let hashTable = {}
	for (let i = 0; i < nums.length; i++) {
		if (hashTable[target - nums[i]] !== undefined) {
			//如果hashTable裡有對應的數字
			console.log([hashTable[target - nums[i]], i])
			return [hashTable[target - nums[i]], i] // return 相應位置
		} else {
			hashTable[nums[i]] = i //1. 將arr中的數字存為key並記錄位置
		}
		console.log([hashTable])
	}
}

// twoSum([1, 5, 11, 15, 16, 18, 20, 2, 7], 9)

//290. Word Pattern
var wordPattern = function (pattern, s) {
	let hashTable = {}
	let setTable = new Set()
	s = s.split(' ')
	if (pattern.length !== s.length) return false
	for (let i = 0; i < pattern.length; i++) {
		if (!hashTable[pattern[i]] && !setTable.has(s[i])) {
			hashTable[pattern[i]] = s[i]
			setTable.add(s[i])
		} else if (hashTable[pattern[i]] !== s[i]) {
			return false
		}
		// console.log(hashTable, setTable)
	}
	return true
}
/* // 'constructor' can not used as key so this method can not use
var wordPattern = function (pattern, s) {
	let hashTable = {}
	let setTable = {}
	s = s.split(' ')
	if (pattern.length !== s.length) return false
	for (let i = 0; i < pattern.length; i++) {
		if (!hashTable[pattern[i]] && setTable[s[i]] === undefined) {
			hashTable[pattern[i]] = s[i]
			setTable[s[i]] = i
		} else if (hashTable[pattern[i]] !== s[i]) {
			return false
		}
		console.log(hashTable, setTable)
	}
	return true
}*/
console.log(wordPattern('abba', 'dog dog dog dog'))
console.log(wordPattern('abba', 'dog constructor constructor dog'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abc', 'c b a'))
console.log(wordPattern('abc', 'c b c'))

// 383. Ransom Note
