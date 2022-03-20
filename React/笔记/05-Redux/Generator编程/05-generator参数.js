function* main(val){
    console.log("step1");
    let x = yield val+1;
    console.log("step2",x);
    let y = yield (x*2);
    console.log("step3",y);
    return x+y
}

// 返回一个迭代对象
let iterator = main(10)
let res = iterator.next()
console.log(res);

const res2 = iterator.next(5)
console.log(res2);

const res3 = iterator.next(20)
console.log(res3);

const res4 = iterator.next()
console.log(res4);