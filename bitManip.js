//  136. Single Number
function SingleNumber0136() {
  //O(n) 55, 38
  var singleNumber = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
      if (!map[nums[i]]) {
        map[nums[i]] = 1
      } else {
        delete map[nums[i]]
       }  
      
    }
    return Object.keys(map)[0]
  }
  console.log(singleNumber([4, 1, 2, 1, 2]))
}
SingleNumber0136()
