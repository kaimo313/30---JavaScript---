// 请你写一个函数 createCounter。这个函数接收一个初始的整数值 init。并返回一个包含三个函数的对象。
// 这三个函数是：
// increment() 将当前值加 1 并返回。
// decrement() 将当前值减 1 并返回。
// reset() 将当前值设置为 init 并返回。

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = init)
    };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
