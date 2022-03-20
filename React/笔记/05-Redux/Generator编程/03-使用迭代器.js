let array = [1,2,3]

// 获取到array对象迭代器
let iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());