/*
given a sorted array of integers and a number. Find if there’s any pair in the array that has average of the given number. Find all of them. 
*/

function avaragePair(arr, num) {
	let start = 0 //需要變大往右
  let end = arr.length - 1 //需要變小往左
  let ans = []
  while (start < end) {
    if (arr[start] + arr[end] > num * 2) {
      end--
    } else if (arr[start] + arr[end] < num * 2) {
      start++
    } else {
      ans.push([arr[start], arr[end]])
      start++
      end--
    }
  }
  return ans
}

// console.log(avaragePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5))

/*
Write a function that checks if the input string is a palindrome. Palindrome is a word that can be read forwards and backwards.
*/

function isPalindrome(str) {
	let start = 0 
  let end = str.length - 1 
  while (start < end) {
    if (str[start] != str[end]) {
      return false
    }
    start++
    end--
  }
  return true
}

let test = [
	isPalindrome('awesome'),
	isPalindrome('foobar'),
	isPalindrome('tacocat'),
	isPalindrome('amanaplanacanalpanama'),
]
// console.log(test)

/*
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
Write a function that checks if one string is a subsequence of the other string.

*/


function isSubsequence(substr,str) {
  let substrPointer = 0
  let strPointer = 0
  while (substrPointer < substr.length) {
    if (strPointer >= str.length) return false
    if (substr[substrPointer] === str[strPointer]) {
      substrPointer++
    }
    strPointer++
  }
  return true
  
}

console.log(isSubsequence('hello', 'hello Dear'))
console.log(isSubsequence("book", "brooklyn"))
console.log(isSubsequence("abc", "bac"))