let obj = {
    list:[],
    *[Symbol.iterator](){
        for (const iterator of this.list) {
            yield iterator
        }
    }
}
obj.list.push("小王")
obj.list.push("小张")
obj.list.push("小李")
for (const iterator of obj) {
    console.log(iterator);
}
