function* main(){
    console.log("这是generator");
    console.log("这是generator2");
    yield;
    console.log("这是generator3");
    yield;
    console.log("这是generator4");
}

// 返回一个迭代对象
let iterator = main()
iterator.next()
iterator.next()
iterator.next()
iterator.next()