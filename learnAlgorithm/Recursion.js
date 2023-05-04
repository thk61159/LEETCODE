//T(1) =10 T(n)=T(n-1)+15
function countTn(n) {
  if (n===1) return 10
  
  return countTn(n-1)+15
}
// console.log(countTn(11))

function Fibonacci(n) {
  if (n === 0 || n === 1) return (n)
  return Fibonacci(n - 1) + Fibonacci(n-2)
}
let arr = []
for (let i = 0; i < 10; i++){
  arr = [...arr, Fibonacci(i)]

}
// console.log(arr)

function arrayOfArray(arr) {
  let newArr = []
  function openArray(arr) {
    for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				openArray(arr[i])
			} else {
				newArr.push(arr[i])
			}
    }

  }
  openArray(arr)
  return newArr
  
}

console.log(arrayOfArray([1,[2,[[3]]]]))