//使用bubbleSort將數列由小到大排
//由數列尾端開始與前一項比大小，較小的移到左邊
function bubbleSort(arr) {
  for (let i = arr.length-1; i >0; i--){
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
     }
   }
  }
  return arr
}

// console.log(bubbleSort([1, 5, 4, 3, 2, 1]))

//使用insertionSort將數列由小到大排
// 依序提取數列中的數插入排序好的數列
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i-1
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j] //換到右
      j--
    }
    arr[j + 1] = temp //插入空位
	}
	return arr
}
// console.log(insertionSort([1, 5, 4, 3, 2, 1])) 

//使用SelectionSort將數列由小到大排
// 每次尋找最小的數放到左邊
function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
	}
	return arr
}
console.log(selectionSort([1, 5, 4, 3, 2, 1])) 