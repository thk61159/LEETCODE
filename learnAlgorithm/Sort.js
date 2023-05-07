//使用mergeSort將數列由小到大排
//切開所有元素為sorted array在使用pointer 兩兩合成
function mergeSort(arr) {
	while (arr.length > 1) {
		let mid = arr.length / 2
		let left = arr.slice(0, mid)
		let right = arr.slice(mid, arr.length)
		return mergeTwoSortedArr(mergeSort(left), mergeSort(right))
	}
  return arr
  
	function mergeTwoSortedArr(arr1, arr2) {
		let pointer1 = 0
		let pointer2 = 0
		let mergeArr = []
		while (arr1[pointer1] && arr2[pointer2]) {
			if (arr1[pointer1] > arr2[pointer2]) {
				mergeArr.push(arr2[pointer2])
				pointer2++
			} else {
				mergeArr.push(arr1[pointer1])
				pointer1++
			}
		}
		if (pointer1 < arr1.length) {
			mergeArr = mergeArr.concat(arr1.slice(pointer1, arr1.length))
		} else if (pointer2 < arr2.length) {
			mergeArr = mergeArr.concat(arr2.slice(pointer2, arr2.length))
		}
		return mergeArr
	}
}
// console.log(mergeSort([1, 5, 4, 3, 2, 1]))

//使用heapSort將數列由小到大排
// 將arr 做成maxHeap每次取root在重整maxHeap
function heapSort(arr) {
	heapSize = arr.length - 1
	arr = buildMaxHeap(arr)
	for (let i = arr.length - 1; i >= 0; i--) {
		let temp = arr[0]
		arr[0] = arr[i]
		arr[i] = temp
		heapSize -= 1
		maxHeapify(0)
	}
	return arr
	function buildMaxHeap(arr) {
		//從檢查最後一個node的parentnode開始
		for (let i = Math.floor(heapSize / 2 - 1); i >= 0; i--) {
			maxHeapify(i)
		}
		return arr
	}
	function maxHeapify(i) {
		//每個parentnode的左childnode =  index of parentnode*2+1
		//每個parentnode的右childnode =  index of parentnode*2+2
		let left = 2 * i + 1
		let right = 2 * i + 2
		let largest
		if (left <= heapSize && arr[left] > arr[i]) {
			largest = left
		} else {
			largest = i
		}
		if (right <= heapSize && arr[right] > arr[largest]) {
			largest = right
		}
		if (largest !== i) {
			let temp = arr[i]
			arr[i] = arr[largest]
			arr[largest] = temp
			maxHeapify(largest)
		}
	}
}

// console.log(heapSort([4, 5, 6, 211, 0, 55, -1, -2, -3]))

//使用quickSort將數列由小到大排
// partition 從第一個會最後一個數選定為void(感覺選中間也行誒)
function quickSort(arr) {
  quicksort(0, arr.length-1)
  return arr
  function partition(start, end) {
		//算出pivot位置 並分堆 將pivot歸位
		let pivot = arr[end]
		let leftEnd = start - 1 //pointer for exchange if need
    for (let i = start; i < end - 1; i++) {
      if (arr[i] <= pivot) { //找到小於pivot
        leftEnd ++ //目前的leftend 應shift 並將此數填入左邊

        let temp = arr[i]
        arr[i] = arr[leftEnd]
        arr[leftEnd] = temp
      }
    }
		arr[end] = arr[leftEnd + 1]
		arr[leftEnd + 1] = pivot
    return leftEnd + 1
	}
  function quicksort(start, end) {
    
    if (start < end) {
			let p = partition(start, end) //算出pivot位置
			quicksort(start, p - 1)
			quicksort(p + 1, end)
		}
  }
}
console.log(quickSort([4, 5, 6, 211, 0, 55, -1, -2, -3,40]))
