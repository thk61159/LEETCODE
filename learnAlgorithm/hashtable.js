class HashTable {
	constructor(size) {
    this.size = size
    this.table = []
    for (let i = 0; i < this.size; i++){
      this.table.push([])
    }
	}
  parse(str) {
    let result = 0
    for (let i = 0; i < str.length; i++){
      result += str.charCodeAt(i)
    }
    return this.hash1(result)
  }
	hash1(key) {
		return key % this.size
	}
  hash2(key) {
    let parsedKey = key
    if (typeof parsedKey !== 'number') {
			parsedKey = this.parse(key)
		}
		const A = (Math.sqrt(5) - 1) / 2
		return Math.floor(this.size * ((parsedKey * A) % 1))
  }
  
  set(key, value) {
    this.table[this.hash2(key)].push({ key, value })
  }
  get(key) {
    let location = this.table[this.hash2(key)]
    for (let i = 0; i < location.length; i++){
      if (location[i].key === key) {
        return location[i]
      }
    }
    return null
  }
  printAll() {
		console.log(this.table)
  }
}

let myHashTable = new HashTable(6)
myHashTable.set('Mike', 'Mike')
myHashTable.set('James', 'James')
myHashTable.set('Drake', 'Drake')
myHashTable.set('Kevin', 'Kevin')
console.log(myHashTable.get('Mike').value)
myHashTable.printAll()