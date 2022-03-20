function createIterator(items){
    var i = 0;
    return {
        next:function(){
            var state = (i>=items.length)
            var value = !state?items[i++]:undefined;
            return {
                done:state,
                value:value
            }
        }
    }
}

const iterater =  createIterator(["武汉","北京","成都"])
console.log(iterater.next());  //{done:false,value:"武汉"}
console.log(iterater.next());  //{done:false,value:"武汉"}
console.log(iterater.next());  //{done:false,value:"武汉"}
console.log(iterater.next());  //{done:false,value:"武汉"}
console.log(iterater.next());  //{done:false,value:"武汉"}
