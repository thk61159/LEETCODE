//231. Power of Two
function PowerofTwo0213() {
	// 48, 78
	var isPowerOfTwo = function (n) {
		if (n == 0) return false
		let temp = n.toString(2)
		console.log(temp)
		//   if (n < 0 && temp.length%2===1) return false;
		for (let i = 1; i < temp.length; i++) {
			if (temp[i] !== '0') return false
		}
		return true
	}
	// 98, 52
	var isPowerOfTwo2 = function (n) {
		if (n === 0) return false
		if (n === 1) return true
		if (n % 2) return false
		return isPowerOfTwo2(n / 2)
	}
	for (let i = -1024; i < 0; i++) {
		console.log(i, isPowerOfTwo2(i))
	}
}
// PowerofTwo0213()
// 263. Ugly Number
function UglyNumber0263() {
  //60, 30
	var isUgly = function (n) {
		if (n <= 0) return false
    let temp = n
    while (!(temp % 2)) {
      temp /=2
    }
    while (!(temp % 3)) {
			temp /= 3
    }
    while (!(temp % 5)) {
			temp /= 5
		}
		return temp<=5
	}
	console.log(isUgly(2147483648))
	// for (let i = 0; i <= 100; i++) {
	// 	console.log(i, isUgly(i))
	// }
}
UglyNumber0263()
