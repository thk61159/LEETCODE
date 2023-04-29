// 819. Most Common Word
function MostCommonWord0819() {
	// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
	let paragraph = 'Bob. hIt, baLl'
	let banned = ['bob', 'hit']
	//O(n) 5, 65
	var mostCommonWord = function (paragraph, banned) {
		const arr = paragraph.split(/[^\w]/)
		console.log(arr)
		// const arr = paragraph.toLowerCase().split(/[^\w]/) //把toLowerCase一到這結果 95,38
		let hashTable = {}
		let largest = -Infinity
		let ans = ''
		for (let i = 0; i < arr.length; i++) {
			hashTable[banned[i]] = -Infinity
			if (!arr[i]) continue
			arr[i] = arr[i].toLowerCase()
			if (hashTable[arr[i]]) {
				hashTable[arr[i]] += 1
			} else {
				hashTable[arr[i]] = 1
			}
			console.log(hashTable)
			if (hashTable[arr[i]] > largest) {
				largest = hashTable[arr[i]]
				ans = arr[i]
			}
		}
		console.log(hashTable, ans)
		return ans
	}
	// mostCommonWord(paragraph, banned)
	//O(n) 24, 55
	var mostCommonWord2 = function (paragraph, banned) {
		const regexp = /\w+/g
		let arr = paragraph.match(regexp)
		console.log(arr)
		let hashTable = {}
		let largest = -Infinity
		let ans = ''
		for (let i = 0; i < arr.length; i++) {
			hashTable[banned[i]] = -Infinity
			if (!arr[i]) continue
			arr[i] = arr[i].toLowerCase()
			if (hashTable[arr[i]]) {
				hashTable[arr[i]] += 1
			} else {
				hashTable[arr[i]] = 1
			}
			console.log(hashTable)
			if (hashTable[arr[i]] > largest) {
				largest = hashTable[arr[i]]
				ans = arr[i]
			}
		}
		console.log(hashTable, ans)
		return ans
	}
	mostCommonWord2(paragraph, banned)
	var mostCommonWordOthers = function (paragraph, banned) {
		let arr = paragraph.toLowerCase().split(/\W+/g)
		let map = {}

		for (let word of arr) {
			if (!map[word]) {
				map[word] = 1
			} else {
				map[word]++
			}
		}

		return Object.keys(map)
			.sort((a, b) => {
				return map[b] - map[a]
			})
			.filter(word => !banned.includes(word))[0]
	}
}
// MostCommonWord0819()

// 914. X of a Kind in a Deck of Cards
function DeckofCards0914() {
	//O() 86,40
	var hasGroupsSizeX = function (deck) {
		let counter = {}
		let minimun = deck.length
		let factor = []
		//計算數字
		for (let i = 0; i < deck.length; i++) {
			if (counter[deck[i]]) {
				counter[deck[i]] += 1
			} else {
				counter[deck[i]] = 1
			}
		}
		console.log(counter)
		//找出最小數
		for (let key in counter) {
			if (counter[key] < minimun) {
				minimun = counter[key]
			}
		}
		if (minimun <= 1) return false
		//找因數
		for (let i = 2; i <= minimun / 2; i++) {
			if (!(minimun % i)) {
				factor.push(i)
			}
		}
		factor.push(minimun)

		console.log(minimun, factor)
		//檢查是否有公因數
		for (let key in counter) {
			for (let i = factor.length - 1; i >= 0; i--) {
				console.log(counter[key], factor[i], i)
				if (counter[key] % factor[i]) {
					factor.splice(i, 1)
				}
			}
		}
		if (!factor.length) return false
		return true
	}

	var hasGroupsSizeXOthers = function (deck) {
		const rec = new Map()
		deck.forEach(val => {
			rec.set(val, (rec.get(val) ?? 0) + 1) 
		})
		const vals = [...rec.values()]
		console.log(rec, vals)
		//找兩個數的最小公因數
		const largestCommonDivider = (a, b) => {
			let num1 = a,
				num2 = b
      while (num2 !== 0) {
        const div = num1 % num2
        console.log(num1, num2, div)
				num1 = num2
				num2 = div
			}
			return num1
    }
    console.log(vals.reduce((cd, val) => largestCommonDivider(cd, val), vals[0]))
		return vals.reduce((cd, val) => largestCommonDivider(cd, val), vals[0]) >= 2
	}
	console.log(
		hasGroupsSizeXOthers([
			1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3,
		])
	)
}
// DeckofCards0914()

// 169. Majority Element
function MajorityElement0169() {
	//O(n) 68,82
	var majorityElement = function (nums) {
		let n = nums.length / 2
		let map = {}
		for (let i = 0; i < nums.length; i++) {
			map[nums[i]] = (map[nums[i]] ?? 0) + 1
			if (map[nums[i]]>n) return nums[i]
		}
	}
}
