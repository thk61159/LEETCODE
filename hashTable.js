// 1. Two Sum
function TwoSum0001() {
	// O(n^2)
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

	//O(n)
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

	twoSum([1, 5, 11, 15, 16, 18, 20, 2, 7], 9)
}
// TwoSum0001()
//==================================================//
//290. Word Pattern

function WordPattern0290() {
	//O(n) 66,86
	var wordPattern = function (pattern, s) {
		let hashTable = {} 
		let setTable = new Set([1,1,1,])//Set{1}
		s = s.split(' ')
		if (pattern.length !== s.length) return false
		for (let i = 0; i < pattern.length; i++) {
			if (!hashTable[pattern[i]] && !setTable.has(s[i])) {
				hashTable[pattern[i]] = s[i]
				setTable.add(s[i])
			} else if (hashTable[pattern[i]] !== s[i]) {
				return false
			}
			console.log(hashTable, setTable)
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
	//O(n) 76,17
	var wordPattern1 = function (pattern, s) {
		str = s.split(' ')

		if (str.length != pattern.length) {
			return false
		}
		var hash = {}
		for (var i = 0; i < str.length; i++) {
			if (hash[pattern[i]]) {
				if (hash[pattern[i]] !== str[i]) {
					return false
				}
			} else {
				//hashtable中是不是存在str中的值有則代表重複的對應字所以錯誤
				if (Object.values(hash).indexOf(str[i]) !== -1) {
					return false
				} else {
					hash[pattern[i]] = str[i]
				}
			}
		}

		return true
	}
	console.log(wordPattern('abba', 'dog dog dog dog'))
	console.log(wordPattern('abba', 'dog constructor constructor dog'))
	console.log(wordPattern('abba', 'dog cat cat dog'))
	console.log(wordPattern('abc', 'c b a'))
	console.log(wordPattern('abc', 'c b c'))
}
// WordPattern0290()
//==================================================//
// 383. Ransom Note
function RansomNote0383() {
	//O(n) 43,45
	var canConstruct = function (ransomNote, magazine) {
		if (ransomNote.length > magazine.length) return false
		let hashTable = {}
		for (let i = 0; i < magazine.length; i++) {
			if (ransomNote[i] === magazine[i]) {
				continue
			} else {
				//加減兩字串中的字符
				if (i < ransomNote.length) {
					if (hashTable[ransomNote[i]] !== undefined) {
						hashTable[ransomNote[i]] += 1
					} else {
						hashTable[ransomNote[i]] = 1
					}
				}
				if (hashTable[magazine[i]] !== undefined) {
					hashTable[magazine[i]] -= 1
				} else {
					hashTable[magazine[i]] = -1
				}
			}
			console.log(hashTable)
		}

		//如果hashTable有值大於零代表錯誤
		for (let key in hashTable) {
			if (hashTable[key] > 0) return false
		}
		return true
	}
	console.log(canConstruct('aab', 'baa'))
	console.log(canConstruct('aab', 'bba'))
	//O(n)60,48
	var canConstruct2 = function (ransomNote, magazine) {
		if (ransomNote.length > magazine.length) return false
		let hashTable = {}
		//先將magazine加入hashTable
		for (let i = 0; i < magazine.length; i++) {
			if (hashTable[magazine[i]] !== undefined) {
				hashTable[magazine[i]] += 1
			} else {
				hashTable[magazine[i]] = 1
			}
		}

		for (let i = 0; i < ransomNote.length; i++) {
			//hashTable中沒有ransomNote[i]
			if (
				hashTable[ransomNote[i]] === 0 ||
				hashTable[ransomNote[i]] === undefined
			) {
				return false
			} else {
				hashTable[ransomNote[i]] -= 1
			}
		}
		return true
	}
	//O(n) 39,84 ＃不知道為什麼這樣省記憶體
	var canConstruct1 = function (ransomNote, magazine) {
		const map = new Map()

		for (let i = 0; i < magazine.length; i++) {
			if (map.has(magazine[i])) {
				map.set(magazine[i], map.get(magazine[i]) + 1)
			} else {
				map.set(magazine[i], 1)
			}
		}

		for (let i = 0; i < ransomNote.length; i++) {
			//Map中沒有ransomNote[i]
			if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
				return false
			}
			map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
		}

		return true
	}
}
// RansomNote0383()
//==================================================//
//268. Missing Number
function MissingNumber0268() {
	//O(n) 91,35
	var missingNumber = function (nums) {
		let missingNum = 0
		nums.push(0)
		for (let i = 0; i < nums.length; i++) {
			missingNum += i - nums[i]
			console.log(i, nums[i], missingNum)
		}
		return missingNum
	}
	//O(n) 99,75 與使用push比差很多
	var missingNumber2 = function (nums) {
		let missingNum = 0
		nums[nums.length] = 0
		for (let i = 0; i < nums.length; i++) {
			missingNum += i - nums[i]
			console.log(i, nums[i], missingNum)
		}
		return missingNum
	}
	console.log(missingNumber([3, 0, 1]))
}
// MissingNumber()
//==================================================//
//409. Longest Palindrome
function LongestPalindrome0409() {
	//O(n) 86, 56
	var longestPalindrome = function (s) {
		let hashTable = {}
		let oddExist = false
		let len = 0
		for (let i = 0; i < s.length; i++) {
			if (hashTable[s[i]]) {
				hashTable[s[i]] += 1
			} else {
				hashTable[s[i]] = 1
			}
		}
		console.log(hashTable)
		for (let key in hashTable) {
			if (!oddExist && hashTable[key] % 2) {
				oddExist = true
			}
			len += Math.floor(hashTable[key] / 2) * 2
		}
		return oddExist ? len + 1 : len
	}
	//O(n) 97, 22
	var longestPalindrome2 = function (s) {
		let oddset = new Set()
		let len = 0
		for (let i = 0; i < s.length; i++) {
			if (oddset.has(s[i])) {
				len += 2
				oddset.delete(s[i])
			} else {
				oddset.add(s[i])
			}
		}
		return oddset.size ? len + 1 : len
	}
	console.log(
		longestPalindrome2(
			'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
		)
	)
}
// LongestPalindrome()
//==================================================//
//349. Intersection of Two Arrays
function IntersectionTwoArrays0349() {
	//O(n) 95,16
	var intersection = function (nums1, nums2) {
		let hashTable = {}
		let intersection = new Set()
		for (let i = 0; i < nums1.length; i++) {
			if (!hashTable[nums1[i]]) {
				hashTable[nums1[i]] = 1
			}
		}
		for (let i = 0; i < nums2.length; i++) {
			if (hashTable[nums2[i]]) {
				intersection.add(nums2[i])
			}
		}
		return [...intersection]
	}
	//O(n^2) 80,96
	var intersection2 = function (nums1, nums2) {
		let intersection = []
		//array.map O(n) array.includes O(n)
		nums1.map(e => {
			if (nums2.includes(e) && !intersection.includes(e)) {
				intersection.push(e)
			}
		})
		return intersection
	}
	console.log(intersection2([4, 9, 5], [9, 4, 9, 8, 4]))
}
// IntersectionTwoArrays()
//==================================================//
//1512. Number of Good Pairs
function NumberGoodPairs1512() {
	//O(n) 23,30
	var numIdenticalPairs = function (nums) {
		//1個數->0
		//2個數->1
		//3個數->3
		//4個數->6
		//5個數->6+4
		//10個數->9+8+7+6+5+4+3+2+1
		//n個數->1到n-1連加= n*(n-1)/2
		function countPairs2(number) {
			let count = 0
			for (let i = 0; i < number; i++){
				for (let j = i + 1; j < number; j++) {
					count++
				}
			}
			return count
		}
		function countPairs(number) {
			if (number <= 1) return 0
			return (number * (number - 1)) / 2
		}
		let pairs = 0
		let hashTable = {}
		for (let i = 0; i < nums.length; i++) {
			if (hashTable[nums[i]]) {
				hashTable[nums[i]] += 1
			} else {
				hashTable[nums[i]] = 1
			}
		}
		for (let key in hashTable) {
			pairs += countPairs(hashTable[key])
		}
		return pairs
	}
	//O(n) 95,31
	var numIdenticalPairs2 = function (nums) {
		//1個數->0
		//2個數->1
		//3個數->3
		//4個數->6
		//5個數->6+4
		//10個數->9+8+7+6+5+4+3+2+1
		//n個數->1到n-1連加= n*(n-1)/2
		let pairs = 0
		let hashTable = {}
		for (let i = 0; i < nums.length; i++) {
			if (hashTable[nums[i]]) {
				//n>1 ->配對數->前一項 + (n-1)
				pairs += hashTable[nums[i]]
				hashTable[nums[i]] += 1
			} else {
				hashTable[nums[i]] = 1
			}
		}
		return pairs
	}
}

//3. Longest Substring Without Repeating Characters
function LongestSubstring0003() {}

//17. Letter Combinations of a Phone Number
function LetterCombinations0017() {
	const table = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z'],
	}
	var letterCombinations = function (digits) {
		let arr = []
		function recursion(arr,n) {
			if (n<=1) {
				
				return table[digits][0]
			}
			for(let i = 0;i<1000;i++){}
			recursion()
		}
	}
	letterCombinations('23')
}
// LetterCombinations()

// 217. Contains Duplicate
function ContainsDuplicate0217() {
	//O(n) 91,61
	var containsDuplicate = function (nums) {
		let map = {}
		for (let i = 0; i < nums.length; i++){
			map[nums[i]] = (map[nums[i]] ?? 0) + 1
			if (map[nums[i]]>1) return true
		}
		return false
	}
	console.log(containsDuplicate([1, 2, 3, 1]))
	console.log(containsDuplicate([1, 2, 3, 4]))
	console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
}
// ContainsDuplicate0217()

//242. Valid Anagram
function ValidAnagram0242() {
	//O(n) 87, 85
	var isAnagram = function (s, t) {
		if (s.length !== t.length) return false
		let map = {}
		for (let i = 0; i < s.length; i++){
			map[s[i]] = (map[s[i]] ?? 0) + 1
			map[t[i]] = (map[t[i]] ?? 0) - 1
			console.log(map)
		}
		for (let key in map) {
			if (map[key] !== 0) return false
		}
		return true
	}
	isAnagram('anagram', 'nagaram')
}
ValidAnagram0242()

