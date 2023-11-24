let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let animalCount = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
// let array = []
// for (let i = 1; i <= n; i++) {
//   array.push(i)
// }
// let index = 0
// while(array.length > k - 1) {
//   let temp = array.length - index
//   array.splice(index + 1, k - 1)
//   array.splice(0, k - temp)
//   index = index + 1
//   if (index >= array.length) {
//     index = 0
//   }
// }
// console.log(array[index])
const queue = {
  list: Array.from({ length: animalCount }).map((_, index) => index + 1),
  left: 0,
  length: animalCount,

  enqueue(value) {
    this.list.push(value)
    this.length += 1
  },

  dequeue() {
    if (this.length === 0) return null
    this.left += 1
    this.length -= 1
    return this.list[this.left - 1]
  },

  peek() {
    if (this.length === 0) return null
    return this.list[this.left]
  }
}

while (queue.length >= k) {
  queue.enqueue(queue.dequeue())
  for (let i = 0; i < k - 1; i += 1) {
    queue.dequeue()
  }
}

console.log(queue.peek())
